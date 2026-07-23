#!/usr/bin/env bash
# Genera los 5 SDKs desde specs/workfloo.openapi.yaml con openapi-generator-cli.
# packages/** es 100% generado (se commitea, no se edita a mano).
#
# Requiere Java (openapi-generator es una herramienta JVM) y node.
# Se puede generar un subconjunto: ./scripts/gen-sdks.sh node python
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SPEC="$ROOT/specs/workfloo.openapi.yaml"
GEN="npx --yes @openapitools/openapi-generator-cli@latest generate"

# lenguaje → "generator outputDir configFile"
declare -A TARGETS=(
  [node]="typescript-node node config.node.yaml"
  [go]="go go config.go.yaml"
  [java]="java java config.java.yaml"
  [python]="python python config.python.yaml"
  [csharp]="csharp csharp config.csharp.yaml"
)

if ! command -v java >/dev/null 2>&1; then
  echo "Java no está instalado; openapi-generator lo requiere." >&2
  exit 1
fi

langs=("$@")
if [ ${#langs[@]} -eq 0 ]; then
  langs=(node go java python csharp)
fi

for lang in "${langs[@]}"; do
  spec="${TARGETS[$lang]:-}"
  if [ -z "$spec" ]; then
    echo "Lenguaje desconocido: $lang (usa: node go java python csharp)" >&2
    exit 1
  fi
  read -r generator outdir config <<<"$spec"
  echo "==> $lang ($generator) → packages/$outdir"
  $GEN \
    -i "$SPEC" \
    -g "$generator" \
    -o "$ROOT/packages/$outdir" \
    -c "$ROOT/openapi-generator/$config"
done

echo "OK: SDKs generados (${langs[*]})"
