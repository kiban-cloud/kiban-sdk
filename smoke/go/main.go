// Smoke test del SDK de Go: ejecutar → estatus → historial.
//
// El SDK usa siempre producción. Lee el ambiente ya resuelto por
// scripts/resolve-env.sh (host + key + KIBAN_SANDBOX, real por defecto):
//
//	set -a; source ../../.env.local; set +a
//	source ../../scripts/resolve-env.sh          # o KIBAN_SANDBOX=true source …
//	go run .
//
// Variables: KIBAN_HOST, KIBAN_API_KEY, KIBAN_SANDBOX (true/false),
// KIBAN_WORKFLOO_DEFINITION_ID, KIBAN_SCENARIO_ID (opcional).
package main

import (
	"context"
	"fmt"
	"os"
	"strconv"
	"time"

	workfloo "github.com/kiban-cloud/kiban-sdk/workfloo"
)

func main() {
	host := os.Getenv("KIBAN_HOST")
	apiKey := os.Getenv("KIBAN_API_KEY")
	defID := os.Getenv("KIBAN_WORKFLOO_DEFINITION_ID")
	scenario := os.Getenv("KIBAN_SCENARIO_ID")
	sandbox, _ := strconv.ParseBool(os.Getenv("KIBAN_SANDBOX"))

	if host == "" || apiKey == "" || defID == "" {
		fmt.Fprintln(os.Stderr, "Faltan KIBAN_HOST / KIBAN_API_KEY / KIBAN_WORKFLOO_DEFINITION_ID (corré resolve-env.sh).")
		os.Exit(1)
	}

	cfg := workfloo.NewConfiguration()
	cfg.Servers = workfloo.ServerConfigurations{{URL: host}}
	client := workfloo.NewAPIClient(cfg)
	ctx := context.WithValue(context.Background(), workfloo.ContextAPIKeys,
		map[string]workfloo.APIKey{"ApiKeyAuth": {Key: apiKey}})

	fmt.Printf("Ambiente: %s sandbox=%v\n", host, sandbox)

	fmt.Println("1/3 ExecuteWorkfloo …")
	body := workfloo.NewControllerWorkflooModelExecute(defID)
	if scenario != "" {
		body.SetScenarioId(scenario)
	}
	execReq := client.WorkflooAPI.ExecuteWorkfloo(ctx).ControllerWorkflooModelExecute(*body)
	if sandbox {
		execReq = execReq.Sandbox(true)
	}
	created, _, err := execReq.Execute()
	if err != nil {
		fmt.Fprintln(os.Stderr, "execute:", err)
		os.Exit(1)
	}
	id := created.GetId()
	fmt.Printf("    id=%s idUnykoo=%d\n", id, created.GetIdUnykoo())
	if id == "" {
		fmt.Fprintln(os.Stderr, "La ejecución no devolvió id.")
		os.Exit(1)
	}

	time.Sleep(2 * time.Second)

	fmt.Println("2/3 GetWorkflooStatus …")
	statusReq := client.WorkflooAPI.GetWorkflooStatus(ctx, id)
	if sandbox {
		statusReq = statusReq.Sandbox(true)
	}
	status, _, err := statusReq.Execute()
	if err != nil {
		fmt.Fprintln(os.Stderr, "status:", err)
		os.Exit(1)
	}
	fmt.Printf("    status=%s nodo=%q\n", status.GetStatus(), status.GetCurrentNodeName())

	fmt.Println("3/3 ListWorkfloos (v1) …")
	listReq := client.WorkflooAPI.ListWorkfloos(ctx).Page(1).ItemsPerPage(5)
	if sandbox {
		listReq = listReq.Sandbox(true)
	}
	page, _, err := listReq.Execute()
	if err != nil {
		fmt.Fprintln(os.Stderr, "list:", err)
		os.Exit(1)
	}
	fmt.Printf("    items=%d\n", len(page.GetItems()))

	fmt.Println("    ListWorkfloosV2 …")
	v2Req := client.WorkflooAPI.ListWorkfloosV2(ctx).Page(1).ItemsPerPage(5)
	if sandbox {
		v2Req = v2Req.Sandbox(true)
	}
	items, _, err := v2Req.Execute()
	if err != nil {
		fmt.Fprintln(os.Stderr, "v2:", err)
		os.Exit(1)
	}
	fmt.Printf("    v2 devolvió %d items (arreglo plano)\n", len(items))

	fmt.Println("\nSMOKE TEST OK")
}
