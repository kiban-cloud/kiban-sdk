# \VaultAPI

All URIs are relative to *https://link.kiban.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateVault**](VaultAPI.md#CreateVault) | **Post** /api/v3/vault/na | Crear una credencial
[**DeleteVault**](VaultAPI.md#DeleteVault) | **Delete** /api/v3/vault/na/{id} | Borrar una credencial
[**GetVault**](VaultAPI.md#GetVault) | **Get** /api/v1/vault/na/{id} | Detalle de una credencial
[**ListVaults**](VaultAPI.md#ListVaults) | **Get** /api/v1/vault/na | Listar credenciales
[**UpdateVault**](VaultAPI.md#UpdateVault) | **Put** /api/v3/vault/na/{id} | Editar una credencial
[**ValidateVault**](VaultAPI.md#ValidateVault) | **Post** /api/v3/{service}/{subservice}/vault | Validar una credencial para un servicio



## CreateVault

> ControllerMicroserviceModelMicroserviceDetailDto CreateVault(ctx).Body(body).Sandbox(sandbox).Execute()

Crear una credencial



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
	body := map[string]interface{}{ ... } // map[string]interface{} | Objeto con name, type y los campos propios del tipo de credencial (cada tipo define los suyos; por ejemplo BC_PF: usuario, password y autorenew opcional). Los secretos nunca se devuelven
	sandbox := true // bool | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.VaultAPI.CreateVault(context.Background()).Body(body).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VaultAPI.CreateVault``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateVault`: ControllerMicroserviceModelMicroserviceDetailDto
	fmt.Fprintf(os.Stdout, "Response from `VaultAPI.CreateVault`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateVaultRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **map[string]interface{}** | Objeto con name, type y los campos propios del tipo de credencial (cada tipo define los suyos; por ejemplo BC_PF: usuario, password y autorenew opcional). Los secretos nunca se devuelven | 
 **sandbox** | **bool** | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | 

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


## DeleteVault

> DeleteVault(ctx, id).Sandbox(sandbox).Execute()

Borrar una credencial



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
	id := "id_example" // string | Id de la credencial
	sandbox := true // bool | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.VaultAPI.DeleteVault(context.Background(), id).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VaultAPI.DeleteVault``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id de la credencial | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteVaultRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sandbox** | **bool** | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

 (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetVault

> ControllerMicroserviceModelMicroserviceDetailDto GetVault(ctx, id).Sandbox(sandbox).Execute()

Detalle de una credencial



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
	id := "id_example" // string | Id de la credencial
	sandbox := true // bool | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.VaultAPI.GetVault(context.Background(), id).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VaultAPI.GetVault``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetVault`: ControllerMicroserviceModelMicroserviceDetailDto
	fmt.Fprintf(os.Stdout, "Response from `VaultAPI.GetVault`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id de la credencial | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetVaultRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sandbox** | **bool** | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | 

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


## ListVaults

> ControllerMicroserviceModelExecutionPage ListVaults(ctx).Page(page).ItemsPerPage(itemsPerPage).Sandbox(sandbox).Execute()

Listar credenciales



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
	page := int32(56) // int32 | Número de página, empieza en 1
	itemsPerPage := int32(56) // int32 | Resultados por página
	sandbox := true // bool | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.VaultAPI.ListVaults(context.Background()).Page(page).ItemsPerPage(itemsPerPage).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VaultAPI.ListVaults``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListVaults`: ControllerMicroserviceModelExecutionPage
	fmt.Fprintf(os.Stdout, "Response from `VaultAPI.ListVaults`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListVaultsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int32** | Número de página, empieza en 1 | 
 **itemsPerPage** | **int32** | Resultados por página | 
 **sandbox** | **bool** | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | 

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


## UpdateVault

> UpdateVault(ctx, id).Body(body).Sandbox(sandbox).Execute()

Editar una credencial



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
	id := "id_example" // string | Id de la credencial
	body := map[string]interface{}{ ... } // map[string]interface{} | Objeto con name, type y los campos propios del tipo de credencial (cada tipo define los suyos; por ejemplo BC_PF: usuario, password y autorenew opcional). Los secretos nunca se devuelven
	sandbox := true // bool | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.VaultAPI.UpdateVault(context.Background(), id).Body(body).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VaultAPI.UpdateVault``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id de la credencial | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateVaultRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** | Objeto con name, type y los campos propios del tipo de credencial (cada tipo define los suyos; por ejemplo BC_PF: usuario, password y autorenew opcional). Los secretos nunca se devuelven | 
 **sandbox** | **bool** | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

 (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ValidateVault

> ControllerMicroserviceModelVaultValidationDto ValidateVault(ctx, service, subservice).ControllerMicroserviceModelVaultNameDto(controllerMicroserviceModelVaultNameDto).Sandbox(sandbox).Execute()

Validar una credencial para un servicio



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
	controllerMicroserviceModelVaultNameDto := *openapiclient.NewControllerMicroserviceModelVaultNameDto() // ControllerMicroserviceModelVaultNameDto | Nombre de la credencial
	sandbox := true // bool | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.VaultAPI.ValidateVault(context.Background(), service, subservice).ControllerMicroserviceModelVaultNameDto(controllerMicroserviceModelVaultNameDto).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VaultAPI.ValidateVault``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ValidateVault`: ControllerMicroserviceModelVaultValidationDto
	fmt.Fprintf(os.Stdout, "Response from `VaultAPI.ValidateVault`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**service** | **string** | Servicio del catálogo | 
**subservice** | **string** | Operación del servicio | 

### Other Parameters

Other parameters are passed through a pointer to a apiValidateVaultRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **controllerMicroserviceModelVaultNameDto** | [**ControllerMicroserviceModelVaultNameDto**](ControllerMicroserviceModelVaultNameDto.md) | Nombre de la credencial | 
 **sandbox** | **bool** | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

[**ControllerMicroserviceModelVaultValidationDto**](ControllerMicroserviceModelVaultValidationDto.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

