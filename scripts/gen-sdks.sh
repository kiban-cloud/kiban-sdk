#!/usr/bin/env bash
# Genera los 5 SDKs desde specs/workfloo.openapi.yaml con openapi-generator-cli.
# packages/** es 100% generado (se commitea, no se edita a mano).
#
# Requiere Java (openapi-generator es una herramienta JVM) y node.
# Se puede generar un subconjunto: ./scripts/gen-sdks.sh node python
#
# Nota: se evita `declare -A` a propósito — macOS trae bash 3.2, que no
# soporta arrays asociativos.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SPEC="$ROOT/specs/workfloo.openapi.yaml"
GEN="npx --yes @openapitools/openapi-generator-cli@latest generate"

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

# lenguaje → "<generator> <outputDir> <configFile>"
target_for() {
  case "$1" in
    node)   echo "typescript-axios node config.node.yaml" ;;
    go)     echo "go go config.go.yaml" ;;
    java)   echo "java java config.java.yaml" ;;
    python) echo "python python config.python.yaml" ;;
    csharp) echo "csharp csharp config.csharp.yaml" ;;
    *)      echo "" ;;
  esac
}

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
  outdir="${rest%% *}"
  config="${rest##* }"
  echo "==> $lang ($generator) → packages/$outdir"
  $GEN \
    -i "$SPEC" \
    -g "$generator" \
    -o "$ROOT/packages/$outdir" \
    -c "$ROOT/openapi-generator/$config"
done

echo "OK: SDKs generados"
