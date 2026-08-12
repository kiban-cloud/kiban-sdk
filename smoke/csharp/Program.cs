// Smoke test del SDK de C# (librería generichost): ejecutar → estatus → historial.
//
// El SDK usa siempre producción. Lee el ambiente ya resuelto por
// scripts/resolve-env.sh (host + key + KIBAN_SANDBOX, real por defecto):
//
//   set -a; source ../../.env.local; set +a
//   source ../../scripts/resolve-env.sh          # o KIBAN_SANDBOX=true source …
//   dotnet run
//
// Variables: KIBAN_HOST, KIBAN_API_KEY, KIBAN_SANDBOX, KIBAN_WORKFLOO_DEFINITION_ID,
// KIBAN_SCENARIO_ID (opcional).
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

using kiban.sdk.workfloo.Api;
using kiban.sdk.workfloo.Client;
using kiban.sdk.workfloo.Extensions;
using kiban.sdk.workfloo.Model;

string? hostUrl = Environment.GetEnvironmentVariable("KIBAN_HOST");
string? apiKey = Environment.GetEnvironmentVariable("KIBAN_API_KEY");
string? defId = Environment.GetEnvironmentVariable("KIBAN_WORKFLOO_DEFINITION_ID");
string? scenario = Environment.GetEnvironmentVariable("KIBAN_SCENARIO_ID");
bool sandbox = Environment.GetEnvironmentVariable("KIBAN_SANDBOX") == "true";

if (string.IsNullOrEmpty(hostUrl) || string.IsNullOrEmpty(apiKey) || string.IsNullOrEmpty(defId))
{
    Console.Error.WriteLine("Faltan KIBAN_HOST / KIBAN_API_KEY / KIBAN_WORKFLOO_DEFINITION_ID (corré resolve-env.sh).");
    Environment.Exit(1);
}

IHost host = Host.CreateDefaultBuilder(args)
    .ConfigureApi((context, options) =>
    {
        options.AddTokens(new ApiKeyToken(apiKey!, ClientUtils.ApiKeyHeader.X_api_key));
        options.AddApiHttpClients(builder =>
            builder.ConfigureHttpClient(c => c.BaseAddress = new Uri(hostUrl!)));
    })
    .Build();

IWorkflooApi api = host.Services.GetRequiredService<IWorkflooApi>();

Console.WriteLine($"Ambiente: {hostUrl} sandbox={sandbox}");

Console.WriteLine("1/3 ExecuteWorkfloo …");
var body = new ControllerWorkflooModelExecute(idWorkflooDefinition: defId!);
if (!string.IsNullOrEmpty(scenario))
{
    body.ScenarioId = scenario;
}
var createdResp = await api.ExecuteWorkflooAsync(body, new Option<bool>(sandbox));
var created = createdResp.Ok();
string id = created?.Id ?? "";
Console.WriteLine($"    id={id} idUnykoo={created?.IdUnykoo}");
if (string.IsNullOrEmpty(id))
{
    Console.Error.WriteLine("La ejecución no devolvió id.");
    Environment.Exit(1);
}

await Task.Delay(2000);

Console.WriteLine("2/3 GetWorkflooStatus …");
var statusResp = await api.GetWorkflooStatusAsync(id, new Option<bool>(sandbox));
var status = statusResp.Ok();
Console.WriteLine($"    status={status?.Status} nodo={status?.CurrentNodeName}");

Console.WriteLine("3/3 ListWorkfloos (v1) …");
var pageResp = await api.ListWorkfloosAsync(1, 5, sandbox: new Option<bool>(sandbox));
var page = pageResp.Ok();
Console.WriteLine($"    items={page?.Items?.Count ?? 0}");

Console.WriteLine("    ListWorkfloosV2 …");
var v2Resp = await api.ListWorkfloosV2Async(sandbox: new Option<bool>(sandbox),
    page: new Option<int>(1), itemsPerPage: new Option<int>(5));
var items = v2Resp.Ok();
Console.WriteLine($"    v2 devolvió {items?.Count ?? 0} items (arreglo plano)");

Console.WriteLine("\nSMOKE TEST OK");
