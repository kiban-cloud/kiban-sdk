# \WorkflooAPI

All URIs are relative to *https://workfloo.kiban.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ExecuteWorkfloo**](WorkflooAPI.md#ExecuteWorkfloo) | **Post** /api/v1/workfloo | Ejecutar un workfloo
[**GetWorkfloo**](WorkflooAPI.md#GetWorkfloo) | **Get** /api/v1/workfloo/{id} | Detalle de una ejecución
[**GetWorkflooStatus**](WorkflooAPI.md#GetWorkflooStatus) | **Get** /api/v1/workfloo/status/{id} | Estatus de una ejecución
[**ListWorkfloos**](WorkflooAPI.md#ListWorkfloos) | **Get** /api/v1/workfloo | Historial de ejecuciones (v1)
[**ListWorkfloosV2**](WorkflooAPI.md#ListWorkfloosV2) | **Get** /api/v2/workfloo | Historial de ejecuciones (v2)



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

