// Reaplica, de forma idempotente, los ajustes que swaggo/swagger2openapi no
// pueden generar solos. Sin esto, cada `gen-spec` sobrescribiría el spec y
// borraría en silencio lo que se afinó a mano en la Fase 3.
//
//   1. Segundo server (sandbox): Swagger 2.0 sólo admite un @host, así que la
//      conversión produce un único server de producción.
//   2. Header `Link` en el 200 de los listados v2: swaggo no lo emite.
//   3. Arreglos y mapas nullable: el backend Go los manda como null cuando están vacíos.
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

// 2. Header Link en el 200 de los listados v2 (paginación): swaggo no lo emite.
for (const path of ['/api/v2/workfloo']) {
  const ok200 = doc.paths?.[path]?.get?.responses?.['200'];
  if (!ok200) {
    console.warn(`Aviso: no se encontró el 200 de GET ${path}; no se agregó el header Link.`);
    continue;
  }
  ok200.headers = {
    Link: {
      description:
        'Enlaces de paginación RFC 5988 (rel="next" / rel="prev"). Vacío si no hay más páginas.',
      schema: { type: 'string' },
    },
  };
}

// 3. Arreglos y mapas nullable. El backend es Go: un slice o un map nil sin
//    omitempty se serializa como null (p. ej. "nodes": null en una ejecución
//    que todavía no tiene nodos, con content=true o en getWorkfloo). Sin esto,
//    los SDKs que validan (C#) rechazan la respuesta entera por un null.
let nullables = 0;
for (const schema of Object.values(doc.components?.schemas || {})) {
  for (const prop of Object.values(schema.properties || {})) {
    const isArray = prop.type === 'array';
    const isMap = prop.type === 'object' && prop.additionalProperties !== undefined;
    if ((isArray || isMap) && !prop.nullable) {
      prop.nullable = true;
      nullables += 1;
    }
  }
}

writeFileSync(file, yaml.dump(doc, { lineWidth: -1, noRefs: true }));
console.log(`postprocess OK: 2 servers (prod + sandbox) + header Link en v2 + ${nullables} arreglos/mapas nullable`);
