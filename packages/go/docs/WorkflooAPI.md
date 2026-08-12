# \WorkflooAPI

All URIs are relative to *https://workfloo.kiban.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ExecuteWorkfloo**](WorkflooAPI.md#ExecuteWorkfloo) | **Post** /api/v1/workfloo | Ejecutar un workfloo
[**ExecuteWorkflooDocument**](WorkflooAPI.md#ExecuteWorkflooDocument) | **Post** /api/v1/workfloo/{id}/document | Enviar los documentos de un paso
[**ExecuteWorkflooForm**](WorkflooAPI.md#ExecuteWorkflooForm) | **Post** /api/v1/workfloo/{id}/form | Enviar el formulario de un paso
[**GetWorkfloo**](WorkflooAPI.md#GetWorkfloo) | **Get** /api/v1/workfloo/{id} | Detalle de una ejecución
[**GetWorkflooFile**](WorkflooAPI.md#GetWorkflooFile) | **Get** /api/v1/workfloo/{id}/file | Descargar un archivo de un nodo
[**GetWorkflooStatus**](WorkflooAPI.md#GetWorkflooStatus) | **Get** /api/v1/workfloo/status/{id} | Estatus de una ejecución
[**ListWorkfloos**](WorkflooAPI.md#ListWorkfloos) | **Get** /api/v1/workfloo | Historial de ejecuciones (v1)
[**ListWorkfloosV2**](WorkflooAPI.md#ListWorkfloosV2) | **Get** /api/v2/workfloo | Historial de ejecuciones (v2)
[**ResendWorkflooNip**](WorkflooAPI.md#ResendWorkflooNip) | **Patch** /api/v1/workfloo/{id}/nip/resend | Reenviar el NIP
[**ReviewWorkflooValidation**](WorkflooAPI.md#ReviewWorkflooValidation) | **Post** /api/v1/workfloo/{id}/review | Revisar un paso de validación
[**SendWorkflooNip**](WorkflooAPI.md#SendWorkflooNip) | **Patch** /api/v1/workfloo/{id}/nip/send | Enviar el NIP
[**SubmitWorkflooCorrection**](WorkflooAPI.md#SubmitWorkflooCorrection) | **Post** /api/v1/workfloo/{id}/correction | Enviar la corrección de un paso de validación
[**ValidateWorkflooNip**](WorkflooAPI.md#ValidateWorkflooNip) | **Patch** /api/v1/workfloo/{id}/nip/validate | Validar el NIP



## ExecuteWorkfloo

> ControllerWorkflooModelExecuteResponse ExecuteWorkfloo(ctx).ControllerWorkflooModelExecute(controllerWorkflooModelExecute).Sandbox(sandbox).Execute()

Ejecutar un workfloo



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/workfloo"
)

func main() {
	controllerWorkflooModelExecute := *openapiclient.NewControllerWorkflooModelExecute("IdWorkflooDefinition_example") // ControllerWorkflooModelExecute | Definición a ejecutar y datos iniciales
	sandbox := true // bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkflooAPI.ExecuteWorkfloo(context.Background()).ControllerWorkflooModelExecute(controllerWorkflooModelExecute).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflooAPI.ExecuteWorkfloo``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ExecuteWorkfloo`: ControllerWorkflooModelExecuteResponse
	fmt.Fprintf(os.Stdout, "Response from `WorkflooAPI.ExecuteWorkfloo`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiExecuteWorkflooRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **controllerWorkflooModelExecute** | [**ControllerWorkflooModelExecute**](ControllerWorkflooModelExecute.md) | Definición a ejecutar y datos iniciales | 
 **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

[**ControllerWorkflooModelExecuteResponse**](ControllerWorkflooModelExecuteResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExecuteWorkflooDocument

> ExecuteWorkflooDocument(ctx, id).Body(body).Sandbox(sandbox).Execute()

Enviar los documentos de un paso



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/workfloo"
)

func main() {
	id := "id_example" // string | Id de la ejecución
	body := map[string]interface{}{ ... } // map[string]interface{} | Documentos: {documentoId: base64}
	sandbox := true // bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WorkflooAPI.ExecuteWorkflooDocument(context.Background(), id).Body(body).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflooAPI.ExecuteWorkflooDocument``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id de la ejecución | 

### Other Parameters

Other parameters are passed through a pointer to a apiExecuteWorkflooDocumentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** | Documentos: {documentoId: base64} | 
 **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

 (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExecuteWorkflooForm

> ExecuteWorkflooForm(ctx, id).Body(body).Sandbox(sandbox).Execute()

Enviar el formulario de un paso



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/workfloo"
)

func main() {
	id := "id_example" // string | Id de la ejecución
	body := map[string]interface{}{ ... } // map[string]interface{} | Campos del formulario: {campoId: valor}
	sandbox := true // bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WorkflooAPI.ExecuteWorkflooForm(context.Background(), id).Body(body).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflooAPI.ExecuteWorkflooForm``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id de la ejecución | 

### Other Parameters

Other parameters are passed through a pointer to a apiExecuteWorkflooFormRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** | Campos del formulario: {campoId: valor} | 
 **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

 (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetWorkfloo

> ControllerWorkflooModelWorkflooResume GetWorkfloo(ctx, id).Sandbox(sandbox).Execute()

Detalle de una ejecución



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/workfloo"
)

func main() {
	id := "id_example" // string | Id de la ejecución
	sandbox := true // bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkflooAPI.GetWorkfloo(context.Background(), id).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflooAPI.GetWorkfloo``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetWorkfloo`: ControllerWorkflooModelWorkflooResume
	fmt.Fprintf(os.Stdout, "Response from `WorkflooAPI.GetWorkfloo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id de la ejecución | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkflooRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

[**ControllerWorkflooModelWorkflooResume**](ControllerWorkflooModelWorkflooResume.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetWorkflooFile

> ControllerWorkflooModelFileResponse GetWorkflooFile(ctx, id).NodeId(nodeId).Name(name).Sandbox(sandbox).Execute()

Descargar un archivo de un nodo



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/workfloo"
)

func main() {
	id := "id_example" // string | Id de la ejecución
	nodeId := "nodeId_example" // string | Id del nodo que contiene el archivo
	name := "name_example" // string | Nombre del archivo
	sandbox := true // bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkflooAPI.GetWorkflooFile(context.Background(), id).NodeId(nodeId).Name(name).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflooAPI.GetWorkflooFile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetWorkflooFile`: ControllerWorkflooModelFileResponse
	fmt.Fprintf(os.Stdout, "Response from `WorkflooAPI.GetWorkflooFile`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id de la ejecución | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkflooFileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **nodeId** | **string** | Id del nodo que contiene el archivo | 
 **name** | **string** | Nombre del archivo | 
 **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

[**ControllerWorkflooModelFileResponse**](ControllerWorkflooModelFileResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetWorkflooStatus

> ControllerWorkflooModelWorkflooStatus GetWorkflooStatus(ctx, id).Sandbox(sandbox).Execute()

Estatus de una ejecución



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/workfloo"
)

func main() {
	id := "id_example" // string | Id de la ejecución
	sandbox := true // bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkflooAPI.GetWorkflooStatus(context.Background(), id).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflooAPI.GetWorkflooStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetWorkflooStatus`: ControllerWorkflooModelWorkflooStatus
	fmt.Fprintf(os.Stdout, "Response from `WorkflooAPI.GetWorkflooStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id de la ejecución | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkflooStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

[**ControllerWorkflooModelWorkflooStatus**](ControllerWorkflooModelWorkflooStatus.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListWorkfloos

> ControllerWorkflooModelWorkflooPage ListWorkfloos(ctx).Page(page).ItemsPerPage(itemsPerPage).Status(status).From(from).To(to).Sandbox(sandbox).Execute()

Historial de ejecuciones (v1)



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/workfloo"
)

func main() {
	page := int32(56) // int32 | Número de página, empieza en 1
	itemsPerPage := int32(56) // int32 | Cantidad de resultados por página
	status := "status_example" // string | Filtra por estado de la ejecución (optional)
	from := "from_example" // string | Fecha inicial del rango (RFC3339) (optional)
	to := "to_example" // string | Fecha final del rango (RFC3339) (optional)
	sandbox := true // bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkflooAPI.ListWorkfloos(context.Background()).Page(page).ItemsPerPage(itemsPerPage).Status(status).From(from).To(to).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflooAPI.ListWorkfloos``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListWorkfloos`: ControllerWorkflooModelWorkflooPage
	fmt.Fprintf(os.Stdout, "Response from `WorkflooAPI.ListWorkfloos`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListWorkfloosRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int32** | Número de página, empieza en 1 | 
 **itemsPerPage** | **int32** | Cantidad de resultados por página | 
 **status** | **string** | Filtra por estado de la ejecución | 
 **from** | **string** | Fecha inicial del rango (RFC3339) | 
 **to** | **string** | Fecha final del rango (RFC3339) | 
 **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

[**ControllerWorkflooModelWorkflooPage**](ControllerWorkflooModelWorkflooPage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListWorkfloosV2

> []ControllerWorkflooModelWorkfloo ListWorkfloosV2(ctx).Page(page).ItemsPerPage(itemsPerPage).Status(status).From(from).To(to).Format(format).Sandbox(sandbox).Execute()

Historial de ejecuciones (v2)



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/workfloo"
)

func main() {
	page := int32(56) // int32 | Número de página, empieza en 1 (optional)
	itemsPerPage := int32(56) // int32 | Cantidad de resultados por página (optional)
	status := "status_example" // string | Filtra por estado de la ejecución (optional)
	from := "from_example" // string | Fecha inicial del rango (RFC3339) (optional)
	to := "to_example" // string | Fecha final del rango (RFC3339) (optional)
	format := "format_example" // string | Formato de la respuesta (optional)
	sandbox := true // bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkflooAPI.ListWorkfloosV2(context.Background()).Page(page).ItemsPerPage(itemsPerPage).Status(status).From(from).To(to).Format(format).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflooAPI.ListWorkfloosV2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListWorkfloosV2`: []ControllerWorkflooModelWorkfloo
	fmt.Fprintf(os.Stdout, "Response from `WorkflooAPI.ListWorkfloosV2`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListWorkfloosV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int32** | Número de página, empieza en 1 | 
 **itemsPerPage** | **int32** | Cantidad de resultados por página | 
 **status** | **string** | Filtra por estado de la ejecución | 
 **from** | **string** | Fecha inicial del rango (RFC3339) | 
 **to** | **string** | Fecha final del rango (RFC3339) | 
 **format** | **string** | Formato de la respuesta | 
 **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

[**[]ControllerWorkflooModelWorkfloo**](ControllerWorkflooModelWorkfloo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ResendWorkflooNip

> ControllerWorkflooModelNipResendStatus ResendWorkflooNip(ctx, id).Sandbox(sandbox).ControllerWorkflooModelNipResendRequest(controllerWorkflooModelNipResendRequest).Execute()

Reenviar el NIP



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/workfloo"
)

func main() {
	id := "id_example" // string | Id de la ejecución
	sandbox := true // bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)
	controllerWorkflooModelNipResendRequest := *openapiclient.NewControllerWorkflooModelNipResendRequest() // ControllerWorkflooModelNipResendRequest | Teléfono al que reenviar (opcional) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkflooAPI.ResendWorkflooNip(context.Background(), id).Sandbox(sandbox).ControllerWorkflooModelNipResendRequest(controllerWorkflooModelNipResendRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflooAPI.ResendWorkflooNip``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ResendWorkflooNip`: ControllerWorkflooModelNipResendStatus
	fmt.Fprintf(os.Stdout, "Response from `WorkflooAPI.ResendWorkflooNip`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id de la ejecución | 

### Other Parameters

Other parameters are passed through a pointer to a apiResendWorkflooNipRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | 
 **controllerWorkflooModelNipResendRequest** | [**ControllerWorkflooModelNipResendRequest**](ControllerWorkflooModelNipResendRequest.md) | Teléfono al que reenviar (opcional) | 

### Return type

[**ControllerWorkflooModelNipResendStatus**](ControllerWorkflooModelNipResendStatus.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReviewWorkflooValidation

> ReviewWorkflooValidation(ctx, id).ControllerWorkflooModelReviewRequest(controllerWorkflooModelReviewRequest).Sandbox(sandbox).Execute()

Revisar un paso de validación



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/workfloo"
)

func main() {
	id := "id_example" // string | Id de la ejecución
	controllerWorkflooModelReviewRequest := *openapiclient.NewControllerWorkflooModelReviewRequest() // ControllerWorkflooModelReviewRequest | Decisión del revisor
	sandbox := true // bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WorkflooAPI.ReviewWorkflooValidation(context.Background(), id).ControllerWorkflooModelReviewRequest(controllerWorkflooModelReviewRequest).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflooAPI.ReviewWorkflooValidation``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id de la ejecución | 

### Other Parameters

Other parameters are passed through a pointer to a apiReviewWorkflooValidationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **controllerWorkflooModelReviewRequest** | [**ControllerWorkflooModelReviewRequest**](ControllerWorkflooModelReviewRequest.md) | Decisión del revisor | 
 **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

 (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SendWorkflooNip

> SendWorkflooNip(ctx, id).Sandbox(sandbox).ControllerWorkflooModelNipSendRequest(controllerWorkflooModelNipSendRequest).Execute()

Enviar el NIP



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/workfloo"
)

func main() {
	id := "id_example" // string | Id de la ejecución
	sandbox := true // bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)
	controllerWorkflooModelNipSendRequest := *openapiclient.NewControllerWorkflooModelNipSendRequest() // ControllerWorkflooModelNipSendRequest | Teléfono al que enviar el NIP (opcional) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WorkflooAPI.SendWorkflooNip(context.Background(), id).Sandbox(sandbox).ControllerWorkflooModelNipSendRequest(controllerWorkflooModelNipSendRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflooAPI.SendWorkflooNip``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id de la ejecución | 

### Other Parameters

Other parameters are passed through a pointer to a apiSendWorkflooNipRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | 
 **controllerWorkflooModelNipSendRequest** | [**ControllerWorkflooModelNipSendRequest**](ControllerWorkflooModelNipSendRequest.md) | Teléfono al que enviar el NIP (opcional) | 

### Return type

 (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubmitWorkflooCorrection

> SubmitWorkflooCorrection(ctx, id).Body(body).Sandbox(sandbox).Execute()

Enviar la corrección de un paso de validación



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/workfloo"
)

func main() {
	id := "id_example" // string | Id de la ejecución
	body := map[string]interface{}{ ... } // map[string]interface{} | Campos corregidos: {campoId: valor}
	sandbox := true // bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WorkflooAPI.SubmitWorkflooCorrection(context.Background(), id).Body(body).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflooAPI.SubmitWorkflooCorrection``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id de la ejecución | 

### Other Parameters

Other parameters are passed through a pointer to a apiSubmitWorkflooCorrectionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** | Campos corregidos: {campoId: valor} | 
 **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

 (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ValidateWorkflooNip

> ControllerWorkflooModelNipValidateResponse ValidateWorkflooNip(ctx, id).ControllerWorkflooModelNipValidateRequest(controllerWorkflooModelNipValidateRequest).Sandbox(sandbox).Execute()

Validar el NIP



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/workfloo"
)

func main() {
	id := "id_example" // string | Id de la ejecución
	controllerWorkflooModelNipValidateRequest := *openapiclient.NewControllerWorkflooModelNipValidateRequest("Nip_example") // ControllerWorkflooModelNipValidateRequest | El NIP a validar
	sandbox := true // bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkflooAPI.ValidateWorkflooNip(context.Background(), id).ControllerWorkflooModelNipValidateRequest(controllerWorkflooModelNipValidateRequest).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkflooAPI.ValidateWorkflooNip``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ValidateWorkflooNip`: ControllerWorkflooModelNipValidateResponse
	fmt.Fprintf(os.Stdout, "Response from `WorkflooAPI.ValidateWorkflooNip`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id de la ejecución | 

### Other Parameters

Other parameters are passed through a pointer to a apiValidateWorkflooNipRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **controllerWorkflooModelNipValidateRequest** | [**ControllerWorkflooModelNipValidateRequest**](ControllerWorkflooModelNipValidateRequest.md) | El NIP a validar | 
 **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

[**ControllerWorkflooModelNipValidateResponse**](ControllerWorkflooModelNipValidateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

