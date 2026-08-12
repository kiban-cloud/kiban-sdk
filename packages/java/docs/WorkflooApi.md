# WorkflooApi

All URIs are relative to *https://workfloo.kiban.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**executeWorkfloo**](WorkflooApi.md#executeWorkfloo) | **POST** /api/v1/workfloo | Ejecutar un workfloo |
| [**executeWorkflooDocument**](WorkflooApi.md#executeWorkflooDocument) | **POST** /api/v1/workfloo/{id}/document | Enviar los documentos de un paso |
| [**executeWorkflooForm**](WorkflooApi.md#executeWorkflooForm) | **POST** /api/v1/workfloo/{id}/form | Enviar el formulario de un paso |
| [**getWorkfloo**](WorkflooApi.md#getWorkfloo) | **GET** /api/v1/workfloo/{id} | Detalle de una ejecución |
| [**getWorkflooFile**](WorkflooApi.md#getWorkflooFile) | **GET** /api/v1/workfloo/{id}/file | Descargar un archivo de un nodo |
| [**getWorkflooStatus**](WorkflooApi.md#getWorkflooStatus) | **GET** /api/v1/workfloo/status/{id} | Estatus de una ejecución |
| [**listWorkfloos**](WorkflooApi.md#listWorkfloos) | **GET** /api/v1/workfloo | Historial de ejecuciones (v1) |
| [**listWorkfloosV2**](WorkflooApi.md#listWorkfloosV2) | **GET** /api/v2/workfloo | Historial de ejecuciones (v2) |
| [**resendWorkflooNip**](WorkflooApi.md#resendWorkflooNip) | **PATCH** /api/v1/workfloo/{id}/nip/resend | Reenviar el NIP |
| [**reviewWorkflooValidation**](WorkflooApi.md#reviewWorkflooValidation) | **POST** /api/v1/workfloo/{id}/review | Revisar un paso de validación |
| [**sendWorkflooNip**](WorkflooApi.md#sendWorkflooNip) | **PATCH** /api/v1/workfloo/{id}/nip/send | Enviar el NIP |
| [**submitWorkflooCorrection**](WorkflooApi.md#submitWorkflooCorrection) | **POST** /api/v1/workfloo/{id}/correction | Enviar la corrección de un paso de validación |
| [**validateWorkflooNip**](WorkflooApi.md#validateWorkflooNip) | **PATCH** /api/v1/workfloo/{id}/nip/validate | Validar el NIP |


<a id="executeWorkfloo"></a>
# **executeWorkfloo**
> ControllerWorkflooModelExecuteResponse executeWorkfloo(controllerWorkflooModelExecute, sandbox)

Ejecutar un workfloo

Crea y arranca una ejecución a partir de una definición de workfloo. Devuelve el id de la ejecución para consultar su estatus.

### Example
```java
// Import classes:
import kiban.sdk.workfloo.ApiClient;
import kiban.sdk.workfloo.ApiException;
import kiban.sdk.workfloo.Configuration;
import kiban.sdk.workfloo.auth.*;
import kiban.sdk.workfloo.models.*;
import kiban.sdk.workfloo.api.WorkflooApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://workfloo.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WorkflooApi apiInstance = new WorkflooApi(defaultClient);
    ControllerWorkflooModelExecute controllerWorkflooModelExecute = new ControllerWorkflooModelExecute(); // ControllerWorkflooModelExecute | Definición a ejecutar y datos iniciales
    Boolean sandbox = true; // Boolean | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      ControllerWorkflooModelExecuteResponse result = apiInstance.executeWorkfloo(controllerWorkflooModelExecute, sandbox);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WorkflooApi#executeWorkfloo");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **controllerWorkflooModelExecute** | [**ControllerWorkflooModelExecute**](ControllerWorkflooModelExecute.md)| Definición a ejecutar y datos iniciales | |
| **sandbox** | **Boolean**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

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
| **200** | Ejecución creada |  -  |
| **400** | Body inválido, faltan campos requeridos, o el primer nodo/validador rechazó los datos |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | La API key no tiene acceso a esa definición |  -  |
| **404** | La definición de workfloo no existe |  -  |
| **409** | Conflicto al crear la ejecución |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

<a id="executeWorkflooDocument"></a>
# **executeWorkflooDocument**
> executeWorkflooDocument(id, body, sandbox)

Enviar los documentos de un paso

Envía los documentos del nodo DOCUMENT actual. El body es un objeto {documentoId: base64} (los de tipo \&quot;set\&quot; van como arreglo de objetos).

### Example
```java
// Import classes:
import kiban.sdk.workfloo.ApiClient;
import kiban.sdk.workfloo.ApiException;
import kiban.sdk.workfloo.Configuration;
import kiban.sdk.workfloo.auth.*;
import kiban.sdk.workfloo.models.*;
import kiban.sdk.workfloo.api.WorkflooApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://workfloo.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WorkflooApi apiInstance = new WorkflooApi(defaultClient);
    String id = "id_example"; // String | Id de la ejecución
    Object body = null; // Object | Documentos: {documentoId: base64}
    Boolean sandbox = true; // Boolean | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      apiInstance.executeWorkflooDocument(id, body, sandbox);
    } catch (ApiException e) {
      System.err.println("Exception when calling WorkflooApi#executeWorkflooDocument");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id de la ejecución | |
| **body** | **Object**| Documentos: {documentoId: base64} | |
| **sandbox** | **Boolean**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Documentos aceptados; la ejecución avanza |  -  |
| **400** | Errores de validación por documento (formato/tamaño) o de conectores validadores |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin acceso a ese paso |  -  |
| **404** | La ejecución no existe |  -  |
| **409** | Conflicto de estado |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

<a id="executeWorkflooForm"></a>
# **executeWorkflooForm**
> executeWorkflooForm(id, body, sandbox)

Enviar el formulario de un paso

Envía las respuestas del nodo FORM actual de la ejecución. El body es un objeto {campoId: valor} con los campos del formulario.

### Example
```java
// Import classes:
import kiban.sdk.workfloo.ApiClient;
import kiban.sdk.workfloo.ApiException;
import kiban.sdk.workfloo.Configuration;
import kiban.sdk.workfloo.auth.*;
import kiban.sdk.workfloo.models.*;
import kiban.sdk.workfloo.api.WorkflooApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://workfloo.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WorkflooApi apiInstance = new WorkflooApi(defaultClient);
    String id = "id_example"; // String | Id de la ejecución
    Object body = null; // Object | Campos del formulario: {campoId: valor}
    Boolean sandbox = true; // Boolean | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      apiInstance.executeWorkflooForm(id, body, sandbox);
    } catch (ApiException e) {
      System.err.println("Exception when calling WorkflooApi#executeWorkflooForm");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id de la ejecución | |
| **body** | **Object**| Campos del formulario: {campoId: valor} | |
| **sandbox** | **Boolean**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Formulario aceptado; la ejecución avanza |  -  |
| **400** | Errores de validación por campo o de conectores validadores |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin acceso a ese paso |  -  |
| **404** | La ejecución no existe |  -  |
| **409** | Conflicto de estado |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

<a id="getWorkfloo"></a>
# **getWorkfloo**
> ControllerWorkflooModelWorkflooResume getWorkfloo(id, sandbox)

Detalle de una ejecución

Devuelve el historial completo de una ejecución: todos sus nodos con request/response, variables, documentos y decisiones.

### Example
```java
// Import classes:
import kiban.sdk.workfloo.ApiClient;
import kiban.sdk.workfloo.ApiException;
import kiban.sdk.workfloo.Configuration;
import kiban.sdk.workfloo.auth.*;
import kiban.sdk.workfloo.models.*;
import kiban.sdk.workfloo.api.WorkflooApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://workfloo.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WorkflooApi apiInstance = new WorkflooApi(defaultClient);
    String id = "id_example"; // String | Id de la ejecución
    Boolean sandbox = true; // Boolean | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      ControllerWorkflooModelWorkflooResume result = apiInstance.getWorkfloo(id, sandbox);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WorkflooApi#getWorkfloo");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id de la ejecución | |
| **sandbox** | **Boolean**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

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
| **200** | Detalle de la ejecución |  -  |
| **400** | Id ausente o mal formado |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | La API key no tiene acceso a esa ejecución |  -  |
| **404** | La ejecución no existe |  -  |
| **409** | Conflicto al mapear la ejecución |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

<a id="getWorkflooFile"></a>
# **getWorkflooFile**
> ControllerWorkflooModelFileResponse getWorkflooFile(id, nodeId, name, sandbox)

Descargar un archivo de un nodo

Devuelve, en base64, un archivo producido/subido en un nodo de la ejecución, identificado por nodeId + name.

### Example
```java
// Import classes:
import kiban.sdk.workfloo.ApiClient;
import kiban.sdk.workfloo.ApiException;
import kiban.sdk.workfloo.Configuration;
import kiban.sdk.workfloo.auth.*;
import kiban.sdk.workfloo.models.*;
import kiban.sdk.workfloo.api.WorkflooApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://workfloo.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WorkflooApi apiInstance = new WorkflooApi(defaultClient);
    String id = "id_example"; // String | Id de la ejecución
    String nodeId = "nodeId_example"; // String | Id del nodo que contiene el archivo
    String name = "name_example"; // String | Nombre del archivo
    Boolean sandbox = true; // Boolean | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      ControllerWorkflooModelFileResponse result = apiInstance.getWorkflooFile(id, nodeId, name, sandbox);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WorkflooApi#getWorkflooFile");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id de la ejecución | |
| **nodeId** | **String**| Id del nodo que contiene el archivo | |
| **name** | **String**| Nombre del archivo | |
| **sandbox** | **Boolean**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

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
| **200** | Archivo en base64 |  -  |
| **400** | Parámetros ausentes o mal formados |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin acceso a esa ejecución |  -  |
| **404** | La ejecución, el nodo o el archivo no existe |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

<a id="getWorkflooStatus"></a>
# **getWorkflooStatus**
> ControllerWorkflooModelWorkflooStatus getWorkflooStatus(id, sandbox)

Estatus de una ejecución

Devuelve el estado actual de la ejecución y el paso en el que está parada, con el payload que ese paso espera (formulario, documento, NIP, timer o corrección). Cuando el paso está procesando, currentNodeType lleva el sufijo _PROCESSING y el payload se omite.

### Example
```java
// Import classes:
import kiban.sdk.workfloo.ApiClient;
import kiban.sdk.workfloo.ApiException;
import kiban.sdk.workfloo.Configuration;
import kiban.sdk.workfloo.auth.*;
import kiban.sdk.workfloo.models.*;
import kiban.sdk.workfloo.api.WorkflooApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://workfloo.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WorkflooApi apiInstance = new WorkflooApi(defaultClient);
    String id = "id_example"; // String | Id de la ejecución
    Boolean sandbox = true; // Boolean | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      ControllerWorkflooModelWorkflooStatus result = apiInstance.getWorkflooStatus(id, sandbox);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WorkflooApi#getWorkflooStatus");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id de la ejecución | |
| **sandbox** | **Boolean**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

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
| **200** | Estatus de la ejecución |  -  |
| **400** | Id ausente o mal formado |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | La API key no tiene acceso a esa ejecución |  -  |
| **404** | La ejecución no existe |  -  |
| **409** | Conflicto al mapear el estatus |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

<a id="listWorkfloos"></a>
# **listWorkfloos**
> ControllerWorkflooModelWorkflooPage listWorkfloos(page, itemsPerPage, status, from, to, sandbox)

Historial de ejecuciones (v1)

Devuelve una página de ejecuciones envuelta en un objeto con currentPage/hasNextPage/items. Cualquier query param adicional no listado aquí se interpreta como filtro de búsqueda sobre el listado (searchableBy).

### Example
```java
// Import classes:
import kiban.sdk.workfloo.ApiClient;
import kiban.sdk.workfloo.ApiException;
import kiban.sdk.workfloo.Configuration;
import kiban.sdk.workfloo.auth.*;
import kiban.sdk.workfloo.models.*;
import kiban.sdk.workfloo.api.WorkflooApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://workfloo.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WorkflooApi apiInstance = new WorkflooApi(defaultClient);
    Integer page = 56; // Integer | Número de página, empieza en 1
    Integer itemsPerPage = 56; // Integer | Cantidad de resultados por página
    String status = "status_example"; // String | Filtra por estado de la ejecución
    String from = "from_example"; // String | Fecha inicial del rango (RFC3339)
    String to = "to_example"; // String | Fecha final del rango (RFC3339)
    Boolean sandbox = true; // Boolean | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      ControllerWorkflooModelWorkflooPage result = apiInstance.listWorkfloos(page, itemsPerPage, status, from, to, sandbox);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WorkflooApi#listWorkfloos");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| Número de página, empieza en 1 | |
| **itemsPerPage** | **Integer**| Cantidad de resultados por página | |
| **status** | **String**| Filtra por estado de la ejecución | [optional] |
| **from** | **String**| Fecha inicial del rango (RFC3339) | [optional] |
| **to** | **String**| Fecha final del rango (RFC3339) | [optional] |
| **sandbox** | **Boolean**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

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
| **200** | Página de ejecuciones |  -  |
| **400** | Query params de paginación ausentes o mal formados |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | La API key no tiene acceso al listado |  -  |
| **409** | Conflicto al mapear los resultados |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

<a id="listWorkfloosV2"></a>
# **listWorkfloosV2**
> List&lt;ControllerWorkflooModelWorkfloo&gt; listWorkfloosV2(page, itemsPerPage, status, from, to, format, sandbox)

Historial de ejecuciones (v2)

Igual que v1 pero devuelve el arreglo de ejecuciones directo, sin envoltorio. La paginación viaja en el header Link. Con format&#x3D;csv la respuesta es un archivo CSV en lugar de JSON. Cualquier query param adicional no listado aquí se interpreta como filtro de búsqueda sobre el listado (searchableBy).

### Example
```java
// Import classes:
import kiban.sdk.workfloo.ApiClient;
import kiban.sdk.workfloo.ApiException;
import kiban.sdk.workfloo.Configuration;
import kiban.sdk.workfloo.auth.*;
import kiban.sdk.workfloo.models.*;
import kiban.sdk.workfloo.api.WorkflooApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://workfloo.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WorkflooApi apiInstance = new WorkflooApi(defaultClient);
    Integer page = 56; // Integer | Número de página, empieza en 1
    Integer itemsPerPage = 56; // Integer | Cantidad de resultados por página
    String status = "status_example"; // String | Filtra por estado de la ejecución
    String from = "from_example"; // String | Fecha inicial del rango (RFC3339)
    String to = "to_example"; // String | Fecha final del rango (RFC3339)
    String format = "json"; // String | Formato de la respuesta
    Boolean sandbox = true; // Boolean | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      List<ControllerWorkflooModelWorkfloo> result = apiInstance.listWorkfloosV2(page, itemsPerPage, status, from, to, format, sandbox);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WorkflooApi#listWorkfloosV2");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| Número de página, empieza en 1 | [optional] |
| **itemsPerPage** | **Integer**| Cantidad de resultados por página | [optional] |
| **status** | **String**| Filtra por estado de la ejecución | [optional] |
| **from** | **String**| Fecha inicial del rango (RFC3339) | [optional] |
| **to** | **String**| Fecha final del rango (RFC3339) | [optional] |
| **format** | **String**| Formato de la respuesta | [optional] [enum: json, csv] |
| **sandbox** | **Boolean**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

### Return type

[**List&lt;ControllerWorkflooModelWorkfloo&gt;**](ControllerWorkflooModelWorkfloo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Arreglo de ejecuciones. El header Link trae las páginas siguiente/anterior |  * Link - Enlaces de paginación RFC 5988 (rel&#x3D;\&quot;next\&quot; / rel&#x3D;\&quot;prev\&quot;). Vacío si no hay más páginas. <br>  |
| **400** | Query params de paginación mal formados |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | La API key no tiene acceso al listado |  -  |
| **409** | Conflicto al mapear los resultados |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

<a id="resendWorkflooNip"></a>
# **resendWorkflooNip**
> ControllerWorkflooModelNipResendStatus resendWorkflooNip(id, sandbox, controllerWorkflooModelNipResendRequest)

Reenviar el NIP

Reenvía el NIP y devuelve el estado del flujo NIP. El body es opcional (teléfono al que reenviar).

### Example
```java
// Import classes:
import kiban.sdk.workfloo.ApiClient;
import kiban.sdk.workfloo.ApiException;
import kiban.sdk.workfloo.Configuration;
import kiban.sdk.workfloo.auth.*;
import kiban.sdk.workfloo.models.*;
import kiban.sdk.workfloo.api.WorkflooApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://workfloo.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WorkflooApi apiInstance = new WorkflooApi(defaultClient);
    String id = "id_example"; // String | Id de la ejecución
    Boolean sandbox = true; // Boolean | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito
    ControllerWorkflooModelNipResendRequest controllerWorkflooModelNipResendRequest = new ControllerWorkflooModelNipResendRequest(); // ControllerWorkflooModelNipResendRequest | Teléfono al que reenviar (opcional)
    try {
      ControllerWorkflooModelNipResendStatus result = apiInstance.resendWorkflooNip(id, sandbox, controllerWorkflooModelNipResendRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WorkflooApi#resendWorkflooNip");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id de la ejecución | |
| **sandbox** | **Boolean**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |
| **controllerWorkflooModelNipResendRequest** | [**ControllerWorkflooModelNipResendRequest**](ControllerWorkflooModelNipResendRequest.md)| Teléfono al que reenviar (opcional) | [optional] |

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
| **200** | Estado del NIP tras reenviar |  -  |
| **400** | Teléfono/country code inválidos o error de negocio |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin acceso a esa ejecución |  -  |
| **404** | La ejecución no existe |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

<a id="reviewWorkflooValidation"></a>
# **reviewWorkflooValidation**
> reviewWorkflooValidation(id, controllerWorkflooModelReviewRequest, sandbox)

Revisar un paso de validación

Aplica la decisión del revisor sobre un nodo VALIDATION en estado REVIEW: aprobar o rechazar. En un rechazo, reviews indica los campos a corregir con su mensaje.

### Example
```java
// Import classes:
import kiban.sdk.workfloo.ApiClient;
import kiban.sdk.workfloo.ApiException;
import kiban.sdk.workfloo.Configuration;
import kiban.sdk.workfloo.auth.*;
import kiban.sdk.workfloo.models.*;
import kiban.sdk.workfloo.api.WorkflooApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://workfloo.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WorkflooApi apiInstance = new WorkflooApi(defaultClient);
    String id = "id_example"; // String | Id de la ejecución
    ControllerWorkflooModelReviewRequest controllerWorkflooModelReviewRequest = new ControllerWorkflooModelReviewRequest(); // ControllerWorkflooModelReviewRequest | Decisión del revisor
    Boolean sandbox = true; // Boolean | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      apiInstance.reviewWorkflooValidation(id, controllerWorkflooModelReviewRequest, sandbox);
    } catch (ApiException e) {
      System.err.println("Exception when calling WorkflooApi#reviewWorkflooValidation");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id de la ejecución | |
| **controllerWorkflooModelReviewRequest** | [**ControllerWorkflooModelReviewRequest**](ControllerWorkflooModelReviewRequest.md)| Decisión del revisor | |
| **sandbox** | **Boolean**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Decisión aplicada; la ejecución avanza o pasa a corrección |  -  |
| **400** | Body inválido |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin acceso a ese paso de revisión |  -  |
| **404** | La ejecución no existe |  -  |
| **409** | El paso no está en estado revisable |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

<a id="sendWorkflooNip"></a>
# **sendWorkflooNip**
> sendWorkflooNip(id, sandbox, controllerWorkflooModelNipSendRequest)

Enviar el NIP

Envía el NIP (código de un solo uso) del nodo NIP actual. El body es opcional; si se incluye teléfono, countryCode y phoneNumber van juntos.

### Example
```java
// Import classes:
import kiban.sdk.workfloo.ApiClient;
import kiban.sdk.workfloo.ApiException;
import kiban.sdk.workfloo.Configuration;
import kiban.sdk.workfloo.auth.*;
import kiban.sdk.workfloo.models.*;
import kiban.sdk.workfloo.api.WorkflooApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://workfloo.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WorkflooApi apiInstance = new WorkflooApi(defaultClient);
    String id = "id_example"; // String | Id de la ejecución
    Boolean sandbox = true; // Boolean | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito
    ControllerWorkflooModelNipSendRequest controllerWorkflooModelNipSendRequest = new ControllerWorkflooModelNipSendRequest(); // ControllerWorkflooModelNipSendRequest | Teléfono al que enviar el NIP (opcional)
    try {
      apiInstance.sendWorkflooNip(id, sandbox, controllerWorkflooModelNipSendRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling WorkflooApi#sendWorkflooNip");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id de la ejecución | |
| **sandbox** | **Boolean**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |
| **controllerWorkflooModelNipSendRequest** | [**ControllerWorkflooModelNipSendRequest**](ControllerWorkflooModelNipSendRequest.md)| Teléfono al que enviar el NIP (opcional) | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | NIP enviado |  -  |
| **400** | Teléfono/country code inválidos o error de negocio |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin acceso a esa ejecución |  -  |
| **404** | La ejecución no existe |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

<a id="submitWorkflooCorrection"></a>
# **submitWorkflooCorrection**
> submitWorkflooCorrection(id, body, sandbox)

Enviar la corrección de un paso de validación

Reenvía los campos corregidos por el prospecto cuando un nodo VALIDATION está en estado CORRECTION. El body es un objeto {campoId: valor}, igual que el formulario.

### Example
```java
// Import classes:
import kiban.sdk.workfloo.ApiClient;
import kiban.sdk.workfloo.ApiException;
import kiban.sdk.workfloo.Configuration;
import kiban.sdk.workfloo.auth.*;
import kiban.sdk.workfloo.models.*;
import kiban.sdk.workfloo.api.WorkflooApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://workfloo.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WorkflooApi apiInstance = new WorkflooApi(defaultClient);
    String id = "id_example"; // String | Id de la ejecución
    Object body = null; // Object | Campos corregidos: {campoId: valor}
    Boolean sandbox = true; // Boolean | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      apiInstance.submitWorkflooCorrection(id, body, sandbox);
    } catch (ApiException e) {
      System.err.println("Exception when calling WorkflooApi#submitWorkflooCorrection");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id de la ejecución | |
| **body** | **Object**| Campos corregidos: {campoId: valor} | |
| **sandbox** | **Boolean**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Corrección aceptada; la ejecución vuelve a revisión o avanza |  -  |
| **400** | Errores de validación por campo |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin acceso a ese paso |  -  |
| **404** | La ejecución no existe |  -  |
| **409** | El paso no está en estado de corrección |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

<a id="validateWorkflooNip"></a>
# **validateWorkflooNip**
> ControllerWorkflooModelNipValidateResponse validateWorkflooNip(id, controllerWorkflooModelNipValidateRequest, sandbox)

Validar el NIP

Valida el NIP capturado por el usuario y devuelve la fase resultante del flujo NIP.

### Example
```java
// Import classes:
import kiban.sdk.workfloo.ApiClient;
import kiban.sdk.workfloo.ApiException;
import kiban.sdk.workfloo.Configuration;
import kiban.sdk.workfloo.auth.*;
import kiban.sdk.workfloo.models.*;
import kiban.sdk.workfloo.api.WorkflooApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://workfloo.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WorkflooApi apiInstance = new WorkflooApi(defaultClient);
    String id = "id_example"; // String | Id de la ejecución
    ControllerWorkflooModelNipValidateRequest controllerWorkflooModelNipValidateRequest = new ControllerWorkflooModelNipValidateRequest(); // ControllerWorkflooModelNipValidateRequest | El NIP a validar
    Boolean sandbox = true; // Boolean | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      ControllerWorkflooModelNipValidateResponse result = apiInstance.validateWorkflooNip(id, controllerWorkflooModelNipValidateRequest, sandbox);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WorkflooApi#validateWorkflooNip");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id de la ejecución | |
| **controllerWorkflooModelNipValidateRequest** | [**ControllerWorkflooModelNipValidateRequest**](ControllerWorkflooModelNipValidateRequest.md)| El NIP a validar | |
| **sandbox** | **Boolean**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

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
| **200** | Fase resultante |  -  |
| **400** | NIP ausente o incorrecto |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | NIP rechazado / sin acceso |  -  |
| **404** | La ejecución no existe |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

