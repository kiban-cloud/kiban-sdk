# \LinkAPI

All URIs are relative to *https://link.kiban.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ExecuteService**](LinkAPI.md#ExecuteService) | **Post** /api/v3/{service}/{subservice} | Ejecutar un servicio de link
[**GetExecution**](LinkAPI.md#GetExecution) | **Get** /api/v1/{service}/{subservice}/{id} | Detalle de una ejecución
[**GetFile**](LinkAPI.md#GetFile) | **Get** /api/v1/file | Descargar un archivo de una ejecución
[**ListExecutions**](LinkAPI.md#ListExecutions) | **Get** /api/v1/{service}/{subservice} | Historial de ejecuciones de un servicio
[**ListTestCases**](LinkAPI.md#ListTestCases) | **Get** /api/v3/{service}/{subservice}/test_case | Test cases de un servicio



## ExecuteService

> ControllerMicroserviceModelMicroserviceDetailDto ExecuteService(ctx, service, subservice).Body(body).Sandbox(sandbox).TestCase(testCase).TestCaseId(testCaseId).Origin(origin).Execute()

Ejecutar un servicio de link



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/packages/link/go"
)

func main() {
	service := "service_example" // string | Servicio del catálogo (p. ej. curp, sat, imss, bc_pf)
	subservice := "subservice_example" // string | Operación del servicio (p. ej. validate, query)
	body := map[string]interface{}{ ... } // map[string]interface{} | Datos del servicio; cada servicio define sus campos
	sandbox := true // bool | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)
	testCase := "testCase_example" // string | Sandbox: nombre del test case que debe responder (optional)
	testCaseId := "testCaseId_example" // string | Sandbox: id del test case que debe responder (optional)
	origin := "origin_example" // string | Identificador libre del origen de la petición (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LinkAPI.ExecuteService(context.Background(), service, subservice).Body(body).Sandbox(sandbox).TestCase(testCase).TestCaseId(testCaseId).Origin(origin).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LinkAPI.ExecuteService``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ExecuteService`: ControllerMicroserviceModelMicroserviceDetailDto
	fmt.Fprintf(os.Stdout, "Response from `LinkAPI.ExecuteService`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**service** | **string** | Servicio del catálogo (p. ej. curp, sat, imss, bc_pf) | 
**subservice** | **string** | Operación del servicio (p. ej. validate, query) | 

### Other Parameters

Other parameters are passed through a pointer to a apiExecuteServiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **body** | **map[string]interface{}** | Datos del servicio; cada servicio define sus campos | 
 **sandbox** | **bool** | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito | 
 **testCase** | **string** | Sandbox: nombre del test case que debe responder | 
 **testCaseId** | **string** | Sandbox: id del test case que debe responder | 
 **origin** | **string** | Identificador libre del origen de la petición | 

### Return type

[**ControllerMicroserviceModelMicroserviceDetailDto**](ControllerMicroserviceModelMicroserviceDetailDto.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExecution

> ControllerMicroserviceModelMicroserviceDetailDto GetExecution(ctx, service, subservice, id).Sandbox(sandbox).Execute()

Detalle de una ejecución



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/packages/link/go"
)

func main() {
	service := "service_example" // string | Servicio del catálogo
	subservice := "subservice_example" // string | Operación del servicio
	id := "id_example" // string | Id de la ejecución
	sandbox := true // bool | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LinkAPI.GetExecution(context.Background(), service, subservice, id).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LinkAPI.GetExecution``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetExecution`: ControllerMicroserviceModelMicroserviceDetailDto
	fmt.Fprintf(os.Stdout, "Response from `LinkAPI.GetExecution`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**service** | **string** | Servicio del catálogo | 
**subservice** | **string** | Operación del servicio | 
**id** | **string** | Id de la ejecución | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExecutionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **sandbox** | **bool** | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

[**ControllerMicroserviceModelMicroserviceDetailDto**](ControllerMicroserviceModelMicroserviceDetailDto.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFile

> *os.File GetFile(ctx).Path(path).Sandbox(sandbox).Execute()

Descargar un archivo de una ejecución



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/packages/link/go"
)

func main() {
	path := "path_example" // string | Ruta del archivo, tal como viene en el detalle de la ejecución
	sandbox := true // bool | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LinkAPI.GetFile(context.Background()).Path(path).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LinkAPI.GetFile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetFile`: *os.File
	fmt.Fprintf(os.Stdout, "Response from `LinkAPI.GetFile`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string** | Ruta del archivo, tal como viene en el detalle de la ejecución | 
 **sandbox** | **bool** | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

[***os.File**](*os.File.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListExecutions

> ControllerMicroserviceModelExecutionPage ListExecutions(ctx, service, subservice).Page(page).ItemsPerPage(itemsPerPage).Sandbox(sandbox).Execute()

Historial de ejecuciones de un servicio



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/packages/link/go"
)

func main() {
	service := "service_example" // string | Servicio del catálogo
	subservice := "subservice_example" // string | Operación del servicio
	page := int32(56) // int32 | Número de página, empieza en 1
	itemsPerPage := int32(56) // int32 | Resultados por página
	sandbox := true // bool | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LinkAPI.ListExecutions(context.Background(), service, subservice).Page(page).ItemsPerPage(itemsPerPage).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LinkAPI.ListExecutions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListExecutions`: ControllerMicroserviceModelExecutionPage
	fmt.Fprintf(os.Stdout, "Response from `LinkAPI.ListExecutions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**service** | **string** | Servicio del catálogo | 
**subservice** | **string** | Operación del servicio | 

### Other Parameters

Other parameters are passed through a pointer to a apiListExecutionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **page** | **int32** | Número de página, empieza en 1 | 
 **itemsPerPage** | **int32** | Resultados por página | 
 **sandbox** | **bool** | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

[**ControllerMicroserviceModelExecutionPage**](ControllerMicroserviceModelExecutionPage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListTestCases

> []ControllerTestCaseModelTestCaseOutputMany ListTestCases(ctx, service, subservice).Execute()

Test cases de un servicio



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/packages/link/go"
)

func main() {
	service := "service_example" // string | Servicio del catálogo
	subservice := "subservice_example" // string | Operación del servicio

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LinkAPI.ListTestCases(context.Background(), service, subservice).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LinkAPI.ListTestCases``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListTestCases`: []ControllerTestCaseModelTestCaseOutputMany
	fmt.Fprintf(os.Stdout, "Response from `LinkAPI.ListTestCases`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**service** | **string** | Servicio del catálogo | 
**subservice** | **string** | Operación del servicio | 

### Other Parameters

Other parameters are passed through a pointer to a apiListTestCasesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**[]ControllerTestCaseModelTestCaseOutputMany**](ControllerTestCaseModelTestCaseOutputMany.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

