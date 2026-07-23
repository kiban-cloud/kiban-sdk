# WorkflooApi

All URIs are relative to *https://workfloo.kiban.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeWorkfloo**](#executeworkfloo) | **POST** /api/v1/workfloo | Ejecutar un workfloo|
|[**getWorkfloo**](#getworkfloo) | **GET** /api/v1/workfloo/{id} | Detalle de una ejecución|
|[**getWorkflooStatus**](#getworkfloostatus) | **GET** /api/v1/workfloo/status/{id} | Estatus de una ejecución|
|[**listWorkfloos**](#listworkfloos) | **GET** /api/v1/workfloo | Historial de ejecuciones (v1)|
|[**listWorkfloosV2**](#listworkfloosv2) | **GET** /api/v2/workfloo | Historial de ejecuciones (v2)|

# **executeWorkfloo**
> ControllerWorkflooModelExecuteResponse executeWorkfloo(controllerWorkflooModelExecute)

Crea y arranca una ejecución a partir de una definición de workfloo. Devuelve el id de la ejecución para consultar su estatus.

### Example

```typescript
import {
    WorkflooApi,
    Configuration,
    ControllerWorkflooModelExecute
} from 'kiban.sdk.workfloo';

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

# **getWorkfloo**
> ControllerWorkflooModelWorkflooResume getWorkfloo()

Devuelve el historial completo de una ejecución: todos sus nodos con request/response, variables, documentos y decisiones.

### Example

```typescript
import {
    WorkflooApi,
    Configuration
} from 'kiban.sdk.workfloo';

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

# **getWorkflooStatus**
> ControllerWorkflooModelWorkflooStatus getWorkflooStatus()

Devuelve el estado actual de la ejecución y el paso en el que está parada, con el payload que ese paso espera (formulario, documento, NIP, timer o corrección). Cuando el paso está procesando, currentNodeType lleva el sufijo _PROCESSING y el payload se omite.

### Example

```typescript
import {
    WorkflooApi,
    Configuration
} from 'kiban.sdk.workfloo';

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
} from 'kiban.sdk.workfloo';

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
> Array<ControllerWorkflooModelWorkfloo> listWorkfloosV2()

Igual que v1 pero devuelve el arreglo de ejecuciones directo, sin envoltorio. La paginación viaja en el header Link. Con format=csv la respuesta es un archivo CSV en lugar de JSON. Cualquier query param adicional no listado aquí se interpreta como filtro de búsqueda sobre el listado (searchableBy).

### Example

```typescript
import {
    WorkflooApi,
    Configuration
} from 'kiban.sdk.workfloo';

const configuration = new Configuration();
const apiInstance = new WorkflooApi(configuration);

let page: number; //Número de página, empieza en 1 (optional) (default to undefined)
let itemsPerPage: number; //Cantidad de resultados por página (optional) (default to undefined)
let status: string; //Filtra por estado de la ejecución (optional) (default to undefined)
let from: string; //Fecha inicial del rango (RFC3339) (optional) (default to undefined)
let to: string; //Fecha final del rango (RFC3339) (optional) (default to undefined)
let format: 'json' | 'csv'; //Formato de la respuesta (optional) (default to undefined)
let sandbox: boolean; //Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.listWorkfloosV2(
    page,
    itemsPerPage,
    status,
    from,
    to,
    format,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Número de página, empieza en 1 | (optional) defaults to undefined|
| **itemsPerPage** | [**number**] | Cantidad de resultados por página | (optional) defaults to undefined|
| **status** | [**string**] | Filtra por estado de la ejecución | (optional) defaults to undefined|
| **from** | [**string**] | Fecha inicial del rango (RFC3339) | (optional) defaults to undefined|
| **to** | [**string**] | Fecha final del rango (RFC3339) | (optional) defaults to undefined|
| **format** | [**&#39;json&#39; | &#39;csv&#39;**]**Array<&#39;json&#39; &#124; &#39;csv&#39;>** | Formato de la respuesta | (optional) defaults to undefined|
| **sandbox** | [**boolean**] | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


### Return type

**Array<ControllerWorkflooModelWorkfloo>**

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

