# kiban.sdk.workfloo.WorkflooApi

All URIs are relative to *https://workfloo.kiban.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**execute_workfloo**](WorkflooApi.md#execute_workfloo) | **POST** /api/v1/workfloo | Ejecutar un workfloo
[**get_workfloo**](WorkflooApi.md#get_workfloo) | **GET** /api/v1/workfloo/{id} | Detalle de una ejecución
[**get_workfloo_status**](WorkflooApi.md#get_workfloo_status) | **GET** /api/v1/workfloo/status/{id} | Estatus de una ejecución
[**list_workfloos**](WorkflooApi.md#list_workfloos) | **GET** /api/v1/workfloo | Historial de ejecuciones (v1)
[**list_workfloos_v2**](WorkflooApi.md#list_workfloos_v2) | **GET** /api/v2/workfloo | Historial de ejecuciones (v2)


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

