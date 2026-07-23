#!/usr/bin/env bash
# Regenera specs/workfloo.openapi.yaml DESDE workfloo-backend (fuente de verdad):
# anotaciones swaggo → swagger 2.0 → OpenAPI 3 → post-proceso → lint.
#
# Requiere: swag en el PATH o en $GOPATH/bin; node + deps de package.json
# (correr `npm install` una vez). El backend se toma de $WORKFLOO_BACKEND o del
# repo hermano ../workfloo-backend.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BACKEND="${WORKFLOO_BACKEND:-$ROOT/../workfloo-backend}"
SPEC="$ROOT/specs/workfloo.openapi.yaml"

if [ ! -d "$BACKEND" ]; then
  echo "No existe el backend en '$BACKEND'. Define WORKFLOO_BACKEND." >&2
  exit 1
fi

SWAG="$(command -v swag || echo "$(go env GOPATH)/bin/swag")"
if [ ! -x "$SWAG" ]; then
  echo "swag no encontrado. Instala: go install github.com/swaggo/swag/cmd/swag@latest" >&2
  exit 1
fi

echo "==> swag init (swagger 2.0) en $BACKEND"
( cd "$BACKEND" && "$SWAG" init -ot json,yaml )

echo "==> swagger2openapi (2.0 → 3.0)"
npx --yes swagger2openapi@latest "$BACKEND/docs/swagger.yaml" -o "$SPEC" --yaml

echo "==> post-proceso (servers sandbox + header Link)"
node "$ROOT/scripts/postprocess-spec.mjs" "$SPEC"

echo "==> lint"
npx --yes @redocly/cli@latest lint "$SPEC"

echo "OK: $SPEC"
