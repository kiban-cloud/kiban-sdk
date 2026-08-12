# \PoolAPI

All URIs are relative to *https://workfloo.kiban.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ExecutePool**](PoolAPI.md#ExecutePool) | **Post** /api/v1/pool | Ejecutar un pool



## ExecutePool

> ControllerPoolModelExecuteResponse ExecutePool(ctx).ControllerPoolModelExecute(controllerPoolModelExecute).Sandbox(sandbox).Execute()

Ejecutar un pool



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
	controllerPoolModelExecute := *openapiclient.NewControllerPoolModelExecute("IdPoolDefinition_example") // ControllerPoolModelExecute | Definición del pool y escenarios
	sandbox := true // bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PoolAPI.ExecutePool(context.Background()).ControllerPoolModelExecute(controllerPoolModelExecute).Sandbox(sandbox).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PoolAPI.ExecutePool``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ExecutePool`: ControllerPoolModelExecuteResponse
	fmt.Fprintf(os.Stdout, "Response from `PoolAPI.ExecutePool`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiExecutePoolRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **controllerPoolModelExecute** | [**ControllerPoolModelExecute**](ControllerPoolModelExecute.md) | Definición del pool y escenarios | 
 **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | 

### Return type

[**ControllerPoolModelExecuteResponse**](ControllerPoolModelExecuteResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

