// Smoke test del SDK de Node contra SANDBOX: ejecutar → estatus → historial.
//
// La API key NUNCA va en el código: se lee de la variable de entorno.
//
//   export KIBAN_API_KEY=...                  # tu API key de sandbox
//   export KIBAN_WORKFLOO_DEFINITION_ID=...   # una definición válida en sandbox
//   node scripts/smoke-test.mjs
//
// Requiere compilar el SDK antes:  cd packages/node && npm install && npx tsc
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sdk = require(join(root, 'packages/node'));

const SANDBOX = 'https://sandbox.workfloo.kiban.com';

const apiKey = process.env.KIBAN_API_KEY;
const definitionId = process.env.KIBAN_WORKFLOO_DEFINITION_ID;
if (!apiKey || !definitionId) {
  console.error('Falta KIBAN_API_KEY o KIBAN_WORKFLOO_DEFINITION_ID en el entorno.');
  process.exit(1);
}

const api = new sdk.WorkflooApi(
  new sdk.Configuration({ apiKey, basePath: SANDBOX }),
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

console.log('1/3 executeWorkfloo …');
const { data: created } = await api.executeWorkfloo({ idWorkflooDefinition: definitionId });
console.log(`    id=${created.id} idUnykoo=${created.idUnykoo ?? '-'}`);
if (!created.id) {
  console.error('La ejecución no devolvió id.');
  process.exit(1);
}

await sleep(2000); // deja que el primer nodo arranque

console.log('2/3 getWorkflooStatus …');
const { data: status } = await api.getWorkflooStatus(created.id);
console.log(`    status=${status.status} nodo=${status.currentNodeName} tipo=${status.currentNodeType}`);

console.log('3/3 listWorkfloos (v1) …');
const { data: page } = await api.listWorkfloos(1, 5);
console.log(`    currentPage=${page.currentPage} hasNextPage=${page.hasNextPage} items=${(page.items ?? []).length}`);

console.log('    listWorkfloosV2 …');
const { data: items } = await api.listWorkfloosV2();
console.log(`    v2 devolvió ${(items ?? []).length} items (arreglo plano)`);

console.log('\nSMOKE TEST OK');
