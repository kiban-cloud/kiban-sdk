# kiban-sdk

SDKs oficiales de la **API pública de kiban cloud**. Módulo **workfloo**
(ejecutar un workfloo, consultar estatus, consultar historial/detalle).

La fuente es OpenAPI en
[`specs/workfloo.openapi.yaml`](specs/workfloo.openapi.yaml).

## Estructura

```
specs/                     spec OpenAPI 3
  source/                  swagger 2.0 tal como lo publica workfloo-backend (entrada)
openapi-generator/         un config.<lang>.yaml por lenguaje
  readmes/                 READMEs escritos a mano que gen-sdks copia a packages/
scripts/
  gen-spec.sh              specs/source → spec OpenAPI 3
  gen-sdks.sh              genera los 5 SDKs desde el spec
  postprocess-spec.mjs     reaplica ajustes que el generador no infiere
packages/                  SDKs generados
  node/ go/ java/ python/ csharp/
examples/                  flujo completo de un integrador, en los 5 lenguajes
```

## SDKs

| Lenguaje | Generador | Paquete |
|---|---|---|
| Node/TypeScript | `typescript-axios` | `kiban.sdk.workfloo` |
| Go | `go` | `workfloo` (módulo `github.com/kiban-cloud/kiban-sdk/packages/go`) |
| Java | `java` | `kiban.sdk.workfloo` (artifact `kiban.sdk:workfloo`) |
| Python | `python` | import `kiban.sdk.workfloo` · PyPI `kiban-sdk-workfloo` |
| C# | `csharp` | `kiban.sdk.workfloo` |

> Go no admite puntos en el nombre de paquete: el paquete importable es
> `workfloo`. El path del módulo coincide con su directorio en este repo, así
> que se instala con `go get github.com/kiban-cloud/kiban-sdk/packages/go@v0.3.0`
> y se importa con `workfloo "github.com/kiban-cloud/kiban-sdk/packages/go"`.

## Autenticación

Todos los endpoints usan el header **`x-api-key`**. El SDK recibe la key por
configuración del cliente. Ambientes: producción en
`https://workfloo.kiban.com` y sandbox en `https://sandbox.workfloo.kiban.com`

## Uso

Mismo flujo en los 5 lenguajes: ejecutar → estatus → historial. La API key se
pasa por configuración (de una variable de entorno o un secret manager, nunca
escrita en el código). Para el host sandbox, usá `https://sandbox.workfloo.kiban.com`
como base, o mandá `sandbox=true` en cada llamada (en sandbox, `scenarioId` es
obligatorio si la definición tiene conectores LINK).

Operaciones (mismo nombre en todos los SDKs, adaptado a la convención de cada
lenguaje): `executeWorkfloo`, `getWorkflooStatus`, `getWorkfloo`,
`listWorkfloos` (v1, paginado envuelto), `listWorkfloosV2` (v2, arreglo plano +
header `Link`; con `content=true` cada elemento trae la ejecución completa y con
`format=CSV` llega un CSV, ver abajo), `executeWorkflooForm`, `executeWorkflooDocument`,
`getWorkflooFile`, `sendWorkflooNip` / `validateWorkflooNip` /
`resendWorkflooNip`, `validateWorkflooOtp` / `fallbackWorkflooOtp`,
`reviewWorkflooValidation`, `submitWorkflooCorrection` y `executePool`.

### Node / TypeScript

```ts
import { Configuration, WorkflooApi } from 'kiban.sdk.workfloo';

const api = new WorkflooApi(new Configuration({
  apiKey: process.env.KIBAN_API_KEY,
  basePath: 'https://workfloo.kiban.com',
}));

const { data: created } = await api.executeWorkfloo({ idWorkflooDefinition: 'DEF_ID' });
const { data: status } = await api.getWorkflooStatus(created.id!);
const { data: page } = await api.listWorkfloos(1, 20);
```

### Python

```python
import os
from kiban.sdk.workfloo import ApiClient, Configuration, WorkflooApi
from kiban.sdk.workfloo import ControllerWorkflooModelExecute

config = Configuration(host="https://workfloo.kiban.com")
config.api_key["ApiKeyAuth"] = os.environ["KIBAN_API_KEY"]

with ApiClient(config) as client:
    api = WorkflooApi(client)
    created = api.execute_workfloo(ControllerWorkflooModelExecute(id_workfloo_definition="DEF_ID"))
    status = api.get_workfloo_status(created.id)
    page = api.list_workfloos(page=1, items_per_page=20)
```

