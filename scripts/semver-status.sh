#!/usr/bin/env bash
# Corre check-version.mjs para cada módulo de config/modules.json y publica el
# resultado como commit status "semver" en el SHA indicado.
#
#   GH_TOKEN=… GITHUB_REPOSITORY=kiban-cloud/kiban-sdk ./scripts/semver-status.sh <sha>
#
# Es un commit status (no el resultado de un job) a propósito: los commits que
# hace regenerate.yml con GITHUB_TOKEN no disparan otros workflows, así que el
# PR de regeneración se quedaría sin check. Así el último commit del PR siempre
# lleva el resultado, lo publique el workflow de PR o el de regeneración.
#
# Requiere oasdiff en el PATH y el historial con tags (fetch-depth: 0).
set -uo pipefail

SHA="$1"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
modules="$(node -p "Object.keys(require('$ROOT/config/modules.json').modules).join(' ')")"

state=success
summary=""
for module in $modules; do
  if output="$(MODULE="$module" node "$ROOT/scripts/check-version.mjs" 2>&1)"; then
    echo "✅ $module"
  else
    state=failure
    echo "❌ $module"
  fi
  echo "$output" | sed 's/^/   /'
  # Segunda línea del reporte: "Cambios en el spec: … → requiere …" (o la única).
  line="$(echo "$output" | sed -n '2p')"
  summary="$summary$module: ${line:-$(echo "$output" | head -1)} "
done

description="$(echo "$summary" | cut -c1-138)"
if [ -n "${GH_TOKEN:-}" ] && [ -n "${GITHUB_REPOSITORY:-}" ]; then
  gh api "repos/$GITHUB_REPOSITORY/statuses/$SHA" \
    -f state="$state" -f context=semver -f description="$description" \
    -f target_url="${GITHUB_SERVER_URL:-https://github.com}/$GITHUB_REPOSITORY/actions/runs/${GITHUB_RUN_ID:-}" >/dev/null
  echo "status semver=$state publicado en $SHA"
fi
[ "$state" = success ]
