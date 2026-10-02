// Flujo completo de un integrador con el SDK de Go.
//
// Ejecuta un workfloo y lo conduce hasta que termina: consulta el estatus, ve
// en qué paso está parado y responde lo que ese paso pide (formulario,
// documentos, NIP, código de verificación o corrección). Al final imprime el
// detalle.
//
//	export KIBAN_API_KEY=...
//	export KIBAN_WORKFLOO_DEFINITION_ID=...
//	cd examples/go && go run .
//
// Variables opcionales: KIBAN_ANSWERS (default ../answers.example.json),
// KIBAN_HOST (default https://workfloo.kiban.com), KIBAN_SANDBOX=true y
// KIBAN_SCENARIO_ID (obligatorio en sandbox si la definición tiene conectores).
package main

import (
	"bufio"
	"context"
	"encoding/base64"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	workfloo "github.com/kiban-cloud/kiban-sdk/packages/go"
)

const pollInterval = 3 * time.Second

var finished = map[string]bool{"SUCCESS": true, "ERROR": true, "ABANDONED": true}
var nipPhases = map[string]bool{"CREATE_ACCOUNT": true, "VALIDATE": true, "VALIDATE_2": true}

type answers struct {
	Form      map[string]interface{} `json:"form"`
	Documents map[string]string      `json:"documents"`
	base      string
}

var stdin = bufio.NewReader(os.Stdin)

func ask(prompt string) string {
	fmt.Printf("    %s: ", prompt)
	line, _ := stdin.ReadString('\n')
	return strings.TrimSpace(line)
}

func env(name, fallback string) string {
	if v := os.Getenv(name); v != "" {
		return v
	}
	if fallback == "" {
		log.Fatalf("Falta la variable %s.", name)
	}
	return fallback
}

func loadAnswers(path string) answers {
	raw, err := os.ReadFile(path)
	if err != nil {
		log.Fatal(err)
	}
	var a answers
	if err := json.Unmarshal(raw, &a); err != nil {
		log.Fatal(err)
	}
	a.base = filepath.Dir(path)
	return a
}

// formValues arma {campoId: valor} con los campos que pide el formulario.
func formValues(status *workfloo.ControllerWorkflooModelWorkflooStatus, a answers) map[string]interface{} {
	values := map[string]interface{}{}
	var missing []string
	form := status.GetForm()
	for _, section := range form.GetFormFieldSection() {
		for _, field := range section.GetFields() {
			if v, ok := a.Form[field.GetId()]; ok {
				values[field.GetId()] = v
			} else if field.GetRequired() {
				missing = append(missing, fmt.Sprintf("%s (%s)", field.GetId(), field.GetName()))
			}
		}
	}
	if len(missing) > 0 {
		log.Fatalf("Faltan respuestas para campos obligatorios: %s", strings.Join(missing, ", "))
	}
	return values
}

// documentValues arma {documentoId: base64} con los archivos que pide el paso.
func documentValues(status *workfloo.ControllerWorkflooModelWorkflooStatus, a answers) map[string]interface{} {
	values := map[string]interface{}{}
	var missing []string
	document := status.GetDocument()
	for _, doc := range document.GetDocumentField() {
		if doc.GetSourcePdfNodeId() != "" {
			continue // lo genera el propio workfloo; no se sube
		}
		path, ok := a.Documents[doc.GetId()]
		if !ok {
			if doc.GetRequired() {
				missing = append(missing, fmt.Sprintf("%s (%s)", doc.GetId(), doc.GetName()))
			}
			continue
		}
		content, err := os.ReadFile(filepath.Join(a.base, path))
		if err != nil {
			log.Fatal(err)
		}
		values[doc.GetId()] = base64.StdEncoding.EncodeToString(content)
	}
	if len(missing) > 0 {
		log.Fatalf("Faltan archivos para documentos obligatorios: %s", strings.Join(missing, ", "))
	}
	return values
}

// validateOtp pide el código hasta que el proveedor lo acepte o se acaben los
// intentos.
func validateOtp(ctx context.Context, api *workfloo.WorkflooAPIService, id string,
	verification workfloo.ControllerWorkflooModelVerificationStatus, sandbox bool) {

	fmt.Printf("    Código enviado por %s a %s\n", verification.GetChannel(), verification.GetMaskedDestination())
	for {
		token := ask("Código recibido")
		resp, err := api.ValidateWorkflooOtp(ctx, id).
			ControllerWorkflooModelOtpValidateRequest(*workfloo.NewControllerWorkflooModelOtpValidateRequest(token)).
			Sandbox(sandbox).Execute()
		if err == nil {
			return
		}
		// 400 = código incorrecto con intentos restantes; la ejecución sigue viva.
		var apiErr *workfloo.GenericOpenAPIError
		if resp == nil || resp.StatusCode != http.StatusBadRequest || !errors.As(err, &apiErr) {
			log.Fatalf("otp/validate: %v", err)
		}
		var detail map[string]string
		_ = json.Unmarshal(apiErr.Body(), &detail)
		fmt.Printf("    %s Intentos restantes: %s\n", detail["error"], detail["remainingRetries"])
	}
}

