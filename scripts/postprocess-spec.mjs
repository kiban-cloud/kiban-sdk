// Reaplica, de forma idempotente, los ajustes que swaggo/swagger2openapi no
// pueden generar solos. Sin esto, cada `gen-spec` sobrescribiría el spec y
// borraría en silencio lo que se afinó a mano en la Fase 3.
//
//   1. Segundo server (sandbox): Swagger 2.0 sólo admite un @host, así que la
//      conversión produce un único server de producción.
//   2. Header `Link` en el 200 de listWorkfloosV2: swaggo no lo emite.
//
// Uso: node scripts/postprocess-spec.mjs <ruta-al-openapi.yaml>
import { readFileSync, writeFileSync } from 'node:fs';
import yaml from 'js-yaml';

const file = process.argv[2];
if (!file) {
  console.error('Falta la ruta al spec. Uso: node postprocess-spec.mjs <spec.yaml>');
  process.exit(1);
}

const doc = yaml.load(readFileSync(file, 'utf8'));

// 1. Servers: producción + sandbox.
doc.servers = [
  { url: 'https://workfloo.kiban.com', description: 'Producción' },
  {
    url: 'https://sandbox.workfloo.kiban.com',
    description:
      'Sandbox. Activa el modo sandbox implícitamente; el query param sandbox se ignora en este host.',
  },
];

// 2. Header Link en el 200 de v2 (historial paginado).
const v2 = doc.paths?.['/api/v2/workfloo']?.get;
const ok200 = v2?.responses?.['200'];
if (ok200) {
  ok200.headers = {
    Link: {
      description:
        'Enlaces de paginación RFC 5988 (rel="next" / rel="prev"). Vacío si no hay más páginas.',
      schema: { type: 'string' },
    },
  };
} else {
  console.warn('Aviso: no se encontró el 200 de GET /api/v2/workfloo; no se agregó el header Link.');
}

writeFileSync(file, yaml.dump(doc, { lineWidth: -1, noRefs: true }));
console.log('postprocess OK: 2 servers (prod + sandbox) + header Link en v2');