### Go

```go
import workfloo "github.com/kiban-cloud/kiban-sdk/packages/go"

cfg := workfloo.NewConfiguration()
cfg.Servers = workfloo.ServerConfigurations{{URL: "https://workfloo.kiban.com"}}
client := workfloo.NewAPIClient(cfg)
ctx := context.WithValue(context.Background(), workfloo.ContextAPIKeys,
	map[string]workfloo.APIKey{"ApiKeyAuth": {Key: os.Getenv("KIBAN_API_KEY")}})

body := workfloo.NewControllerWorkflooModelExecute("DEF_ID")
created, _, err := client.WorkflooAPI.ExecuteWorkfloo(ctx).ControllerWorkflooModelExecute(*body).Execute()
status, _, err := client.WorkflooAPI.GetWorkflooStatus(ctx, created.GetId()).Execute()
page, _, err := client.WorkflooAPI.ListWorkfloos(ctx).Page(1).ItemsPerPage(20).Execute()
```

### Java

```java
ApiClient client = Configuration.getDefaultApiClient();
client.setBasePath("https://workfloo.kiban.com");
((ApiKeyAuth) client.getAuthentication("ApiKeyAuth")).setApiKey(System.getenv("KIBAN_API_KEY"));
WorkflooApi api = new WorkflooApi(client);

ControllerWorkflooModelExecuteResponse created =
    api.executeWorkfloo(new ControllerWorkflooModelExecute().idWorkflooDefinition("DEF_ID"), null);
ControllerWorkflooModelWorkflooStatus status = api.getWorkflooStatus(created.getId(), null);
ControllerWorkflooModelWorkflooPage page = api.listWorkfloos(1, 20, null, null, null, null);
```

### C#

```csharp
using kiban.sdk.workfloo.Api;
using kiban.sdk.workfloo.Client;
using kiban.sdk.workfloo.Extensions;
using kiban.sdk.workfloo.Model;

IHost host = Host.CreateDefaultBuilder(args)
    .ConfigureApi((ctx, options) =>
    {
        options.AddTokens(new ApiKeyToken(Environment.GetEnvironmentVariable("KIBAN_API_KEY")!,
            ClientUtils.ApiKeyHeader.X_api_key, prefix: ""));
        options.AddApiHttpClients(b => b.ConfigureHttpClient(c =>
            c.BaseAddress = new Uri("https://workfloo.kiban.com")));
    })
    .Build();
IWorkflooApi api = host.Services.GetRequiredService<IWorkflooApi>();

var created = (await api.ExecuteWorkflooAsync(new ControllerWorkflooModelExecute(idWorkflooDefinition: "DEF_ID"))).Ok();
var status = (await api.GetWorkflooStatusAsync(created!.Id)).Ok();
var page = (await api.ListWorkfloosAsync(1, 20)).Ok();
```

**Flujo completo:** [`examples/`](examples/) tiene, en los 5 lenguajes, el
programa que ejecuta un workfloo y lo conduce hasta que termina, respondiendo
cada paso (formulario, documentos, NIP, código de verificación y corrección).

### Historial v2: `content` y CSV

