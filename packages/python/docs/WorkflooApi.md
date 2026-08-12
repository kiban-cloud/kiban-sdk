# kiban.sdk.workfloo.WorkflooApi

All URIs are relative to *https://workfloo.kiban.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**execute_workfloo**](WorkflooApi.md#execute_workfloo) | **POST** /api/v1/workfloo | Ejecutar un workfloo
[**execute_workfloo_document**](WorkflooApi.md#execute_workfloo_document) | **POST** /api/v1/workfloo/{id}/document | Enviar los documentos de un paso
[**execute_workfloo_form**](WorkflooApi.md#execute_workfloo_form) | **POST** /api/v1/workfloo/{id}/form | Enviar el formulario de un paso
[**get_workfloo**](WorkflooApi.md#get_workfloo) | **GET** /api/v1/workfloo/{id} | Detalle de una ejecución
[**get_workfloo_file**](WorkflooApi.md#get_workfloo_file) | **GET** /api/v1/workfloo/{id}/file | Descargar un archivo de un nodo
[**get_workfloo_status**](WorkflooApi.md#get_workfloo_status) | **GET** /api/v1/workfloo/status/{id} | Estatus de una ejecución
[**list_workfloos**](WorkflooApi.md#list_workfloos) | **GET** /api/v1/workfloo | Historial de ejecuciones (v1)
[**list_workfloos_v2**](WorkflooApi.md#list_workfloos_v2) | **GET** /api/v2/workfloo | Historial de ejecuciones (v2)
[**resend_workfloo_nip**](WorkflooApi.md#resend_workfloo_nip) | **PATCH** /api/v1/workfloo/{id}/nip/resend | Reenviar el NIP
[**review_workfloo_validation**](WorkflooApi.md#review_workfloo_validation) | **POST** /api/v1/workfloo/{id}/review | Revisar un paso de validación
[**send_workfloo_nip**](WorkflooApi.md#send_workfloo_nip) | **PATCH** /api/v1/workfloo/{id}/nip/send | Enviar el NIP
[**submit_workfloo_correction**](WorkflooApi.md#submit_workfloo_correction) | **POST** /api/v1/workfloo/{id}/correction | Enviar la corrección de un paso de validación
[**validate_workfloo_nip**](WorkflooApi.md#validate_workfloo_nip) | **PATCH** /api/v1/workfloo/{id}/nip/validate | Validar el NIP


# **execute_workfloo**
> ControllerWorkflooModelExecuteResponse execute_workfloo(controller_workfloo_model_execute, sandbox=sandbox)

Ejecutar un workfloo

Crea y arranca una ejecución a partir de una definición de workfloo. Devuelve el id de la ejecución para consultar su estatus.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.workfloo
from kiban.sdk.workfloo.models.controller_workfloo_model_execute import ControllerWorkflooModelExecute
from kiban.sdk.workfloo.models.controller_workfloo_model_execute_response import ControllerWorkflooModelExecuteResponse
from kiban.sdk.workfloo.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://workfloo.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.workfloo.Configuration(
    host = "https://workfloo.kiban.com"
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
with kiban.sdk.workfloo.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.workfloo.WorkflooApi(api_client)
    controller_workfloo_model_execute = kiban.sdk.workfloo.ControllerWorkflooModelExecute() # ControllerWorkflooModelExecute | Definición a ejecutar y datos iniciales
    sandbox = True # bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Ejecutar un workfloo
        api_response = api_instance.execute_workfloo(controller_workfloo_model_execute, sandbox=sandbox)
        print("The response of WorkflooApi->execute_workfloo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflooApi->execute_workfloo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **controller_workfloo_model_execute** | [**ControllerWorkflooModelExecute**](ControllerWorkflooModelExecute.md)| Definición a ejecutar y datos iniciales | 
 **sandbox** | **bool**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**200** | Ejecución creada |  -  |
**400** | Body inválido, faltan campos requeridos, o el primer nodo/validador rechazó los datos |  -  |
**401** | API key ausente o inválida |  -  |
**403** | La API key no tiene acceso a esa definición |  -  |
**404** | La definición de workfloo no existe |  -  |
**409** | Conflicto al crear la ejecución |  -  |
**500** | Error interno |  -  |
**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **execute_workfloo_document**
> execute_workfloo_document(id, body, sandbox=sandbox)

Enviar los documentos de un paso

Envía los documentos del nodo DOCUMENT actual. El body es un objeto {documentoId: base64} (los de tipo "set" van como arreglo de objetos).

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.workfloo
from kiban.sdk.workfloo.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://workfloo.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.workfloo.Configuration(
    host = "https://workfloo.kiban.com"
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
with kiban.sdk.workfloo.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.workfloo.WorkflooApi(api_client)
    id = 'id_example' # str | Id de la ejecución
    body = None # object | Documentos: {documentoId: base64}
    sandbox = True # bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Enviar los documentos de un paso
        api_instance.execute_workfloo_document(id, body, sandbox=sandbox)
    except Exception as e:
        print("Exception when calling WorkflooApi->execute_workfloo_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id de la ejecución | 
 **body** | **object**| Documentos: {documentoId: base64} | 
 **sandbox** | **bool**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**200** | Documentos aceptados; la ejecución avanza |  -  |
**400** | Errores de validación por documento (formato/tamaño) o de conectores validadores |  -  |
**401** | API key ausente o inválida |  -  |
**403** | Sin acceso a ese paso |  -  |
**404** | La ejecución no existe |  -  |
**409** | Conflicto de estado |  -  |
**500** | Error interno |  -  |
**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **execute_workfloo_form**
> execute_workfloo_form(id, body, sandbox=sandbox)

Enviar el formulario de un paso

Envía las respuestas del nodo FORM actual de la ejecución. El body es un objeto {campoId: valor} con los campos del formulario.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.workfloo
from kiban.sdk.workfloo.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://workfloo.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.workfloo.Configuration(
    host = "https://workfloo.kiban.com"
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
with kiban.sdk.workfloo.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.workfloo.WorkflooApi(api_client)
    id = 'id_example' # str | Id de la ejecución
    body = None # object | Campos del formulario: {campoId: valor}
    sandbox = True # bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Enviar el formulario de un paso
        api_instance.execute_workfloo_form(id, body, sandbox=sandbox)
    except Exception as e:
        print("Exception when calling WorkflooApi->execute_workfloo_form: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id de la ejecución | 
 **body** | **object**| Campos del formulario: {campoId: valor} | 
 **sandbox** | **bool**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**200** | Formulario aceptado; la ejecución avanza |  -  |
**400** | Errores de validación por campo o de conectores validadores |  -  |
**401** | API key ausente o inválida |  -  |
**403** | Sin acceso a ese paso |  -  |
**404** | La ejecución no existe |  -  |
**409** | Conflicto de estado |  -  |
**500** | Error interno |  -  |
**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_workfloo**
> ControllerWorkflooModelWorkflooResume get_workfloo(id, sandbox=sandbox)

Detalle de una ejecución

Devuelve el historial completo de una ejecución: todos sus nodos con request/response, variables, documentos y decisiones.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.workfloo
from kiban.sdk.workfloo.models.controller_workfloo_model_workfloo_resume import ControllerWorkflooModelWorkflooResume
from kiban.sdk.workfloo.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://workfloo.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.workfloo.Configuration(
    host = "https://workfloo.kiban.com"
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
with kiban.sdk.workfloo.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.workfloo.WorkflooApi(api_client)
    id = 'id_example' # str | Id de la ejecución
    sandbox = True # bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Detalle de una ejecución
        api_response = api_instance.get_workfloo(id, sandbox=sandbox)
        print("The response of WorkflooApi->get_workfloo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflooApi->get_workfloo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id de la ejecución | 
 **sandbox** | **bool**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**200** | Detalle de la ejecución |  -  |
**400** | Id ausente o mal formado |  -  |
**401** | API key ausente o inválida |  -  |
**403** | La API key no tiene acceso a esa ejecución |  -  |
**404** | La ejecución no existe |  -  |
**409** | Conflicto al mapear la ejecución |  -  |
**500** | Error interno |  -  |
**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_workfloo_file**
> ControllerWorkflooModelFileResponse get_workfloo_file(id, node_id, name, sandbox=sandbox)

Descargar un archivo de un nodo

Devuelve, en base64, un archivo producido/subido en un nodo de la ejecución, identificado por nodeId + name.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.workfloo
from kiban.sdk.workfloo.models.controller_workfloo_model_file_response import ControllerWorkflooModelFileResponse
from kiban.sdk.workfloo.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://workfloo.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.workfloo.Configuration(
    host = "https://workfloo.kiban.com"
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
with kiban.sdk.workfloo.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.workfloo.WorkflooApi(api_client)
    id = 'id_example' # str | Id de la ejecución
    node_id = 'node_id_example' # str | Id del nodo que contiene el archivo
    name = 'name_example' # str | Nombre del archivo
    sandbox = True # bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Descargar un archivo de un nodo
        api_response = api_instance.get_workfloo_file(id, node_id, name, sandbox=sandbox)
        print("The response of WorkflooApi->get_workfloo_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflooApi->get_workfloo_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id de la ejecución | 
 **node_id** | **str**| Id del nodo que contiene el archivo | 
 **name** | **str**| Nombre del archivo | 
 **sandbox** | **bool**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**200** | Archivo en base64 |  -  |
**400** | Parámetros ausentes o mal formados |  -  |
**401** | API key ausente o inválida |  -  |
**403** | Sin acceso a esa ejecución |  -  |
**404** | La ejecución, el nodo o el archivo no existe |  -  |
**500** | Error interno |  -  |
**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_workfloo_status**
> ControllerWorkflooModelWorkflooStatus get_workfloo_status(id, sandbox=sandbox)

Estatus de una ejecución

Devuelve el estado actual de la ejecución y el paso en el que está parada, con el payload que ese paso espera (formulario, documento, NIP, timer o corrección).
Cuando el paso está procesando, currentNodeType lleva el sufijo _PROCESSING y el payload se omite.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.workfloo
from kiban.sdk.workfloo.models.controller_workfloo_model_workfloo_status import ControllerWorkflooModelWorkflooStatus
from kiban.sdk.workfloo.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://workfloo.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.workfloo.Configuration(
    host = "https://workfloo.kiban.com"
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
with kiban.sdk.workfloo.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.workfloo.WorkflooApi(api_client)
    id = 'id_example' # str | Id de la ejecución
    sandbox = True # bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Estatus de una ejecución
        api_response = api_instance.get_workfloo_status(id, sandbox=sandbox)
        print("The response of WorkflooApi->get_workfloo_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflooApi->get_workfloo_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id de la ejecución | 
 **sandbox** | **bool**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**200** | Estatus de la ejecución |  -  |
**400** | Id ausente o mal formado |  -  |
**401** | API key ausente o inválida |  -  |
**403** | La API key no tiene acceso a esa ejecución |  -  |
**404** | La ejecución no existe |  -  |
**409** | Conflicto al mapear el estatus |  -  |
**500** | Error interno |  -  |
**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_workfloos**
> ControllerWorkflooModelWorkflooPage list_workfloos(page, items_per_page, status=status, var_from=var_from, to=to, sandbox=sandbox)

Historial de ejecuciones (v1)

Devuelve una página de ejecuciones envuelta en un objeto con currentPage/hasNextPage/items.
Cualquier query param adicional no listado aquí se interpreta como filtro de búsqueda sobre el listado (searchableBy).

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.workfloo
from kiban.sdk.workfloo.models.controller_workfloo_model_workfloo_page import ControllerWorkflooModelWorkflooPage
from kiban.sdk.workfloo.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://workfloo.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.workfloo.Configuration(
    host = "https://workfloo.kiban.com"
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
with kiban.sdk.workfloo.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.workfloo.WorkflooApi(api_client)
    page = 56 # int | Número de página, empieza en 1
    items_per_page = 56 # int | Cantidad de resultados por página
    status = 'status_example' # str | Filtra por estado de la ejecución (optional)
    var_from = 'var_from_example' # str | Fecha inicial del rango (RFC3339) (optional)
    to = 'to_example' # str | Fecha final del rango (RFC3339) (optional)
    sandbox = True # bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Historial de ejecuciones (v1)
        api_response = api_instance.list_workfloos(page, items_per_page, status=status, var_from=var_from, to=to, sandbox=sandbox)
        print("The response of WorkflooApi->list_workfloos:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflooApi->list_workfloos: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Número de página, empieza en 1 | 
 **items_per_page** | **int**| Cantidad de resultados por página | 
 **status** | **str**| Filtra por estado de la ejecución | [optional] 
 **var_from** | **str**| Fecha inicial del rango (RFC3339) | [optional] 
 **to** | **str**| Fecha final del rango (RFC3339) | [optional] 
 **sandbox** | **bool**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**200** | Página de ejecuciones |  -  |
**400** | Query params de paginación ausentes o mal formados |  -  |
**401** | API key ausente o inválida |  -  |
**403** | La API key no tiene acceso al listado |  -  |
**409** | Conflicto al mapear los resultados |  -  |
**500** | Error interno |  -  |
**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_workfloos_v2**
> List[ControllerWorkflooModelWorkfloo] list_workfloos_v2(page=page, items_per_page=items_per_page, status=status, var_from=var_from, to=to, format=format, sandbox=sandbox)

Historial de ejecuciones (v2)

Igual que v1 pero devuelve el arreglo de ejecuciones directo, sin envoltorio. La paginación viaja en el header Link.
Con format=csv la respuesta es un archivo CSV en lugar de JSON.
Cualquier query param adicional no listado aquí se interpreta como filtro de búsqueda sobre el listado (searchableBy).

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.workfloo
from kiban.sdk.workfloo.models.controller_workfloo_model_workfloo import ControllerWorkflooModelWorkfloo
from kiban.sdk.workfloo.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://workfloo.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.workfloo.Configuration(
    host = "https://workfloo.kiban.com"
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
with kiban.sdk.workfloo.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.workfloo.WorkflooApi(api_client)
    page = 56 # int | Número de página, empieza en 1 (optional)
    items_per_page = 56 # int | Cantidad de resultados por página (optional)
    status = 'status_example' # str | Filtra por estado de la ejecución (optional)
    var_from = 'var_from_example' # str | Fecha inicial del rango (RFC3339) (optional)
    to = 'to_example' # str | Fecha final del rango (RFC3339) (optional)
    format = 'format_example' # str | Formato de la respuesta (optional)
    sandbox = True # bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Historial de ejecuciones (v2)
        api_response = api_instance.list_workfloos_v2(page=page, items_per_page=items_per_page, status=status, var_from=var_from, to=to, format=format, sandbox=sandbox)
        print("The response of WorkflooApi->list_workfloos_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflooApi->list_workfloos_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Número de página, empieza en 1 | [optional] 
 **items_per_page** | **int**| Cantidad de resultados por página | [optional] 
 **status** | **str**| Filtra por estado de la ejecución | [optional] 
 **var_from** | **str**| Fecha inicial del rango (RFC3339) | [optional] 
 **to** | **str**| Fecha final del rango (RFC3339) | [optional] 
 **format** | **str**| Formato de la respuesta | [optional] 
 **sandbox** | **bool**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] 

### Return type

[**List[ControllerWorkflooModelWorkfloo]**](ControllerWorkflooModelWorkfloo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Arreglo de ejecuciones. El header Link trae las páginas siguiente/anterior |  * Link - Enlaces de paginación RFC 5988 (rel&#x3D;\&quot;next\&quot; / rel&#x3D;\&quot;prev\&quot;). Vacío si no hay más páginas. <br>  |
**400** | Query params de paginación mal formados |  -  |
**401** | API key ausente o inválida |  -  |
**403** | La API key no tiene acceso al listado |  -  |
**409** | Conflicto al mapear los resultados |  -  |
**500** | Error interno |  -  |
**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resend_workfloo_nip**
> ControllerWorkflooModelNipResendStatus resend_workfloo_nip(id, sandbox=sandbox, controller_workfloo_model_nip_resend_request=controller_workfloo_model_nip_resend_request)

Reenviar el NIP

Reenvía el NIP y devuelve el estado del flujo NIP. El body es opcional (teléfono al que reenviar).

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.workfloo
from kiban.sdk.workfloo.models.controller_workfloo_model_nip_resend_request import ControllerWorkflooModelNipResendRequest
from kiban.sdk.workfloo.models.controller_workfloo_model_nip_resend_status import ControllerWorkflooModelNipResendStatus
from kiban.sdk.workfloo.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://workfloo.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.workfloo.Configuration(
    host = "https://workfloo.kiban.com"
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
with kiban.sdk.workfloo.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.workfloo.WorkflooApi(api_client)
    id = 'id_example' # str | Id de la ejecución
    sandbox = True # bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)
    controller_workfloo_model_nip_resend_request = kiban.sdk.workfloo.ControllerWorkflooModelNipResendRequest() # ControllerWorkflooModelNipResendRequest | Teléfono al que reenviar (opcional) (optional)

    try:
        # Reenviar el NIP
        api_response = api_instance.resend_workfloo_nip(id, sandbox=sandbox, controller_workfloo_model_nip_resend_request=controller_workfloo_model_nip_resend_request)
        print("The response of WorkflooApi->resend_workfloo_nip:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflooApi->resend_workfloo_nip: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id de la ejecución | 
 **sandbox** | **bool**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] 
 **controller_workfloo_model_nip_resend_request** | [**ControllerWorkflooModelNipResendRequest**](ControllerWorkflooModelNipResendRequest.md)| Teléfono al que reenviar (opcional) | [optional] 

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
**200** | Estado del NIP tras reenviar |  -  |
**400** | Teléfono/country code inválidos o error de negocio |  -  |
**401** | API key ausente o inválida |  -  |
**403** | Sin acceso a esa ejecución |  -  |
**404** | La ejecución no existe |  -  |
**500** | Error interno |  -  |
**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **review_workfloo_validation**
> review_workfloo_validation(id, controller_workfloo_model_review_request, sandbox=sandbox)

Revisar un paso de validación

Aplica la decisión del revisor sobre un nodo VALIDATION en estado REVIEW: aprobar o rechazar. En un rechazo, reviews indica los campos a corregir con su mensaje.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.workfloo
from kiban.sdk.workfloo.models.controller_workfloo_model_review_request import ControllerWorkflooModelReviewRequest
from kiban.sdk.workfloo.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://workfloo.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.workfloo.Configuration(
    host = "https://workfloo.kiban.com"
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
with kiban.sdk.workfloo.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.workfloo.WorkflooApi(api_client)
    id = 'id_example' # str | Id de la ejecución
    controller_workfloo_model_review_request = kiban.sdk.workfloo.ControllerWorkflooModelReviewRequest() # ControllerWorkflooModelReviewRequest | Decisión del revisor
    sandbox = True # bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Revisar un paso de validación
        api_instance.review_workfloo_validation(id, controller_workfloo_model_review_request, sandbox=sandbox)
    except Exception as e:
        print("Exception when calling WorkflooApi->review_workfloo_validation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id de la ejecución | 
 **controller_workfloo_model_review_request** | [**ControllerWorkflooModelReviewRequest**](ControllerWorkflooModelReviewRequest.md)| Decisión del revisor | 
 **sandbox** | **bool**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**200** | Decisión aplicada; la ejecución avanza o pasa a corrección |  -  |
**400** | Body inválido |  -  |
**401** | API key ausente o inválida |  -  |
**403** | Sin acceso a ese paso de revisión |  -  |
**404** | La ejecución no existe |  -  |
**409** | El paso no está en estado revisable |  -  |
**500** | Error interno |  -  |
**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_workfloo_nip**
> send_workfloo_nip(id, sandbox=sandbox, controller_workfloo_model_nip_send_request=controller_workfloo_model_nip_send_request)

Enviar el NIP

Envía el NIP (código de un solo uso) del nodo NIP actual. El body es opcional; si se incluye teléfono, countryCode y phoneNumber van juntos.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.workfloo
from kiban.sdk.workfloo.models.controller_workfloo_model_nip_send_request import ControllerWorkflooModelNipSendRequest
from kiban.sdk.workfloo.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://workfloo.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.workfloo.Configuration(
    host = "https://workfloo.kiban.com"
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
with kiban.sdk.workfloo.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.workfloo.WorkflooApi(api_client)
    id = 'id_example' # str | Id de la ejecución
    sandbox = True # bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)
    controller_workfloo_model_nip_send_request = kiban.sdk.workfloo.ControllerWorkflooModelNipSendRequest() # ControllerWorkflooModelNipSendRequest | Teléfono al que enviar el NIP (opcional) (optional)

    try:
        # Enviar el NIP
        api_instance.send_workfloo_nip(id, sandbox=sandbox, controller_workfloo_model_nip_send_request=controller_workfloo_model_nip_send_request)
    except Exception as e:
        print("Exception when calling WorkflooApi->send_workfloo_nip: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id de la ejecución | 
 **sandbox** | **bool**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] 
 **controller_workfloo_model_nip_send_request** | [**ControllerWorkflooModelNipSendRequest**](ControllerWorkflooModelNipSendRequest.md)| Teléfono al que enviar el NIP (opcional) | [optional] 

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
**200** | NIP enviado |  -  |
**400** | Teléfono/country code inválidos o error de negocio |  -  |
**401** | API key ausente o inválida |  -  |
**403** | Sin acceso a esa ejecución |  -  |
**404** | La ejecución no existe |  -  |
**500** | Error interno |  -  |
**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_workfloo_correction**
> submit_workfloo_correction(id, body, sandbox=sandbox)

Enviar la corrección de un paso de validación

Reenvía los campos corregidos por el prospecto cuando un nodo VALIDATION está en estado CORRECTION. El body es un objeto {campoId: valor}, igual que el formulario.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.workfloo
from kiban.sdk.workfloo.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://workfloo.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.workfloo.Configuration(
    host = "https://workfloo.kiban.com"
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
with kiban.sdk.workfloo.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.workfloo.WorkflooApi(api_client)
    id = 'id_example' # str | Id de la ejecución
    body = None # object | Campos corregidos: {campoId: valor}
    sandbox = True # bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Enviar la corrección de un paso de validación
        api_instance.submit_workfloo_correction(id, body, sandbox=sandbox)
    except Exception as e:
        print("Exception when calling WorkflooApi->submit_workfloo_correction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id de la ejecución | 
 **body** | **object**| Campos corregidos: {campoId: valor} | 
 **sandbox** | **bool**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**200** | Corrección aceptada; la ejecución vuelve a revisión o avanza |  -  |
**400** | Errores de validación por campo |  -  |
**401** | API key ausente o inválida |  -  |
**403** | Sin acceso a ese paso |  -  |
**404** | La ejecución no existe |  -  |
**409** | El paso no está en estado de corrección |  -  |
**500** | Error interno |  -  |
**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validate_workfloo_nip**
> ControllerWorkflooModelNipValidateResponse validate_workfloo_nip(id, controller_workfloo_model_nip_validate_request, sandbox=sandbox)

Validar el NIP

Valida el NIP capturado por el usuario y devuelve la fase resultante del flujo NIP.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import kiban.sdk.workfloo
from kiban.sdk.workfloo.models.controller_workfloo_model_nip_validate_request import ControllerWorkflooModelNipValidateRequest
from kiban.sdk.workfloo.models.controller_workfloo_model_nip_validate_response import ControllerWorkflooModelNipValidateResponse
from kiban.sdk.workfloo.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://workfloo.kiban.com
# See configuration.py for a list of all supported configuration parameters.
configuration = kiban.sdk.workfloo.Configuration(
    host = "https://workfloo.kiban.com"
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
with kiban.sdk.workfloo.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = kiban.sdk.workfloo.WorkflooApi(api_client)
    id = 'id_example' # str | Id de la ejecución
    controller_workfloo_model_nip_validate_request = kiban.sdk.workfloo.ControllerWorkflooModelNipValidateRequest() # ControllerWorkflooModelNipValidateRequest | El NIP a validar
    sandbox = True # bool | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito (optional)

    try:
        # Validar el NIP
        api_response = api_instance.validate_workfloo_nip(id, controller_workfloo_model_nip_validate_request, sandbox=sandbox)
        print("The response of WorkflooApi->validate_workfloo_nip:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflooApi->validate_workfloo_nip: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id de la ejecución | 
 **controller_workfloo_model_nip_validate_request** | [**ControllerWorkflooModelNipValidateRequest**](ControllerWorkflooModelNipValidateRequest.md)| El NIP a validar | 
 **sandbox** | **bool**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] 

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
**200** | Fase resultante |  -  |
**400** | NIP ausente o incorrecto |  -  |
**401** | API key ausente o inválida |  -  |
**403** | NIP rechazado / sin acceso |  -  |
**404** | La ejecución no existe |  -  |
**500** | Error interno |  -  |
**503** | Servicio dependiente no disponible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

