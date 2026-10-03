// Flujo completo de un integrador con el SDK de C#.
//
// Ejecuta un workfloo y lo conduce hasta que termina: consulta el estatus, ve
// en qué paso está parado y responde lo que ese paso pide (formulario,
// documentos, NIP, código de verificación o corrección). Al final imprime el
// detalle.
//
//   export KIBAN_API_KEY=...
//   export KIBAN_WORKFLOO_DEFINITION_ID=...
//   cd examples/csharp && dotnet run
//
// Variables opcionales: KIBAN_ANSWERS (default ../answers.example.json),
// KIBAN_HOST (default https://workfloo.kiban.com), KIBAN_SANDBOX=true y
// KIBAN_SCENARIO_ID (obligatorio en sandbox si la definición tiene conectores).
using System.Text.Json;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

using kiban.sdk.workfloo.Api;
using kiban.sdk.workfloo.Client;
using kiban.sdk.workfloo.Extensions;
using kiban.sdk.workfloo.Model;

var finished = new HashSet<string> { "SUCCESS", "ERROR", "ABANDONED" };
var nipPhases = new HashSet<string> { "CREATE_ACCOUNT", "VALIDATE", "VALIDATE_2" };
var pollInterval = TimeSpan.FromSeconds(3);

string hostUrl = Env("KIBAN_HOST", "https://workfloo.kiban.com");
var sandbox = new Option<bool>(Environment.GetEnvironmentVariable("KIBAN_SANDBOX") == "true");
string definitionId = Env("KIBAN_WORKFLOO_DEFINITION_ID");
string apiKey = Env("KIBAN_API_KEY");
string answersPath = Path.GetFullPath(Env("KIBAN_ANSWERS", "../answers.example.json"));
var answers = JsonSerializer.Deserialize<Answers>(File.ReadAllText(answersPath),
    new JsonSerializerOptions { PropertyNameCaseInsensitive = true })!;
string answersDir = Path.GetDirectoryName(answersPath)!;

IHost host = Host.CreateDefaultBuilder(args)
    // El HttpClient registra cada request en nivel Information; para el ejemplo
    // basta con advertencias y errores.
    .ConfigureLogging(logging => logging.SetMinimumLevel(LogLevel.Warning))
    .ConfigureApi((context, options) =>
    {
        // prefix: "" es obligatorio: el generador pone "Bearer " por defecto y la
        // API espera la key sola en el header x-api-key.
        options.AddTokens(new ApiKeyToken(apiKey, ClientUtils.ApiKeyHeader.X_api_key, prefix: ""));
        options.AddApiHttpClients(builder =>
            builder.ConfigureHttpClient(c => c.BaseAddress = new Uri(hostUrl)));
    })
    .Build();
IWorkflooApi api = host.Services.GetRequiredService<IWorkflooApi>();

var body = new ControllerWorkflooModelExecute(idWorkflooDefinition: definitionId);
string? scenario = Environment.GetEnvironmentVariable("KIBAN_SCENARIO_ID");
if (!string.IsNullOrEmpty(scenario))
{
    body.ScenarioId = scenario;
}
var executed = await api.ExecuteWorkflooAsync(body, sandbox);
Ensure(executed, "execute");
string id = executed.Ok()!.Id!;
Console.WriteLine($"Ejecución {id}");

// Cada paso estacionado se atiende una vez; si el motor pasa por otro paso y
// regresa, se vuelve a atender.
string? lastStep = null;
ControllerWorkflooModelWorkflooStatus status;
while (true)
{
    var statusResponse = await api.GetWorkflooStatusAsync(id, sandbox);
    Ensure(statusResponse, "status");
    status = statusResponse.Ok()!;
    if (finished.Contains(status.Status ?? ""))
    {
        break;
    }

    string nodeType = status.CurrentNodeType ?? "";
    if (nodeType == "" || nodeType.EndsWith("_PROGRESS") || nodeType.EndsWith("_PROCESSING"))
    {
        await Task.Delay(pollInterval); // el motor está trabajando
        continue;
    }

    string phase = status.Link?.Phase ?? "";
    string state = status.Validation?.State ?? "";
    string step = $"{status.CurrentNodeId}:{nodeType}:{phase}:{state}";
    if (step == lastStep)
    {
        await Task.Delay(pollInterval);
        continue;
    }
    lastStep = step;
    Console.WriteLine($"Paso: {status.CurrentNodeName} ({nodeType})");

    if (nodeType == "FORM")
    {
        Ensure(await api.ExecuteWorkflooFormAsync(id, FormValues(status), sandbox), "form");
    }
    else if (nodeType == "DOCUMENT")
    {
        Ensure(await api.ExecuteWorkflooDocumentAsync(id, DocumentValues(status), sandbox), "document");
    }
    else if (nodeType == "LINK" && status.Verification != null)
    {
        // El código de un proveedor externo se reconoce por `verification`, que
        // va antes que la fase: también se estaciona en VALIDATE.
        await ValidateOtp(status.Verification);
    }
    else if (nodeType == "LINK" && phase == "CREATE_ACCOUNT")
    {
        Ensure(await api.SendWorkflooNipAsync(id, sandbox), "nip/send");
        Console.WriteLine("    NIP enviado");
    }
    else if (nodeType == "LINK" && nipPhases.Contains(phase))
    {
        string nip = Ask("NIP recibido");
        var validated = await api.ValidateWorkflooNipAsync(id, new ControllerWorkflooModelNipValidateRequest(nip), sandbox);
        Ensure(validated, "nip/validate");
        Console.WriteLine($"    Fase: {validated.Ok()?.Phase}");
    }
    else if (nodeType == "LINK" && status.Link?.Widget != null)
    {
        Console.WriteLine($"    La persona debe completar el widget: {status.Link.Widget}");
    }
    else if (nodeType == "VALIDATION" && state == "CORRECTION")
    {
        Console.WriteLine($"    El revisor pidió corregir: {status.Validation!.ReviewerNote}");
        var corrected = new Dictionary<string, object>();
        foreach (var field in status.Validation.Fields ?? new())
        {
            string label = string.IsNullOrEmpty(field.Name) ? field.FieldId! : field.Name;
            corrected[field.FieldId!] = Ask($"{label} ({field.Message})");
        }
        Ensure(await api.SubmitWorkflooCorrectionAsync(id, corrected, sandbox), "correction");
    }
    else if (nodeType == "VALIDATION")
    {
        Console.WriteLine("    Esperando la revisión interna");
    }
    else if (nodeType == "TIMER")
    {
        Console.WriteLine($"    Espera programada hasta {status.Timer?.EndWaitDate}");
    }

    await Task.Delay(pollInterval);
}

