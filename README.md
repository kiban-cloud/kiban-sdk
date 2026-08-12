# kiban-sdk

SDKs oficiales de la **API pública de kiban cloud**. Módulo **workfloo**
(ejecutar un workfloo, consultar estatus, consultar historial/detalle).

La fuente es OpenAPI en
[`specs/workfloo.openapi.yaml`](specs/workfloo.openapi.yaml).

## Estructura

```
specs/                     spec OpenAPI 3
openapi-generator/         un config.<lang>.yaml por lenguaje
scripts/
  gen-spec.sh              regenera el spec desde workfloo-backend
  gen-sdks.sh              genera los 5 SDKs desde el spec
  postprocess-spec.mjs     reaplica ajustes que el generador no infiere
packages/                  SDKs generados
  node/ go/ java/ python/ csharp/
```

## SDKs

| Lenguaje | Generador | Paquete |
|---|---|---|
| Node/TypeScript | `typescript-axios` | `kiban.sdk.workfloo` |
| Go | `go` | `workfloo` (módulo `github.com/kiban-cloud/kiban-sdk`) |
| Java | `java` | `kiban.sdk.workfloo` (artifact `kiban.sdk:workfloo`) |
| Python | `python` | import `kiban.sdk.workfloo` · PyPI `kiban-sdk-workfloo` |
| C# | `csharp` | `kiban.sdk.workfloo` |

> Go no admite puntos en el nombre de paquete: el paquete importable es
> `workfloo` y la identidad `kiban.sdk.workfloo` vive en el path del módulo.

## Autenticación

Todos los endpoints usan el header **`x-api-key`**. El SDK recibe la key por
configuración del cliente. Ambientes: producción en
`https://workfloo.kiban.com` y sandbox en `https://sandbox.workfloo.kiban.com`

## Requisitos

- **Node** (para el tooling): `npm install`
- **Go** + [`swag`](https://github.com/swaggo/swag):
  `go install github.com/swaggo/swag/cmd/swag@latest`
- **Java** (sólo para `gen-sdks`; openapi-generator es una herramienta JVM)

## Regenerar

```bash
npm install

npm run gen:spec

# Generar los 5 SDKs (o un subconjunto: ./scripts/gen-sdks.sh node python)
npm run gen:sdks
```

## Smoke test

Prueba el flujo **ejecutar → estatus → historial**. Este SDK usa **siempre
producción** (`https://workfloo.kiban.com`; ver
[`config/environments.json`](config/environments.json)). Por defecto corre en
**modo real** (`sandbox=false`); forzá modo sandbox por corrida con
`KIBAN_SANDBOX=true` (no consume saldo; `scenarioId` requerido si hay nodos LINK).

```bash
cp .env.local.example .env.local     # rellena tus valores
set -a; source .env.local; set +a    # carga las variables

# Python
pip install pydantic urllib3 python-dateutil
python3 scripts/smoke_test.py

# Node (compila el SDK primero)
cd packages/node && npm install && npx tsc && cd -
node scripts/smoke-test.mjs
```

Variables (ver [`.env.local.example`](.env.local.example)):
`KIBAN_API_KEY_PROD` (o el genérico `KIBAN_API_KEY`),
`KIBAN_WORKFLOO_DEFINITION_ID`, `KIBAN_SCENARIO_ID` (si corrés en modo sandbox y
hay nodos LINK), `KIBAN_SANDBOX` (opcional; por defecto `false` = real).

### Go / Java / C#

Los smoke tests de los lenguajes compilados viven en `smoke/{go,java,csharp}` y
**no repiten** la lógica de resolución: consumen el ambiente ya resuelto por
`scripts/resolve-env.sh`, que exporta `KIBAN_HOST`, `KIBAN_SANDBOX` y
`KIBAN_API_KEY`.

```bash
set -a; source .env.local; set +a   # tus secretos
source scripts/resolve-env.sh        # exporta KIBAN_HOST/KIBAN_SANDBOX/KIBAN_API_KEY
                                     # (o: KIBAN_SANDBOX=true source scripts/resolve-env.sh)

# Go
( cd smoke/go && go mod tidy && go run . )

# Java (instala el SDK en el repo local una vez)
( cd packages/java && mvn -q install -DskipTests )
( cd smoke/java && mvn -q compile exec:java )

# C#
( cd smoke/csharp && dotnet run )
```

Java y dotnet son *keg-only* en macOS; exportá primero:
`export JAVA_HOME=/opt/homebrew/opt/openjdk@21 DOTNET_ROOT=/opt/homebrew/opt/dotnet/libexec`
y agregá `$JAVA_HOME/bin` y `/opt/homebrew/opt/dotnet/bin` al `PATH`.

## Publicar

Cada paquete en `packages/**` es publicable de forma independiente (npm, Go
module, Maven, PyPI, NuGet). Flujo: `gen:spec` → `gen:sdks` → bump de semver del
paquete tocado → publicar. La versión inicial es `0.1.0`.

## Flujo de actualización del API

Cuando cambie un endpoint en `workfloo-backend`, se actualiza su anotación
swaggo en el mismo PR. Luego, aquí: `gen:spec` → `gen:sdks` → bump semver →
publicar. (La automatización por CI se agrega en una fase posterior.)
