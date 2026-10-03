#!/usr/bin/env bash
# Regenera specs/workfloo.openapi.yaml a partir del swagger 2.0 que publica
# workfloo-backend: swagger 2.0 → OpenAPI 3 → post-proceso → lint.
#
# La entrada es specs/source/workfloo.swagger.yaml, una copia EXACTA del
# docs/swagger.yaml del backend. En CI la deja ahí el propio backend
# (.github/workflows/sdk-sync.yml empuja el archivo a la rama regenerate/workfloo).
# Aquí no se corre swag: el backend garantiza que su docs/swagger.yaml coincide
# con las anotaciones (check swagger.yml), así que este repo no necesita leer su
# código.
#
# En local, para tomar el swagger de un checkout hermano del backend:
#   ./scripts/gen-spec.sh --from-backend        # ../workfloo-backend o $WORKFLOO_BACKEND
# Si cambiaste anotaciones, corré antes `swag init -ot json,yaml` en el backend.
#
# Requiere node + deps de package.json (`npm install` una vez).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE="$ROOT/specs/source/workfloo.swagger.yaml"
SPEC="$ROOT/specs/workfloo.openapi.yaml"

if [ "${1:-}" = "--from-backend" ]; then
  BACKEND="${WORKFLOO_BACKEND:-$ROOT/../workfloo-backend}"
  if [ ! -f "$BACKEND/docs/swagger.yaml" ]; then
    echo "No existe '$BACKEND/docs/swagger.yaml'. Define WORKFLOO_BACKEND." >&2
    exit 1
  fi
  echo "==> copiando $BACKEND/docs/swagger.yaml"
  cp "$BACKEND/docs/swagger.yaml" "$SOURCE"
fi

if [ ! -f "$SOURCE" ]; then
  echo "Falta $SOURCE. Corré con --from-backend." >&2
  exit 1
fi

echo "==> swagger2openapi (2.0 → 3.0)"
npx --yes swagger2openapi@latest "$SOURCE" -o "$SPEC" --yaml

echo "==> post-proceso (server sandbox + header Link)"
node "$ROOT/scripts/postprocess-spec.mjs" "$SPEC"

echo "==> lint"
npx --yes @redocly/cli@latest lint "$SPEC"

echo "OK: $SPEC"