Console.WriteLine($"Terminó en {status.Status}");
var detail = await api.GetWorkflooAsync(id, sandbox);
Ensure(detail, "detalle");
foreach (var node in detail.Ok()?.Nodes ?? new())
{
    Console.WriteLine($"  - {node.Name} ({node.Type})");
}

// Arma {campoId: valor} con los campos que pide el formulario.
Dictionary<string, object> FormValues(ControllerWorkflooModelWorkflooStatus s)
{
    var values = new Dictionary<string, object>();
    var missing = new List<string>();
    foreach (var section in s.Form?.FormFieldSection ?? new())
    {
        foreach (var field in section.Fields ?? new())
        {
            if (answers.Form.TryGetValue(field.Id!, out var value))
            {
                values[field.Id!] = value;
            }
            else if (field.Required == true)
            {
                missing.Add($"{field.Id} ({field.Name})");
            }
        }
    }
    if (missing.Count > 0)
    {
        Fail($"Faltan respuestas para campos obligatorios: {string.Join(", ", missing)}");
    }
    return values;
}

// Arma {documentoId: base64} con los archivos que pide el paso.
Dictionary<string, object> DocumentValues(ControllerWorkflooModelWorkflooStatus s)
{
    var values = new Dictionary<string, object>();
    var missing = new List<string>();
    foreach (var doc in s.Document?.DocumentField ?? new())
    {
        if (!string.IsNullOrEmpty(doc.SourcePdfNodeId))
        {
            continue; // lo genera el propio workfloo; no se sube
        }
        if (!answers.Documents.TryGetValue(doc.Id!, out var path))
        {
            if (doc.Required == true)
            {
                missing.Add($"{doc.Id} ({doc.Name})");
            }
            continue;
        }
        values[doc.Id!] = Convert.ToBase64String(File.ReadAllBytes(Path.Combine(answersDir, path)));
    }
    if (missing.Count > 0)
    {
        Fail($"Faltan archivos para documentos obligatorios: {string.Join(", ", missing)}");
    }
    return values;
}

// Pide el código hasta que el proveedor lo acepte o se acaben los intentos.
async Task ValidateOtp(ControllerWorkflooModelVerificationStatus verification)
{
    Console.WriteLine($"    Código enviado por {verification.Channel} a {verification.MaskedDestination}");
    while (true)
    {
        string token = Ask("Código recibido");
        var response = await api.ValidateWorkflooOtpAsync(id, new ControllerWorkflooModelOtpValidateRequest(token), sandbox);
        if (response.IsOk)
        {
            return;
        }
        // 400 = código incorrecto con intentos restantes; la ejecución sigue viva.
        if (!response.IsBadRequest)
        {
            Ensure(response, "otp/validate");
        }
        var error = JsonSerializer.Deserialize<Dictionary<string, string>>(response.RawContent) ?? new();
        Console.WriteLine($"    {error.GetValueOrDefault("error")} Intentos restantes: {error.GetValueOrDefault("remainingRetries")}");
    }
}

static void Ensure(IApiResponse response, string what)
{
    if (!response.IsSuccessStatusCode)
    {
        Fail($"{what}: HTTP {(int)response.StatusCode} {response.RawContent}");
    }
}

static string Ask(string prompt)
{
    Console.Write($"    {prompt}: ");
    return (Console.ReadLine() ?? "").Trim();
}

static string Env(string name, string? fallback = null)
{
    string? value = Environment.GetEnvironmentVariable(name);
    if (!string.IsNullOrEmpty(value))
    {
        return value;
    }
    if (fallback == null)
    {
        Fail($"Falta la variable {name}.");
    }
    return fallback!;
}

static void Fail(string message)
{
    Console.Error.WriteLine(message);
    Environment.Exit(1);
}

// Respuestas del integrador: campos del formulario y rutas de los documentos.
record Answers(Dictionary<string, JsonElement> Form, Dictionary<string, string> Documents);
