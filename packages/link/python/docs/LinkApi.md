# kiban.link.LinkApi

All URIs are relative to *https://link.kiban.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**execute_service**](LinkApi.md#execute_service) | **POST** /api/v3/{service}/{subservice} | Ejecutar un servicio de link
[**get_execution**](LinkApi.md#get_execution) | **GET** /api/v1/{service}/{subservice}/{id} | Detalle de una ejecución
[**get_file**](LinkApi.md#get_file) | **GET** /api/v1/file | Descargar un archivo de una ejecución
[**list_executions**](LinkApi.md#list_executions) | **GET** /api/v1/{service}/{subservice} | Historial de ejecuciones de un servicio
[**list_test_cases**](LinkApi.md#list_test_cases) | **GET** /api/v3/{service}/{subservice}/test_case | Test cases de un servicio


# **execute_service**
> ControllerMicroserviceModelMicroserviceDetailDto execute_service(service, subservice, body, sandbox=sandbox, test_case=test_case, test_case_id=test_case_id, origin=origin)

Ejecutar un servicio de link

Ejecuta un servicio del catálogo de link (p. ej. curp/validate, sat/rfc_validate_pf, imss/nss). El servicio y la operación van en la ruta; el body depende de cada servicio. Responde el detalle de la ejecución, también cuando el proveedor falla (408/503/406 traen el detalle con su error). Los subservicios de auditoría responden un CSV.

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
    api_instance = kiban.link.LinkApi(api_client)
    service = 'service_example' # str | Servicio del catálogo (p. ej. curp, sat, imss, bc_pf)
    subservice = 'subservice_example' # str | Operación del servicio (p. ej. validate, query)
    body = None # object | Datos del servicio; cada servicio define sus campos
    sandbox = True # bool | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional)
    test_case = 'test_case_example' # str | Sandbox: nombre del test case que debe responder (optional)
    test_case_id = 'test_case_id_example' # str | Sandbox: id del test case que debe responder (optional)
    origin = 'origin_example' # str | Identificador libre del origen de la petición (optional)

    try:
        # Ejecutar un servicio de link
        api_response = api_instance.execute_service(service, subservice, body, sandbox=sandbox, test_case=test_case, test_case_id=test_case_id, origin=origin)
        print("The response of LinkApi->execute_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinkApi->execute_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | **str**| Servicio del catálogo (p. ej. curp, sat, imss, bc_pf) | 
 **subservice** | **str**| Operación del servicio (p. ej. validate, query) | 
 **body** | **object**| Datos del servicio; cada servicio define sus campos | 
 **sandbox** | **bool**| Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | [optional] 
 **test_case** | **str**| Sandbox: nombre del test case que debe responder | [optional] 
 **test_case_id** | **str**| Sandbox: id del test case que debe responder | [optional] 
 **origin** | **str**| Identificador libre del origen de la petición | [optional] 

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
**400** | Datos inválidos o faltantes para ese servicio |  -  |
**401** | API key ausente o inválida |  -  |
**404** | El servicio no existe o no está disponible en esta versión |  -  |
**406** | El proveedor rechazó la petición |  -  |
**408** | Tiempo de espera agotado con el proveedor |  -  |
**409** | Conflicto con los datos enviados |  -  |
**500** | Error interno |  -  |
**503** | Proveedor no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_execution**
> ControllerMicroserviceModelMicroserviceDetailDto get_execution(service, subservice, id, sandbox=sandbox)

Detalle de una ejecución

Devuelve una ejecución: su estatus, la respuesta procesada y el detalle de las llamadas al proveedor (apiData).

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
    api_instance = kiban.link.LinkApi(api_client)
    service = 'service_example' # str | Servicio del catálogo
    subservice = 'subservice_example' # str | Operación del servicio
    id = 'id_example' # str | Id de la ejecución
    sandbox = True # bool | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Detalle de una ejecución
        api_response = api_instance.get_execution(service, subservice, id, sandbox=sandbox)
        print("The response of LinkApi->get_execution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinkApi->get_execution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | **str**| Servicio del catálogo | 
 **subservice** | **str**| Operación del servicio | 
 **id** | **str**| Id de la ejecución | 
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
**200** | Detalle de la ejecución |  -  |
**400** | Id ausente |  -  |
**401** | API key ausente o inválida |  -  |
**404** | La ejecución no existe |  -  |
**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_file**
> bytes get_file(path, sandbox=sandbox)

Descargar un archivo de una ejecución

Descarga un archivo generado por una ejecución (p. ej. un PDF). La ruta del archivo viene en el detalle de la ejecución (apiData[].files[].path).

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
    api_instance = kiban.link.LinkApi(api_client)
    path = 'path_example' # str | Ruta del archivo, tal como viene en el detalle de la ejecución
    sandbox = True # bool | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Descargar un archivo de una ejecución
        api_response = api_instance.get_file(path, sandbox=sandbox)
        print("The response of LinkApi->get_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinkApi->get_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| Ruta del archivo, tal como viene en el detalle de la ejecución | 
 **sandbox** | **bool**| Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**400** | Falta el parámetro path o es inválido |  -  |
**401** | API key ausente o inválida |  -  |
**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_executions**
> ControllerMicroserviceModelExecutionPage list_executions(service, subservice, page, items_per_page, sandbox=sandbox)

Historial de ejecuciones de un servicio

Devuelve una página del historial de un servicio. Cualquier query param que no esté listado aquí se usa como filtro sobre el historial.

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
    api_instance = kiban.link.LinkApi(api_client)
    service = 'service_example' # str | Servicio del catálogo
    subservice = 'subservice_example' # str | Operación del servicio
    page = 56 # int | Número de página, empieza en 1
    items_per_page = 56 # int | Resultados por página
    sandbox = True # bool | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Historial de ejecuciones de un servicio
        api_response = api_instance.list_executions(service, subservice, page, items_per_page, sandbox=sandbox)
        print("The response of LinkApi->list_executions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinkApi->list_executions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | **str**| Servicio del catálogo | 
 **subservice** | **str**| Operación del servicio | 
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
**200** | Página de ejecuciones |  -  |
**400** | Parámetros de paginación o filtros inválidos |  -  |
**401** | API key ausente o inválida |  -  |
**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_test_cases**
> List[ControllerTestCaseModelTestCaseOutputMany] list_test_cases(service, subservice, sandbox=sandbox)

Test cases de un servicio

Devuelve los test cases configurados para un servicio. En sandbox, la ejecución responde uno de ellos en lugar de llamar al proveedor (se elige con testCase o testCaseId al ejecutar).

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.link
from kiban.link.models.controller_test_case_model_test_case_output_many import ControllerTestCaseModelTestCaseOutputMany
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
    api_instance = kiban.link.LinkApi(api_client)
    service = 'service_example' # str | Servicio del catálogo
    subservice = 'subservice_example' # str | Operación del servicio
    sandbox = True # bool | Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox=true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Test cases de un servicio
        api_response = api_instance.list_test_cases(service, subservice, sandbox=sandbox)
        print("The response of LinkApi->list_test_cases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LinkApi->list_test_cases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | **str**| Servicio del catálogo | 
 **subservice** | **str**| Operación del servicio | 
 **sandbox** | **bool**| Modo sandbox. Tiene que coincidir con el modo de la API key: una key de sandbox exige sandbox&#x3D;true y una de producción no lo acepta. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**400** | Servicio u operación ausente |  -  |
**401** | API key ausente o inválida |  -  |
**500** | Error interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

