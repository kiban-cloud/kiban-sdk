# \LinkAPI

All URIs are relative to *https://link.kiban.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiV1FileGet**](LinkAPI.md#ApiV1FileGet) | **Get** /api/v1/file | Descargar un archivo de una ejecución
[**ApiVversionServiceSubserviceGet**](LinkAPI.md#ApiVversionServiceSubserviceGet) | **Get** /api/v{version}/{service}/{subservice} | Historial de ejecuciones de un servicio
[**ApiVversionServiceSubserviceIdGet**](LinkAPI.md#ApiVversionServiceSubserviceIdGet) | **Get** /api/v{version}/{service}/{subservice}/{id} | Detalle de una ejecución
[**ApiVversionServiceSubservicePost**](LinkAPI.md#ApiVversionServiceSubservicePost) | **Post** /api/v{version}/{service}/{subservice} | Ejecutar un servicio de Link
[**ApiVversionServiceSubserviceTestCaseGet**](LinkAPI.md#ApiVversionServiceSubserviceTestCaseGet) | **Get** /api/v{version}/{service}/{subservice}/test_case | Test cases de un servicio (sandbox)
[**ApiVversionServiceSubserviceVaultPost**](LinkAPI.md#ApiVversionServiceSubserviceVaultPost) | **Post** /api/v{version}/{service}/{subservice}/vault | Validar un vault



## ApiV1FileGet

> *os.File ApiV1FileGet(ctx).Path(path).Execute()

Descargar un archivo de una ejecución



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/link"
)

func main() {
	path := "path_example" // string | Ruta del archivo, tal como viene en el detalle de la ejecución

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LinkAPI.ApiV1FileGet(context.Background()).Path(path).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LinkAPI.ApiV1FileGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiV1FileGet`: *os.File
	fmt.Fprintf(os.Stdout, "Response from `LinkAPI.ApiV1FileGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV1FileGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string** | Ruta del archivo, tal como viene en el detalle de la ejecución | 

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


## ApiVversionServiceSubserviceGet

> ControllerMicroserviceModelLinkExecutionPage ApiVversionServiceSubserviceGet(ctx, version, service, subservice).Page(page).ItemsPerPage(itemsPerPage).Execute()

Historial de ejecuciones de un servicio



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/link"
)

func main() {
	version := "version_example" // string | Versión de la API (por ejemplo 1 o 2)
	service := "service_example" // string | Servicio del catálogo Link
	subservice := "subservice_example" // string | Operación del servicio
	page := int32(56) // int32 | Número de página, empieza en 1
	itemsPerPage := int32(56) // int32 | Cantidad de resultados por página

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LinkAPI.ApiVversionServiceSubserviceGet(context.Background(), version, service, subservice).Page(page).ItemsPerPage(itemsPerPage).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LinkAPI.ApiVversionServiceSubserviceGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiVversionServiceSubserviceGet`: ControllerMicroserviceModelLinkExecutionPage
	fmt.Fprintf(os.Stdout, "Response from `LinkAPI.ApiVversionServiceSubserviceGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**version** | **string** | Versión de la API (por ejemplo 1 o 2) | 
**service** | **string** | Servicio del catálogo Link | 
**subservice** | **string** | Operación del servicio | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiVversionServiceSubserviceGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **page** | **int32** | Número de página, empieza en 1 | 
 **itemsPerPage** | **int32** | Cantidad de resultados por página | 

### Return type

[**ControllerMicroserviceModelLinkExecutionPage**](ControllerMicroserviceModelLinkExecutionPage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiVversionServiceSubserviceIdGet

> ControllerMicroserviceModelMicroserviceDetailDto ApiVversionServiceSubserviceIdGet(ctx, version, service, subservice, id).Execute()

Detalle de una ejecución



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/link"
)

func main() {
	version := "version_example" // string | Versión de la API (por ejemplo 1 o 2)
	service := "service_example" // string | Servicio del catálogo Link
	subservice := "subservice_example" // string | Operación del servicio
	id := "id_example" // string | Id de la ejecución

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LinkAPI.ApiVversionServiceSubserviceIdGet(context.Background(), version, service, subservice, id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LinkAPI.ApiVversionServiceSubserviceIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiVversionServiceSubserviceIdGet`: ControllerMicroserviceModelMicroserviceDetailDto
	fmt.Fprintf(os.Stdout, "Response from `LinkAPI.ApiVversionServiceSubserviceIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**version** | **string** | Versión de la API (por ejemplo 1 o 2) | 
**service** | **string** | Servicio del catálogo Link | 
**subservice** | **string** | Operación del servicio | 
**id** | **string** | Id de la ejecución | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiVversionServiceSubserviceIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------





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


## ApiVversionServiceSubservicePost

> ControllerMicroserviceModelMicroserviceDetailDto ApiVversionServiceSubservicePost(ctx, version, service, subservice).Body(body).Origin(origin).Mock(mock).Execute()

Ejecutar un servicio de Link



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/link"
)

func main() {
	version := "version_example" // string | Versión de la API (por ejemplo 1 o 2)
	service := "service_example" // string | Servicio del catálogo Link (por ejemplo curp, sat, imss, nip, sms)
	subservice := "subservice_example" // string | Operación del servicio (por ejemplo validate, send, pf_data_from_rfc)
	body := map[string]interface{}{ ... } // map[string]interface{} | Cuerpo específico del servicio. Sus campos varían por service/subservice
	origin := "origin_example" // string | Identificador libre del origen de la petición, para atribución (optional)
	mock := true // bool | Si es true no llama al proveedor real y devuelve una respuesta mock (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LinkAPI.ApiVversionServiceSubservicePost(context.Background(), version, service, subservice).Body(body).Origin(origin).Mock(mock).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LinkAPI.ApiVversionServiceSubservicePost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiVversionServiceSubservicePost`: ControllerMicroserviceModelMicroserviceDetailDto
	fmt.Fprintf(os.Stdout, "Response from `LinkAPI.ApiVversionServiceSubservicePost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**version** | **string** | Versión de la API (por ejemplo 1 o 2) | 
**service** | **string** | Servicio del catálogo Link (por ejemplo curp, sat, imss, nip, sms) | 
**subservice** | **string** | Operación del servicio (por ejemplo validate, send, pf_data_from_rfc) | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiVversionServiceSubservicePostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **body** | **map[string]interface{}** | Cuerpo específico del servicio. Sus campos varían por service/subservice | 
 **origin** | **string** | Identificador libre del origen de la petición, para atribución | 
 **mock** | **bool** | Si es true no llama al proveedor real y devuelve una respuesta mock | 

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


## ApiVversionServiceSubserviceTestCaseGet

> []ControllerTestCaseModelTestCaseOutputMany ApiVversionServiceSubserviceTestCaseGet(ctx, version, service, subservice).Execute()

Test cases de un servicio (sandbox)



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/link"
)

func main() {
	version := "version_example" // string | Versión de la API (por ejemplo 1 o 2)
	service := "service_example" // string | Servicio del catálogo Link
	subservice := "subservice_example" // string | Operación del servicio

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LinkAPI.ApiVversionServiceSubserviceTestCaseGet(context.Background(), version, service, subservice).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LinkAPI.ApiVversionServiceSubserviceTestCaseGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiVversionServiceSubserviceTestCaseGet`: []ControllerTestCaseModelTestCaseOutputMany
	fmt.Fprintf(os.Stdout, "Response from `LinkAPI.ApiVversionServiceSubserviceTestCaseGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**version** | **string** | Versión de la API (por ejemplo 1 o 2) | 
**service** | **string** | Servicio del catálogo Link | 
**subservice** | **string** | Operación del servicio | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiVversionServiceSubserviceTestCaseGetRequest struct via the builder pattern


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


## ApiVversionServiceSubserviceVaultPost

> map[string]string ApiVversionServiceSubserviceVaultPost(ctx, version, service, subservice).ControllerMicroserviceModelVaultNameDto(controllerMicroserviceModelVaultNameDto).Execute()

Validar un vault



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/kiban-cloud/kiban-sdk/link"
)

func main() {
	version := "version_example" // string | Versión de la API (por ejemplo 1 o 2)
	service := "service_example" // string | Servicio del catálogo Link
	subservice := "subservice_example" // string | Operación del servicio
	controllerMicroserviceModelVaultNameDto := *openapiclient.NewControllerMicroserviceModelVaultNameDto() // ControllerMicroserviceModelVaultNameDto | Nombre del vault a validar

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LinkAPI.ApiVversionServiceSubserviceVaultPost(context.Background(), version, service, subservice).ControllerMicroserviceModelVaultNameDto(controllerMicroserviceModelVaultNameDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LinkAPI.ApiVversionServiceSubserviceVaultPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiVversionServiceSubserviceVaultPost`: map[string]string
	fmt.Fprintf(os.Stdout, "Response from `LinkAPI.ApiVversionServiceSubserviceVaultPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**version** | **string** | Versión de la API (por ejemplo 1 o 2) | 
**service** | **string** | Servicio del catálogo Link | 
**subservice** | **string** | Operación del servicio | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiVversionServiceSubserviceVaultPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **controllerMicroserviceModelVaultNameDto** | [**ControllerMicroserviceModelVaultNameDto**](ControllerMicroserviceModelVaultNameDto.md) | Nombre del vault a validar | 

### Return type

**map[string]string**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

