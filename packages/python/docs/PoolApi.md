# kiban.sdk.workfloo.PoolApi

All URIs are relative to *https://workfloo.kiban.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**execute_pool**](PoolApi.md#execute_pool) | **POST** /api/v1/pool | Ejecutar un pool


# **execute_pool**
> ControllerPoolModelExecuteResponse execute_pool(controller_pool_model_execute, sandbox=sandbox)

Ejecutar un pool

Ejecuta un pool de workfloos a partir de su definición. En sandbox, sceneries mapea cada nodo/definición a su escenario de prueba.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.workfloo
from kiban.sdk.workfloo.models.controller_pool_model_execute import ControllerPoolModelExecute
from kiban.sdk.workfloo.models.controller_pool_model_execute_response import ControllerPoolModelExecuteResponse
from kiban.sdk.workfloo.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://workfloo.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.workfloo.Configuration(
    host = "https://workfloo.kiban.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with kiban.sdk.workfloo.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.workfloo.PoolApi(api_client)
    controller_pool_model_execute = kiban.sdk.workfloo.ControllerPoolModelExecute() # ControllerPoolModelExecute | Definición del pool y escenarios
    sandbox = True # bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Ejecutar un pool
        api_response = api_instance.execute_pool(controller_pool_model_execute, sandbox=sandbox)
        print("The response of PoolApi->execute_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PoolApi->execute_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **controller_pool_model_execute** | [**ControllerPoolModelExecute**](ControllerPoolModelExecute.md)| Definición del pool y escenarios | 
 **sandbox** | **bool**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**200** | Ids del workfloo creado y su definición |  -  |
**400** | Body inválido o faltan campos requeridos |  -  |
**401** | API key ausente o inválida |  -  |
**403** | Sin acceso al pool |  -  |
**404** | La definición del pool no existe |  -  |
**409** | Conflicto al ejecutar |  -  |
**500** | Error interno |  -  |
**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

