# kiban-sdk

SDKs oficiales de la **API pública de kiban cloud**. Módulo **workfloo**
(ejecutar un workfloo, consultar su estatus y revisar el historial y el detalle
de las ejecuciones).

La fuente es el spec OpenAPI en
[`specs/workfloo.openapi.yaml`](specs/workfloo.openapi.yaml).

## Estructura

```
config/
  modules.json             versión de cada módulo y datos del publicador (fuente única)
  environments.json        hosts de producción y sandbox
specs/                     spec OpenAPI 3
  source/                  swagger 2.0 tal como lo publica workfloo-backend (entrada)
openapi-generator/         un config.<lang>.yaml por lenguaje (sin versión: sale de modules.json)
  readmes/                 READMEs escritos a mano (<módulo>.<lang>.md) que gen-sdks copia a packages/
scripts/
  gen-spec.sh              specs/source → spec OpenAPI 3
  gen-sdks.sh              genera los 5 SDKs desde el spec, con la versión de modules.json
  postprocess-spec.mjs     reaplica ajustes que el generador no infiere
  check-version.mjs        compara el spec contra el último release y exige el bump semver
  semver-status.sh         corre check-version por módulo y publica el status "semver"
  release-preflight.mjs    chequeos previos a publicar un tag
  maven-bundle.sh          arma y firma el bundle para Maven Central
.github/workflows/
  regenerate.yml           regenera spec + SDKs cuando el backend publica su swagger
  semver.yml               status "semver" en cada PR
  publish.yml              publica un release en los 5 registros al empujar un tag
packages/                  SDKs generados
  node/ go/ java/ python/ csharp/
examples/                  flujo completo de un integrador, en los 5 lenguajes
```

## SDKs

| Lenguaje | Generador | Paquete |
|---|---|---|
| Node/TypeScript | `typescript-axios` | npm `@kiban/workfloo` |
| Go | `go` | `workfloo` (módulo `github.com/kiban-cloud/kiban-sdk/packages/go`) |
| Java | `java` | Maven `com.kiban:workfloo` · paquete `com.kiban.workfloo` |
| Python | `python` | PyPI `kiban-workfloo` · import `kiban.workfloo` |
| C# | `csharp` | NuGet `Kiban.Workfloo` · namespace `Kiban.Workfloo` |

