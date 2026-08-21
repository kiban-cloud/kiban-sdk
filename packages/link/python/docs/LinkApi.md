# kiban.sdk.link.LinkApi

All URIs are relative to *https://link.kiban.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_file_get**](LinkApi.md#api_v1_file_get) | **GET** /api/v1/file | Descargar un archivo de una ejecución
[**api_vversion_service_subservice_get**](LinkApi.md#api_vversion_service_subservice_get) | **GET** /api/v{version}/{service}/{subservice} | Historial de ejecuciones de un servicio
[**api_vversion_service_subservice_id_get**](LinkApi.md#api_vversion_service_subservice_id_get) | **GET** /api/v{version}/{service}/{subservice}/{id} | Detalle de una ejecución
[**api_vversion_service_subservice_post**](LinkApi.md#api_vversion_service_subservice_post) | **POST** /api/v{version}/{service}/{subservice} | Ejecutar un servicio de Link
[**api_vversion_service_subservice_test_case_get**](LinkApi.md#api_vversion_service_subservice_test_case_get) | **GET** /api/v{version}/{service}/{subservice}/test_case | Test cases de un servicio (sandbox)
[**api_vversion_service_subservice_vault_post**](LinkApi.md#api_vversion_service_subservice_vault_post) | **POST** /api/v{version}/{service}/{subservice}/vault | Validar un vault


# **api_v1_file_get**
> bytes api_v1_file_get(path)

Descargar un archivo de una ejecución

Descarga un archivo generado por una ejecución (por ejemplo un PDF o comprobante). La ruta del archivo se obtiene del detalle de la ejecución y se pasa en el query param path.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.link
from kiban.sdk.link.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://link.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.link.Configuration(
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
with kiban.sdk.link.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.link.LinkApi(api_client)
    path = 'path_example' # str | Ruta del archivo, tal como viene en el detalle de la ejecución

    try:
        # Descargar un archivo de una ejecución
        api_response = api_instance.api_v1_file_get(path)
        print("The response of LinkApi->api_v1_file_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinkApi->api_v1_file_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| Ruta del archivo, tal como viene en el detalle de la ejecución | 

### Return type

**bytes**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contenido del archivo |  -  |
**400** | Query param path ausente |  -  |
**401** | API key ausente o inválida |  -  |
**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_vversion_service_subservice_get**
> ControllerMicroserviceModelLinkExecutionPage api_vversion_service_subservice_get(version, service, subservice, page, items_per_page)

Historial de ejecuciones de un servicio

Devuelve una página del historial de ejecuciones de un service/subservice. Cualquier query param adicional no listado aquí se interpreta como filtro de búsqueda sobre el listado (searchableBy).

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.link
from kiban.sdk.link.models.controller_microservice_model_link_execution_page import ControllerMicroserviceModelLinkExecutionPage
from kiban.sdk.link.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://link.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.link.Configuration(
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
with kiban.sdk.link.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.link.LinkApi(api_client)
    version = 'version_example' # str | Versión de la API (por ejemplo 1 o 2)
    service = 'service_example' # str | Servicio del catálogo Link
    subservice = 'subservice_example' # str | Operación del servicio
    page = 56 # int | Número de página, empieza en 1
    items_per_page = 56 # int | Cantidad de resultados por página

    try:
        # Historial de ejecuciones de un servicio
        api_response = api_instance.api_vversion_service_subservice_get(version, service, subservice, page, items_per_page)
        print("The response of LinkApi->api_vversion_service_subservice_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinkApi->api_vversion_service_subservice_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **str**| Versión de la API (por ejemplo 1 o 2) | 
 **service** | **str**| Servicio del catálogo Link | 
 **subservice** | **str**| Operación del servicio | 
 **page** | **int**| Número de página, empieza en 1 | 
 **items_per_page** | **int**| Cantidad de resultados por página | 

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
**200** | Página de ejecuciones |  -  |
**400** | Query params de paginación ausentes o mal formados |  -  |
**401** | API key ausente o inválida |  -  |
**403** | La API key no tiene acceso al listado |  -  |
**500** | Error interno |  -  |
**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_vversion_service_subservice_id_get**
> ControllerMicroserviceModelMicroserviceDetailDto api_vversion_service_subservice_id_get(version, service, subservice, id)

Detalle de una ejecución

Devuelve el detalle de una ejecución: su estatus, la respuesta procesada y el raw de las llamadas al proveedor (apiData).

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.link
from kiban.sdk.link.models.controller_microservice_model_microservice_detail_dto import ControllerMicroserviceModelMicroserviceDetailDto
from kiban.sdk.link.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://link.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.link.Configuration(
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
with kiban.sdk.link.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.link.LinkApi(api_client)
    version = 'version_example' # str | Versión de la API (por ejemplo 1 o 2)
    service = 'service_example' # str | Servicio del catálogo Link
    subservice = 'subservice_example' # str | Operación del servicio
    id = 'id_example' # str | Id de la ejecución

    try:
        # Detalle de una ejecución
        api_response = api_instance.api_vversion_service_subservice_id_get(version, service, subservice, id)
        print("The response of LinkApi->api_vversion_service_subservice_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinkApi->api_vversion_service_subservice_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **str**| Versión de la API (por ejemplo 1 o 2) | 
 **service** | **str**| Servicio del catálogo Link | 
 **subservice** | **str**| Operación del servicio | 
 **id** | **str**| Id de la ejecución | 

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
**200** | Detalle de la ejecución |  -  |
**400** | Id ausente o mal formado |  -  |
**401** | API key ausente o inválida |  -  |
**403** | La API key no tiene acceso a esa ejecución |  -  |
**404** | La ejecución no existe |  -  |
**500** | Error interno |  -  |
**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_vversion_service_subservice_post**
> ControllerMicroserviceModelMicroserviceDetailDto api_vversion_service_subservice_post(version, service, subservice, body, origin=origin, mock=mock)

Ejecutar un servicio de Link

Ejecuta un servicio del catálogo Link (por ejemplo curp/validate, sat/pf_data_from_rfc, nip/send). El servicio y la operación se eligen en la ruta con {service}/{subservice}.
El cuerpo de la petición depende del servicio elegido: cada servicio define sus propios campos. Consulta el catálogo de servicios para el detalle de cada uno.
En sandbox no se llama al proveedor real; se devuelve un test case configurable.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.link
from kiban.sdk.link.models.controller_microservice_model_microservice_detail_dto import ControllerMicroserviceModelMicroserviceDetailDto
from kiban.sdk.link.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://link.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.link.Configuration(
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
with kiban.sdk.link.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.link.LinkApi(api_client)
    version = 'version_example' # str | Versión de la API (por ejemplo 1 o 2)
    service = 'service_example' # str | Servicio del catálogo Link (por ejemplo curp, sat, imss, nip, sms)
    subservice = 'subservice_example' # str | Operación del servicio (por ejemplo validate, send, pf_data_from_rfc)
    body = None # object | Cuerpo específico del servicio. Sus campos varían por service/subservice
    origin = 'origin_example' # str | Identificador libre del origen de la petición, para atribución (optional)
    mock = True # bool | Si es true no llama al proveedor real y devuelve una respuesta mock (optional)

    try:
        # Ejecutar un servicio de Link
        api_response = api_instance.api_vversion_service_subservice_post(version, service, subservice, body, origin=origin, mock=mock)
        print("The response of LinkApi->api_vversion_service_subservice_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinkApi->api_vversion_service_subservice_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **str**| Versión de la API (por ejemplo 1 o 2) | 
 **service** | **str**| Servicio del catálogo Link (por ejemplo curp, sat, imss, nip, sms) | 
 **subservice** | **str**| Operación del servicio (por ejemplo validate, send, pf_data_from_rfc) | 
 **body** | **object**| Cuerpo específico del servicio. Sus campos varían por service/subservice | 
 **origin** | **str**| Identificador libre del origen de la petición, para atribución | [optional] 
 **mock** | **bool**| Si es true no llama al proveedor real y devuelve una respuesta mock | [optional] 

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
**200** | Ejecución realizada |  -  |
**400** | Cuerpo inválido o campos requeridos ausentes para ese servicio |  -  |
**401** | API key ausente o inválida |  -  |
**403** | La API key no tiene acceso a ese servicio |  -  |
**406** | El proveedor rechazó la petición |  -  |
**408** | Tiempo de espera agotado con el proveedor |  -  |
**409** | Conflicto al procesar la ejecución |  -  |
**500** | Error interno |  -  |
**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_vversion_service_subservice_test_case_get**
> List[ControllerTestCaseModelTestCaseOutputMany] api_vversion_service_subservice_test_case_get(version, service, subservice)

Test cases de un servicio (sandbox)

Devuelve los test cases configurados para un service/subservice. En sandbox, la ejecución de ese servicio devuelve uno de estos test cases en lugar de llamar al proveedor real.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.link
from kiban.sdk.link.models.controller_test_case_model_test_case_output_many import ControllerTestCaseModelTestCaseOutputMany
from kiban.sdk.link.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://link.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.link.Configuration(
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
with kiban.sdk.link.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.link.LinkApi(api_client)
    version = 'version_example' # str | Versión de la API (por ejemplo 1 o 2)
    service = 'service_example' # str | Servicio del catálogo Link
    subservice = 'subservice_example' # str | Operación del servicio

    try:
        # Test cases de un servicio (sandbox)
        api_response = api_instance.api_vversion_service_subservice_test_case_get(version, service, subservice)
        print("The response of LinkApi->api_vversion_service_subservice_test_case_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinkApi->api_vversion_service_subservice_test_case_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **str**| Versión de la API (por ejemplo 1 o 2) | 
 **service** | **str**| Servicio del catálogo Link | 
 **subservice** | **str**| Operación del servicio | 

### Return type

[**List[ControllerTestCaseModelTestCaseOutputMany]**](ControllerTestCaseModelTestCaseOutputMany.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Test cases del servicio |  -  |
**400** | Service o subservice ausente |  -  |
**401** | API key ausente o inválida |  -  |
**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_vversion_service_subservice_vault_post**
> Dict[str, str] api_vversion_service_subservice_vault_post(version, service, subservice, controller_microservice_model_vault_name_dto)

Validar un vault

Verifica si un vault (credencial guardada) existe y es del tipo correcto para el servicio. Devuelve status: valid, notValid o notFound.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.link
from kiban.sdk.link.models.controller_microservice_model_vault_name_dto import ControllerMicroserviceModelVaultNameDto
from kiban.sdk.link.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://link.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.link.Configuration(
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
with kiban.sdk.link.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.link.LinkApi(api_client)
    version = 'version_example' # str | Versión de la API (por ejemplo 1 o 2)
    service = 'service_example' # str | Servicio del catálogo Link
    subservice = 'subservice_example' # str | Operación del servicio
    controller_microservice_model_vault_name_dto = kiban.sdk.link.ControllerMicroserviceModelVaultNameDto() # ControllerMicroserviceModelVaultNameDto | Nombre del vault a validar

    try:
        # Validar un vault
        api_response = api_instance.api_vversion_service_subservice_vault_post(version, service, subservice, controller_microservice_model_vault_name_dto)
        print("The response of LinkApi->api_vversion_service_subservice_vault_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinkApi->api_vversion_service_subservice_vault_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **str**| Versión de la API (por ejemplo 1 o 2) | 
 **service** | **str**| Servicio del catálogo Link | 
 **subservice** | **str**| Operación del servicio | 
 **controller_microservice_model_vault_name_dto** | [**ControllerMicroserviceModelVaultNameDto**](ControllerMicroserviceModelVaultNameDto.md)| Nombre del vault a validar | 

### Return type

**Dict[str, str]**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resultado de la validación: {\\\&quot;status\\\&quot;: \\\&quot;valid|notValid|notFound\\\&quot;} |  -  |
**400** | Cuerpo inválido |  -  |
**401** | API key ausente o inválida |  -  |
**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

