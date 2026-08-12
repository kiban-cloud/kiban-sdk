// Smoke test del SDK de Node: ejecutar → estatus → historial.
//
// Este SDK usa SIEMPRE producción (config/environments.json). El host y el
// nombre de la var de API key salen de ahí. Por defecto corre en modo real
// (sandbox=false); se puede forzar modo sandbox por corrida con KIBAN_SANDBOX=true.
//
// La API key NUNCA va en el código: se lee de KIBAN_API_KEY_PROD (o del genérico
// KIBAN_API_KEY).
//
//   export KIBAN_API_KEY_PROD=...             # o KIBAN_API_KEY genérico
//   export KIBAN_WORKFLOO_DEFINITION_ID=...   # una definición válida
//   export KIBAN_SCENARIO_ID=...              # requerido en modo sandbox si hay nodos LINK
//   export KIBAN_SANDBOX=true                 # opcional; por defecto false (real)
//   node scripts/smoke-test.mjs
//
// Requiere compilar el SDK antes:  cd packages/node && npm install && npx tsc
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sdk = require(join(root, 'packages/node'));

function boolEnv(name) {
  const val = process.env[name];
  return val === undefined ? undefined : ['1', 'true', 'yes'].includes(val.trim().toLowerCase());
}

function resolveEnvironment() {
  const cfg = JSON.parse(readFileSync(join(root, 'config/environments.json'), 'utf8'));
  const env = process.env.KIBAN_ENV || cfg.defaultEnv;
  const spec = cfg.environments[env];
  if (!spec) {
    console.error(`Ambiente desconocido: ${env}. Válidos: ${Object.keys(cfg.environments)}`);
    process.exit(1);
  }
  const key = process.env[spec.apiKeyVar] || process.env.KIBAN_API_KEY;
  const override = boolEnv('KIBAN_SANDBOX');
  const sandbox = override !== undefined ? override : !!spec.sandbox;
  return { env, host: spec.host, keyVar: spec.apiKeyVar, apiKey: key, sandbox };
}

const { env, host, keyVar, apiKey, sandbox: sandboxMode } = resolveEnvironment();
// sandbox=true sólo cuando corre en modo sandbox; si no, undefined.
const sandboxFlag = sandboxMode ? true : undefined;
const definitionId = process.env.KIBAN_WORKFLOO_DEFINITION_ID;
const scenarioId = process.env.KIBAN_SCENARIO_ID; // opcional; requerido si hay nodos LINK

console.log(`Ambiente: ${env} (${host}) — sandbox=${sandboxMode}`);

if (!apiKey) {
  console.error(`Falta la API key: exporta ${keyVar} (o KIBAN_API_KEY).`);
  process.exit(1);
}
if (!definitionId) {
  console.error('Falta KIBAN_WORKFLOO_DEFINITION_ID en el entorno.');
  process.exit(1);
}

const api = new sdk.WorkflooApi(
  new sdk.Configuration({ apiKey, basePath: host }),
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

console.log('1/3 executeWorkfloo …');
const executeBody = { idWorkflooDefinition: definitionId };
if (scenarioId) executeBody.scenarioId = scenarioId;
const { data: created } = await api.executeWorkfloo(executeBody, sandboxFlag);
console.log(`    id=${created.id} idUnykoo=${created.idUnykoo ?? '-'}`);
if (!created.id) {
  console.error('La ejecución no devolvió id.');
  process.exit(1);
}

await sleep(2000); // deja que el primer nodo arranque

console.log('2/3 getWorkflooStatus …');
const { data: status } = await api.getWorkflooStatus(created.id, sandboxFlag);
console.log(`    status=${status.status} nodo=${status.currentNodeName} tipo=${status.currentNodeType}`);

console.log('3/3 listWorkfloos (v1) …');
// listWorkfloos(page, itemsPerPage, status?, from?, to?, sandbox?)
const { data: page } = await api.listWorkfloos(1, 5, undefined, undefined, undefined, sandboxFlag);
console.log(`    currentPage=${page.currentPage} hasNextPage=${page.hasNextPage} items=${(page.items ?? []).length}`);

console.log('    listWorkfloosV2 …');
// listWorkfloosV2(page?, itemsPerPage?, status?, from?, to?, format?, sandbox?)
const { data: items } = await api.listWorkfloosV2(1, 5, undefined, undefined, undefined, undefined, sandboxFlag);
console.log(`    v2 devolvió ${(items ?? []).length} items (arreglo plano)`);

console.log('\nSMOKE TEST OK');