Instalación (versión actual `1.0.0`; ver [Versionado](#versionado-y-publicación)):

```bash
npm install @kiban/workfloo@1.0.0
pip install kiban-workfloo==1.0.0
go get github.com/kiban-cloud/kiban-sdk/packages/go@v1.0.0
dotnet add package Kiban.Workfloo --version 1.0.0
# Maven: <dependency><groupId>com.kiban</groupId><artifactId>workfloo</artifactId><version>1.0.0</version></dependency>
```

### Fija la versión

Cada versión publicada queda disponible para siempre: si instalaste la 1.0.5,
te quedas en la 1.0.5 aunque salgan versiones nuevas, hasta que tú decidas
actualizar. Lo único que lo cambia es **cómo declaras la dependencia**. Las
versiones siguen [semver](https://semver.org/lang/es/): una minor (1.1.0)
agrega cosas sin romper tu código; una major (2.0.0) puede romperlo.

Recomendación: aceptar minors y patches, pero nunca una major sin que tú lo
decidas:

| Lenguaje | Declaración recomendada | Equivale a |
|---|---|---|
| Node | `"@kiban/workfloo": "^1.0.5"` en `package.json` | `>=1.0.5 <2.0.0` |
| Python | `kiban-workfloo~=1.0` en `requirements.txt` / `pyproject.toml` | `>=1.0 <2.0` |
| Go | `require github.com/kiban-cloud/kiban-sdk/packages/go v1.0.5` en `go.mod` | Go nunca sube de major por su cuenta: la v2 tendría otro path |
| Java | `<version>[1.0.5,2.0.0)</version>`, o la versión exacta `1.0.5` | rango o exacta |
| C# | `<PackageReference Include="Kiban.Workfloo" Version="[1.0.5,2.0.0)" />`, o `Version="1.0.5"` | rango o exacta |

Evita las declaraciones abiertas (`>=1.0`, `*`, `latest`): instalarían la
siguiente major en cuanto salga. En producción, además, guarda en tu repo el
archivo de lock (`package-lock.json`, `poetry.lock`/`uv.lock`, `go.sum`,
`packages.lock.json`) para que cada build instale exactamente lo mismo.

Para migrar de major, lee las notas del release en GitHub
(`workfloo/vX.0.0`): ahí vienen los cambios incompatibles.

> Go no admite puntos en el nombre de paquete, así que el paquete importable es
> `workfloo`. El path del módulo coincide con su carpeta en este repo: se
> instala con `go get github.com/kiban-cloud/kiban-sdk/packages/go@v1.0.0` y se
> importa con `workfloo "github.com/kiban-cloud/kiban-sdk/packages/go"`.

## Autenticación

Todos los endpoints usan el header **`x-api-key`**. El SDK recibe la key por
configuración del cliente. Ambientes: producción en `https://workfloo.kiban.com`
y sandbox en `https://sandbox.workfloo.kiban.com`.

## Uso

El mismo flujo en los 5 lenguajes: ejecutar → estatus → historial. La API key
se pasa por configuración (desde una variable de entorno o un secret manager,
nunca escrita en el código). Para sandbox, usa `https://sandbox.workfloo.kiban.com`
como base, o manda `sandbox=true` en cada llamada (en sandbox, `scenarioId` es
obligatorio si la definición tiene conectores LINK).

Operaciones (mismo nombre en todos los SDKs, adaptado a la convención de cada
lenguaje): `executeWorkfloo`, `getWorkflooStatus`, `getWorkfloo`,
`listWorkfloos` (v1, paginado envuelto), `listWorkfloosV2` (v2, arreglo plano +
header `Link`; con `content=true` cada elemento trae la ejecución completa y con
`format=CSV` la respuesta es un CSV, ver abajo), `executeWorkflooForm`,
`executeWorkflooDocument`, `getWorkflooFile`, `sendWorkflooNip` /
`validateWorkflooNip` / `resendWorkflooNip`, `validateWorkflooOtp` /
`fallbackWorkflooOtp`, `reviewWorkflooValidation`, `submitWorkflooCorrection` y
`executePool`.

### Node / TypeScript

```ts
import { Configuration, WorkflooApi } from '@kiban/workfloo';

const api = new WorkflooApi(new Configuration({
  apiKey: process.env.KIBAN_API_KEY,
  basePath: 'https://workfloo.kiban.com',
}));

// Cada método recibe un solo objeto con sus parámetros (body incluido).
const { data: created } = await api.executeWorkfloo({
  controllerWorkflooModelExecute: { idWorkflooDefinition: 'DEF_ID' },
});
const { data: status } = await api.getWorkflooStatus({ id: created.id! });
const { data: page } = await api.listWorkfloos({ page: 1, itemsPerPage: 20 });
```

### Python

```python
import os
from kiban.workfloo import ApiClient, Configuration, WorkflooApi
from kiban.workfloo import ControllerWorkflooModelExecute

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
import com.kiban.workfloo.*;
import com.kiban.workfloo.api.WorkflooApi;
import com.kiban.workfloo.auth.ApiKeyAuth;
import com.kiban.workfloo.model.*;

ApiClient client = Configuration.getDefaultApiClient();
client.setBasePath("https://workfloo.kiban.com");
((ApiKeyAuth) client.getAuthentication("ApiKeyAuth")).setApiKey(System.getenv("KIBAN_API_KEY"));
WorkflooApi api = new WorkflooApi(client);

// Obligatorios en la llamada, opcionales con el builder, y al final .execute().
ControllerWorkflooModelExecuteResponse created =
    api.executeWorkfloo(new ControllerWorkflooModelExecute().idWorkflooDefinition("DEF_ID")).execute();
ControllerWorkflooModelWorkflooStatus status = api.getWorkflooStatus(created.getId()).execute();
ControllerWorkflooModelWorkflooPage page = api.listWorkfloos(1, 20).sandbox(false).execute();
```

### C#

```csharp
using Kiban.Workfloo.Api;
using Kiban.Workfloo.Client;
using Kiban.Workfloo.Extensions;
using Kiban.Workfloo.Model;

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

**Flujo completo:** en [`examples/`](examples/) está, en los 5 lenguajes, el
programa que ejecuta un workfloo y lo conduce hasta que termina, respondiendo
cada paso (formulario, documentos, NIP, código de verificación y corrección).

### Historial v2: `content` y CSV

`listWorkfloosV2` sigue [la documentación pública](https://docs.kiban.com/reference/workfloo-get-all-v2):
`content` y `format` son query params del mismo endpoint.

- **`content=true`** agrega a cada elemento la ejecución completa (la forma de
  `getWorkfloo`, con `nodes`). Cada elemento es un `WorkflooListItem`, que tiene
  los campos de las dos formas: con `content=false` vienen llenos los del
  resumen (`createdAt`, `currentNodeName`…); con `true`, los de la ejecución
  (`created`, `nodes`…).
- **`format=CSV`** devuelve `text/csv`. El método está tipado como JSON, así que
  el CSV se lee del cuerpo crudo, y en cada SDK es distinto:

| SDK | Cómo obtener el CSV |
|---|---|
| Node | `(await api.listWorkfloosV2({ format: 'CSV' })).data` ya es el texto |
| Python | `api.list_workfloos_v2_without_preload_content(format="CSV", …).data.decode()` |
| Go | `Execute()` regresa error; el CSV está en `err.(*workfloo.GenericOpenAPIError).Body()` (con `resp.StatusCode == 200`) |
| Java | `listWorkfloosV2().format("CSV").execute()` lanza `ApiException` con `getCode() == 200`; el CSV está en `getResponseBody()` |
| C# | `response.RawContent` (no llames a `Ok()`) |

Los arreglos y mapas del spec son `nullable`: el backend manda `null` cuando
están vacíos (p. ej. `nodes` de una ejecución que todavía no avanza).

Las respuestas de error no traen un modelo tipado: el SDK expone el código HTTP
(400/401/403/404/500/503) y el cuerpo crudo, que solo viene cuando el backend
lo llena.

## Requisitos

- **Node** (para el tooling): `npm install`
- **Go** (solo para compilar el SDK de Go)
- **Java** (solo para `gen-sdks`; openapi-generator es una herramienta JVM). La
  versión del generador la fija `openapitools.json` (`7.24.0`), que está
  commiteado: así local y CI generan exactamente lo mismo.
- **[oasdiff](https://github.com/oasdiff/oasdiff)** `v1.33.0` (solo para
  `check-version.mjs`): `go install github.com/oasdiff/oasdiff@v1.33.0`

## Regenerar

```bash
npm install

# Desde el swagger ya copiado en specs/source/
npm run gen:spec
# …o tomándolo de un checkout hermano del backend (../workfloo-backend o
# $WORKFLOO_BACKEND). Si cambiaste anotaciones, corre antes allá
# `swag init -ot json,yaml`.
npm run gen:spec -- --from-backend

# Generar los 5 SDKs (o solo algunos: ./scripts/gen-sdks.sh node python)
npm run gen:sdks
```

## Smoke test

Prueba el flujo **ejecutar → estatus → historial**. Este SDK usa **siempre
producción** (`https://workfloo.kiban.com`; ver
[`config/environments.json`](config/environments.json)). Por defecto corre en
**modo real** (`sandbox=false`); para forzar modo sandbox en una corrida, usa
`KIBAN_SANDBOX=true` (no consume saldo; `scenarioId` es obligatorio si hay
nodos LINK).

```bash
cp .env.local.example .env.local     # llena tus valores
set -a; source .env.local; set +a    # carga las variables

# Python
pip install pydantic urllib3 python-dateutil
python3 scripts/smoke_test.py

# Node (compila el SDK primero)
cd packages/node && npm install && npx tsc && cd -
node scripts/smoke-test.mjs
```

Variables (ver [`.env.local.example`](.env.local.example)):
`KIBAN_API_KEY_PROD` (o la genérica `KIBAN_API_KEY`),
`KIBAN_WORKFLOO_DEFINITION_ID`, `KIBAN_SCENARIO_ID` (si corres en modo sandbox y
hay nodos LINK), `KIBAN_SANDBOX` (opcional; por defecto `false` = real).

### Go / Java / C#

Los smoke tests de los lenguajes compilados viven en `smoke/{go,java,csharp}` y
**no repiten** la lógica de resolución: usan el ambiente ya resuelto por
`scripts/resolve-env.sh`, que exporta `KIBAN_HOST`, `KIBAN_SANDBOX` y
`KIBAN_API_KEY`.

```bash
set -a; source .env.local; set +a   # tus secretos
source scripts/resolve-env.sh        # exporta KIBAN_HOST/KIBAN_SANDBOX/KIBAN_API_KEY
                                     # (o: KIBAN_SANDBOX=true source scripts/resolve-env.sh)

# Go
( cd smoke/go && go mod tidy && go run . )

# Java (instala el SDK en el repositorio local una vez)
( cd packages/java && mvn -q install -DskipTests )
( cd smoke/java && mvn -q compile exec:java )

# C#
( cd smoke/csharp && dotnet run )
```

Java y dotnet son *keg-only* en macOS; primero exporta
`export JAVA_HOME=/opt/homebrew/opt/openjdk@21 DOTNET_ROOT=/opt/homebrew/opt/dotnet/libexec`
y agrega `$JAVA_HOME/bin` y `/opt/homebrew/opt/dotnet/bin` al `PATH`.

## Verificar

Después de regenerar, cada SDK tiene que compilar:

```bash
( cd packages/node && npm install && npx tsc --noEmit -p . )
( cd packages/go && go build ./... )
( cd packages/java && mvn -q compile )
( cd packages/csharp && dotnet build )
python3 -m venv /tmp/kiban-venv && /tmp/kiban-venv/bin/pip install ./packages/python \
  && /tmp/kiban-venv/bin/python -c "import kiban.workfloo"
```

Y los ejemplos tienen que seguir compilando contra el SDK nuevo:

```bash
node --check examples/node/flujo-completo.mjs
/tmp/kiban-venv/bin/python -m py_compile examples/python/flujo_completo.py
( cd examples/go && go build ./... )
( cd examples/java && mvn -q compile )      # después del mvn install del SDK
( cd examples/csharp && dotnet build )
```

## Versionado y publicación

Cada release queda publicado **para siempre** en su registro (npm, PyPI, Maven
Central, NuGet, Go). Un cliente fija la versión con la que trabaja y migra
cuando quiere; regenerar este repo nunca cambia lo que ya instaló.

**Fuente única de la versión:** [`config/modules.json`](config/modules.json)
(`modules.<módulo>.version`). Los `config.<lang>.yaml` no llevan versión:
`gen-sdks.sh` la pasa a los 5 generadores, así que los 5 SDKs de un módulo
siempre salen con la misma. El mismo archivo trae los datos del publicador
(licencia, correo, URL), que terminan en los metadatos de cada paquete y en el
`info` del spec.

**Semver contra el contrato, no a ojo.** `scripts/check-version.mjs` compara el
spec con el del último release (tag `<módulo>/vX.Y.Z`) usando `oasdiff`:

| Cambio en el spec | Versión mínima |
|---|---|
| incompatible (quitar o renombrar un endpoint, campo, parámetro o `@ID` de swaggo, que es el nombre del método) | **major** |
| cualquier otro (endpoint, campo o parámetro opcional nuevo) | **minor** |
| ninguno (solo docs, generador o tooling) | **patch** |

El resultado se publica como commit status **`semver`** en cada PR (lo ponen
`semver.yml` y, en el PR de regeneración, `regenerate.yml`). Si falla, el
mensaje dice qué versión hay que declarar: súbela en `modules.json`, corre
`npm run gen:sdks` y empuja.

```bash
MODULE=workfloo node scripts/check-version.mjs              # qué pide semver
MODULE=workfloo node scripts/check-version.mjs --notes n.md # + notas de release
```

**Publicar un release:** después de mergear, etiqueta el commit de la rama por
defecto con la versión de `modules.json` y empuja el tag:

```bash
git tag workfloo/v1.0.0 && git push origin workfloo/v1.0.0
```

Eso corre [`publish.yml`](.github/workflows/publish.yml), que espera la
aprobación del environment `release` y luego:

1. **preflight**: revisa que el tag esté en la rama por defecto y coincida con
   `modules.json`, que haya licencia, correo y `LICENSE`, y que los metadatos
   generados no tengan rellenos del generador (`release-preflight.mjs`); arma
   las notas.
2. **npm** y **PyPI**: trusted publishing (OIDC del propio registro, sin
   tokens); npm con provenance.
3. **Maven Central**: bundle firmado con GPG (`maven-bundle.sh`) subido al
   Central Portal; el token y la llave salen de Secret Manager vía WIF.
4. **NuGet**: `dotnet pack` + push con la API key de Secret Manager.
5. **Go**: crea el tag `packages/go/vX.Y.Z` (Go publica por tag).
6. **GitHub Release** con las notas y cómo instalar en cada lenguaje.

Cada job se salta si la versión ya existe en su registro, así que volver a
correr un release que quedó a medias es seguro. Una versión publicada no se
puede reemplazar: si salió mal, se publica la siguiente patch.

**Antes del primer release:**

- Cuentas en los registros con los nombres reservados (`@kiban` en npm,
  `kiban-workfloo` en PyPI, namespace `com.kiban` verificado en Central,
  prefijo `Kiban.*` en NuGet).
- Trusted publisher en npm y PyPI: repo `kiban-cloud/kiban-sdk`, workflow
  `publish.yml`, environment `release`.
- Environment `release` en GitHub (Settings → Environments) con revisores y
  restringido a tags `*/v*`.
- `semver` como status requerido en el ruleset de la rama por defecto.
- Credenciales de Maven Central y NuGet cargadas en Secret Manager (el provider
  WIF, la service account y el runbook están en kiban-infra:
  `stacks/kibancloud/shared-prod/github-sdk-ci.tf`).

**Licencia:** [Apache-2.0](LICENSE), la misma para los 5 SDKs. El texto está en
`LICENSE` y el titular del copyright en `NOTICE`; `gen-sdks.sh` copia los dos a
cada paquete y declara `Apache-2.0` en sus metadatos (`package.json`,
`pyproject.toml`, `pom.xml`, `.csproj`) y en el `info.license` del spec.

**Agregar un módulo** (p. ej. `link`): una entrada en `modules.json` (`version`,
`spec`, `configPrefix`, `packagesDir`, `goModule`), sus
`config.<prefijo><lang>.yaml`, sus `readmes/<módulo>.<lang>.md`, y generar con
`MODULE=link npm run gen:sdks`. Cada módulo se versiona y se publica por
separado (`link/v1.0.0`).

## Flujo de actualización de la API

1. En `workfloo-backend`, quien toque un endpoint público actualiza su anotación
   swaggo y regenera `docs/swagger.yaml` en el mismo PR. Su check `swagger.yml`
   no deja mergear si el archivo no coincide con las anotaciones.
2. Cuando un cambio en `docs/swagger.yaml` llega a `master`, el workflow
   `sdk-sync.yml` del backend lo copia a `specs/source/workfloo.swagger.yaml` en
   la rama `regenerate/workfloo` de este repo.
3. Ese push corre [`.github/workflows/regenerate.yml`](.github/workflows/regenerate.yml):
   `gen:spec` → `gen:sdks` → `docs`, compila Node y Go, commitea en la misma rama
   y abre el PR si no existe.
4. Al revisar el PR: si el status `semver` falla, sube la versión en
   `config/modules.json` en la misma rama (el workflow regenera con la versión
   nueva), compila Java y C#, mergea y publica con el tag (ver arriba).

Este repo es público y no tiene credenciales hacia nada privado: no lee código
del backend, solo el swagger que el backend publica. Todo lo hace con su propio
`GITHUB_TOKEN`.

El único secreto del flujo es el token con el que el backend escribe aquí
(`github-token-kiban-sdk-sync`, solo con `Contents: Read and write` sobre este
repo). No está en GitHub Secrets: vive en Secret Manager (proyecto
`kiban-cloud`), y el backend lo lee entrando a GCP por Workload Identity
Federation, una identidad que solo obtiene `workfloo-backend` en `master`. El
provider WIF, la service account, el secreto y el runbook para cargarlo o
rotarlo están en kiban-infra: `stacks/kibancloud/shared-prod/github-sdk-ci.tf`.

El repo debe permitir que Actions abra PRs (Settings → Actions → General).
