# Kiban.Link para C#

SDK de la API pública de **link** de kiban cloud para .NET: ejecutar cualquier
servicio del catálogo (CURP, SAT, IMSS, Buró…), consultar el historial y el
detalle de las ejecuciones, descargar sus archivos y administrar las
credenciales (vault) que piden algunos servicios.

> Este archivo lo escribe una persona. El resto de `packages/link/csharp/` lo
> genera openapi-generator a partir de `specs/link.openapi.yaml`: no lo edites a
> mano. La fuente de este README es `openapi-generator/readmes/link.csharp.md`
> y `scripts/gen-sdks.sh` lo copia aquí al regenerar.

- **Target:** `net8.0` (corre sobre runtimes más nuevos con `RollForward`).
- **Estilo:** cliente *generichost*: se registra en el contenedor de dependencias
  de `Microsoft.Extensions.Hosting` y se pide como `ILinkApi` / `IVaultApi`.

## Instalación

```bash
dotnet add package Kiban.Link --version 1.0.0
```

Para quedarte en una versión hasta que decidas actualizar, ve
["Fija la versión"](../../../README.md#fija-la-versión) en el README principal.

## Configuración

```csharp
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Kiban.Link.Api;
using Kiban.Link.Client;
using Kiban.Link.Extensions;   // ConfigureApi
using Kiban.Link.Model;

IHost host = Host.CreateDefaultBuilder(args)
    .ConfigureApi((context, options) =>
    {
        options.AddTokens(new ApiKeyToken(
            Environment.GetEnvironmentVariable("KIBAN_API_KEY")!,
            ClientUtils.ApiKeyHeader.X_api_key,
            prefix: ""));                                   // ← obligatorio, ver abajo
        options.AddApiHttpClients(builder => builder.ConfigureHttpClient(c =>
            c.BaseAddress = new Uri("https://link.kiban.com")));
    })
    .Build();

ILinkApi link = host.Services.GetRequiredService<ILinkApi>();
IVaultApi vault = host.Services.GetRequiredService<IVaultApi>();
```

> ⚠️ **`prefix: ""` no es opcional.** El constructor de `ApiKeyToken` pone
> `"Bearer "` por defecto, así que sin ese argumento el header sale como
> `x-api-key: Bearer <tu key>` y la API responde **401**. La key va sola.

- **Ambientes:** producción en `https://link.kiban.com` y sandbox en
  `https://sandbox.link.kiban.com`. El modo va en la API key: una key de
  sandbox sólo funciona en el host sandbox o con `sandbox: new Option<bool>(true)`
  en cada llamada, y una de producción sólo sin él; mezclarlos responde 401. En
  sandbox la ejecución responde un test case en lugar de llamar al proveedor;
  elige cuál con `testCase` o `testCaseId` (`ListTestCasesAsync` dice cuáles hay).
- **Credenciales:** el body de `CreateVaultAsync` / `UpdateVaultAsync` lleva
  `name`, `type` y los campos de ese tipo, por ejemplo
  `new Dictionary<string, object> { ["name"] = "buro-pf", ["type"] = "BC_PF", ["usuario"] = "…", ["password"] = "…" }`.
- **La API key** viene de una variable de entorno o un secret manager, nunca
  escrita en el código.

## Ejecutar un servicio

El servicio y la operación van en la ruta; el body depende de cada servicio, por
eso es un objeto libre:

```csharp
var r = await link.ExecuteServiceAsync("curp", "validate",
    new Dictionary<string, object> { ["curp"] = "PEPJ800101HDFRRN09" });

if (r.IsOk)
{
    ControllerMicroserviceModelMicroserviceDetailDto detail = r.Ok()!;
    Console.WriteLine($"{detail.Id} {detail.Status}");   // detail.Response trae la respuesta del servicio
}
else if (r.IsBadRequest)
{
    // Datos inválidos: lista de {code, message, field, errors}
    foreach (var e in r.BadRequest()!) Console.WriteLine($"{e.Field}: {e.Message}");
}
```

Ningún método lanza excepción por un status HTTP de error: revisa `IsOk`,
`IsBadRequest`, … o `StatusCode` y `RawContent`. Cuando el proveedor falla
(408, 503, 406) la respuesta también trae el detalle de la ejecución.

## Operaciones

| Método | HTTP | Para qué |
|---|---|---|
| `ILinkApi.ExecuteServiceAsync` | `POST /api/v3/{service}/{subservice}` | ejecuta un servicio del catálogo |
| `ILinkApi.GetExecutionAsync` | `GET /api/v1/{service}/{subservice}/{id}` | detalle de una ejecución |
| `ILinkApi.ListExecutionsAsync` | `GET /api/v1/{service}/{subservice}` | historial paginado (`currentPage/hasNextPage/items`) |
| `ILinkApi.ListTestCasesAsync` | `GET /api/v3/{service}/{subservice}/test_case` | test cases de sandbox de un servicio |
| `ILinkApi.GetFileAsync` | `GET /api/v1/file` | descarga un archivo de una ejecución |
| `IVaultApi.CreateVaultAsync` | `POST /api/v3/vault/na` | crea una credencial |
| `IVaultApi.ListVaultsAsync` | `GET /api/v1/vault/na` | lista las credenciales (sin secretos) |
| `IVaultApi.GetVaultAsync` | `GET /api/v1/vault/na/{id}` | detalle de una credencial (sin secretos) |
| `IVaultApi.UpdateVaultAsync` | `PUT /api/v3/vault/na/{id}` | edita una credencial |
| `IVaultApi.DeleteVaultAsync` | `DELETE /api/v3/vault/na/{id}` | borra una credencial |
| `IVaultApi.ValidateVaultAsync` | `POST /api/v3/{service}/{subservice}/vault` | dice si una credencial sirve para un servicio |

Parámetros y tipos de cada uno: [`docs/apis/LinkApi.md`](docs/apis/LinkApi.md),
[`docs/apis/VaultApi.md`](docs/apis/VaultApi.md) y los modelos en
[`docs/models/`](docs/models).
