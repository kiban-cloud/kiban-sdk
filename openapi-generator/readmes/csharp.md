# kiban.sdk.workfloo para C#

SDK de la API pública de **workfloo** de kiban cloud para .NET: ejecutar un
workfloo, consultar su estatus, responder cada paso (formulario, documentos,
NIP, código de verificación, corrección) y revisar el historial.

> Este archivo lo escribe una persona. El resto de `packages/csharp/` lo genera
> openapi-generator a partir de `specs/workfloo.openapi.yaml`: no lo edites a
> mano. La fuente de este README es `openapi-generator/readmes/csharp.md` y
> `scripts/gen-sdks.sh` lo copia aquí al regenerar.

- **Target:** `net8.0` (corre sobre runtimes más nuevos con `RollForward`).
- **Estilo:** cliente *generichost*: se registra en el contenedor de dependencias
  de `Microsoft.Extensions.Hosting` y se pide como `IWorkflooApi`.
- **Ejemplo completo y ejecutable:** [`examples/csharp`](../../examples/csharp).

## Instalación

```bash
dotnet add package kiban.sdk.workfloo --version 0.2.0
```

Mientras el paquete no esté publicado en NuGet, referencialo desde este repo:

```xml
<ItemGroup>
  <ProjectReference Include="ruta/a/kiban-sdk/packages/csharp/src/kiban.sdk.workfloo/kiban.sdk.workfloo.csproj" />
</ItemGroup>
```

Si tu máquina sólo tiene un runtime más nuevo que .NET 8, agregá
`<RollForward>Major</RollForward>` a tu `.csproj`.

## Configuración

```csharp
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using kiban.sdk.workfloo.Api;
using kiban.sdk.workfloo.Client;
using kiban.sdk.workfloo.Extensions;   // ConfigureApi
using kiban.sdk.workfloo.Model;

IHost host = Host.CreateDefaultBuilder(args)
    .ConfigureApi((context, options) =>
    {
        options.AddTokens(new ApiKeyToken(
            Environment.GetEnvironmentVariable("KIBAN_API_KEY")!,
            ClientUtils.ApiKeyHeader.X_api_key,
            prefix: ""));                                   // ← obligatorio, ver abajo
        options.AddApiHttpClients(builder => builder.ConfigureHttpClient(c =>
            c.BaseAddress = new Uri("https://workfloo.kiban.com")));
    })
    .Build();

IWorkflooApi api = host.Services.GetRequiredService<IWorkflooApi>();
```

> ⚠️ **`prefix: ""` no es opcional.** El constructor de `ApiKeyToken` pone
> `"Bearer "` por defecto, así que sin ese argumento el header sale como
> `x-api-key: Bearer <tu key>` y la API responde **401**. La key va sola.

- **Ambientes:** producción en `https://workfloo.kiban.com`; sandbox en
  `https://sandbox.workfloo.kiban.com`, o desde producción con el parámetro
  `sandbox` en cada llamada. En sandbox, `ScenarioId` es obligatorio al ejecutar
  si la definición tiene conectores.
- **La API key** viene de una variable de entorno o un secret manager, nunca
  escrita en el código.
- **Logs:** el `HttpClient` registra cada request en nivel *Information*. Para
  silenciarlo: `.ConfigureLogging(l => l.SetMinimumLevel(LogLevel.Warning))`.

## Cómo leer las respuestas

Ningún método lanza excepción por un status HTTP de error: todos devuelven un
objeto respuesta que hay que revisar.

```csharp
var response = await api.GetWorkflooStatusAsync(id);

if (response.IsOk)
{
    ControllerWorkflooModelWorkflooStatus status = response.Ok()!;   // cuerpo ya deserializado
}
else
{
    Console.WriteLine($"{(int)response.StatusCode}: {response.RawContent}");
}
```

| Miembro | Qué es |
|---|---|
| `IsOk`, `IsBadRequest`, `IsNotFound`, … | un booleano por cada status que declara la operación |
| `Ok()` | el cuerpo deserializado cuando `IsOk`; `null` si no |
| `IsSuccessStatusCode` | cualquier 2xx |
| `StatusCode`, `RawContent` | el status y el cuerpo crudo, también en los errores |

Los errores **no traen un modelo tipado**: el backend sólo llena el cuerpo en
algunos casos. Leé `RawContent` como JSON cuando lo necesites, por ejemplo el
400 de un código OTP incorrecto:

```csharp
var otp = await api.ValidateWorkflooOtpAsync(id, new ControllerWorkflooModelOtpValidateRequest("123456"));
if (otp.IsBadRequest)
{
    var error = JsonSerializer.Deserialize<Dictionary<string, string>>(otp.RawContent);
    Console.WriteLine($"{error!["error"]} Intentos restantes: {error["remainingRetries"]}");
}
```

