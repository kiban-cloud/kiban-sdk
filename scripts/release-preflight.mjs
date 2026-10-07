// Chequeos previos a publicar un release, y datos que necesita publish.yml.
//
//   node scripts/release-preflight.mjs workfloo/v1.2.0
//
// Falla (exit 1) con un mensaje que dice qué falta si:
//   - el tag no tiene la forma <módulo>/vX.Y.Z o el módulo no existe;
//   - la versión del tag no es la de config/modules.json;
//   - falta la licencia o el correo del publicador (config/modules.json →
//     publisher), el archivo LICENSE, o el titular del copyright en NOTICE;
//   - los metadatos generados todavía tienen rellenos del generador
//     (team@openapitools.org, GIT_USER_ID, "Unlicense"…): se publicarían tal cual
//     en npm, PyPI, Maven Central y NuGet, y una versión publicada no se cambia.
//
// Si todo está bien, escribe en $GITHUB_OUTPUT (o imprime) los datos del release:
// módulo, versión, carpeta de paquetes, nombres en cada registro y tag de Go.
import { appendFileSync, existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const tag = process.argv[2] || process.env.GITHUB_REF_NAME || '';
const problems = [];

const match = /^([a-z0-9-]+)\/v(\d+\.\d+\.\d+)$/.exec(tag);
if (!match) fail([`El tag "${tag}" no tiene la forma <módulo>/vX.Y.Z (p. ej. workfloo/v1.2.0).`]);
const [, moduleName, version] = match;

const { publisher, modules } = JSON.parse(readFileSync(join(root, 'config/modules.json'), 'utf8'));
const mod = modules[moduleName];
if (!mod) fail([`El módulo "${moduleName}" no está en config/modules.json.`]);

if (mod.version !== version) {
  problems.push(`config/modules.json declara ${moduleName} ${mod.version}, pero el tag es ${version}. Etiqueta el commit donde la versión es ${version}.`);
}
if (!publisher.license) problems.push('Falta la licencia: config/modules.json → publisher.license (identificador SPDX, p. ej. Apache-2.0).');
if (!existsSync(join(root, 'LICENSE'))) problems.push('Falta el archivo LICENSE en la raíz del repo.');
if (!existsSync(join(root, 'NOTICE'))) problems.push('Falta el archivo NOTICE en la raíz del repo.');
else if (readFileSync(join(root, 'NOTICE'), 'utf8').includes('<RAZÓN SOCIAL')) {
  problems.push('NOTICE todavía no tiene el titular del copyright: reemplaza <RAZÓN SOCIAL DE KIBAN> por la razón social y regenera.');
}
if (!publisher.email) problems.push('Falta el correo de contacto: config/modules.json → publisher.email.');

const pkgDir = join(root, mod.packagesDir);
const read = (rel) => readFileSync(join(pkgDir, rel), 'utf8');
const metadata = {
  'node/package.json': read('node/package.json'),
  'python/pyproject.toml': read('python/pyproject.toml'),
  'python/setup.py': read('python/setup.py'),
  'java/pom.xml': read('java/pom.xml'),
};
const csproj = findCsproj(join(pkgDir, 'csharp/src'));
metadata[relative(pkgDir, csproj)] = readFileSync(csproj, 'utf8');

for (const [file, text] of Object.entries(metadata)) {
  for (const placeholder of ['openapitools.org', 'GIT_USER_ID', 'GIT_REPO_ID', '"Unlicense"', 'OpenAPI-Generator Contributors']) {
    if (text.includes(placeholder)) problems.push(`${mod.packagesDir}/${file} todavía contiene "${placeholder}" (relleno del generador). Regenera con gen-sdks.sh después de completar publisher.`);
  }
  if (!text.includes(version)) problems.push(`${mod.packagesDir}/${file} no tiene la versión ${version}: regenera con gen-sdks.sh.`);
}

if (problems.length) fail(problems);

const node = JSON.parse(metadata['node/package.json']);
const python = /^name = "([^"]+)"/m.exec(metadata['python/pyproject.toml'])[1];
const pom = metadata['java/pom.xml'];
const firstTag = (name) => new RegExp(`<${name}>([^<]+)</${name}>`).exec(pom)[1];
const nuget = /<PackageId>([^<]+)<\/PackageId>/.exec(metadata[relative(pkgDir, csproj)])[1];
const goDir = mod.goModule.replace('github.com/kiban-cloud/kiban-sdk/', '');

const out = {
  module: moduleName,
  version,
  packages_dir: mod.packagesDir,
  npm_name: node.name,
  pypi_name: python,
  maven_group: firstTag('groupId'),
  maven_artifact: firstTag('artifactId'),
  nuget_id: nuget,
  csharp_project: relative(root, dirname(csproj)),
  go_tag: `${goDir}/v${version}`,
};
const lines = Object.entries(out).map(([k, v]) => `${k}=${v}`).join('\n');
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, lines + '\n');
console.log(`Release ${tag} listo para publicar:\n${lines}`);

function findCsproj(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.endsWith('.Test')) continue;
    const candidate = join(dir, entry.name, `${entry.name}.csproj`);
    if (existsSync(candidate)) return candidate;
  }
  fail([`No encontré el .csproj del SDK de C# en ${relative(root, dir)}.`]);
}

function fail(list) {
  console.error(`No se puede publicar ${tag}:\n${list.map((p) => `  - ${p}`).join('\n')}`);
  process.exit(1);
}
