// Flujo completo de un integrador con el SDK de Node.
//
// Ejecuta un workfloo y lo conduce hasta que termina: consulta el estatus, ve
// en qué paso está parado y responde lo que ese paso pide (formulario,
// documentos, NIP, código de verificación o corrección). Al final imprime el
// detalle.
//
//   export KIBAN_API_KEY=...
//   export KIBAN_WORKFLOO_DEFINITION_ID=...
//   node examples/node/flujo-completo.mjs
//
// Variables opcionales: KIBAN_ANSWERS (default examples/answers.example.json),
// KIBAN_HOST (default https://workfloo.kiban.com), KIBAN_SANDBOX=true y
// KIBAN_SCENARIO_ID (obligatorio en sandbox si la definición tiene conectores).
//
// Requiere el SDK compilado:  cd packages/node && npm install && npx tsc
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { createInterface } from 'node:readline';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const examplesDir = join(dirname(fileURLToPath(import.meta.url)), '..');
// En tu proyecto: import { Configuration, WorkflooApi } from '@kiban/workfloo';
const { Configuration, WorkflooApi } = require(join(examplesDir, '../packages/node'));

const FINISHED = new Set(['SUCCESS', 'ERROR', 'ABANDONED']);
const NIP_PHASES = new Set(['CREATE_ACCOUNT', 'VALIDATE', 'VALIDATE_2']);
const POLL_MS = 3000;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// Se lee stdin línea por línea con un iterador: funciona igual en una terminal
// que con la entrada redirigida (rl.question se cierra al llegar a EOF).
const rl = createInterface({ input: process.stdin });
const lines = rl[Symbol.asyncIterator]();
async function ask(prompt) {
  process.stdout.write(`    ${prompt}: `);
  const { value } = await lines.next();
  return (value ?? '').trim();
}

