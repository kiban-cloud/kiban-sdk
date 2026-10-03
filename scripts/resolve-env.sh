#!/usr/bin/env bash
# Resuelve el ambiente y EXPORTA las variables que consumen los smoke tests de
# los lenguajes compilados (Go / Java / C#), que no repiten la lógica: la leen
# ya resuelta de aquí.
#
#   source scripts/resolve-env.sh
#
# Deja seteadas: KIBAN_HOST, KIBAN_SANDBOX (true/false) y KIBAN_API_KEY (tomada
# de KIBAN_API_KEY_PROD, o del genérico KIBAN_API_KEY).
#
# Este SDK usa SIEMPRE producción. El modo es real (sandbox=false) por defecto;
# forzá modo sandbox con KIBAN_SANDBOX=true antes de sourcear.
#
# Cargá primero tus secretos:  set -a; source .env.local; set +a

_root="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")/.." && pwd)"

_resolved="$(node "$_root/scripts/resolve-env.mjs")" || return 1 2>/dev/null || exit 1
IFS=$'\t' read -r _env _host _keyvar _sandbox <<<"$_resolved"

# La key sale de la var que nombra el ambiente; fallback al genérico.
eval "_key=\"\${$_keyvar:-\$KIBAN_API_KEY}\""

export KIBAN_HOST="$_host"
# override por corrida con KIBAN_SANDBOX; si no, el default del ambiente.
export KIBAN_SANDBOX="${KIBAN_SANDBOX:-$_sandbox}"
export KIBAN_API_KEY="$_key"

echo "Ambiente: $_env ($_host) sandbox=$KIBAN_SANDBOX"

if [ -z "$_key" ]; then
  echo "Falta la API key: exportá $_keyvar (o KIBAN_API_KEY) en .env.local." >&2
  return 1 2>/dev/null || exit 1
fi