`listWorkfloosV2` sigue a [la documentación pública](https://docs.kiban.com/reference/workfloo-get-all-v2):
`content` y `format` son query params del mismo endpoint.

- **`content=true`** agrega a cada elemento la ejecución completa (la forma de
  `getWorkfloo`, con `nodes`). Cada elemento es un `WorkflooListItem`, que tiene
  los campos de las dos formas: con `content=false` vienen llenos los del
  resumen (`createdAt`, `currentNodeName`…); con `true`, los de la ejecución
  (`created`, `nodes`…).
- **`format=CSV`** devuelve `text/csv`. El método está tipado como JSON, así que
  el CSV se lee del cuerpo crudo, distinto en cada SDK:

| SDK | Cómo obtener el CSV |
|---|---|
| Node | `(await api.listWorkfloosV2(…, 'CSV', …)).data` ya es el texto |
| Python | `api.list_workfloos_v2_without_preload_content(format="CSV", …).data.decode()` |
| Go | `Execute()` devuelve error; el CSV está en `err.(*workfloo.GenericOpenAPIError).Body()` (con `resp.StatusCode == 200`) |
| Java | lanza `ApiException` con `getCode() == 200`; el CSV está en `getResponseBody()` |
| C# | `response.RawContent` (no llames `Ok()`) |

Los arreglos y mapas del spec son `nullable`: el backend manda `null` cuando
están vacíos (p. ej. `nodes` de una ejecución que todavía no avanza).

Las respuestas de error no traen un modelo tipado: el SDK expone el código HTTP
(400/401/403/404/500/503) y el cuerpo crudo, que sólo viene cuando el backend
lo llena.

## Requisitos

- **Node** (para el tooling): `npm install`
- **Go** (sólo para compilar el SDK de Go)
- **Java** (sólo para `gen-sdks`; openapi-generator es una herramienta JVM)

## Regenerar

```bash
npm install

# Desde el swagger ya copiado en specs/source/
npm run gen:spec
# …o tomándolo de un checkout hermano del backend (../workfloo-backend o
# $WORKFLOO_BACKEND). Si cambiaste anotaciones, corré antes allá
# `swag init -ot json,yaml`.
npm run gen:spec -- --from-backend

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

## Verificar

Después de regenerar, cada SDK tiene que compilar:

```bash
( cd packages/node && npm install && npx tsc --noEmit -p . )
( cd packages/go && go build ./... )
( cd packages/java && mvn -q compile )
( cd packages/csharp && dotnet build )
python3 -m venv /tmp/kiban-venv && /tmp/kiban-venv/bin/pip install ./packages/python \
  && /tmp/kiban-venv/bin/python -c "import kiban.sdk.workfloo"
```

Y los ejemplos tienen que seguir compilando contra el SDK nuevo:

```bash
node --check examples/node/flujo-completo.mjs
/tmp/kiban-venv/bin/python -m py_compile examples/python/flujo_completo.py
( cd examples/go && go build ./... )
( cd examples/java && mvn -q compile )      # después del mvn install del SDK
( cd examples/csharp && dotnet build )
```

## Publicar

Cada paquete en `packages/**` es publicable de forma independiente (npm, Go
module, Maven, PyPI, NuGet). El módulo de Go se publica con un tag con el prefijo
de su directorio: `git tag packages/go/v0.3.0`. Flujo: `gen:spec` → `gen:sdks` → bump de semver en
`openapi-generator/config.*.yaml` (los 5 a la vez: comparten el spec) →
`gen:sdks` otra vez → publicar. Versión actual: `0.3.0`.

Semver: un campo o endpoint nuevo es **minor**; quitar o renombrar algo (incluido
un `@ID` de swaggo, que es el nombre del método) es **major**.

## Flujo de actualización del API

1. En `workfloo-backend`, quien toque un endpoint público actualiza su anotación
   swaggo y regenera `docs/swagger.yaml` en el mismo PR. Su check `swagger.yml`
   no deja mergear si el archivo no coincide con las anotaciones.
2. Al llegar a `master` un cambio en `docs/swagger.yaml`, el workflow
   `sdk-sync.yml` del backend lo copia a `specs/source/workfloo.swagger.yaml` de
   la rama `regenerate/workfloo` de este repo.
3. Ese push corre [`.github/workflows/regenerate.yml`](.github/workflows/regenerate.yml):
   `gen:spec` → `gen:sdks` → `docs`, compila Node y Go, commitea en la misma rama
   y abre el PR si no existe.
4. Al revisar el PR: bump de semver empujado a la misma rama (el workflow
   regenera con la versión nueva), compilar Java/C#, mergear y publicar.

Este repo es público y no tiene credenciales hacia nada privado: no lee código
del backend, sólo el swagger que el backend publica. Todo lo hace con su propio
`GITHUB_TOKEN`.

El único secreto del flujo es el token con el que el backend escribe aquí
(`github-token-kiban-sdk-sync`, sólo `Contents: Read and write` sobre este
repo). No está en GitHub Secrets: vive en Secret Manager (proyecto `kiban-cloud`)
y el backend lo lee entrando a GCP por Workload Identity Federation, identidad
que sólo obtiene `workfloo-backend` en `master`. El provider WIF, la service
account, el secreto y el runbook para cargarlo o rotarlo viven en kiban-infra:
`stacks/kibancloud/shared-prod/github-sdk-ci.tf`.

El repo debe permitir que Actions abra PRs (Settings → Actions → General).
