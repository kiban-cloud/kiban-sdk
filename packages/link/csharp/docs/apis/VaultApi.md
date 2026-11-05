# Kiban.Link.Api.VaultApi

All URIs are relative to *https://link.kiban.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateVault**](VaultApi.md#createvault) | **POST** /api/v3/vault/na | Crear una credencial |
| [**DeleteVault**](VaultApi.md#deletevault) | **DELETE** /api/v3/vault/na/{id} | Borrar una credencial |
| [**GetVault**](VaultApi.md#getvault) | **GET** /api/v1/vault/na/{id} | Detalle de una credencial |
| [**ListVaults**](VaultApi.md#listvaults) | **GET** /api/v1/vault/na | Listar credenciales |
| [**UpdateVault**](VaultApi.md#updatevault) | **PUT** /api/v3/vault/na/{id} | Editar una credencial |
| [**ValidateVault**](VaultApi.md#validatevault) | **POST** /api/v3/{service}/{subservice}/vault | Validar una credencial para un servicio |

<a id="createvault"></a>
# **CreateVault**
> ControllerMicroserviceModelMicroserviceDetailDto CreateVault (Object body, bool sandbox = null)

Crear una credencial

Guarda una credencial (vault) para usarla después en los servicios que la piden. El tipo sale del catálogo de tipos de credencial y define qué campos lleva el body; por ejemplo {\"name\": \"buro-pf\", \"type\": \"BC_PF\", \"usuario\": \"…\", \"password\": \"…\"}. Los secretos nunca se devuelven.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **body** | **Object** | Objeto con name, type y los campos propios del tipo de credencial (cada tipo define los suyos; por ejemplo BC_PF: usuario, password y autorenew opcional). Los secretos nunca se devuelven |  |
| **sandbox** | **bool** | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

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
| **200** | Credencial creada |  -  |
| **400** | Datos inválidos |  -  |
| **401** | API key ausente o inválida |  -  |
| **409** | Ya existe una credencial con ese nombre |  -  |
| **500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deletevault"></a>
# **DeleteVault**
> void DeleteVault (string id, bool sandbox = null)

Borrar una credencial

Borra una credencial guardada (vault) y su secreto.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | Id de la credencial |  |
| **sandbox** | **bool** | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

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
| **200** | Credencial borrada |  -  |
| **400** | Id ausente |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin permiso para borrar credenciales |  -  |
| **404** | La credencial no existe |  -  |
| **500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getvault"></a>
# **GetVault**
> ControllerMicroserviceModelMicroserviceDetailDto GetVault (string id, bool sandbox = null)

Detalle de una credencial

Devuelve una credencial guardada, sin sus secretos.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | Id de la credencial |  |
| **sandbox** | **bool** | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

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
| **200** | Credencial |  -  |
| **400** | Id ausente |  -  |
| **401** | API key ausente o inválida |  -  |
| **404** | La credencial no existe |  -  |
| **500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listvaults"></a>
# **ListVaults**
> ControllerMicroserviceModelExecutionPage ListVaults (int page, int itemsPerPage, bool sandbox = null)

Listar credenciales

Devuelve una página de las credenciales guardadas, sin sus secretos.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **page** | **int** | Número de página, empieza en 1 |  |
| **itemsPerPage** | **int** | Resultados por página |  |
| **sandbox** | **bool** | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

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
| **200** | Página de credenciales |  -  |
| **400** | Parámetros de paginación inválidos |  -  |
| **401** | API key ausente o inválida |  -  |
| **500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="updatevault"></a>
# **UpdateVault**
> void UpdateVault (string id, Object body, bool sandbox = null)

Editar una credencial

Actualiza una credencial guardada (vault). Se mandan todos sus campos, incluidos los secretos.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | Id de la credencial |  |
| **body** | **Object** | Objeto con name, type y los campos propios del tipo de credencial (cada tipo define los suyos; por ejemplo BC_PF: usuario, password y autorenew opcional). Los secretos nunca se devuelven |  |
| **sandbox** | **bool** | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

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
| **200** | Credencial actualizada |  -  |
| **400** | Datos inválidos |  -  |
| **401** | API key ausente o inválida |  -  |
| **404** | La credencial no existe |  -  |
| **408** | Tiempo de espera agotado |  -  |
| **409** | Conflicto con los datos enviados |  -  |
| **500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="validatevault"></a>
# **ValidateVault**
> ControllerMicroserviceModelVaultValidationDto ValidateVault (string service, string subservice, ControllerMicroserviceModelVaultNameDto controllerMicroserviceModelVaultNameDto, bool sandbox = null)

Validar una credencial para un servicio

Dice si una credencial existe y sirve para el servicio indicado en la ruta.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **service** | **string** | Servicio del catálogo |  |
| **subservice** | **string** | Operación del servicio |  |
| **controllerMicroserviceModelVaultNameDto** | [**ControllerMicroserviceModelVaultNameDto**](ControllerMicroserviceModelVaultNameDto.md) | Nombre de la credencial |  |
| **sandbox** | **bool** | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | [optional]  |

### Return type

[**ControllerMicroserviceModelVaultValidationDto**](ControllerMicroserviceModelVaultValidationDto.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Resultado de la validación |  -  |
| **400** | Body inválido |  -  |
| **401** | API key ausente o inválida |  -  |
| **500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

