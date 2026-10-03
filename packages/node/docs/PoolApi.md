# PoolApi

All URIs are relative to *https://workfloo.kiban.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executePool**](#executepool) | **POST** /api/v1/pool | Ejecutar un pool|

# **executePool**
> ControllerPoolModelExecuteResponse executePool(controllerPoolModelExecute)

Ejecuta un pool de workfloos a partir de su definición. En sandbox, sceneries mapea cada nodo/definición a su escenario de prueba.

### Example

```typescript
import {
    PoolApi,
    Configuration,
    ControllerPoolModelExecute
} from 'kiban.sdk.workfloo';

const configuration = new Configuration();
const apiInstance = new PoolApi(configuration);

let controllerPoolModelExecute: ControllerPoolModelExecute; //Definición del pool y escenarios
let sandbox: boolean; //Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.executePool(
    controllerPoolModelExecute,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **controllerPoolModelExecute** | **ControllerPoolModelExecute**| Definición del pool y escenarios | |
| **sandbox** | [**boolean**] | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


### Return type

**ControllerPoolModelExecuteResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ids del workfloo creado y su definición |  -  |
|**400** | Body inválido o faltan campos requeridos |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | Sin acceso al pool |  -  |
|**404** | La definición del pool no existe |  -  |
|**409** | Conflicto al ejecutar |  -  |
|**500** | Error interno |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

