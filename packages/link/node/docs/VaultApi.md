# VaultApi

All URIs are relative to *https://link.kiban.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createVault**](#createvault) | **POST** /api/v3/vault/na | Crear una credencial|
|[**deleteVault**](#deletevault) | **DELETE** /api/v3/vault/na/{id} | Borrar una credencial|
|[**getVault**](#getvault) | **GET** /api/v1/vault/na/{id} | Detalle de una credencial|
|[**listVaults**](#listvaults) | **GET** /api/v1/vault/na | Listar credenciales|
|[**updateVault**](#updatevault) | **PUT** /api/v3/vault/na/{id} | Editar una credencial|
|[**validateVault**](#validatevault) | **POST** /api/v3/{service}/{subservice}/vault | Validar una credencial para un servicio|

# **createVault**
> ControllerMicroserviceModelMicroserviceDetailDto createVault(body)

Guarda una credencial (vault) para usarla después en los servicios que la piden. El tipo sale del catálogo de tipos de credencial y define qué campos lleva el body; por ejemplo {\"name\": \"buro-pf\", \"type\": \"BC_PF\", \"usuario\": \"…\", \"password\": \"…\"}. Los secretos nunca se devuelven.

### Example

```typescript
import {
    VaultApi,
    Configuration
} from '@kiban/link';

const configuration = new Configuration();
const apiInstance = new VaultApi(configuration);

let body: object; //Objeto con name, type y los campos propios del tipo de credencial (cada tipo define los suyos; por ejemplo BC_PF: usuario, password y autorenew opcional). Los secretos nunca se devuelven
let sandbox: boolean; //Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.createVault(
    body,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**| Objeto con name, type y los campos propios del tipo de credencial (cada tipo define los suyos; por ejemplo BC_PF: usuario, password y autorenew opcional). Los secretos nunca se devuelven | |
| **sandbox** | [**boolean**] | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


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
|**200** | Credencial creada |  -  |
|**400** | Datos inválidos |  -  |
|**401** | API key ausente o inválida |  -  |
|**409** | Ya existe una credencial con ese nombre |  -  |
|**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteVault**
> deleteVault()

Borra una credencial guardada (vault) y su secreto.

### Example

```typescript
import {
    VaultApi,
    Configuration
} from '@kiban/link';

const configuration = new Configuration();
const apiInstance = new VaultApi(configuration);

let id: string; //Id de la credencial (default to undefined)
let sandbox: boolean; //Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.deleteVault(
    id,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Id de la credencial | defaults to undefined|
| **sandbox** | [**boolean**] | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


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
|**200** | Credencial borrada |  -  |
|**400** | Id ausente |  -  |
|**401** | API key ausente o inválida |  -  |
|**403** | Sin permiso para borrar credenciales |  -  |
|**404** | La credencial no existe |  -  |
|**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getVault**
> ControllerMicroserviceModelMicroserviceDetailDto getVault()

Devuelve una credencial guardada, sin sus secretos.

### Example

```typescript
import {
    VaultApi,
    Configuration
} from '@kiban/link';

const configuration = new Configuration();
const apiInstance = new VaultApi(configuration);

let id: string; //Id de la credencial (default to undefined)
let sandbox: boolean; //Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.getVault(
    id,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Id de la credencial | defaults to undefined|
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
|**200** | Credencial |  -  |
|**400** | Id ausente |  -  |
|**401** | API key ausente o inválida |  -  |
|**404** | La credencial no existe |  -  |
|**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listVaults**
> ControllerMicroserviceModelExecutionPage listVaults()

Devuelve una página de las credenciales guardadas, sin sus secretos.

### Example

```typescript
import {
    VaultApi,
    Configuration
} from '@kiban/link';

const configuration = new Configuration();
const apiInstance = new VaultApi(configuration);

let page: number; //Número de página, empieza en 1 (default to undefined)
let itemsPerPage: number; //Resultados por página (default to undefined)
let sandbox: boolean; //Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.listVaults(
    page,
    itemsPerPage,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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
|**200** | Página de credenciales |  -  |
|**400** | Parámetros de paginación inválidos |  -  |
|**401** | API key ausente o inválida |  -  |
|**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateVault**
> updateVault(body)

Actualiza una credencial guardada (vault). Se mandan todos sus campos, incluidos los secretos.

### Example

```typescript
import {
    VaultApi,
    Configuration
} from '@kiban/link';

const configuration = new Configuration();
const apiInstance = new VaultApi(configuration);

let id: string; //Id de la credencial (default to undefined)
let body: object; //Objeto con name, type y los campos propios del tipo de credencial (cada tipo define los suyos; por ejemplo BC_PF: usuario, password y autorenew opcional). Los secretos nunca se devuelven
let sandbox: boolean; //Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.updateVault(
    id,
    body,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**| Objeto con name, type y los campos propios del tipo de credencial (cada tipo define los suyos; por ejemplo BC_PF: usuario, password y autorenew opcional). Los secretos nunca se devuelven | |
| **id** | [**string**] | Id de la credencial | defaults to undefined|
| **sandbox** | [**boolean**] | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Credencial actualizada |  -  |
|**400** | Datos inválidos |  -  |
|**401** | API key ausente o inválida |  -  |
|**404** | La credencial no existe |  -  |
|**408** | Tiempo de espera agotado |  -  |
|**409** | Conflicto con los datos enviados |  -  |
|**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateVault**
> ControllerMicroserviceModelVaultValidationDto validateVault(controllerMicroserviceModelVaultNameDto)

Dice si una credencial existe y sirve para el servicio indicado en la ruta.

### Example

```typescript
import {
    VaultApi,
    Configuration,
    ControllerMicroserviceModelVaultNameDto
} from '@kiban/link';

const configuration = new Configuration();
const apiInstance = new VaultApi(configuration);

let service: string; //Servicio del catálogo (default to undefined)
let subservice: string; //Operación del servicio (default to undefined)
let controllerMicroserviceModelVaultNameDto: ControllerMicroserviceModelVaultNameDto; //Nombre de la credencial
let sandbox: boolean; //Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional) (default to undefined)

const { status, data } = await apiInstance.validateVault(
    service,
    subservice,
    controllerMicroserviceModelVaultNameDto,
    sandbox
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **controllerMicroserviceModelVaultNameDto** | **ControllerMicroserviceModelVaultNameDto**| Nombre de la credencial | |
| **service** | [**string**] | Servicio del catálogo | defaults to undefined|
| **subservice** | [**string**] | Operación del servicio | defaults to undefined|
| **sandbox** | [**boolean**] | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | (optional) defaults to undefined|


### Return type

**ControllerMicroserviceModelVaultValidationDto**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Resultado de la validación |  -  |
|**400** | Body inválido |  -  |
|**401** | API key ausente o inválida |  -  |
|**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

