#!/usr/bin/env bash
# Regenera el spec OpenAPI de un módulo a partir del swagger 2.0 que publica su
# backend: swagger 2.0 → OpenAPI 3 → post-proceso → lint.
#
#   ./scripts/gen-spec.sh                       # workfloo
#   MODULE=link ./scripts/gen-spec.sh           # otro módulo de config/modules.json
#
# La entrada es specs/source/<módulo>.swagger.yaml, una copia EXACTA del
# docs/swagger.yaml del backend. En CI la deja ahí el propio backend
# (.github/workflows/sdk-sync.yml empuja el archivo a la rama regenerate/<módulo>).
# Aquí no se corre swag: el backend garantiza que su docs/swagger.yaml coincide
# con las anotaciones (check swagger.yml), así que este repo no necesita leer su
# código.
#
# En local, para tomar el swagger de un checkout hermano del backend:
#   ./scripts/gen-spec.sh --from-backend                  # ../workfloo-backend o $BACKEND
#   MODULE=link ./scripts/gen-spec.sh --from-backend      # ../microservices o $BACKEND
# Si cambiaste anotaciones, corre antes swag init en el backend (el comando
# exacto está en su .github/workflows/swagger.yml).
#
# Requiere node + deps de package.json (`npm install` una vez).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MODULE="${MODULE:-workfloo}"
SPEC_REL="$(node -e '
  const m = require(process.argv[1]).modules[process.argv[2]];
  if (!m) { console.error(`Módulo desconocido: ${process.argv[2]}`); process.exit(1); }
  console.log(m.spec);
' "$ROOT/config/modules.json" "$MODULE")"
SOURCE="$ROOT/specs/source/$MODULE.swagger.yaml"
SPEC="$ROOT/$SPEC_REL"

# Carpeta local del backend de cada módulo (el repo de link se clona como microservices).
default_backend() {
  case "$1" in
    workfloo) echo "${WORKFLOO_BACKEND:-$ROOT/../workfloo-backend}" ;;
    link)     echo "$ROOT/../microservices" ;;
    *)        echo "$ROOT/../$1" ;;
  esac
}

if [ "${1:-}" = "--from-backend" ]; then
  BACKEND="${BACKEND:-$(default_backend "$MODULE")}"
  if [ ! -f "$BACKEND/docs/swagger.yaml" ]; then
    echo "No existe '$BACKEND/docs/swagger.yaml'. Define BACKEND con la carpeta del backend de $MODULE." >&2
    exit 1
  fi
  echo "==> copiando $BACKEND/docs/swagger.yaml"
  cp "$BACKEND/docs/swagger.yaml" "$SOURCE"
fi

if [ ! -f "$SOURCE" ]; then
  echo "Falta $SOURCE. Corre con --from-backend." >&2
  exit 1
fi

echo "==> swagger2openapi (2.0 → 3.0) · $MODULE"
npx --yes swagger2openapi@latest "$SOURCE" -o "$SPEC" --yaml

echo "==> post-proceso"
node "$ROOT/scripts/postprocess-spec.mjs" "$SPEC" "$MODULE"

echo "==> lint"
npx --yes @redocly/cli@latest lint "$SPEC"

echo "OK: $SPEC"
