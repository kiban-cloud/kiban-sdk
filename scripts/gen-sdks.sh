#!/usr/bin/env bash
# Genera los 5 SDKs de un módulo con openapi-generator-cli.
# packages/** es 100% generado (se commitea, no se edita a mano).
#
#   ./scripts/gen-sdks.sh                       # workfloo, los 5 lenguajes
#   ./scripts/gen-sdks.sh node python           # un subconjunto
#   MODULE=link ./scripts/gen-sdks.sh           # otro módulo de config/modules.json
#
# La versión de los SDKs sale de config/modules.json (única fuente) y se le
# pasa a cada generador; las configs de openapi-generator/ no la llevan.
#
# Requiere Java (openapi-generator es una herramienta JVM) y node, con las
# dependencias de package.json instaladas (`npm ci`): la versión del generador
# está fijada en openapitools.json, para que regenerar en CI o en otra máquina
# produzca exactamente el mismo código.
#
# Nota: se evita `declare -A` a propósito — macOS trae bash 3.2, que no
# soporta arrays asociativos.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MODULE="${MODULE:-workfloo}"
GEN="npx --no-install openapi-generator-cli generate"

# Datos del módulo: "<spec> <configPrefix> <packagesDir> <version>".
module_info="$(node -e '
  const m = require(process.argv[1]).modules[process.argv[2]];
  if (!m) { console.error(`Módulo desconocido: ${process.argv[2]}`); process.exit(1); }
  console.log([m.spec, m.configPrefix, m.packagesDir, m.version].join(" "));
' "$ROOT/config/modules.json" "$MODULE")"
read -r SPEC_REL CONFIG_PREFIX PACKAGES_REL VERSION <<<"$module_info"

# Metadatos del publicador (config/modules.json → publisher) como propiedades
# del generador de cada lenguaje: licencia, correo y autor publicados.
publisher_props() {
  node -e '
    const p = require(process.argv[1]).publisher;
    const lang = process.argv[2];
    const props = [];
    const license = p.license;
    const licenseUrl = license && `https://spdx.org/licenses/${license}.html`;
    if (lang === "java") {
      if (p.email) props.push(`developerEmail=${p.email}`);
      if (license) props.push(`licenseName=${license}`, `licenseUrl=${licenseUrl}`);
    }
    if (lang === "node" && license) props.push(`licenseName=${license}`);
    if (lang === "csharp" && license) props.push(`licenseId=${license}`);
    if (lang === "python" && license) props.push(`licenseInfo=${license}`);
    console.log(props.map((x) => `--additional-properties=${x}`).join(" "));
  ' "$ROOT/config/modules.json" "$1"
}
SPEC="$ROOT/$SPEC_REL"

# openjdk de Homebrew es keg-only: no queda en el PATH tras instalarlo. Además,
# macOS trae un stub /usr/bin/java que EXISTE pero falla al ejecutarse, así que
# no basta con `command -v java`: hay que comprobar que realmente corre.
java_works() { java -version >/dev/null 2>&1; }

if ! java_works; then
  for candidate in /opt/homebrew/opt/openjdk@21 /opt/homebrew/opt/openjdk /usr/local/opt/openjdk; do
    if [ -x "$candidate/bin/java" ]; then
      export JAVA_HOME="$candidate"
      export PATH="$JAVA_HOME/bin:$PATH"
      break
    fi
  done
fi

if ! java_works; then
  echo "Java no está disponible; openapi-generator lo requiere." >&2
  echo "Instala con: brew install openjdk@21" >&2
  exit 1
fi

# lenguaje → "<generator> <outputDir> <propiedad de versión>"
target_for() {
  case "$1" in
    node)   echo "typescript-axios node npmVersion" ;;
    go)     echo "go go packageVersion" ;;
    java)   echo "java java artifactVersion" ;;
    python) echo "python python packageVersion" ;;
    csharp) echo "csharp csharp packageVersion" ;;
    *)      echo "" ;;
  esac
}

echo "Módulo $MODULE · versión $VERSION · spec $SPEC_REL"