function env(name, fallback) {
  const value = process.env[name] ?? fallback;
  if (value === undefined || value === '') {
    console.error(`Falta la variable ${name}.`);
    process.exit(1);
  }
  return value;
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

// Arma {campoId: valor} con los campos que pide el formulario.
function formValues(status, answers) {
  const values = {};
  const missing = [];
  for (const section of status.form?.formFieldSection ?? []) {
    for (const field of section.fields ?? []) {
      if (field.id in answers.form) values[field.id] = answers.form[field.id];
      else if (field.required) missing.push(`${field.id} (${field.name})`);
    }
  }
  if (missing.length) fail(`Faltan respuestas para campos obligatorios: ${missing.join(', ')}`);
  return values;
}

// Arma {documentoId: base64} con los archivos que pide el paso.
function documentValues(status, answers) {
  const values = {};
  const missing = [];
  for (const doc of status.document?.documentField ?? []) {
    if (doc.sourcePdfNodeId) continue; // lo genera el propio workfloo; no se sube
    const path = answers.documents[doc.id];
    if (path === undefined) {
      if (doc.required) missing.push(`${doc.id} (${doc.name})`);
      continue;
    }
    values[doc.id] = readFileSync(resolve(answers.base, path)).toString('base64');
  }
  if (missing.length) fail(`Faltan archivos para documentos obligatorios: ${missing.join(', ')}`);
  return values;
}

// Pide el código hasta que el proveedor lo acepte o se acaben los intentos.
async function validateOtp(api, id, verification, sandbox) {
  console.log(`    Código enviado por ${verification.channel} a ${verification.maskedDestination}`);
  for (;;) {
    const token = await ask('Código recibido');
    try {
      await api.validateWorkflooOtp({ id, controllerWorkflooModelOtpValidateRequest: { token }, sandbox });
      return;
    } catch (err) {
      // 400 = código incorrecto con intentos restantes; la ejecución sigue viva.
      if (err.response?.status !== 400) throw err;
      const detail = err.response.data ?? {};
      console.log(`    ${detail.error} Intentos restantes: ${detail.remainingRetries}`);
    }
  }
}

const host = env('KIBAN_HOST', 'https://workfloo.kiban.com');
const sandbox = process.env.KIBAN_SANDBOX === 'true' ? true : undefined;
const definitionId = env('KIBAN_WORKFLOO_DEFINITION_ID');
const answersPath = resolve(env('KIBAN_ANSWERS', join(examplesDir, 'answers.example.json')));
const answers = { ...JSON.parse(readFileSync(answersPath, 'utf8')), base: dirname(answersPath) };

const api = new WorkflooApi(new Configuration({ apiKey: env('KIBAN_API_KEY'), basePath: host }));

const body = { idWorkflooDefinition: definitionId };
if (process.env.KIBAN_SCENARIO_ID) body.scenarioId = process.env.KIBAN_SCENARIO_ID;
const { data: created } = await api.executeWorkfloo({ controllerWorkflooModelExecute: body, sandbox });
const id = created.id;
console.log(`Ejecución ${id}`);

// Cada paso estacionado se atiende una vez; si el motor pasa por otro paso y
// regresa, se vuelve a atender.
let lastStep = null;
let status;
for (;;) {
  ({ data: status } = await api.getWorkflooStatus({ id, sandbox }));
  if (FINISHED.has(status.status)) break;

  const nodeType = status.currentNodeType ?? '';
  if (!nodeType || nodeType.endsWith('_PROGRESS') || nodeType.endsWith('_PROCESSING')) {
    await sleep(POLL_MS); // el motor está trabajando
    continue;
  }

  const phase = status.link?.phase ?? '';
  const state = status.validation?.state ?? '';
  const step = `${status.currentNodeId}:${nodeType}:${phase}:${state}`;
  if (step === lastStep) {
    await sleep(POLL_MS);
    continue;
  }
  lastStep = step;
  console.log(`Paso: ${status.currentNodeName} (${nodeType})`);

  if (nodeType === 'FORM') {
    await api.executeWorkflooForm({ id, body: formValues(status, answers), sandbox });
  } else if (nodeType === 'DOCUMENT') {
    await api.executeWorkflooDocument({ id, body: documentValues(status, answers), sandbox });
  } else if (nodeType === 'LINK' && status.verification) {
    // El código de un proveedor externo se reconoce por `verification`, que va
    // antes que la fase: también se estaciona en VALIDATE.
    await validateOtp(api, id, status.verification, sandbox);
  } else if (nodeType === 'LINK' && phase === 'CREATE_ACCOUNT') {
    await api.sendWorkflooNip({ id, sandbox });
    console.log('    NIP enviado');
  } else if (nodeType === 'LINK' && NIP_PHASES.has(phase)) {
    const nip = await ask('NIP recibido');
    const { data: result } = await api.validateWorkflooNip({ id, controllerWorkflooModelNipValidateRequest: { nip }, sandbox });
    console.log(`    Fase: ${result.phase}`);
  } else if (nodeType === 'LINK' && status.link?.widget) {
    console.log(`    La persona debe completar el widget: ${JSON.stringify(status.link.widget)}`);
  } else if (nodeType === 'VALIDATION' && state === 'CORRECTION') {
    console.log(`    El revisor pidió corregir: ${status.validation.reviewerNote ?? ''}`);
    const corrected = {};
    for (const field of status.validation.fields ?? []) {
      corrected[field.fieldId] = await ask(`${field.name || field.fieldId} (${field.message})`);
    }
    await api.submitWorkflooCorrection({ id, body: corrected, sandbox });
  } else if (nodeType === 'VALIDATION') {
    console.log('    Esperando la revisión interna');
  } else if (nodeType === 'TIMER') {
    console.log(`    Espera programada hasta ${status.timer?.endWaitDate}`);
  }

  await sleep(POLL_MS);
}

console.log(`Terminó en ${status.status}`);
const { data: detail } = await api.getWorkfloo({ id, sandbox });
for (const node of detail.nodes ?? []) console.log(`  - ${node.name} (${node.type})`);
rl.close();
