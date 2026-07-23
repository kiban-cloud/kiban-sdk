# kiban.sdk.workfloo.Api.WorkflooApi

All URIs are relative to *https://workfloo.kiban.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ExecuteWorkfloo**](WorkflooApi.md#executeworkfloo) | **POST** /api/v1/workfloo | Ejecutar un workfloo |
| [**GetWorkfloo**](WorkflooApi.md#getworkfloo) | **GET** /api/v1/workfloo/{id} | Detalle de una ejecución |
| [**GetWorkflooStatus**](WorkflooApi.md#getworkfloostatus) | **GET** /api/v1/workfloo/status/{id} | Estatus de una ejecución |
| [**ListWorkfloos**](WorkflooApi.md#listworkfloos) | **GET** /api/v1/workfloo | Historial de ejecuciones (v1) |
| [**ListWorkfloosV2**](WorkflooApi.md#listworkfloosv2) | **GET** /api/v2/workfloo | Historial de ejecuciones (v2) |

<a id="executeworkfloo"></a>
# **ExecuteWorkfloo**
> ControllerWorkflooModelExecuteResponse ExecuteWorkfloo (ControllerWorkflooModelExecute controllerWorkflooModelExecute, bool sandbox = null)

Ejecutar un workfloo

Crea y arranca una ejecución a partir de una definición de workfloo. Devuelve el id de la ejecución para consultar su estatus.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **controllerWorkflooModelExecute** | [**ControllerWorkflooModelExecute**](ControllerWorkflooModelExecute.md) | Definición a ejecutar y datos iniciales |  |
| **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

### Return type

[**ControllerWorkflooModelExecuteResponse**](ControllerWorkflooModelExecuteResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ejecución creada |  -  |
| **400** | Body inválido, faltan campos requeridos, o el primer nodo/validador rechazó los datos |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | La API key no tiene acceso a esa definición |  -  |
| **404** | La definición de workfloo no existe |  -  |
| **409** | Conflicto al crear la ejecución |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getworkfloo"></a>
# **GetWorkfloo**
> ControllerWorkflooModelWorkflooResume GetWorkfloo (string id, bool sandbox = null)

Detalle de una ejecución

Devuelve el historial completo de una ejecución: todos sus nodos con request/response, variables, documentos y decisiones.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | Id de la ejecución |  |
| **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

### Return type

[**ControllerWorkflooModelWorkflooResume**](ControllerWorkflooModelWorkflooResume.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detalle de la ejecución |  -  |
| **400** | Id ausente o mal formado |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | La API key no tiene acceso a esa ejecución |  -  |
| **404** | La ejecución no existe |  -  |
| **409** | Conflicto al mapear la ejecución |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getworkfloostatus"></a>
# **GetWorkflooStatus**
> ControllerWorkflooModelWorkflooStatus GetWorkflooStatus (string id, bool sandbox = null)

Estatus de una ejecución

Devuelve el estado actual de la ejecución y el paso en el que está parada, con el payload que ese paso espera (formulario, documento, NIP, timer o corrección). Cuando el paso está procesando, currentNodeType lleva el sufijo _PROCESSING y el payload se omite.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | Id de la ejecución |  |
| **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

### Return type

[**ControllerWorkflooModelWorkflooStatus**](ControllerWorkflooModelWorkflooStatus.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Estatus de la ejecución |  -  |
| **400** | Id ausente o mal formado |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | La API key no tiene acceso a esa ejecución |  -  |
| **404** | La ejecución no existe |  -  |
| **409** | Conflicto al mapear el estatus |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listworkfloos"></a>
# **ListWorkfloos**
> ControllerWorkflooModelWorkflooPage ListWorkfloos (int page, int itemsPerPage, string status = null, string from = null, string to = null, bool sandbox = null)

Historial de ejecuciones (v1)

Devuelve una página de ejecuciones envuelta en un objeto con currentPage/hasNextPage/items. Cualquier query param adicional no listado aquí se interpreta como filtro de búsqueda sobre el listado (searchableBy).


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **page** | **int** | Número de página, empieza en 1 |  |
| **itemsPerPage** | **int** | Cantidad de resultados por página |  |
| **status** | **string** | Filtra por estado de la ejecución | [optional]  |
| **from** | **string** | Fecha inicial del rango (RFC3339) | [optional]  |
| **to** | **string** | Fecha final del rango (RFC3339) | [optional]  |
| **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

### Return type

[**ControllerWorkflooModelWorkflooPage**](ControllerWorkflooModelWorkflooPage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Página de ejecuciones |  -  |
| **400** | Query params de paginación ausentes o mal formados |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | La API key no tiene acceso al listado |  -  |
| **409** | Conflicto al mapear los resultados |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listworkfloosv2"></a>
# **ListWorkfloosV2**
> List&lt;ControllerWorkflooModelWorkfloo&gt; ListWorkfloosV2 (int page = null, int itemsPerPage = null, string status = null, string from = null, string to = null, string format = null, bool sandbox = null)

Historial de ejecuciones (v2)

Igual que v1 pero devuelve el arreglo de ejecuciones directo, sin envoltorio. La paginación viaja en el header Link. Con format=csv la respuesta es un archivo CSV en lugar de JSON. Cualquier query param adicional no listado aquí se interpreta como filtro de búsqueda sobre el listado (searchableBy).


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **page** | **int** | Número de página, empieza en 1 | [optional]  |
| **itemsPerPage** | **int** | Cantidad de resultados por página | [optional]  |
| **status** | **string** | Filtra por estado de la ejecución | [optional]  |
| **from** | **string** | Fecha inicial del rango (RFC3339) | [optional]  |
| **to** | **string** | Fecha final del rango (RFC3339) | [optional]  |
| **format** | **string** | Formato de la respuesta | [optional]  |
| **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

### Return type

[**List&lt;ControllerWorkflooModelWorkfloo&gt;**](ControllerWorkflooModelWorkfloo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Arreglo de ejecuciones. El header Link trae las páginas siguiente/anterior |  * Link - Enlaces de paginación RFC 5988 (rel&#x3D;\&quot;next\&quot; / rel&#x3D;\&quot;prev\&quot;). Vacío si no hay más páginas. <br>  |
| **400** | Query params de paginación mal formados |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | La API key no tiene acceso al listado |  -  |
| **409** | Conflicto al mapear los resultados |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

