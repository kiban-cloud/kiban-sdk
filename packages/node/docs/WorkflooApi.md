# WorkflooApi

All URIs are relative to *https://workfloo.kiban.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeWorkfloo**](#executeworkfloo) | **POST** /api/v1/workfloo | Ejecutar un workfloo|
|[**executeWorkflooDocument**](#executeworkfloodocument) | **POST** /api/v1/workfloo/{id}/document | Enviar los documentos de un paso|
|[**executeWorkflooForm**](#executeworkflooform) | **POST** /api/v1/workfloo/{id}/form | Enviar el formulario de un paso|
|[**fallbackWorkflooOtp**](#fallbackworkfloootp) | **PATCH** /api/v1/workfloo/{id}/otp/fallback | Reenviar el código de verificación (OTP)|
|[**getWorkfloo**](#getworkfloo) | **GET** /api/v1/workfloo/{id} | Detalle de una ejecución|
|[**getWorkflooFile**](#getworkfloofile) | **GET** /api/v1/workfloo/{id}/file | Descargar un archivo de un nodo|
|[**getWorkflooStatus**](#getworkfloostatus) | **GET** /api/v1/workfloo/status/{id} | Estatus de una ejecución|
|[**listWorkfloos**](#listworkfloos) | **GET** /api/v1/workfloo | Historial de ejecuciones (v1)|
|[**listWorkfloosV2**](#listworkfloosv2) | **GET** /api/v2/workfloo | Historial de ejecuciones (v2)|
|[**resendWorkflooNip**](#resendworkfloonip) | **PATCH** /api/v1/workfloo/{id}/nip/resend | Reenviar el NIP|
|[**reviewWorkflooValidation**](#reviewworkfloovalidation) | **POST** /api/v1/workfloo/{id}/review | Revisar un paso de validación|
|[**sendWorkflooNip**](#sendworkfloonip) | **PATCH** /api/v1/workfloo/{id}/nip/send | Enviar el NIP|
|[**submitWorkflooCorrection**](#submitworkfloocorrection) | **POST** /api/v1/workfloo/{id}/correction | Enviar la corrección de un paso de validación|
|[**validateWorkflooNip**](#validateworkfloonip) | **PATCH** /api/v1/workfloo/{id}/nip/validate | Validar el NIP|
|[**validateWorkflooOtp**](#validateworkfloootp) | **PATCH** /api/v1/workfloo/{id}/otp/validate | Validar el código de verificación (OTP)|

# **executeWorkfloo**
> ControllerWorkflooModelExecuteResponse executeWorkfloo(controllerWorkflooModelExecute)

Crea y arranca una ejecución a partir de una definición de workfloo. Devuelve el id de la ejecución para consultar su estatus.

### Example

```typescript
import {
    WorkflooApi,
    Configuration,
    ControllerWorkflooModelExecute
} from '@kiban/workfloo';

const configuration = new Configuration();
const apiInstance = new WorkflooApi(configuration);

let controllerWorkflooModelExecute: ControllerWorkflooModelExecute; //Definición a ejecutar y datos iniciales
let sandbox: boolean; //Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.executeWorkfloo(
    controllerWorkflooModelExecute,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **controllerWorkflooModelExecute** | **ControllerWorkflooModelExecute**| Definición a ejecutar y datos iniciales | |
| **sandbox** | [**boolean**] | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


### Return type

**ControllerWorkflooModelExecuteResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ejecución creada |  -  |
|**400** | Body inválido, faltan campos requeridos, o el primer nodo/validador rechazó los datos |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | La API key no tiene acceso a esa definición |  -  |
|**404** | La definición de workfloo no existe |  -  |
|**409** | Conflicto al crear la ejecución |  -  |
|**500** | Error interno |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **executeWorkflooDocument**
> executeWorkflooDocument(body)

Envía los documentos del nodo DOCUMENT actual. El body es un objeto {documentoId: base64} (los de tipo \"set\" van como arreglo de objetos).

### Example

```typescript
import {
    WorkflooApi,
    Configuration
} from '@kiban/workfloo';

const configuration = new Configuration();
const apiInstance = new WorkflooApi(configuration);

let id: string; //Id de la ejecución (default to undefined)
let body: object; //Documentos: {documentoId: base64}
let sandbox: boolean; //Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.executeWorkflooDocument(
    id,
    body,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**| Documentos: {documentoId: base64} | |
| **id** | [**string**] | Id de la ejecución | defaults to undefined|
| **sandbox** | [**boolean**] | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


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
|**200** | Documentos aceptados; la ejecución avanza |  -  |
|**400** | Errores de validación por documento (formato/tamaño) o de conectores validadores |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | Sin acceso a ese paso |  -  |
|**404** | La ejecución no existe |  -  |
|**409** | Conflicto de estado |  -  |
|**500** | Error interno |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **executeWorkflooForm**
> executeWorkflooForm(body)

Envía las respuestas del nodo FORM actual de la ejecución. El body es un objeto {campoId: valor} con los campos del formulario.

### Example

```typescript
import {
    WorkflooApi,
    Configuration
} from '@kiban/workfloo';

const configuration = new Configuration();
const apiInstance = new WorkflooApi(configuration);

let id: string; //Id de la ejecución (default to undefined)
let body: object; //Campos del formulario: {campoId: valor}
let sandbox: boolean; //Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.executeWorkflooForm(
    id,
    body,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**| Campos del formulario: {campoId: valor} | |
| **id** | [**string**] | Id de la ejecución | defaults to undefined|
| **sandbox** | [**boolean**] | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


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
|**200** | Formulario aceptado; la ejecución avanza |  -  |
|**400** | Errores de validación por campo o de conectores validadores |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | Sin acceso a ese paso |  -  |
|**404** | La ejecución no existe |  -  |
|**409** | Conflicto de estado |  -  |
|**500** | Error interno |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fallbackWorkflooOtp**
> fallbackWorkflooOtp()

Pide al proveedor una validación nueva (y un código nuevo) para el paso de verificación. Cada reenvío es una consulta facturada y el número de reenvíos lo limita el nodo; al agotarlos responde 400/403 con `{\"error\"}`.

### Example

```typescript
import {
    WorkflooApi,
    Configuration
} from '@kiban/workfloo';

const configuration = new Configuration();
const apiInstance = new WorkflooApi(configuration);

let id: string; //Id de la ejecución (default to undefined)
let sandbox: boolean; //Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.fallbackWorkflooOtp(
    id,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Id de la ejecución | defaults to undefined|
| **sandbox** | [**boolean**] | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Código reenviado |  -  |
|**400** | Reenvíos agotados o error de negocio |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | Sin código pendiente, sin reenvíos, sin acceso, o la ejecución siguió ocupada procesando otro paso tras ~4.5 s de espera |  -  |
|**404** | La ejecución no existe |  -  |
|**500** | Error interno (incluye otra petición tomando la ejecución en el mismo instante; reintentar) |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWorkfloo**
> ControllerWorkflooModelWorkflooResume getWorkfloo()

Devuelve el historial completo de una ejecución: todos sus nodos con request/response, variables, documentos y decisiones.

### Example

```typescript
import {
    WorkflooApi,
    Configuration
} from '@kiban/workfloo';

const configuration = new Configuration();
const apiInstance = new WorkflooApi(configuration);

let id: string; //Id de la ejecución (default to undefined)
let sandbox: boolean; //Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.getWorkfloo(
    id,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Id de la ejecución | defaults to undefined|
| **sandbox** | [**boolean**] | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


### Return type

**ControllerWorkflooModelWorkflooResume**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Detalle de la ejecución |  -  |
|**400** | Id ausente o mal formado |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | La API key no tiene acceso a esa ejecución |  -  |
|**404** | La ejecución no existe |  -  |
|**409** | Conflicto al mapear la ejecución |  -  |
|**500** | Error interno |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWorkflooFile**
> ControllerWorkflooModelFileResponse getWorkflooFile()

Devuelve, en base64, un archivo producido/subido en un nodo de la ejecución, identificado por nodeId + name.

### Example

```typescript
import {
    WorkflooApi,
    Configuration
} from '@kiban/workfloo';

const configuration = new Configuration();
const apiInstance = new WorkflooApi(configuration);

let id: string; //Id de la ejecución (default to undefined)
let nodeId: string; //Id del nodo que contiene el archivo (default to undefined)
let name: string; //Nombre del archivo (default to undefined)
let sandbox: boolean; //Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.getWorkflooFile(
    id,
    nodeId,
    name,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Id de la ejecución | defaults to undefined|
| **nodeId** | [**string**] | Id del nodo que contiene el archivo | defaults to undefined|
| **name** | [**string**] | Nombre del archivo | defaults to undefined|
| **sandbox** | [**boolean**] | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


### Return type

**ControllerWorkflooModelFileResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Archivo en base64 |  -  |
|**400** | Parámetros ausentes o mal formados |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | Sin acceso a esa ejecución |  -  |
|**404** | La ejecución, el nodo o el archivo no existe |  -  |
|**500** | Error interno |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWorkflooStatus**
> ControllerWorkflooModelWorkflooStatus getWorkflooStatus()

Devuelve el estado actual de la ejecución y el paso en el que está parada, con el payload que ese paso espera (formulario, documento, NIP, timer o corrección). Cuando el paso está procesando, currentNodeType lleva el sufijo _PROCESSING y el payload se omite.

### Example

```typescript
import {
    WorkflooApi,
    Configuration
} from '@kiban/workfloo';

const configuration = new Configuration();
const apiInstance = new WorkflooApi(configuration);

let id: string; //Id de la ejecución (default to undefined)
let sandbox: boolean; //Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.getWorkflooStatus(
    id,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Id de la ejecución | defaults to undefined|
| **sandbox** | [**boolean**] | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


### Return type

**ControllerWorkflooModelWorkflooStatus**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Estatus de la ejecución |  -  |
|**400** | Id ausente o mal formado |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | La API key no tiene acceso a esa ejecución |  -  |
|**404** | La ejecución no existe |  -  |
|**409** | Conflicto al mapear el estatus |  -  |
|**500** | Error interno |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listWorkfloos**
> ControllerWorkflooModelWorkflooPage listWorkfloos()

Devuelve una página de ejecuciones envuelta en un objeto con currentPage/hasNextPage/items. Cualquier query param adicional no listado aquí se interpreta como filtro de búsqueda sobre el listado (searchableBy).

### Example

```typescript
import {
    WorkflooApi,
    Configuration
} from '@kiban/workfloo';

const configuration = new Configuration();
const apiInstance = new WorkflooApi(configuration);

let page: number; //Número de página, empieza en 1 (default to undefined)
let itemsPerPage: number; //Cantidad de resultados por página (default to undefined)
let status: string; //Filtra por estado de la ejecución (optional) (default to undefined)
let from: string; //Fecha inicial del rango (RFC3339) (optional) (default to undefined)
let to: string; //Fecha final del rango (RFC3339) (optional) (default to undefined)
let sandbox: boolean; //Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.listWorkfloos(
    page,
    itemsPerPage,
    status,
    from,
    to,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Número de página, empieza en 1 | defaults to undefined|
| **itemsPerPage** | [**number**] | Cantidad de resultados por página | defaults to undefined|
| **status** | [**string**] | Filtra por estado de la ejecución | (optional) defaults to undefined|
| **from** | [**string**] | Fecha inicial del rango (RFC3339) | (optional) defaults to undefined|
| **to** | [**string**] | Fecha final del rango (RFC3339) | (optional) defaults to undefined|
| **sandbox** | [**boolean**] | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


### Return type

**ControllerWorkflooModelWorkflooPage**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Página de ejecuciones |  -  |
|**400** | Query params de paginación ausentes o mal formados |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | La API key no tiene acceso al listado |  -  |
|**409** | Conflicto al mapear los resultados |  -  |
|**500** | Error interno |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listWorkfloosV2**
> Array<ControllerWorkflooModelWorkflooListItem> listWorkfloosV2()

Devuelve el arreglo de ejecuciones directo, sin envoltorio. La paginación viaja en el header Link. content=true agrega a cada elemento la ejecución completa, con todos sus nodos (la misma forma que getWorkfloo); por defecto es false y llega el resumen. format=CSV devuelve un archivo CSV en lugar de JSON. Los SDKs tipan la respuesta como JSON: para el CSV hay que leer el cuerpo crudo de la respuesta. Cualquier query param adicional no listado aquí se interpreta como filtro de búsqueda sobre el listado (searchableBy).

### Example

```typescript
import {
    WorkflooApi,
    Configuration
} from '@kiban/workfloo';

const configuration = new Configuration();
const apiInstance = new WorkflooApi(configuration);

let page: number; //Número de página, empieza en 1 (optional) (default to undefined)
let itemsPerPage: number; //Cantidad de resultados por página, entre 1 y 10000 (optional) (default to undefined)
let from: string; //Fecha inicial del rango (ISO 8601) (optional) (default to undefined)
let to: string; //Fecha final del rango (ISO 8601) (optional) (default to undefined)
let origin: string; //Origen de la ejecución: KIBAN_CLOUD, API o FRONT (optional) (default to undefined)
let status: string; //Estado de la ejecución: SUCCESS, ERROR o PROGRESS (optional) (default to undefined)
let name: string; //Nombre del workfloo (búsqueda parcial) (optional) (default to undefined)
let id: string; //Id exacto de la ejecución (optional) (default to undefined)
let nodesFormSearchableByRfcPf: string; //RFC de persona física (empieza con, sin distinguir mayúsculas) (optional) (default to undefined)
let nodesFormSearchableByFirstName: string; //Nombre (empieza con, sin distinguir mayúsculas) (optional) (default to undefined)
let nodesFormSearchableBySecondName: string; //Segundo nombre (empieza con, sin distinguir mayúsculas) (optional) (default to undefined)
let nodesFormSearchableByLastName1: string; //Apellido paterno (empieza con, sin distinguir mayúsculas) (optional) (default to undefined)
let nodesFormSearchableByLastName2: string; //Apellido materno (empieza con, sin distinguir mayúsculas) (optional) (default to undefined)
let nodesFormSearchableByRfcPm: string; //RFC de persona moral (empieza con, sin distinguir mayúsculas) (optional) (default to undefined)
let nodesFormSearchableByCompanyName: string; //Razón social (empieza con, sin distinguir mayúsculas) (optional) (default to undefined)
let format: 'JSON' | 'CSV'; //Formato de la respuesta; por defecto JSON (optional) (default to undefined)
let content: boolean; //Agrega la ejecución completa (todos sus nodos) a cada elemento; por defecto false (optional) (default to undefined)
let labels: string; //Etiquetas, separadas por punto y coma (optional) (default to undefined)
let sandbox: boolean; //Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.listWorkfloosV2(
    page,
    itemsPerPage,
    from,
    to,
    origin,
    status,
    name,
    id,
    nodesFormSearchableByRfcPf,
    nodesFormSearchableByFirstName,
    nodesFormSearchableBySecondName,
    nodesFormSearchableByLastName1,
    nodesFormSearchableByLastName2,
    nodesFormSearchableByRfcPm,
    nodesFormSearchableByCompanyName,
    format,
    content,
    labels,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Número de página, empieza en 1 | (optional) defaults to undefined|
| **itemsPerPage** | [**number**] | Cantidad de resultados por página, entre 1 y 10000 | (optional) defaults to undefined|
| **from** | [**string**] | Fecha inicial del rango (ISO 8601) | (optional) defaults to undefined|
| **to** | [**string**] | Fecha final del rango (ISO 8601) | (optional) defaults to undefined|
| **origin** | [**string**] | Origen de la ejecución: KIBAN_CLOUD, API o FRONT | (optional) defaults to undefined|
| **status** | [**string**] | Estado de la ejecución: SUCCESS, ERROR o PROGRESS | (optional) defaults to undefined|
| **name** | [**string**] | Nombre del workfloo (búsqueda parcial) | (optional) defaults to undefined|
| **id** | [**string**] | Id exacto de la ejecución | (optional) defaults to undefined|
| **nodesFormSearchableByRfcPf** | [**string**] | RFC de persona física (empieza con, sin distinguir mayúsculas) | (optional) defaults to undefined|
| **nodesFormSearchableByFirstName** | [**string**] | Nombre (empieza con, sin distinguir mayúsculas) | (optional) defaults to undefined|
| **nodesFormSearchableBySecondName** | [**string**] | Segundo nombre (empieza con, sin distinguir mayúsculas) | (optional) defaults to undefined|
| **nodesFormSearchableByLastName1** | [**string**] | Apellido paterno (empieza con, sin distinguir mayúsculas) | (optional) defaults to undefined|
| **nodesFormSearchableByLastName2** | [**string**] | Apellido materno (empieza con, sin distinguir mayúsculas) | (optional) defaults to undefined|
| **nodesFormSearchableByRfcPm** | [**string**] | RFC de persona moral (empieza con, sin distinguir mayúsculas) | (optional) defaults to undefined|
| **nodesFormSearchableByCompanyName** | [**string**] | Razón social (empieza con, sin distinguir mayúsculas) | (optional) defaults to undefined|
| **format** | [**&#39;JSON&#39; | &#39;CSV&#39;**]**Array<&#39;JSON&#39; &#124; &#39;CSV&#39;>** | Formato de la respuesta; por defecto JSON | (optional) defaults to undefined|
| **content** | [**boolean**] | Agrega la ejecución completa (todos sus nodos) a cada elemento; por defecto false | (optional) defaults to undefined|
| **labels** | [**string**] | Etiquetas, separadas por punto y coma | (optional) defaults to undefined|
| **sandbox** | [**boolean**] | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


### Return type

**Array<ControllerWorkflooModelWorkflooListItem>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Arreglo de ejecuciones. El header Link trae las páginas siguiente/anterior |  * Link - Enlaces de paginación RFC 5988 (rel&#x3D;\&quot;next\&quot; / rel&#x3D;\&quot;prev\&quot;). Vacío si no hay más páginas. <br>  |
|**400** | Query params de paginación mal formados |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | La API key no tiene acceso al listado |  -  |
|**409** | Conflicto al mapear los resultados |  -  |
|**500** | Error interno |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resendWorkflooNip**
> ControllerWorkflooModelNipResendStatus resendWorkflooNip()

Reenvía el NIP y devuelve el estado del flujo NIP. El body es opcional (teléfono al que reenviar).

### Example

```typescript
import {
    WorkflooApi,
    Configuration,
    ControllerWorkflooModelNipResendRequest
} from '@kiban/workfloo';

const configuration = new Configuration();
const apiInstance = new WorkflooApi(configuration);

let id: string; //Id de la ejecución (default to undefined)
let sandbox: boolean; //Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)
let controllerWorkflooModelNipResendRequest: ControllerWorkflooModelNipResendRequest; //Teléfono al que reenviar (opcional) (optional)

const { status, data } = await apiInstance.resendWorkflooNip(
    id,
    sandbox,
    controllerWorkflooModelNipResendRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **controllerWorkflooModelNipResendRequest** | **ControllerWorkflooModelNipResendRequest**| Teléfono al que reenviar (opcional) | |
| **id** | [**string**] | Id de la ejecución | defaults to undefined|
| **sandbox** | [**boolean**] | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


### Return type

**ControllerWorkflooModelNipResendStatus**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Estado del NIP tras reenviar |  -  |
|**400** | Teléfono/country code inválidos o error de negocio |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | Sin acceso a esa ejecución |  -  |
|**404** | La ejecución no existe |  -  |
|**500** | Error interno |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reviewWorkflooValidation**
> reviewWorkflooValidation(controllerWorkflooModelReviewRequest)

Aplica la decisión del revisor sobre un nodo VALIDATION en estado REVIEW: aprobar o rechazar. En un rechazo, reviews indica los campos a corregir con su mensaje.

### Example

```typescript
import {
    WorkflooApi,
    Configuration,
    ControllerWorkflooModelReviewRequest
} from '@kiban/workfloo';

const configuration = new Configuration();
const apiInstance = new WorkflooApi(configuration);

let id: string; //Id de la ejecución (default to undefined)
let controllerWorkflooModelReviewRequest: ControllerWorkflooModelReviewRequest; //Decisión del revisor
let sandbox: boolean; //Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.reviewWorkflooValidation(
    id,
    controllerWorkflooModelReviewRequest,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **controllerWorkflooModelReviewRequest** | **ControllerWorkflooModelReviewRequest**| Decisión del revisor | |
| **id** | [**string**] | Id de la ejecución | defaults to undefined|
| **sandbox** | [**boolean**] | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


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
|**200** | Decisión aplicada; la ejecución avanza o pasa a corrección |  -  |
|**400** | Body inválido |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | Sin acceso a ese paso de revisión |  -  |
|**404** | La ejecución no existe |  -  |
|**409** | El paso no está en estado revisable |  -  |
|**500** | Error interno |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendWorkflooNip**
> sendWorkflooNip()

Envía el NIP (código de un solo uso) del nodo NIP actual. El body es opcional; si se incluye teléfono, countryCode y phoneNumber van juntos.

### Example

```typescript
import {
    WorkflooApi,
    Configuration,
    ControllerWorkflooModelNipSendRequest
} from '@kiban/workfloo';

const configuration = new Configuration();
const apiInstance = new WorkflooApi(configuration);

let id: string; //Id de la ejecución (default to undefined)
let sandbox: boolean; //Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)
let controllerWorkflooModelNipSendRequest: ControllerWorkflooModelNipSendRequest; //Teléfono al que enviar el NIP (opcional) (optional)

const { status, data } = await apiInstance.sendWorkflooNip(
    id,
    sandbox,
    controllerWorkflooModelNipSendRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **controllerWorkflooModelNipSendRequest** | **ControllerWorkflooModelNipSendRequest**| Teléfono al que enviar el NIP (opcional) | |
| **id** | [**string**] | Id de la ejecución | defaults to undefined|
| **sandbox** | [**boolean**] | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


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
|**200** | NIP enviado |  -  |
|**400** | Teléfono/country code inválidos o error de negocio |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | Sin acceso a esa ejecución |  -  |
|**404** | La ejecución no existe |  -  |
|**500** | Error interno |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitWorkflooCorrection**
> submitWorkflooCorrection(body)

Reenvía los campos corregidos por el prospecto cuando un nodo VALIDATION está en estado CORRECTION. El body es un objeto {campoId: valor}, igual que el formulario.

### Example

```typescript
import {
    WorkflooApi,
    Configuration
} from '@kiban/workfloo';

const configuration = new Configuration();
const apiInstance = new WorkflooApi(configuration);

let id: string; //Id de la ejecución (default to undefined)
let body: object; //Campos corregidos: {campoId: valor}
let sandbox: boolean; //Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.submitWorkflooCorrection(
    id,
    body,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**| Campos corregidos: {campoId: valor} | |
| **id** | [**string**] | Id de la ejecución | defaults to undefined|
| **sandbox** | [**boolean**] | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


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
|**200** | Corrección aceptada; la ejecución vuelve a revisión o avanza |  -  |
|**400** | Errores de validación por campo |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | Sin acceso a ese paso |  -  |
|**404** | La ejecución no existe |  -  |
|**409** | El paso no está en estado de corrección |  -  |
|**500** | Error interno |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateWorkflooNip**
> ControllerWorkflooModelNipValidateResponse validateWorkflooNip(controllerWorkflooModelNipValidateRequest)

Valida el NIP capturado por el usuario y devuelve la fase resultante del flujo NIP.

### Example

```typescript
import {
    WorkflooApi,
    Configuration,
    ControllerWorkflooModelNipValidateRequest
} from '@kiban/workfloo';

const configuration = new Configuration();
const apiInstance = new WorkflooApi(configuration);

let id: string; //Id de la ejecución (default to undefined)
let controllerWorkflooModelNipValidateRequest: ControllerWorkflooModelNipValidateRequest; //El NIP a validar
let sandbox: boolean; //Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.validateWorkflooNip(
    id,
    controllerWorkflooModelNipValidateRequest,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **controllerWorkflooModelNipValidateRequest** | **ControllerWorkflooModelNipValidateRequest**| El NIP a validar | |
| **id** | [**string**] | Id de la ejecución | defaults to undefined|
| **sandbox** | [**boolean**] | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


### Return type

**ControllerWorkflooModelNipValidateResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fase resultante |  -  |
|**400** | NIP ausente o incorrecto |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | NIP rechazado / sin acceso |  -  |
|**404** | La ejecución no existe |  -  |
|**500** | Error interno |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateWorkflooOtp**
> validateWorkflooOtp(controllerWorkflooModelOtpValidateRequest)

Envía al proveedor el código que tecleó la persona en el paso de verificación (ver `verification` en el estatus). Un código incorrecto con intentos restantes responde 400 con `{\"error\", \"remainingRetries\"}` y la ejecución sigue estacionada; al agotar los intentos responde 403, salvo que el nodo tenga rama de error, en cuyo caso el flujo continúa por ahí y responde 200.

### Example

```typescript
import {
    WorkflooApi,
    Configuration,
    ControllerWorkflooModelOtpValidateRequest
} from '@kiban/workfloo';

const configuration = new Configuration();
const apiInstance = new WorkflooApi(configuration);

let id: string; //Id de la ejecución (default to undefined)
let controllerWorkflooModelOtpValidateRequest: ControllerWorkflooModelOtpValidateRequest; //El código a validar
let sandbox: boolean; //Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.validateWorkflooOtp(
    id,
    controllerWorkflooModelOtpValidateRequest,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **controllerWorkflooModelOtpValidateRequest** | **ControllerWorkflooModelOtpValidateRequest**| El código a validar | |
| **id** | [**string**] | Id de la ejecución | defaults to undefined|
| **sandbox** | [**boolean**] | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


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
|**200** | Código validado (o intentos agotados con rama de error) |  -  |
|**400** | Token ausente o código incorrecto (incluye remainingRetries) |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | Sin código pendiente, intentos agotados, sin acceso, o la ejecución siguió ocupada procesando otro paso tras ~4.5 s de espera |  -  |
|**404** | La ejecución no existe |  -  |
|**500** | Error interno (incluye otra petición tomando la ejecución en el mismo instante; reintentar) |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