langs="$*"
if [ -z "$langs" ]; then
  langs="node go java python csharp"
fi

for lang in $langs; do
  target="$(target_for "$lang")"
  if [ -z "$target" ]; then
    echo "Lenguaje desconocido: $lang (usa: node go java python csharp)" >&2
    exit 1
  fi
  generator="${target%% *}"
  rest="${target#* }"
  outdir="$ROOT/$PACKAGES_REL/${rest%% *}"
  version_prop="${rest##* }"
  config="$ROOT/openapi-generator/${CONFIG_PREFIX}${lang}.yaml"
  echo "==> $lang ($generator) → ${outdir#"$ROOT"/}"
  $GEN \
    -i "$SPEC" \
    -g "$generator" \
    -o "$outdir" \
    -c "$config" \
    --additional-properties="$version_prop=$VERSION" \
    $(publisher_props "$lang")

  # Node: la plantilla fija "author": "OpenAPI-Generator Contributors".
  if [ "$lang" = "node" ]; then
    node -e '
      const fs = require("fs");
      const [pkgPath, modulesPath] = process.argv.slice(1);
      const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
      const p = require(modulesPath).publisher;
      pkg.author = p.email ? `${p.name} <${p.email}> (${p.url})` : `${p.name} (${p.url})`;
      pkg.homepage = "https://github.com/kiban-cloud/kiban-sdk";
      // Sin licencia definida la plantilla pone "Unlicense" (dominio público).
      // UNLICENSED es el valor de npm para "no se otorga licencia".
      if (!p.license) pkg.license = "UNLICENSED";
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
    ' "$outdir/package.json" "$ROOT/config/modules.json"
  fi

  # Python: `kiban` es un namespace compartido entre módulos (kiban.workfloo,
  # kiban.link…). Si un paquete trae kiban/__init__.py, al instalar dos SDKs
  # uno pisa al otro; sin él (PEP 420) conviven. find_packages no ve un
  # namespace sin __init__.py, así que se cambia por find_namespace_packages.
  if [ "$lang" = "python" ]; then
    rm -f "$outdir/kiban/__init__.py"
    sed -i.bak \
      -e 's/from setuptools import setup, find_packages/from setuptools import setup, find_namespace_packages/' \
      -e 's/packages=find_packages(exclude=\["test", "tests"\]),/packages=find_namespace_packages(include=["kiban.*"]),/' \
      "$outdir/setup.py"
    # La plantilla escribe la licencia como tabla (`{ text = "…" }`), formato
    # que setuptools depreca a favor del identificador SPDX plano (PEP 639).
    sed -i.bak -e 's/^license = { text = \("[^"]*"\) }$/license = \1/' "$outdir/pyproject.toml"
    rm -f "$outdir/setup.py.bak" "$outdir/pyproject.toml.bak"
  fi

  # Licencia: LICENSE (texto de la licencia) y NOTICE (titular del copyright)
  # viajan dentro de cada paquete publicado; pkg.go.dev, PyPI y npm los leen
  # de ahí, no de la raíz del repo.
  cp "$ROOT/LICENSE" "$ROOT/NOTICE" "$outdir/"

  # README escrito a mano, si el lenguaje tiene uno: el que genera
  # openapi-generator para algunos lenguajes es genérico o directamente
  # incorrecto. La fuente vive fuera de packages/ para sobrevivir a la
  # regeneración.
  readme="$ROOT/openapi-generator/readmes/$MODULE.$lang.md"
  if [ -f "$readme" ]; then
    cp "$readme" "$outdir/README.md"
  fi
  # C#: el README interno del proyecto trae instrucciones que no aplican
  # (BearerToken, un namespace inexistente) y la ruta local del spec de quien
  # generó. Se reemplaza por un puntero al README de verdad.
  if [ "$lang" = "csharp" ]; then
    cs_package="$(sed -n 's/^packageName: *//p' "$config")"
    printf '%s\n' "# $cs_package" "" "Ver [README](../../README.md)." \
      > "$outdir/src/$cs_package/README.md"
  fi
done

echo "OK: SDKs generados"
