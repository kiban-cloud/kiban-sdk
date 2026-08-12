// Resuelve el ambiente (env, host, nombre de la var de API key, flag sandbox por
// defecto) desde config/environments.json. Este SDK usa siempre producción, así
// que el ambiente es defaultEnv (o KIBAN_ENV si se fuerza).
// Imprime una línea con campos separados por TAB:  env\thost\tapiKeyVar\tsandbox
// Lo consume resolve-env.sh (que mapea la key y aplica el override KIBAN_SANDBOX).
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(readFileSync(join(root, 'config/environments.json'), 'utf8'));

const env = process.env.KIBAN_ENV || cfg.defaultEnv;
const spec = cfg.environments[env];
if (!spec) {
  console.error(`Ambiente desconocido: ${env}. Válidos: ${Object.keys(cfg.environments)}`);
  process.exit(1);
}

process.stdout.write([env, spec.host, spec.apiKeyVar, spec.sandbox ? 'true' : 'false'].join('\t'));
