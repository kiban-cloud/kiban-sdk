// Smoke test del SDK de Java: ejecutar → estatus → historial.
//
// El SDK usa siempre producción. Lee el ambiente ya resuelto por
// scripts/resolve-env.sh (host + key + KIBAN_SANDBOX, real por defecto). Antes,
// instalar el SDK en el repo local Maven:
//
//   cd ../../packages/java && mvn -q install -DskipTests && cd -
//   set -a; source ../../.env.local; set +a
//   source ../../scripts/resolve-env.sh          # o KIBAN_SANDBOX=true source …
//   mvn -q compile exec:java
//
// Variables: KIBAN_HOST, KIBAN_API_KEY, KIBAN_SANDBOX, KIBAN_WORKFLOO_DEFINITION_ID,
// KIBAN_SCENARIO_ID (opcional).
import java.util.List;

import kiban.sdk.workfloo.ApiClient;
import kiban.sdk.workfloo.Configuration;
import kiban.sdk.workfloo.auth.ApiKeyAuth;
import kiban.sdk.workfloo.api.WorkflooApi;
import kiban.sdk.workfloo.model.ControllerWorkflooModelExecute;
import kiban.sdk.workfloo.model.ControllerWorkflooModelExecuteResponse;
import kiban.sdk.workfloo.model.ControllerWorkflooModelWorkfloo;
import kiban.sdk.workfloo.model.ControllerWorkflooModelWorkflooPage;
import kiban.sdk.workfloo.model.ControllerWorkflooModelWorkflooStatus;

public class Smoke {
    public static void main(String[] args) throws Exception {
        String host = System.getenv("KIBAN_HOST");
        String apiKey = System.getenv("KIBAN_API_KEY");
        String defId = System.getenv("KIBAN_WORKFLOO_DEFINITION_ID");
        String scenario = System.getenv("KIBAN_SCENARIO_ID");
        boolean sandbox = "true".equals(System.getenv("KIBAN_SANDBOX"));

        if (host == null || apiKey == null || defId == null) {
            System.err.println("Faltan KIBAN_HOST / KIBAN_API_KEY / KIBAN_WORKFLOO_DEFINITION_ID (corré resolve-env.sh).");
            System.exit(1);
        }

        ApiClient client = Configuration.getDefaultApiClient();
        client.setBasePath(host);
        ((ApiKeyAuth) client.getAuthentication("ApiKeyAuth")).setApiKey(apiKey);
        WorkflooApi api = new WorkflooApi(client);

        System.out.println("Ambiente: " + host + " sandbox=" + sandbox);

        System.out.println("1/3 executeWorkfloo …");
        ControllerWorkflooModelExecute body = new ControllerWorkflooModelExecute().idWorkflooDefinition(defId);
        if (scenario != null && !scenario.isEmpty()) {
            body.scenarioId(scenario);
        }
        ControllerWorkflooModelExecuteResponse created = api.executeWorkfloo(body, sandbox);
        String id = created.getId();
        System.out.println("    id=" + id + " idUnykoo=" + created.getIdUnykoo());
        if (id == null || id.isEmpty()) {
            System.err.println("La ejecución no devolvió id.");
            System.exit(1);
        }

        Thread.sleep(2000);

        System.out.println("2/3 getWorkflooStatus …");
        ControllerWorkflooModelWorkflooStatus status = api.getWorkflooStatus(id, sandbox);
        System.out.println("    status=" + status.getStatus() + " nodo=" + status.getCurrentNodeName());

        System.out.println("3/3 listWorkfloos (v1) …");
        ControllerWorkflooModelWorkflooPage page = api.listWorkfloos(1, 5, null, null, null, sandbox);
        System.out.println("    items=" + (page.getItems() == null ? 0 : page.getItems().size()));

        System.out.println("    listWorkfloosV2 …");
        List<ControllerWorkflooModelWorkfloo> items = api.listWorkfloosV2(1, 5, null, null, null, null, sandbox);
        System.out.println("    v2 devolvió " + (items == null ? 0 : items.size()) + " items (arreglo plano)");

        System.out.println("\nSMOKE TEST OK");
    }
}
