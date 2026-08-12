# kiban.sdk.workfloo.Api.WorkflooApi

All URIs are relative to *https://workfloo.kiban.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ExecuteWorkfloo**](WorkflooApi.md#executeworkfloo) | **POST** /api/v1/workfloo | Ejecutar un workfloo |
| [**ExecuteWorkflooDocument**](WorkflooApi.md#executeworkfloodocument) | **POST** /api/v1/workfloo/{id}/document | Enviar los documentos de un paso |
| [**ExecuteWorkflooForm**](WorkflooApi.md#executeworkflooform) | **POST** /api/v1/workfloo/{id}/form | Enviar el formulario de un paso |
| [**GetWorkfloo**](WorkflooApi.md#getworkfloo) | **GET** /api/v1/workfloo/{id} | Detalle de una ejecución |
| [**GetWorkflooFile**](WorkflooApi.md#getworkfloofile) | **GET** /api/v1/workfloo/{id}/file | Descargar un archivo de un nodo |
| [**GetWorkflooStatus**](WorkflooApi.md#getworkfloostatus) | **GET** /api/v1/workfloo/status/{id} | Estatus de una ejecución |
| [**ListWorkfloos**](WorkflooApi.md#listworkfloos) | **GET** /api/v1/workfloo | Historial de ejecuciones (v1) |
| [**ListWorkfloosV2**](WorkflooApi.md#listworkfloosv2) | **GET** /api/v2/workfloo | Historial de ejecuciones (v2) |
| [**ResendWorkflooNip**](WorkflooApi.md#resendworkfloonip) | **PATCH** /api/v1/workfloo/{id}/nip/resend | Reenviar el NIP |
| [**ReviewWorkflooValidation**](WorkflooApi.md#reviewworkfloovalidation) | **POST** /api/v1/workfloo/{id}/review | Revisar un paso de validación |
| [**SendWorkflooNip**](WorkflooApi.md#sendworkfloonip) | **PATCH** /api/v1/workfloo/{id}/nip/send | Enviar el NIP |
| [**SubmitWorkflooCorrection**](WorkflooApi.md#submitworkfloocorrection) | **POST** /api/v1/workfloo/{id}/correction | Enviar la corrección de un paso de validación |
| [**ValidateWorkflooNip**](WorkflooApi.md#validateworkfloonip) | **PATCH** /api/v1/workfloo/{id}/nip/validate | Validar el NIP |

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

<a id="executeworkfloodocument"></a>
# **ExecuteWorkflooDocument**
> void ExecuteWorkflooDocument (string id, Object body, bool sandbox = null)

Enviar los documentos de un paso

Envía los documentos del nodo DOCUMENT actual. El body es un objeto {documentoId: base64} (los de tipo \"set\" van como arreglo de objetos).


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | Id de la ejecución |  |
| **body** | **Object** | Documentos: {documentoId: base64} |  |
| **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Documentos aceptados; la ejecución avanza |  -  |
| **400** | Errores de validación por documento (formato/tamaño) o de conectores validadores |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin acceso a ese paso |  -  |
| **404** | La ejecución no existe |  -  |
| **409** | Conflicto de estado |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="executeworkflooform"></a>
# **ExecuteWorkflooForm**
> void ExecuteWorkflooForm (string id, Object body, bool sandbox = null)

Enviar el formulario de un paso

Envía las respuestas del nodo FORM actual de la ejecución. El body es un objeto {campoId: valor} con los campos del formulario.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | Id de la ejecución |  |
| **body** | **Object** | Campos del formulario: {campoId: valor} |  |
| **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Formulario aceptado; la ejecución avanza |  -  |
| **400** | Errores de validación por campo o de conectores validadores |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin acceso a ese paso |  -  |
| **404** | La ejecución no existe |  -  |
| **409** | Conflicto de estado |  -  |
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

<a id="getworkfloofile"></a>
# **GetWorkflooFile**
> ControllerWorkflooModelFileResponse GetWorkflooFile (string id, string nodeId, string name, bool sandbox = null)

Descargar un archivo de un nodo

Devuelve, en base64, un archivo producido/subido en un nodo de la ejecución, identificado por nodeId + name.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | Id de la ejecución |  |
| **nodeId** | **string** | Id del nodo que contiene el archivo |  |
| **name** | **string** | Nombre del archivo |  |
| **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

### Return type

[**ControllerWorkflooModelFileResponse**](ControllerWorkflooModelFileResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Archivo en base64 |  -  |
| **400** | Parámetros ausentes o mal formados |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin acceso a esa ejecución |  -  |
| **404** | La ejecución, el nodo o el archivo no existe |  -  |
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

<a id="resendworkfloonip"></a>
# **ResendWorkflooNip**
> ControllerWorkflooModelNipResendStatus ResendWorkflooNip (string id, bool sandbox = null, ControllerWorkflooModelNipResendRequest controllerWorkflooModelNipResendRequest = null)

Reenviar el NIP

Reenvía el NIP y devuelve el estado del flujo NIP. El body es opcional (teléfono al que reenviar).


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | Id de la ejecución |  |
| **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |
| **controllerWorkflooModelNipResendRequest** | [**ControllerWorkflooModelNipResendRequest**](ControllerWorkflooModelNipResendRequest.md) | Teléfono al que reenviar (opcional) | [optional]  |

### Return type

[**ControllerWorkflooModelNipResendStatus**](ControllerWorkflooModelNipResendStatus.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Estado del NIP tras reenviar |  -  |
| **400** | Teléfono/country code inválidos o error de negocio |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin acceso a esa ejecución |  -  |
| **404** | La ejecución no existe |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="reviewworkfloovalidation"></a>
# **ReviewWorkflooValidation**
> void ReviewWorkflooValidation (string id, ControllerWorkflooModelReviewRequest controllerWorkflooModelReviewRequest, bool sandbox = null)

Revisar un paso de validación

Aplica la decisión del revisor sobre un nodo VALIDATION en estado REVIEW: aprobar o rechazar. En un rechazo, reviews indica los campos a corregir con su mensaje.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | Id de la ejecución |  |
| **controllerWorkflooModelReviewRequest** | [**ControllerWorkflooModelReviewRequest**](ControllerWorkflooModelReviewRequest.md) | Decisión del revisor |  |
| **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Decisión aplicada; la ejecución avanza o pasa a corrección |  -  |
| **400** | Body inválido |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin acceso a ese paso de revisión |  -  |
| **404** | La ejecución no existe |  -  |
| **409** | El paso no está en estado revisable |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="sendworkfloonip"></a>
# **SendWorkflooNip**
> void SendWorkflooNip (string id, bool sandbox = null, ControllerWorkflooModelNipSendRequest controllerWorkflooModelNipSendRequest = null)

Enviar el NIP

Envía el NIP (código de un solo uso) del nodo NIP actual. El body es opcional; si se incluye teléfono, countryCode y phoneNumber van juntos.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | Id de la ejecución |  |
| **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |
| **controllerWorkflooModelNipSendRequest** | [**ControllerWorkflooModelNipSendRequest**](ControllerWorkflooModelNipSendRequest.md) | Teléfono al que enviar el NIP (opcional) | [optional]  |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | NIP enviado |  -  |
| **400** | Teléfono/country code inválidos o error de negocio |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin acceso a esa ejecución |  -  |
| **404** | La ejecución no existe |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="submitworkfloocorrection"></a>
# **SubmitWorkflooCorrection**
> void SubmitWorkflooCorrection (string id, Object body, bool sandbox = null)

Enviar la corrección de un paso de validación

Reenvía los campos corregidos por el prospecto cuando un nodo VALIDATION está en estado CORRECTION. El body es un objeto {campoId: valor}, igual que el formulario.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | Id de la ejecución |  |
| **body** | **Object** | Campos corregidos: {campoId: valor} |  |
| **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Corrección aceptada; la ejecución vuelve a revisión o avanza |  -  |
| **400** | Errores de validación por campo |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin acceso a ese paso |  -  |
| **404** | La ejecución no existe |  -  |
| **409** | El paso no está en estado de corrección |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="validateworkfloonip"></a>
# **ValidateWorkflooNip**
> ControllerWorkflooModelNipValidateResponse ValidateWorkflooNip (string id, ControllerWorkflooModelNipValidateRequest controllerWorkflooModelNipValidateRequest, bool sandbox = null)

Validar el NIP

Valida el NIP capturado por el usuario y devuelve la fase resultante del flujo NIP.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | Id de la ejecución |  |
| **controllerWorkflooModelNipValidateRequest** | [**ControllerWorkflooModelNipValidateRequest**](ControllerWorkflooModelNipValidateRequest.md) | El NIP a validar |  |
| **sandbox** | **bool** | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

### Return type

[**ControllerWorkflooModelNipValidateResponse**](ControllerWorkflooModelNipValidateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Fase resultante |  -  |
| **400** | NIP ausente o incorrecto |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | NIP rechazado / sin acceso |  -  |
| **404** | La ejecución no existe |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

