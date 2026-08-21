# kiban.sdk.link.Api.LinkApi

All URIs are relative to *https://link.kiban.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ApiV1FileGet**](LinkApi.md#apiv1fileget) | **GET** /api/v1/file | Descargar un archivo de una ejecución |
| [**ApiVversionServiceSubserviceGet**](LinkApi.md#apivversionservicesubserviceget) | **GET** /api/v{version}/{service}/{subservice} | Historial de ejecuciones de un servicio |
| [**ApiVversionServiceSubserviceIdGet**](LinkApi.md#apivversionservicesubserviceidget) | **GET** /api/v{version}/{service}/{subservice}/{id} | Detalle de una ejecución |
| [**ApiVversionServiceSubservicePost**](LinkApi.md#apivversionservicesubservicepost) | **POST** /api/v{version}/{service}/{subservice} | Ejecutar un servicio de Link |
| [**ApiVversionServiceSubserviceTestCaseGet**](LinkApi.md#apivversionservicesubservicetestcaseget) | **GET** /api/v{version}/{service}/{subservice}/test_case | Test cases de un servicio (sandbox) |
| [**ApiVversionServiceSubserviceVaultPost**](LinkApi.md#apivversionservicesubservicevaultpost) | **POST** /api/v{version}/{service}/{subservice}/vault | Validar un vault |

<a id="apiv1fileget"></a>
# **ApiV1FileGet**
> System.IO.Stream ApiV1FileGet (string path)

Descargar un archivo de una ejecución

Descarga un archivo generado por una ejecución (por ejemplo un PDF o comprobante). La ruta del archivo se obtiene del detalle de la ejecución y se pasa en el query param path.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **path** | **string** | Ruta del archivo, tal como viene en el detalle de la ejecución |  |

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
| **400** | Query param path ausente |  -  |
| **401** | API key ausente o inválida |  -  |
| **500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="apivversionservicesubserviceget"></a>
# **ApiVversionServiceSubserviceGet**
> ControllerMicroserviceModelLinkExecutionPage ApiVversionServiceSubserviceGet (string version, string service, string subservice, int page, int itemsPerPage)

Historial de ejecuciones de un servicio

Devuelve una página del historial de ejecuciones de un service/subservice. Cualquier query param adicional no listado aquí se interpreta como filtro de búsqueda sobre el listado (searchableBy).


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **version** | **string** | Versión de la API (por ejemplo 1 o 2) |  |
| **service** | **string** | Servicio del catálogo Link |  |
| **subservice** | **string** | Operación del servicio |  |
| **page** | **int** | Número de página, empieza en 1 |  |
| **itemsPerPage** | **int** | Cantidad de resultados por página |  |

### Return type

[**ControllerMicroserviceModelLinkExecutionPage**](ControllerMicroserviceModelLinkExecutionPage.md)

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
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="apivversionservicesubserviceidget"></a>
# **ApiVversionServiceSubserviceIdGet**
> ControllerMicroserviceModelMicroserviceDetailDto ApiVversionServiceSubserviceIdGet (string version, string service, string subservice, string id)

Detalle de una ejecución

Devuelve el detalle de una ejecución: su estatus, la respuesta procesada y el raw de las llamadas al proveedor (apiData).


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **version** | **string** | Versión de la API (por ejemplo 1 o 2) |  |
| **service** | **string** | Servicio del catálogo Link |  |
| **subservice** | **string** | Operación del servicio |  |
| **id** | **string** | Id de la ejecución |  |

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
| **400** | Id ausente o mal formado |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | La API key no tiene acceso a esa ejecución |  -  |
| **404** | La ejecución no existe |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="apivversionservicesubservicepost"></a>
# **ApiVversionServiceSubservicePost**
> ControllerMicroserviceModelMicroserviceDetailDto ApiVversionServiceSubservicePost (string version, string service, string subservice, Object body, string origin = null, bool mock = null)

Ejecutar un servicio de Link

Ejecuta un servicio del catálogo Link (por ejemplo curp/validate, sat/pf_data_from_rfc, nip/send). El servicio y la operación se eligen en la ruta con {service}/{subservice}. El cuerpo de la petición depende del servicio elegido: cada servicio define sus propios campos. Consulta el catálogo de servicios para el detalle de cada uno. En sandbox no se llama al proveedor real; se devuelve un test case configurable.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **version** | **string** | Versión de la API (por ejemplo 1 o 2) |  |
| **service** | **string** | Servicio del catálogo Link (por ejemplo curp, sat, imss, nip, sms) |  |
| **subservice** | **string** | Operación del servicio (por ejemplo validate, send, pf_data_from_rfc) |  |
| **body** | **Object** | Cuerpo específico del servicio. Sus campos varían por service/subservice |  |
| **origin** | **string** | Identificador libre del origen de la petición, para atribución | [optional]  |
| **mock** | **bool** | Si es true no llama al proveedor real y devuelve una respuesta mock | [optional]  |

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
| **400** | Cuerpo inválido o campos requeridos ausentes para ese servicio |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | La API key no tiene acceso a ese servicio |  -  |
| **406** | El proveedor rechazó la petición |  -  |
| **408** | Tiempo de espera agotado con el proveedor |  -  |
| **409** | Conflicto al procesar la ejecución |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="apivversionservicesubservicetestcaseget"></a>
# **ApiVversionServiceSubserviceTestCaseGet**
> List&lt;ControllerTestCaseModelTestCaseOutputMany&gt; ApiVversionServiceSubserviceTestCaseGet (string version, string service, string subservice)

Test cases de un servicio (sandbox)

Devuelve los test cases configurados para un service/subservice. En sandbox, la ejecución de ese servicio devuelve uno de estos test cases en lugar de llamar al proveedor real.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **version** | **string** | Versión de la API (por ejemplo 1 o 2) |  |
| **service** | **string** | Servicio del catálogo Link |  |
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
| **400** | Service o subservice ausente |  -  |
| **401** | API key ausente o inválida |  -  |
| **500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="apivversionservicesubservicevaultpost"></a>
# **ApiVversionServiceSubserviceVaultPost**
> Dictionary&lt;string, string&gt; ApiVversionServiceSubserviceVaultPost (string version, string service, string subservice, ControllerMicroserviceModelVaultNameDto controllerMicroserviceModelVaultNameDto)

Validar un vault

Verifica si un vault (credencial guardada) existe y es del tipo correcto para el servicio. Devuelve status: valid, notValid o notFound.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **version** | **string** | Versión de la API (por ejemplo 1 o 2) |  |
| **service** | **string** | Servicio del catálogo Link |  |
| **subservice** | **string** | Operación del servicio |  |
| **controllerMicroserviceModelVaultNameDto** | [**ControllerMicroserviceModelVaultNameDto**](ControllerMicroserviceModelVaultNameDto.md) | Nombre del vault a validar |  |

### Return type

**Dictionary<string, string>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Resultado de la validación: {\\\&quot;status\\\&quot;: \\\&quot;valid|notValid|notFound\\\&quot;} |  -  |
| **400** | Cuerpo inválido |  -  |
| **401** | API key ausente o inválida |  -  |
| **500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