## Parámetros opcionales: `Option<T>`

Los parámetros opcionales son `Option<T>`. Si no los pasás, no viajan en el
request; para mandarlos, envolvé el valor:

```csharp
await api.GetWorkflooStatusAsync(id, sandbox: new Option<bool>(true));
await api.ListWorkfloosV2Async(page: new Option<int>(1), itemsPerPage: new Option<int>(20));
```

## Operaciones

| Método | HTTP | Para qué |
|---|---|---|
| `ExecuteWorkflooAsync` | `POST /api/v1/workfloo` | crea y arranca una ejecución |
| `GetWorkflooStatusAsync` | `GET /api/v1/workfloo/status/{id}` | estatus y paso actual, con lo que ese paso pide |
| `GetWorkflooAsync` | `GET /api/v1/workfloo/{id}` | detalle completo de la ejecución |
| `ListWorkfloosAsync` | `GET /api/v1/workfloo` | historial paginado, envuelto en `currentPage/hasNextPage/items` |
| `ListWorkfloosV2Async` | `GET /api/v2/workfloo` | historial como arreglo plano; paginación en el header `Link`; `format=csv` |
| `ExecuteWorkflooFormAsync` | `POST /api/v1/workfloo/{id}/form` | responde un paso FORM: `{campoId: valor}` |
| `ExecuteWorkflooDocumentAsync` | `POST /api/v1/workfloo/{id}/document` | responde un paso DOCUMENT: `{documentoId: base64}` |
| `GetWorkflooFileAsync` | `GET /api/v1/workfloo/{id}/file` | descarga un archivo generado o subido |
| `SendWorkflooNipAsync` | `PATCH …/nip/send` | envía el NIP (fase `CREATE_ACCOUNT`) |
| `ValidateWorkflooNipAsync` | `PATCH …/nip/validate` | valida el NIP capturado (fase `VALIDATE` / `VALIDATE_2`) |
| `ResendWorkflooNipAsync` | `PATCH …/nip/resend` | reenvía el NIP |
| `ValidateWorkflooOtpAsync` | `PATCH …/otp/validate` | valida el código de un proveedor externo (cuando el estatus trae `Verification`) |
| `FallbackWorkflooOtpAsync` | `PATCH …/otp/fallback` | pide un código nuevo por el canal alterno (cada reenvío se factura) |
| `SubmitWorkflooCorrectionAsync` | `POST …/correction` | reenvía los campos que el revisor pidió corregir |
| `ReviewWorkflooValidationAsync` | `POST …/review` | decisión del revisor sobre un paso VALIDATION |
| `IPoolApi.ExecutePoolAsync` | `POST /api/v1/pool` | ejecuta un pool de workfloos |

Parámetros y tipos de cada uno: [`docs/apis/WorkflooApi.md`](docs/apis/WorkflooApi.md),
[`docs/apis/PoolApi.md`](docs/apis/PoolApi.md) y los modelos en
[`docs/models/`](docs/models).

## Conducir una ejecución

El estatus dice en qué paso está parada la ejecución y qué necesita. El ciclo de
un integrador es: consultar → si el paso es tuyo, responderlo → repetir hasta
`SUCCESS`, `ERROR` o `ABANDONED`.

| `CurrentNodeType` | Qué hacer |
|---|---|
| vacío, `*_PROCESSING`, `*_PROGRESS` | esperar: el motor está trabajando o le toca a otra persona |
| `FORM` | `ExecuteWorkflooFormAsync` con los campos de `Form.FormFieldSection[].Fields[]` |
| `DOCUMENT` | `ExecuteWorkflooDocumentAsync` con los archivos de `Document.DocumentField[]` (salvo los que traen `SourcePdfNodeId`: los genera el workfloo) |
| `LINK` con `Verification` | `ValidateWorkflooOtpAsync` con el código que recibió la persona |
| `LINK` con `Link.Phase == "CREATE_ACCOUNT"` | `SendWorkflooNipAsync` |
| `LINK` con `Link.Phase` `VALIDATE` / `VALIDATE_2` | `ValidateWorkflooNipAsync` |
| `VALIDATION` con `Validation.State == "CORRECTION"` | `SubmitWorkflooCorrectionAsync` con los `Validation.Fields[].FieldId` |
| `VALIDATION` con `State == "REVIEW"`, `TIMER` | esperar |

Revisá `Verification` **antes** que la fase: un código de proveedor externo
también se estaciona en `VALIDATE`. El programa completo, probado de punta a
punta, está en [`examples/csharp/Program.cs`](../../examples/csharp/Program.cs).

En producción conviene recibir el webhook de `callbackUrl` (se pasa al ejecutar)
en lugar de consultar en bucle: trae el mismo objeto que `GetWorkflooStatusAsync`,
así que la tabla de arriba aplica igual.
