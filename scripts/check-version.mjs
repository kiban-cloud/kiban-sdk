// Verifica que la versión declarada de un módulo (config/modules.json) sea la
// que exige semver para el cambio de su spec respecto al último release.
//
//   node scripts/check-version.mjs                 # workfloo
//   MODULE=link node scripts/check-version.mjs
//   node scripts/check-version.mjs --notes FILE    # además escribe las notas de release
//   RELEASE_TAG=workfloo/v1.2.0 node scripts/check-version.mjs
//       # al publicar: compara contra el release ANTERIOR a ese tag (que ya existe)
//
// Compara el spec actual contra el del último tag <módulo>/vX.Y.Z con oasdiff:
//   - algún cambio incompatible (nivel ERR de `oasdiff breaking`) → major
//   - cualquier otro cambio en el spec (`oasdiff changelog`)       → minor
//   - spec idéntico                                                → patch (o igual)
// y falla si la versión declarada se queda corta, o si retrocede. Sin release
// previo (primer release del módulo) sólo informa.
//
// Requiere git con los tags descargados (checkout con fetch-depth: 0) y oasdiff
// en el PATH (go install github.com/oasdiff/oasdiff@v1.33.0).
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const moduleName = process.env.MODULE || 'workfloo';
const notesIndex = process.argv.indexOf('--notes');
const notesFile = notesIndex > -1 ? process.argv[notesIndex + 1] : null;

const { modules } = JSON.parse(readFileSync(join(root, 'config/modules.json'), 'utf8'));
const mod = modules[moduleName];
if (!mod) fail(`Módulo desconocido: ${moduleName}`);

const declared = parse(mod.version);
const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();

// Último release del módulo: el tag <módulo>/vX.Y.Z más alto (no el más reciente).
const tags = git('tag', '--list', `${moduleName}/v*`)
  .split('\n')
  .filter(Boolean)
  .map((tag) => ({ tag, version: parse(tag.slice(moduleName.length + 2), true) }))
  .filter((t) => t.version && t.tag !== process.env.RELEASE_TAG)
  .sort((a, b) => compare(b.version, a.version));

if (!tags.length) {
  report(`Primer release de ${moduleName}: ${mod.version}. No hay versión anterior contra la cual comparar.`);
  writeNotes(`Primer release de **${moduleName}** (${mod.version}).`);
  process.exit(0);
}

const last = tags[0];
const dir = mkdtempSync(join(tmpdir(), 'check-version-'));
const previousSpec = join(dir, 'previous.yaml');
writeFileSync(previousSpec, git('show', `${last.tag}:${mod.spec}`));
const currentSpec = join(root, mod.spec);

const oasdiff = (...args) => JSON.parse(execFileSync('oasdiff', [...args, previousSpec, currentSpec, '--format', 'json'], { encoding: 'utf8' }) || '[]');
const breaking = oasdiff('breaking').filter((c) => c.level === 3);
const changes = oasdiff('changelog');

const required = breaking.length ? 'major' : changes.length ? 'minor' : 'patch';
const minimum = bump(last.version, required);
const lines = [
  `Módulo ${moduleName}: último release ${last.tag}, declarada ${mod.version}.`,
  `Cambios en el spec: ${changes.length} (${breaking.length} incompatibles) → requiere ${required}, mínimo ${format(minimum)}.`,
];

if (compare(declared, last.version) < 0) fail([...lines, `La versión declarada retrocede respecto a ${last.tag}.`].join('\n'));
if (compare(declared, minimum) < 0 && changes.length) {
  const detail = (breaking.length ? breaking : changes).slice(0, 15).map((c) => `  - ${describe(c)}`).join('\n');
  fail([...lines, `Sube la versión en config/modules.json a ${format(minimum)} o más.`, detail].join('\n'));
}

report(lines.join('\n') + '\nOK.');
writeNotes(releaseNotes());

function releaseNotes() {
  if (!changes.length) return `Sin cambios en el contrato de la API respecto a ${last.tag}.`;
  const out = [`Cambios respecto a ${last.tag}:`, ''];
  if (breaking.length) {
    out.push('### ⚠️ Incompatibles', '', ...breaking.map((c) => `- ${describe(c)}`), '');
  }
  const others = changes.filter((c) => !breaking.some((b) => b.id === c.id && b.text === c.text));
  if (others.length) out.push('### Cambios', '', ...others.map((c) => `- ${describe(c)}`), '');
  return out.join('\n');
}

// "GET /api/v2/workfloo (listWorkfloosV2): the response property …"
function describe(c) {
  const where = c.path ? `${c.operation} ${c.path}${c.operationId ? ` (${c.operationId})` : ''}: ` : '';
  return `${where}${c.text}`;
}

function writeNotes(text) {
  if (notesFile) writeFileSync(notesFile, text + '\n');
}

function report(text) {
  console.log(text);
}

function fail(text) {
  console.error(text);
  process.exit(1);
}

function parse(text, quiet = false) {
  const m = /^(\d+)\.(\d+)\.(\d+)$/.exec(text || '');
  if (!m) {
    if (quiet) return null;
    fail(`Versión inválida: "${text}" (se espera X.Y.Z).`);
  }
  return m.slice(1).map(Number);
}

function compare(a, b) {
  return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
}

function bump([major, minor, patch], kind) {
  if (kind === 'major') return [major + 1, 0, 0];
  if (kind === 'minor') return [major, minor + 1, 0];
  return [major, minor, patch + 1];
}

function format(v) {
  return v.join('.');
}
