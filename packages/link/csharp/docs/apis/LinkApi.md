# Kiban.Link.Api.LinkApi

All URIs are relative to *https://link.kiban.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ExecuteService**](LinkApi.md#executeservice) | **POST** /api/v3/{service}/{subservice} | Ejecutar un servicio de link |
| [**GetExecution**](LinkApi.md#getexecution) | **GET** /api/v1/{service}/{subservice}/{id} | Detalle de una ejecución |
| [**GetFile**](LinkApi.md#getfile) | **GET** /api/v1/file | Descargar un archivo de una ejecución |
| [**ListExecutions**](LinkApi.md#listexecutions) | **GET** /api/v1/{service}/{subservice} | Historial de ejecuciones de un servicio |
| [**ListTestCases**](LinkApi.md#listtestcases) | **GET** /api/v3/{service}/{subservice}/test_case | Test cases de un servicio |

<a id="executeservice"></a>
# **ExecuteService**
> ControllerMicroserviceModelMicroserviceDetailDto ExecuteService (string service, string subservice, Object body, bool sandbox = null, string testCase = null, string testCaseId = null, string origin = null)

Ejecutar un servicio de link

Ejecuta un servicio del catálogo de link (p. ej. curp/validate, sat/rfc_validate_pf, imss/nss). El servicio y la operación van en la ruta; el body depende de cada servicio. Responde el detalle de la ejecución, también cuando el proveedor falla (408/503/406 traen el detalle con su error). Los subservicios de auditoría responden un CSV.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **service** | **string** | Servicio del catálogo (p. ej. curp, sat, imss, bc_pf) |  |
| **subservice** | **string** | Operación del servicio (p. ej. validate, query) |  |
| **body** | **Object** | Datos del servicio; cada servicio define sus campos |  |
| **sandbox** | **bool** | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |
| **testCase** | **string** | Sandbox: nombre del test case que debe responder | [optional]  |
| **testCaseId** | **string** | Sandbox: id del test case que debe responder | [optional]  |
| **origin** | **string** | Identificador libre del origen de la petición | [optional]  |

### Return type

[**ControllerMicroserviceModelMicroserviceDetailDto**](ControllerMicroserviceModelMicroserviceDetailDto.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ejecución realizada |  -  |
| **400** | Datos inválidos o faltantes para ese servicio |  -  |
| **401** | API key ausente o inválida |  -  |
| **404** | El servicio no existe o no está disponible en esta versión |  -  |
| **406** | El proveedor rechazó la petición |  -  |
| **408** | Tiempo de espera agotado con el proveedor |  -  |
| **409** | Conflicto con los datos enviados |  -  |
| **500** | Error interno |  -  |
| **503** | Proveedor no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getexecution"></a>
# **GetExecution**
> ControllerMicroserviceModelMicroserviceDetailDto GetExecution (string service, string subservice, string id, bool sandbox = null)

Detalle de una ejecución

Devuelve una ejecución: su estatus, la respuesta procesada y el detalle de las llamadas al proveedor (apiData).


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **service** | **string** | Servicio del catálogo |  |
| **subservice** | **string** | Operación del servicio |  |
| **id** | **string** | Id de la ejecución |  |
| **sandbox** | **bool** | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

### Return type

[**ControllerMicroserviceModelMicroserviceDetailDto**](ControllerMicroserviceModelMicroserviceDetailDto.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detalle de la ejecución |  -  |
| **400** | Id ausente |  -  |
| **401** | API key ausente o inválida |  -  |
| **404** | La ejecución no existe |  -  |
| **500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getfile"></a>
# **GetFile**
> System.IO.Stream GetFile (string path, bool sandbox = null)

Descargar un archivo de una ejecución

Descarga un archivo generado por una ejecución (p. ej. un PDF). La ruta del archivo viene en el detalle de la ejecución (apiData[].files[].path).


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **path** | **string** | Ruta del archivo, tal como viene en el detalle de la ejecución |  |
| **sandbox** | **bool** | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

### Return type

**System.IO.Stream**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contenido del archivo |  -  |
| **400** | Falta el parámetro path o es inválido |  -  |
| **401** | API key ausente o inválida |  -  |
| **500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listexecutions"></a>
# **ListExecutions**
> ControllerMicroserviceModelExecutionPage ListExecutions (string service, string subservice, int page, int itemsPerPage, bool sandbox = null)

Historial de ejecuciones de un servicio

Devuelve una página del historial de un servicio. Cualquier query param que no esté listado aquí se usa como filtro sobre el historial.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **service** | **string** | Servicio del catálogo |  |
| **subservice** | **string** | Operación del servicio |  |
| **page** | **int** | Número de página, empieza en 1 |  |
| **itemsPerPage** | **int** | Resultados por página |  |
| **sandbox** | **bool** | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

### Return type

[**ControllerMicroserviceModelExecutionPage**](ControllerMicroserviceModelExecutionPage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Página de ejecuciones |  -  |
| **400** | Parámetros de paginación o filtros inválidos |  -  |
| **401** | API key ausente o inválida |  -  |
| **500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listtestcases"></a>
# **ListTestCases**
> List&lt;ControllerTestCaseModelTestCaseOutputMany&gt; ListTestCases (string service, string subservice)

Test cases de un servicio

Devuelve los test cases configurados para un servicio. En sandbox, la ejecución responde uno de ellos en lugar de llamar al proveedor (se elige con testCase o testCaseId al ejecutar).


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **service** | **string** | Servicio del catálogo |  |
| **subservice** | **string** | Operación del servicio |  |

### Return type

[**List&lt;ControllerTestCaseModelTestCaseOutputMany&gt;**](ControllerTestCaseModelTestCaseOutputMany.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Test cases del servicio |  -  |
| **400** | Servicio u operación ausente |  -  |
| **401** | API key ausente o inválida |  -  |
| **500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

