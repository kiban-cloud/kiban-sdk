// Flujo completo de un integrador con el SDK de Java.
//
// Ejecuta un workfloo y lo conduce hasta que termina: consulta el estatus, ve
// en qué paso está parado y responde lo que ese paso pide (formulario,
// documentos, NIP, código de verificación o corrección). Al final imprime el
// detalle.
//
//   cd ../../packages/java && mvn -q install -DskipTests && cd -
//   export KIBAN_API_KEY=...
//   export KIBAN_WORKFLOO_DEFINITION_ID=...
//   mvn -q compile exec:java
//
// Variables opcionales: KIBAN_ANSWERS (default ../answers.example.json),
// KIBAN_HOST (default https://workfloo.kiban.com), KIBAN_SANDBOX=true y
// KIBAN_SCENARIO_ID (obligatorio en sandbox si la definición tiene conectores).
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import com.kiban.workfloo.ApiClient;
import com.kiban.workfloo.ApiException;
import com.kiban.workfloo.Configuration;
import com.kiban.workfloo.api.WorkflooApi;
import com.kiban.workfloo.auth.ApiKeyAuth;
import com.kiban.workfloo.model.ControllerWorkflooDefinitionModelField;
import com.kiban.workfloo.model.ControllerWorkflooDefinitionModelFileDocument;
import com.kiban.workfloo.model.ControllerWorkflooDefinitionModelFormFieldSection;
import com.kiban.workfloo.model.ControllerWorkflooModelExecute;
import com.kiban.workfloo.model.ControllerWorkflooModelNipValidateRequest;
import com.kiban.workfloo.model.ControllerWorkflooModelNodeResume;
import com.kiban.workfloo.model.ControllerWorkflooModelOtpValidateRequest;
import com.kiban.workfloo.model.ControllerWorkflooModelValidationField;
import com.kiban.workfloo.model.ControllerWorkflooModelVerificationStatus;
import com.kiban.workfloo.model.ControllerWorkflooModelWorkflooStatus;

public class FlujoCompleto {
    private static final Set<String> FINISHED = Set.of("SUCCESS", "ERROR", "ABANDONED");
    private static final Set<String> NIP_PHASES = Set.of("CREATE_ACCOUNT", "VALIDATE", "VALIDATE_2");
    private static final long POLL_MS = 3000;

    private static final BufferedReader STDIN = new BufferedReader(new InputStreamReader(System.in));
    private static final Gson GSON = new Gson();

    /** Respuestas del integrador: campos del formulario y rutas de los documentos. */
    static class Answers {
        Map<String, Object> form = new HashMap<>();
        Map<String, String> documents = new HashMap<>();
        transient Path base;
    }

    public static void main(String[] args) throws Exception {
        String host = env("KIBAN_HOST", "https://workfloo.kiban.com");
        Boolean sandbox = "true".equals(System.getenv("KIBAN_SANDBOX"));
        String definitionId = env("KIBAN_WORKFLOO_DEFINITION_ID", null);
        Answers answers = loadAnswers(Path.of(env("KIBAN_ANSWERS", "../answers.example.json")));

        ApiClient client = Configuration.getDefaultApiClient();
        client.setBasePath(host);
        ((ApiKeyAuth) client.getAuthentication("ApiKeyAuth")).setApiKey(env("KIBAN_API_KEY", null));
        WorkflooApi api = new WorkflooApi(client);

        ControllerWorkflooModelExecute body = new ControllerWorkflooModelExecute().idWorkflooDefinition(definitionId);
        String scenario = System.getenv("KIBAN_SCENARIO_ID");
        if (scenario != null && !scenario.isEmpty()) {
            body.scenarioId(scenario);
        }
        String id = api.executeWorkfloo(body).sandbox(sandbox).execute().getId();
        System.out.println("Ejecución " + id);

        // Cada paso estacionado se atiende una vez; si el motor pasa por otro
        // paso y regresa, se vuelve a atender.
        String lastStep = null;
        ControllerWorkflooModelWorkflooStatus status;
        while (true) {
            status = api.getWorkflooStatus(id).sandbox(sandbox).execute();
            if (FINISHED.contains(status.getStatus())) {
                break;
            }

            String nodeType = orEmpty(status.getCurrentNodeType());
            if (nodeType.isEmpty() || nodeType.endsWith("_PROGRESS") || nodeType.endsWith("_PROCESSING")) {
                Thread.sleep(POLL_MS); // el motor está trabajando
                continue;
            }

            String phase = status.getLink() != null ? orEmpty(status.getLink().getPhase()) : "";
            String state = status.getValidation() != null ? orEmpty(status.getValidation().getState()) : "";
            String step = String.join(":", status.getCurrentNodeId(), nodeType, phase, state);
            if (step.equals(lastStep)) {
                Thread.sleep(POLL_MS);
                continue;
            }
            lastStep = step;
            System.out.println("Paso: " + status.getCurrentNodeName() + " (" + nodeType + ")");

            if (nodeType.equals("FORM")) {
                api.executeWorkflooForm(id, formValues(status, answers)).sandbox(sandbox).execute();
            } else if (nodeType.equals("DOCUMENT")) {
                api.executeWorkflooDocument(id, documentValues(status, answers)).sandbox(sandbox).execute();
            } else if (nodeType.equals("LINK") && status.getVerification() != null) {
                // El código de un proveedor externo se reconoce por `verification`,
                // que va antes que la fase: también se estaciona en VALIDATE.
                validateOtp(api, id, status.getVerification(), sandbox);
            } else if (nodeType.equals("LINK") && phase.equals("CREATE_ACCOUNT")) {
                api.sendWorkflooNip(id).sandbox(sandbox).execute();
                System.out.println("    NIP enviado");
            } else if (nodeType.equals("LINK") && NIP_PHASES.contains(phase)) {
                String nip = ask("NIP recibido");
                String result = api.validateWorkflooNip(id, new ControllerWorkflooModelNipValidateRequest().nip(nip)).sandbox(sandbox).execute()
                        .getPhase();
                System.out.println("    Fase: " + result);
            } else if (nodeType.equals("LINK") && status.getLink().getWidget() != null) {
                System.out.println("    La persona debe completar el widget: " + status.getLink().getWidget());
            } else if (nodeType.equals("VALIDATION") && state.equals("CORRECTION")) {
                System.out.println("    El revisor pidió corregir: " + orEmpty(status.getValidation().getReviewerNote()));
                Map<String, Object> corrected = new HashMap<>();
                for (ControllerWorkflooModelValidationField field : status.getValidation().getFields()) {
                    String label = orEmpty(field.getName()).isEmpty() ? field.getFieldId() : field.getName();
                    corrected.put(field.getFieldId(), ask(label + " (" + field.getMessage() + ")"));
                }
                api.submitWorkflooCorrection(id, corrected).sandbox(sandbox).execute();
            } else if (nodeType.equals("VALIDATION")) {
                System.out.println("    Esperando la revisión interna");
            } else if (nodeType.equals("TIMER") && status.getTimer() != null) {
                System.out.println("    Espera programada hasta " + status.getTimer().getEndWaitDate());
            }

            Thread.sleep(POLL_MS);
        }

        System.out.println("Terminó en " + status.getStatus());
        List<ControllerWorkflooModelNodeResume> nodes = api.getWorkfloo(id).sandbox(sandbox).execute().getNodes();
        if (nodes != null) {
            for (ControllerWorkflooModelNodeResume node : nodes) {
                System.out.println("  - " + node.getName() + " (" + node.getType() + ")");
            }
        }
    }

