# kiban.sdk.workfloo.Api.PoolApi

All URIs are relative to *https://workfloo.kiban.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ExecutePool**](PoolApi.md#executepool) | **POST** /api/v1/pool | Ejecutar un pool |

<a id="executepool"></a>
# **ExecutePool**
> ControllerPoolModelExecuteResponse ExecutePool (ControllerPoolModelExecute controllerPoolModelExecute, bool sandbox = null)

Ejecutar un pool

Ejecuta un pool de workfloos a partir de su definición. En sandbox, sceneries mapea cada nodo/definición a su escenario de prueba.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **controllerPoolModelExecute** | [**ControllerPoolModelExecute**](ControllerPoolModelExecute.md) | Definición del pool y escenarios |  |
| **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

