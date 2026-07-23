# kiban-sdk

SDKs oficiales de la **API pública de Kiban Cloud**. Piloto: módulo **workfloo**
(ejecutar un workfloo, consultar estatus, consultar historial/detalle).

La única fuente de verdad es la especificación OpenAPI en
[`specs/workfloo.openapi.yaml`](specs/workfloo.openapi.yaml), que se **genera**
desde las anotaciones swaggo de `workfloo-backend`. Los SDKs se **generan** desde
ese spec: no se editan a mano.

## Estructura

```
specs/                     spec OpenAPI 3 (generado desde workfloo-backend)
openapi-generator/         un config.<lang>.yaml por lenguaje
scripts/
  gen-spec.sh              regenera el spec desde workfloo-backend
  gen-sdks.sh              genera los 5 SDKs desde el spec
  postprocess-spec.mjs     reaplica ajustes que el generador no infiere
packages/                  SDKs generados (se commitean, no se editan)
  node/ go/ java/ python/ csharp/
```

## SDKs

| Lenguaje | Generador | Paquete |
|---|---|---|
| Node/TypeScript | `typescript-node` | `kiban.sdk.workfloo` |
| Go | `go` | `workfloo` (módulo `github.com/kiban-cloud/kiban-sdk`) |
| Java | `java` | `kiban.sdk.workfloo` (artifact `kiban.sdk:workfloo`) |
| Python | `python` | import `kiban.sdk.workfloo` · PyPI `kiban-sdk-workfloo` |
| C# | `csharp` | `kiban.sdk.workfloo` |

> Go no admite puntos en el nombre de paquete: el paquete importable es
> `workfloo` y la identidad `kiban.sdk.workfloo` vive en el path del módulo.

## Autenticación

Todos los endpoints usan el header **`x-api-key`**. El SDK recibe la key por
configuración del cliente; **nunca** se hardcodea. Ambientes: producción en
`https://workfloo.kiban.com` y sandbox en `https://sandbox.workfloo.kiban.com`
(seleccionables como *server* del cliente generado).

## Requisitos

- **Node** (para el tooling): `npm install`
- **Go** + [`swag`](https://github.com/swaggo/swag) (sólo para `gen-spec`):
  `go install github.com/swaggo/swag/cmd/swag@latest`
- **Java** (sólo para `gen-sdks`; openapi-generator es una herramienta JVM)

## Regenerar

```bash
npm install

# 1) Regenerar el spec desde workfloo-backend (repo hermano ../workfloo-backend,
#    o define WORKFLOO_BACKEND=/ruta/al/backend)
npm run gen:spec

# 2) Generar los 5 SDKs (o un subconjunto: ./scripts/gen-sdks.sh node python)
npm run gen:sdks
```

## Publicar

Cada paquete en `packages/**` es publicable de forma independiente (npm, Go
module, Maven, PyPI, NuGet). Flujo: `gen:spec` → `gen:sdks` → bump de semver del
paquete tocado → publicar. La versión inicial es `0.1.0`.

## Flujo de actualización del API

Cuando cambie un endpoint en `workfloo-backend`, se actualiza su anotación
swaggo en el mismo PR. Luego, aquí: `gen:spec` → `gen:sdks` → bump semver →
publicar. (La automatización por CI se agrega en una fase posterior.)
