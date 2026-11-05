# kiban.link.VaultApi

All URIs are relative to *https://link.kiban.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_vault**](VaultApi.md#create_vault) | **POST** /api/v3/vault/na | Crear una credencial
[**delete_vault**](VaultApi.md#delete_vault) | **DELETE** /api/v3/vault/na/{id} | Borrar una credencial
[**get_vault**](VaultApi.md#get_vault) | **GET** /api/v1/vault/na/{id} | Detalle de una credencial
[**list_vaults**](VaultApi.md#list_vaults) | **GET** /api/v1/vault/na | Listar credenciales
[**update_vault**](VaultApi.md#update_vault) | **PUT** /api/v3/vault/na/{id} | Editar una credencial
[**validate_vault**](VaultApi.md#validate_vault) | **POST** /api/v3/{service}/{subservice}/vault | Validar una credencial para un servicio


# **create_vault**
> ControllerMicroserviceModelMicroserviceDetailDto create_vault(body, sandbox=sandbox)

Crear una credencial

Guarda una credencial (vault) para usarla después en los servicios que la piden. El tipo sale del catálogo de tipos de credencial y define qué campos lleva el body; por ejemplo {"name": "buro-pf", "type": "BC_PF", "usuario": "…", "password": "…"}. Los secretos nunca se devuelven.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.link
from kiban.link.models.controller_microservice_model_microservice_detail_dto import ControllerMicroserviceModelMicroserviceDetailDto
from kiban.link.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://link.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.link.Configuration(
    host = "https://link.kiban.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with kiban.link.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.link.VaultApi(api_client)
    body = None # object | Objeto con name, type y los campos propios del tipo de credencial (cada tipo define los suyos; por ejemplo BC_PF: usuario, password y autorenew opcional). Los secretos nunca se devuelven
    sandbox = True # bool | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Crear una credencial
        api_response = api_instance.create_vault(body, sandbox=sandbox)
        print("The response of VaultApi->create_vault:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultApi->create_vault: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**| Objeto con name, type y los campos propios del tipo de credencial (cada tipo define los suyos; por ejemplo BC_PF: usuario, password y autorenew opcional). Los secretos nunca se devuelven | 
 **sandbox** | **bool**| Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**200** | Credencial creada |  -  |
**400** | Datos inválidos |  -  |
**401** | API key ausente o inválida |  -  |
**409** | Ya existe una credencial con ese nombre |  -  |
**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_vault**
> delete_vault(id, sandbox=sandbox)

Borrar una credencial

Borra una credencial guardada (vault) y su secreto.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.link
from kiban.link.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://link.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.link.Configuration(
    host = "https://link.kiban.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with kiban.link.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.link.VaultApi(api_client)
    id = 'id_example' # str | Id de la credencial
    sandbox = True # bool | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Borrar una credencial
        api_instance.delete_vault(id, sandbox=sandbox)
    except Exception as e:
        print("Exception when calling VaultApi->delete_vault: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id de la credencial | 
 **sandbox** | **bool**| Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**200** | Credencial borrada |  -  |
**400** | Id ausente |  -  |
**401** | API key ausente o inválida |  -  |
**403** | Sin permiso para borrar credenciales |  -  |
**404** | La credencial no existe |  -  |
**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_vault**
> ControllerMicroserviceModelMicroserviceDetailDto get_vault(id, sandbox=sandbox)

Detalle de una credencial

Devuelve una credencial guardada, sin sus secretos.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.link
from kiban.link.models.controller_microservice_model_microservice_detail_dto import ControllerMicroserviceModelMicroserviceDetailDto
from kiban.link.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://link.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.link.Configuration(
    host = "https://link.kiban.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with kiban.link.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.link.VaultApi(api_client)
    id = 'id_example' # str | Id de la credencial
    sandbox = True # bool | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Detalle de una credencial
        api_response = api_instance.get_vault(id, sandbox=sandbox)
        print("The response of VaultApi->get_vault:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultApi->get_vault: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id de la credencial | 
 **sandbox** | **bool**| Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**200** | Credencial |  -  |
**400** | Id ausente |  -  |
**401** | API key ausente o inválida |  -  |
**404** | La credencial no existe |  -  |
**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_vaults**
> ControllerMicroserviceModelExecutionPage list_vaults(page, items_per_page, sandbox=sandbox)

Listar credenciales

Devuelve una página de las credenciales guardadas, sin sus secretos.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.link
from kiban.link.models.controller_microservice_model_execution_page import ControllerMicroserviceModelExecutionPage
from kiban.link.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://link.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.link.Configuration(
    host = "https://link.kiban.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with kiban.link.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.link.VaultApi(api_client)
    page = 56 # int | Número de página, empieza en 1
    items_per_page = 56 # int | Resultados por página
    sandbox = True # bool | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Listar credenciales
        api_response = api_instance.list_vaults(page, items_per_page, sandbox=sandbox)
        print("The response of VaultApi->list_vaults:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultApi->list_vaults: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Número de página, empieza en 1 | 
 **items_per_page** | **int**| Resultados por página | 
 **sandbox** | **bool**| Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**200** | Página de credenciales |  -  |
**400** | Parámetros de paginación inválidos |  -  |
**401** | API key ausente o inválida |  -  |
**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_vault**
> update_vault(id, body, sandbox=sandbox)

Editar una credencial

Actualiza una credencial guardada (vault). Se mandan todos sus campos, incluidos los secretos.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.link
from kiban.link.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://link.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.link.Configuration(
    host = "https://link.kiban.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with kiban.link.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.link.VaultApi(api_client)
    id = 'id_example' # str | Id de la credencial
    body = None # object | Objeto con name, type y los campos propios del tipo de credencial (cada tipo define los suyos; por ejemplo BC_PF: usuario, password y autorenew opcional). Los secretos nunca se devuelven
    sandbox = True # bool | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Editar una credencial
        api_instance.update_vault(id, body, sandbox=sandbox)
    except Exception as e:
        print("Exception when calling VaultApi->update_vault: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id de la credencial | 
 **body** | **object**| Objeto con name, type y los campos propios del tipo de credencial (cada tipo define los suyos; por ejemplo BC_PF: usuario, password y autorenew opcional). Los secretos nunca se devuelven | 
 **sandbox** | **bool**| Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**200** | Credencial actualizada |  -  |
**400** | Datos inválidos |  -  |
**401** | API key ausente o inválida |  -  |
**404** | La credencial no existe |  -  |
**408** | Tiempo de espera agotado |  -  |
**409** | Conflicto con los datos enviados |  -  |
**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validate_vault**
> ControllerMicroserviceModelVaultValidationDto validate_vault(service, subservice, controller_microservice_model_vault_name_dto, sandbox=sandbox)

Validar una credencial para un servicio

Dice si una credencial existe y sirve para el servicio indicado en la ruta.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.link
from kiban.link.models.controller_microservice_model_vault_name_dto import ControllerMicroserviceModelVaultNameDto
from kiban.link.models.controller_microservice_model_vault_validation_dto import ControllerMicroserviceModelVaultValidationDto
from kiban.link.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://link.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.link.Configuration(
    host = "https://link.kiban.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with kiban.link.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.link.VaultApi(api_client)
    service = 'service_example' # str | Servicio del catálogo
    subservice = 'subservice_example' # str | Operación del servicio
    controller_microservice_model_vault_name_dto = kiban.link.ControllerMicroserviceModelVaultNameDto() # ControllerMicroserviceModelVaultNameDto | Nombre de la credencial
    sandbox = True # bool | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Validar una credencial para un servicio
        api_response = api_instance.validate_vault(service, subservice, controller_microservice_model_vault_name_dto, sandbox=sandbox)
        print("The response of VaultApi->validate_vault:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VaultApi->validate_vault: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | **str**| Servicio del catálogo | 
 **subservice** | **str**| Operación del servicio | 
 **controller_microservice_model_vault_name_dto** | [**ControllerMicroserviceModelVaultNameDto**](ControllerMicroserviceModelVaultNameDto.md)| Nombre de la credencial | 
 **sandbox** | **bool**| Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**200** | Resultado de la validación |  -  |
**400** | Body inválido |  -  |
**401** | API key ausente o inválida |  -  |
**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