func check(what string, err error) {
	if err != nil {
		var apiErr *workfloo.GenericOpenAPIError
		if errors.As(err, &apiErr) {
			log.Fatalf("%s: %v %s", what, err, apiErr.Body())
		}
		log.Fatalf("%s: %v", what, err)
	}
}

func main() {
	host := env("KIBAN_HOST", "https://workfloo.kiban.com")
	sandbox := os.Getenv("KIBAN_SANDBOX") == "true"
	definitionID := env("KIBAN_WORKFLOO_DEFINITION_ID", "")
	a := loadAnswers(env("KIBAN_ANSWERS", "../answers.example.json"))

	cfg := workfloo.NewConfiguration()
	cfg.Servers = workfloo.ServerConfigurations{{URL: host}}
	api := workfloo.NewAPIClient(cfg).WorkflooAPI
	ctx := context.WithValue(context.Background(), workfloo.ContextAPIKeys,
		map[string]workfloo.APIKey{"ApiKeyAuth": {Key: env("KIBAN_API_KEY", "")}})

	body := workfloo.NewControllerWorkflooModelExecute(definitionID)
	if scenario := os.Getenv("KIBAN_SCENARIO_ID"); scenario != "" {
		body.SetScenarioId(scenario)
	}
	created, _, err := api.ExecuteWorkfloo(ctx).ControllerWorkflooModelExecute(*body).Sandbox(sandbox).Execute()
	check("execute", err)
	id := created.GetId()
	fmt.Printf("Ejecución %s\n", id)

	// Cada paso estacionado se atiende una vez; si el motor pasa por otro paso
	// y regresa, se vuelve a atender.
	lastStep := ""
	var status *workfloo.ControllerWorkflooModelWorkflooStatus
	for {
		status, _, err = api.GetWorkflooStatus(ctx, id).Sandbox(sandbox).Execute()
		check("status", err)
		if finished[status.GetStatus()] {
			break
		}

		nodeType := status.GetCurrentNodeType()
		if nodeType == "" || strings.HasSuffix(nodeType, "_PROGRESS") || strings.HasSuffix(nodeType, "_PROCESSING") {
			time.Sleep(pollInterval) // el motor está trabajando
			continue
		}

		link := status.GetLink()
		validation := status.GetValidation()
		phase, state := link.GetPhase(), validation.GetState()
		step := strings.Join([]string{status.GetCurrentNodeId(), nodeType, phase, state}, ":")
		if step == lastStep {
			time.Sleep(pollInterval)
			continue
		}
		lastStep = step
		fmt.Printf("Paso: %s (%s)\n", status.GetCurrentNodeName(), nodeType)

		switch {
		case nodeType == "FORM":
			_, err = api.ExecuteWorkflooForm(ctx, id).Body(formValues(status, a)).Sandbox(sandbox).Execute()
			check("form", err)

		case nodeType == "DOCUMENT":
			_, err = api.ExecuteWorkflooDocument(ctx, id).Body(documentValues(status, a)).Sandbox(sandbox).Execute()
			check("document", err)

		// El código de un proveedor externo se reconoce por `verification`, que
		// va antes que la fase: también se estaciona en VALIDATE.
		case nodeType == "LINK" && status.HasVerification():
			validateOtp(ctx, api, id, status.GetVerification(), sandbox)

		case nodeType == "LINK" && phase == "CREATE_ACCOUNT":
			_, err = api.SendWorkflooNip(ctx, id).Sandbox(sandbox).Execute()
			check("nip/send", err)
			fmt.Println("    NIP enviado")

		case nodeType == "LINK" && nipPhases[phase]:
			nip := ask("NIP recibido")
			result, _, err := api.ValidateWorkflooNip(ctx, id).
				ControllerWorkflooModelNipValidateRequest(*workfloo.NewControllerWorkflooModelNipValidateRequest(nip)).
				Sandbox(sandbox).Execute()
			check("nip/validate", err)
			fmt.Printf("    Fase: %s\n", result.GetPhase())

		case nodeType == "LINK" && link.HasWidget():
			fmt.Printf("    La persona debe completar el widget: %v\n", link.GetWidget())

		case nodeType == "VALIDATION" && state == "CORRECTION":
			fmt.Printf("    El revisor pidió corregir: %s\n", validation.GetReviewerNote())
			corrected := map[string]interface{}{}
			for _, field := range validation.GetFields() {
				label := field.GetName()
				if label == "" {
					label = field.GetFieldId()
				}
				corrected[field.GetFieldId()] = ask(fmt.Sprintf("%s (%s)", label, field.GetMessage()))
			}
			_, err = api.SubmitWorkflooCorrection(ctx, id).Body(corrected).Sandbox(sandbox).Execute()
			check("correction", err)

		case nodeType == "VALIDATION":
			fmt.Println("    Esperando la revisión interna")

		case nodeType == "TIMER":
			timer := status.GetTimer()
			fmt.Printf("    Espera programada hasta %s\n", timer.GetEndWaitDate())
		}

		time.Sleep(pollInterval)
	}

	fmt.Printf("Terminó en %s\n", status.GetStatus())
	detail, _, err := api.GetWorkfloo(ctx, id).Sandbox(sandbox).Execute()
	check("detalle", err)
	for _, node := range detail.GetNodes() {
		fmt.Printf("  - %s (%s)\n", node.GetName(), node.GetType())
	}
}
