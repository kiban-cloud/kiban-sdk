# LinkApi

All URIs are relative to *https://link.kiban.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV1FileGet**](#apiv1fileget) | **GET** /api/v1/file | Descargar un archivo de una ejecución|
|[**apiVversionServiceSubserviceGet**](#apivversionservicesubserviceget) | **GET** /api/v{version}/{service}/{subservice} | Historial de ejecuciones de un servicio|
|[**apiVversionServiceSubserviceIdGet**](#apivversionservicesubserviceidget) | **GET** /api/v{version}/{service}/{subservice}/{id} | Detalle de una ejecución|
|[**apiVversionServiceSubservicePost**](#apivversionservicesubservicepost) | **POST** /api/v{version}/{service}/{subservice} | Ejecutar un servicio de Link|
|[**apiVversionServiceSubserviceTestCaseGet**](#apivversionservicesubservicetestcaseget) | **GET** /api/v{version}/{service}/{subservice}/test_case | Test cases de un servicio (sandbox)|
|[**apiVversionServiceSubserviceVaultPost**](#apivversionservicesubservicevaultpost) | **POST** /api/v{version}/{service}/{subservice}/vault | Validar un vault|

# **apiV1FileGet**
> File apiV1FileGet()

Descarga un archivo generado por una ejecución (por ejemplo un PDF o comprobante). La ruta del archivo se obtiene del detalle de la ejecución y se pasa en el query param path.

### Example

```typescript
import {
    LinkApi,
    Configuration
} from 'kiban.sdk.link';

const configuration = new Configuration();
const apiInstance = new LinkApi(configuration);

let path: string; //Ruta del archivo, tal como viene en el detalle de la ejecución (default to undefined)

const { status, data } = await apiInstance.apiV1FileGet(
    path
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] | Ruta del archivo, tal como viene en el detalle de la ejecución | defaults to undefined|


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
|**400** | Query param path ausente |  -  |
|**401** | API key ausente o inválida |  -  |
|**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiVversionServiceSubserviceGet**
> ControllerMicroserviceModelLinkExecutionPage apiVversionServiceSubserviceGet()

Devuelve una página del historial de ejecuciones de un service/subservice. Cualquier query param adicional no listado aquí se interpreta como filtro de búsqueda sobre el listado (searchableBy).

### Example

```typescript
import {
    LinkApi,
    Configuration
} from 'kiban.sdk.link';

const configuration = new Configuration();
const apiInstance = new LinkApi(configuration);

let version: string; //Versión de la API (por ejemplo 1 o 2) (default to undefined)
let service: string; //Servicio del catálogo Link (default to undefined)
let subservice: string; //Operación del servicio (default to undefined)
let page: number; //Número de página, empieza en 1 (default to undefined)
let itemsPerPage: number; //Cantidad de resultados por página (default to undefined)

const { status, data } = await apiInstance.apiVversionServiceSubserviceGet(
    version,
    service,
    subservice,
    page,
    itemsPerPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **version** | [**string**] | Versión de la API (por ejemplo 1 o 2) | defaults to undefined|
| **service** | [**string**] | Servicio del catálogo Link | defaults to undefined|
| **subservice** | [**string**] | Operación del servicio | defaults to undefined|
| **page** | [**number**] | Número de página, empieza en 1 | defaults to undefined|
| **itemsPerPage** | [**number**] | Cantidad de resultados por página | defaults to undefined|


### Return type

**ControllerMicroserviceModelLinkExecutionPage**

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
|**500** | Error interno |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiVversionServiceSubserviceIdGet**
> ControllerMicroserviceModelMicroserviceDetailDto apiVversionServiceSubserviceIdGet()

Devuelve el detalle de una ejecución: su estatus, la respuesta procesada y el raw de las llamadas al proveedor (apiData).

### Example

```typescript
import {
    LinkApi,
    Configuration
} from 'kiban.sdk.link';

const configuration = new Configuration();
const apiInstance = new LinkApi(configuration);

let version: string; //Versión de la API (por ejemplo 1 o 2) (default to undefined)
let service: string; //Servicio del catálogo Link (default to undefined)
let subservice: string; //Operación del servicio (default to undefined)
let id: string; //Id de la ejecución (default to undefined)

const { status, data } = await apiInstance.apiVversionServiceSubserviceIdGet(
    version,
    service,
    subservice,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **version** | [**string**] | Versión de la API (por ejemplo 1 o 2) | defaults to undefined|
| **service** | [**string**] | Servicio del catálogo Link | defaults to undefined|
| **subservice** | [**string**] | Operación del servicio | defaults to undefined|
| **id** | [**string**] | Id de la ejecución | defaults to undefined|


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
|**400** | Id ausente o mal formado |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | La API key no tiene acceso a esa ejecución |  -  |
|**404** | La ejecución no existe |  -  |
|**500** | Error interno |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiVversionServiceSubservicePost**
> ControllerMicroserviceModelMicroserviceDetailDto apiVversionServiceSubservicePost(body)

Ejecuta un servicio del catálogo Link (por ejemplo curp/validate, sat/pf_data_from_rfc, nip/send). El servicio y la operación se eligen en la ruta con {service}/{subservice}. El cuerpo de la petición depende del servicio elegido: cada servicio define sus propios campos. Consulta el catálogo de servicios para el detalle de cada uno. En sandbox no se llama al proveedor real; se devuelve un test case configurable.

### Example

```typescript
import {
    LinkApi,
    Configuration
} from 'kiban.sdk.link';

const configuration = new Configuration();
const apiInstance = new LinkApi(configuration);

let version: string; //Versión de la API (por ejemplo 1 o 2) (default to undefined)
let service: string; //Servicio del catálogo Link (por ejemplo curp, sat, imss, nip, sms) (default to undefined)
let subservice: string; //Operación del servicio (por ejemplo validate, send, pf_data_from_rfc) (default to undefined)
let body: object; //Cuerpo específico del servicio. Sus campos varían por service/subservice
let origin: string; //Identificador libre del origen de la petición, para atribución (optional) (default to undefined)
let mock: boolean; //Si es true no llama al proveedor real y devuelve una respuesta mock (optional) (default to undefined)

const { status, data } = await apiInstance.apiVversionServiceSubservicePost(
    version,
    service,
    subservice,
    body,
    origin,
    mock
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**| Cuerpo específico del servicio. Sus campos varían por service/subservice | |
| **version** | [**string**] | Versión de la API (por ejemplo 1 o 2) | defaults to undefined|
| **service** | [**string**] | Servicio del catálogo Link (por ejemplo curp, sat, imss, nip, sms) | defaults to undefined|
| **subservice** | [**string**] | Operación del servicio (por ejemplo validate, send, pf_data_from_rfc) | defaults to undefined|
| **origin** | [**string**] | Identificador libre del origen de la petición, para atribución | (optional) defaults to undefined|
| **mock** | [**boolean**] | Si es true no llama al proveedor real y devuelve una respuesta mock | (optional) defaults to undefined|


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
|**400** | Cuerpo inválido o campos requeridos ausentes para ese servicio |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | La API key no tiene acceso a ese servicio |  -  |
|**406** | El proveedor rechazó la petición |  -  |
|**408** | Tiempo de espera agotado con el proveedor |  -  |
|**409** | Conflicto al procesar la ejecución |  -  |
|**500** | Error interno |  -  |
|**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiVversionServiceSubserviceTestCaseGet**
> Array<ControllerTestCaseModelTestCaseOutputMany> apiVversionServiceSubserviceTestCaseGet()

Devuelve los test cases configurados para un service/subservice. En sandbox, la ejecución de ese servicio devuelve uno de estos test cases en lugar de llamar al proveedor real.

### Example

```typescript
import {
    LinkApi,
    Configuration
} from 'kiban.sdk.link';

const configuration = new Configuration();
const apiInstance = new LinkApi(configuration);

let version: string; //Versión de la API (por ejemplo 1 o 2) (default to undefined)
let service: string; //Servicio del catálogo Link (default to undefined)
let subservice: string; //Operación del servicio (default to undefined)

const { status, data } = await apiInstance.apiVversionServiceSubserviceTestCaseGet(
    version,
    service,
    subservice
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **version** | [**string**] | Versión de la API (por ejemplo 1 o 2) | defaults to undefined|
| **service** | [**string**] | Servicio del catálogo Link | defaults to undefined|
| **subservice** | [**string**] | Operación del servicio | defaults to undefined|


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
|**400** | Service o subservice ausente |  -  |
|**401** | API key ausente o inválida |  -  |
|**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiVversionServiceSubserviceVaultPost**
> { [key: string]: string; } apiVversionServiceSubserviceVaultPost(controllerMicroserviceModelVaultNameDto)

Verifica si un vault (credencial guardada) existe y es del tipo correcto para el servicio. Devuelve status: valid, notValid o notFound.

### Example

```typescript
import {
    LinkApi,
    Configuration,
    ControllerMicroserviceModelVaultNameDto
} from 'kiban.sdk.link';

const configuration = new Configuration();
const apiInstance = new LinkApi(configuration);

let version: string; //Versión de la API (por ejemplo 1 o 2) (default to undefined)
let service: string; //Servicio del catálogo Link (default to undefined)
let subservice: string; //Operación del servicio (default to undefined)
let controllerMicroserviceModelVaultNameDto: ControllerMicroserviceModelVaultNameDto; //Nombre del vault a validar

const { status, data } = await apiInstance.apiVversionServiceSubserviceVaultPost(
    version,
    service,
    subservice,
    controllerMicroserviceModelVaultNameDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **controllerMicroserviceModelVaultNameDto** | **ControllerMicroserviceModelVaultNameDto**| Nombre del vault a validar | |
| **version** | [**string**] | Versión de la API (por ejemplo 1 o 2) | defaults to undefined|
| **service** | [**string**] | Servicio del catálogo Link | defaults to undefined|
| **subservice** | [**string**] | Operación del servicio | defaults to undefined|


### Return type

**{ [key: string]: string; }**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Resultado de la validación: {\\\&quot;status\\\&quot;: \\\&quot;valid|notValid|notFound\\\&quot;} |  -  |
|**400** | Cuerpo inválido |  -  |
|**401** | API key ausente o inválida |  -  |
|**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

