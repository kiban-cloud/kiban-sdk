# PoolApi

All URIs are relative to *https://workfloo.kiban.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**executePool**](PoolApi.md#executePool) | **POST** /api/v1/pool | Ejecutar un pool |


<a id="executePool"></a>
# **executePool**
> ControllerPoolModelExecuteResponse executePool(controllerPoolModelExecute, sandbox)

Ejecutar un pool

Ejecuta un pool de workfloos a partir de su definición. En sandbox, sceneries mapea cada nodo/definición a su escenario de prueba.

### Example
```java
// Import classes:
import kiban.sdk.workfloo.ApiClient;
import kiban.sdk.workfloo.ApiException;
import kiban.sdk.workfloo.Configuration;
import kiban.sdk.workfloo.auth.*;
import kiban.sdk.workfloo.models.*;
import kiban.sdk.workfloo.api.PoolApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://workfloo.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PoolApi apiInstance = new PoolApi(defaultClient);
    ControllerPoolModelExecute controllerPoolModelExecute = new ControllerPoolModelExecute(); // ControllerPoolModelExecute | Definición del pool y escenarios
    Boolean sandbox = true; // Boolean | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      ControllerPoolModelExecuteResponse result = apiInstance.executePool(controllerPoolModelExecute, sandbox);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PoolApi#executePool");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **controllerPoolModelExecute** | [**ControllerPoolModelExecute**](ControllerPoolModelExecute.md)| Definición del pool y escenarios | |
| **sandbox** | **Boolean**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

### Return type

[**ControllerPoolModelExecuteResponse**](ControllerPoolModelExecuteResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ids del workfloo creado y su definición |  -  |
| **400** | Body inválido o faltan campos requeridos |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin acceso al pool |  -  |
| **404** | La definición del pool no existe |  -  |
| **409** | Conflicto al ejecutar |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