    /** Arma {campoId: valor} con los campos que pide el formulario. */
    static Map<String, Object> formValues(ControllerWorkflooModelWorkflooStatus status, Answers answers) {
        Map<String, Object> values = new HashMap<>();
        List<String> missing = new ArrayList<>();
        for (ControllerWorkflooDefinitionModelFormFieldSection section : status.getForm().getFormFieldSection()) {
            for (ControllerWorkflooDefinitionModelField field : section.getFields()) {
                if (answers.form.containsKey(field.getId())) {
                    values.put(field.getId(), answers.form.get(field.getId()));
                } else if (Boolean.TRUE.equals(field.getRequired())) {
                    missing.add(field.getId() + " (" + field.getName() + ")");
                }
            }
        }
        if (!missing.isEmpty()) {
            fail("Faltan respuestas para campos obligatorios: " + String.join(", ", missing));
        }
        return values;
    }

    /** Arma {documentoId: base64} con los archivos que pide el paso. */
    static Map<String, Object> documentValues(ControllerWorkflooModelWorkflooStatus status, Answers answers)
            throws Exception {
        Map<String, Object> values = new HashMap<>();
        List<String> missing = new ArrayList<>();
        for (ControllerWorkflooDefinitionModelFileDocument doc : status.getDocument().getDocumentField()) {
            if (doc.getSourcePdfNodeId() != null && !doc.getSourcePdfNodeId().isEmpty()) {
                continue; // lo genera el propio workfloo; no se sube
            }
            String path = answers.documents.get(doc.getId());
            if (path == null) {
                if (Boolean.TRUE.equals(doc.getRequired())) {
                    missing.add(doc.getId() + " (" + doc.getName() + ")");
                }
                continue;
            }
            byte[] content = Files.readAllBytes(answers.base.resolve(path));
            values.put(doc.getId(), Base64.getEncoder().encodeToString(content));
        }
        if (!missing.isEmpty()) {
            fail("Faltan archivos para documentos obligatorios: " + String.join(", ", missing));
        }
        return values;
    }

    /** Pide el código hasta que el proveedor lo acepte o se acaben los intentos. */
    static void validateOtp(WorkflooApi api, String id, ControllerWorkflooModelVerificationStatus verification,
            Boolean sandbox) throws Exception {
        System.out.println("    Código enviado por " + verification.getChannel() + " a " + verification.getMaskedDestination());
        while (true) {
            String token = ask("Código recibido");
            try {
                api.validateWorkflooOtp(id, new ControllerWorkflooModelOtpValidateRequest().token(token)).sandbox(sandbox).execute();
                return;
            } catch (ApiException e) {
                // 400 = código incorrecto con intentos restantes; la ejecución sigue viva.
                if (e.getCode() != 400) {
                    throw e;
                }
                JsonObject detail = GSON.fromJson(e.getResponseBody(), JsonObject.class);
                System.out.println("    " + detail.get("error").getAsString()
                        + " Intentos restantes: " + detail.get("remainingRetries").getAsString());
            }
        }
    }

    static Answers loadAnswers(Path path) throws Exception {
        Answers answers = GSON.fromJson(Files.readString(path), Answers.class);
        answers.base = path.toAbsolutePath().getParent();
        return answers;
    }

    static String ask(String prompt) throws Exception {
        System.out.print("    " + prompt + ": ");
        System.out.flush();
        String line = STDIN.readLine();
        return line == null ? "" : line.trim();
    }

    static String env(String name, String fallback) {
        String value = System.getenv(name);
        if (value != null && !value.isEmpty()) {
            return value;
        }
        if (fallback == null) {
            fail("Falta la variable " + name + ".");
        }
        return fallback;
    }

    static String orEmpty(String s) {
        return s == null ? "" : s;
    }

    static void fail(String message) {
        System.err.println(message);
        System.exit(1);
    }
}
