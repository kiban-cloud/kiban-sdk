# LinkApi

All URIs are relative to *https://link.kiban.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeService**](#executeservice) | **POST** /api/v3/{service}/{subservice} | Ejecutar un servicio de link|
|[**getExecution**](#getexecution) | **GET** /api/v1/{service}/{subservice}/{id} | Detalle de una ejecución|
|[**getFile**](#getfile) | **GET** /api/v1/file | Descargar un archivo de una ejecución|
|[**listExecutions**](#listexecutions) | **GET** /api/v1/{service}/{subservice} | Historial de ejecuciones de un servicio|
|[**listTestCases**](#listtestcases) | **GET** /api/v3/{service}/{subservice}/test_case | Test cases de un servicio|

# **executeService**
> ControllerMicroserviceModelMicroserviceDetailDto executeService(body)

Ejecuta un servicio del catálogo de link (p. ej. curp/validate, sat/rfc_validate_pf, imss/nss). El servicio y la operación van en la ruta; el body depende de cada servicio. Responde el detalle de la ejecución, también cuando el proveedor falla (408/503/406 traen el detalle con su error). Los subservicios de auditoría responden un CSV.

### Example

```typescript
import {
    LinkApi,
    Configuration
} from '@kiban/link';

const configuration = new Configuration();
const apiInstance = new LinkApi(configuration);

let service: string; //Servicio del catálogo (p. ej. curp, sat, imss, bc_pf) (default to undefined)
let subservice: string; //Operación del servicio (p. ej. validate, query) (default to undefined)
let body: object; //Datos del servicio; cada servicio define sus campos
let sandbox: boolean; //Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)
let testCase: string; //Sandbox: nombre del test case que debe responder (optional) (default to undefined)
let testCaseId: string; //Sandbox: id del test case que debe responder (optional) (default to undefined)
let origin: string; //Identificador libre del origen de la petición (optional) (default to undefined)

const { status, data } = await apiInstance.executeService(
    service,
    subservice,
    body,
    sandbox,
    testCase,
    testCaseId,
    origin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**| Datos del servicio; cada servicio define sus campos | |
| **service** | [**string**] | Servicio del catálogo (p. ej. curp, sat, imss, bc_pf) | defaults to undefined|
| **subservice** | [**string**] | Operación del servicio (p. ej. validate, query) | defaults to undefined|
| **sandbox** | [**boolean**] | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|
| **testCase** | [**string**] | Sandbox: nombre del test case que debe responder | (optional) defaults to undefined|
| **testCaseId** | [**string**] | Sandbox: id del test case que debe responder | (optional) defaults to undefined|
| **origin** | [**string**] | Identificador libre del origen de la petición | (optional) defaults to undefined|


### Return type

**ControllerMicroserviceModelMicroserviceDetailDto**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ejecución realizada |  -  |
|**400** | Datos inválidos o faltantes para ese servicio |  -  |
|**401** | API key ausente o inválida |  -  |
|**404** | El servicio no existe o no está disponible en esta versión |  -  |
|**406** | El proveedor rechazó la petición |  -  |
|**408** | Tiempo de espera agotado con el proveedor |  -  |
|**409** | Conflicto con los datos enviados |  -  |
|**500** | Error interno |  -  |
|**503** | Proveedor no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExecution**
> ControllerMicroserviceModelMicroserviceDetailDto getExecution()

Devuelve una ejecución: su estatus, la respuesta procesada y el detalle de las llamadas al proveedor (apiData).

### Example

```typescript
import {
    LinkApi,
    Configuration
} from '@kiban/link';

const configuration = new Configuration();
const apiInstance = new LinkApi(configuration);

let service: string; //Servicio del catálogo (default to undefined)
let subservice: string; //Operación del servicio (default to undefined)
let id: string; //Id de la ejecución (default to undefined)
let sandbox: boolean; //Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.getExecution(
    service,
    subservice,
    id,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **service** | [**string**] | Servicio del catálogo | defaults to undefined|
| **subservice** | [**string**] | Operación del servicio | defaults to undefined|
| **id** | [**string**] | Id de la ejecución | defaults to undefined|
| **sandbox** | [**boolean**] | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


### Return type

**ControllerMicroserviceModelMicroserviceDetailDto**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Detalle de la ejecución |  -  |
|**400** | Id ausente |  -  |
|**401** | API key ausente o inválida |  -  |
|**404** | La ejecución no existe |  -  |
|**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFile**
> File getFile()

Descarga un archivo generado por una ejecución (p. ej. un PDF). La ruta del archivo viene en el detalle de la ejecución (apiData[].files[].path).

### Example

```typescript
import {
    LinkApi,
    Configuration
} from '@kiban/link';

const configuration = new Configuration();
const apiInstance = new LinkApi(configuration);

let path: string; //Ruta del archivo, tal como viene en el detalle de la ejecución (default to undefined)
let sandbox: boolean; //Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.getFile(
    path,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] | Ruta del archivo, tal como viene en el detalle de la ejecución | defaults to undefined|
| **sandbox** | [**boolean**] | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Contenido del archivo |  -  |
|**400** | Falta el parámetro path o es inválido |  -  |
|**401** | API key ausente o inválida |  -  |
|**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listExecutions**
> ControllerMicroserviceModelExecutionPage listExecutions()

Devuelve una página del historial de un servicio. Cualquier query param que no esté listado aquí se usa como filtro sobre el historial.

### Example

```typescript
import {
    LinkApi,
    Configuration
} from '@kiban/link';

const configuration = new Configuration();
const apiInstance = new LinkApi(configuration);

let service: string; //Servicio del catálogo (default to undefined)
let subservice: string; //Operación del servicio (default to undefined)
let page: number; //Número de página, empieza en 1 (default to undefined)
let itemsPerPage: number; //Resultados por página (default to undefined)
let sandbox: boolean; //Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.listExecutions(
    service,
    subservice,
    page,
    itemsPerPage,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **service** | [**string**] | Servicio del catálogo | defaults to undefined|
| **subservice** | [**string**] | Operación del servicio | defaults to undefined|
| **page** | [**number**] | Número de página, empieza en 1 | defaults to undefined|
| **itemsPerPage** | [**number**] | Resultados por página | defaults to undefined|
| **sandbox** | [**boolean**] | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


### Return type

**ControllerMicroserviceModelExecutionPage**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Página de ejecuciones |  -  |
|**400** | Parámetros de paginación o filtros inválidos |  -  |
|**401** | API key ausente o inválida |  -  |
|**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTestCases**
> Array<ControllerTestCaseModelTestCaseOutputMany> listTestCases()

Devuelve los test cases configurados para un servicio. En sandbox, la ejecución responde uno de ellos en lugar de llamar al proveedor (se elige con testCase o testCaseId al ejecutar).

### Example

```typescript
import {
    LinkApi,
    Configuration
} from '@kiban/link';

const configuration = new Configuration();
const apiInstance = new LinkApi(configuration);

let service: string; //Servicio del catálogo (default to undefined)
let subservice: string; //Operación del servicio (default to undefined)
let sandbox: boolean; //Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.listTestCases(
    service,
    subservice,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **service** | [**string**] | Servicio del catálogo | defaults to undefined|
| **subservice** | [**string**] | Operación del servicio | defaults to undefined|
| **sandbox** | [**boolean**] | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


### Return type

**Array<ControllerTestCaseModelTestCaseOutputMany>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Test cases del servicio |  -  |
|**400** | Servicio u operación ausente |  -  |
|**401** | API key ausente o inválida |  -  |
|**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

