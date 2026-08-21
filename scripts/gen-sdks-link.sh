#!/usr/bin/env bash
# Genera los 5 SDKs de LINK desde specs/link.openapi.yaml con openapi-generator-cli.
# Espejo de gen-sdks.sh (workfloo); packages/link/** es 100% generado.
#
# Requiere Java (openapi-generator es una herramienta JVM) y node.
# Se puede generar un subconjunto: ./scripts/gen-sdks-link.sh node python
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SPEC="$ROOT/specs/link.openapi.yaml"
GEN="npx --yes @openapitools/openapi-generator-cli@latest generate"

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
    node)   echo "typescript-axios node config.link.node.yaml" ;;
    go)     echo "go go config.link.go.yaml" ;;
    java)   echo "java java config.link.java.yaml" ;;
    python) echo "python python config.link.python.yaml" ;;
    csharp) echo "csharp csharp config.link.csharp.yaml" ;;
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
  echo "==> $lang ($generator) → packages/link/$outdir"
  $GEN \
    -i "$SPEC" \
    -g "$generator" \
    -o "$ROOT/packages/link/$outdir" \
    -c "$ROOT/openapi-generator/$config"
done

echo "OK: SDKs de Link generados"
