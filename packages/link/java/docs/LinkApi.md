# LinkApi

All URIs are relative to *https://link.kiban.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**executeService**](LinkApi.md#executeService) | **POST** /api/v3/{service}/{subservice} | Ejecutar un servicio de link |
| [**getExecution**](LinkApi.md#getExecution) | **GET** /api/v1/{service}/{subservice}/{id} | Detalle de una ejecución |
| [**getFile**](LinkApi.md#getFile) | **GET** /api/v1/file | Descargar un archivo de una ejecución |
| [**listExecutions**](LinkApi.md#listExecutions) | **GET** /api/v1/{service}/{subservice} | Historial de ejecuciones de un servicio |
| [**listTestCases**](LinkApi.md#listTestCases) | **GET** /api/v3/{service}/{subservice}/test_case | Test cases de un servicio |


<a id="executeService"></a>
# **executeService**
> ControllerMicroserviceModelMicroserviceDetailDto executeService(service, subservice, body).sandbox(sandbox).testCase(testCase).testCaseId(testCaseId).origin(origin).execute();

Ejecutar un servicio de link

Ejecuta un servicio del catálogo de link (p. ej. curp/validate, sat/rfc_validate_pf, imss/nss). El servicio y la operación van en la ruta; el body depende de cada servicio. Responde el detalle de la ejecución, también cuando el proveedor falla (408/503/406 traen el detalle con su error). Los subservicios de auditoría responden un CSV.

### Example
```java
// Import classes:
import com.kiban.link.ApiClient;
import com.kiban.link.ApiException;
import com.kiban.link.Configuration;
import com.kiban.link.auth.*;
import com.kiban.link.models.*;
import com.kiban.link.api.LinkApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://link.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    LinkApi apiInstance = new LinkApi(defaultClient);
    String service = "service_example"; // String | Servicio del catálogo (p. ej. curp, sat, imss, bc_pf)
    String subservice = "subservice_example"; // String | Operación del servicio (p. ej. validate, query)
    Object body = null; // Object | Datos del servicio; cada servicio define sus campos
    Boolean sandbox = true; // Boolean | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito
    String testCase = "testCase_example"; // String | Sandbox: nombre del test case que debe responder
    String testCaseId = "testCaseId_example"; // String | Sandbox: id del test case que debe responder
    String origin = "origin_example"; // String | Identificador libre del origen de la petición
    try {
      ControllerMicroserviceModelMicroserviceDetailDto result = apiInstance.executeService(service, subservice, body)
            .sandbox(sandbox)
            .testCase(testCase)
            .testCaseId(testCaseId)
            .origin(origin)
            .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LinkApi#executeService");
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
| **service** | **String**| Servicio del catálogo (p. ej. curp, sat, imss, bc_pf) | |
| **subservice** | **String**| Operación del servicio (p. ej. validate, query) | |
| **body** | **Object**| Datos del servicio; cada servicio define sus campos | |
| **sandbox** | **Boolean**| Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |
| **testCase** | **String**| Sandbox: nombre del test case que debe responder | [optional] |
| **testCaseId** | **String**| Sandbox: id del test case que debe responder | [optional] |
| **origin** | **String**| Identificador libre del origen de la petición | [optional] |

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
| **200** | Ejecución realizada |  -  |
| **400** | Datos inválidos o faltantes para ese servicio |  -  |
| **401** | API key ausente o inválida |  -  |
| **404** | El servicio no existe o no está disponible en esta versión |  -  |
| **406** | El proveedor rechazó la petición |  -  |
| **408** | Tiempo de espera agotado con el proveedor |  -  |
| **409** | Conflicto con los datos enviados |  -  |
| **500** | Error interno |  -  |
| **503** | Proveedor no disponible |  -  |

<a id="getExecution"></a>
# **getExecution**
> ControllerMicroserviceModelMicroserviceDetailDto getExecution(service, subservice, id).sandbox(sandbox).execute();

Detalle de una ejecución

Devuelve una ejecución: su estatus, la respuesta procesada y el detalle de las llamadas al proveedor (apiData).

### Example
```java
// Import classes:
import com.kiban.link.ApiClient;
import com.kiban.link.ApiException;
import com.kiban.link.Configuration;
import com.kiban.link.auth.*;
import com.kiban.link.models.*;
import com.kiban.link.api.LinkApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://link.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    LinkApi apiInstance = new LinkApi(defaultClient);
    String service = "service_example"; // String | Servicio del catálogo
    String subservice = "subservice_example"; // String | Operación del servicio
    String id = "id_example"; // String | Id de la ejecución
    Boolean sandbox = true; // Boolean | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      ControllerMicroserviceModelMicroserviceDetailDto result = apiInstance.getExecution(service, subservice, id)
            .sandbox(sandbox)
            .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LinkApi#getExecution");
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
| **service** | **String**| Servicio del catálogo | |
| **subservice** | **String**| Operación del servicio | |
| **id** | **String**| Id de la ejecución | |
| **sandbox** | **Boolean**| Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

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
| **200** | Detalle de la ejecución |  -  |
| **400** | Id ausente |  -  |
| **401** | API key ausente o inválida |  -  |
| **404** | La ejecución no existe |  -  |
| **500** | Error interno |  -  |

<a id="getFile"></a>
# **getFile**
> File getFile(path).sandbox(sandbox).execute();

Descargar un archivo de una ejecución

Descarga un archivo generado por una ejecución (p. ej. un PDF). La ruta del archivo viene en el detalle de la ejecución (apiData[].files[].path).

### Example
```java
// Import classes:
import com.kiban.link.ApiClient;
import com.kiban.link.ApiException;
import com.kiban.link.Configuration;
import com.kiban.link.auth.*;
import com.kiban.link.models.*;
import com.kiban.link.api.LinkApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://link.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    LinkApi apiInstance = new LinkApi(defaultClient);
    String path = "path_example"; // String | Ruta del archivo, tal como viene en el detalle de la ejecución
    Boolean sandbox = true; // Boolean | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      File result = apiInstance.getFile(path)
            .sandbox(sandbox)
            .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LinkApi#getFile");
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
| **path** | **String**| Ruta del archivo, tal como viene en el detalle de la ejecución | |
| **sandbox** | **Boolean**| Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

### Return type

[**File**](File.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contenido del archivo |  -  |
| **400** | Falta el parámetro path o es inválido |  -  |
| **401** | API key ausente o inválida |  -  |
| **500** | Error interno |  -  |

<a id="listExecutions"></a>
# **listExecutions**
> ControllerMicroserviceModelExecutionPage listExecutions(service, subservice, page, itemsPerPage).sandbox(sandbox).execute();

Historial de ejecuciones de un servicio

Devuelve una página del historial de un servicio. Cualquier query param que no esté listado aquí se usa como filtro sobre el historial.

### Example
```java
// Import classes:
import com.kiban.link.ApiClient;
import com.kiban.link.ApiException;
import com.kiban.link.Configuration;
import com.kiban.link.auth.*;
import com.kiban.link.models.*;
import com.kiban.link.api.LinkApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://link.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    LinkApi apiInstance = new LinkApi(defaultClient);
    String service = "service_example"; // String | Servicio del catálogo
    String subservice = "subservice_example"; // String | Operación del servicio
    Integer page = 56; // Integer | Número de página, empieza en 1
    Integer itemsPerPage = 56; // Integer | Resultados por página
    Boolean sandbox = true; // Boolean | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      ControllerMicroserviceModelExecutionPage result = apiInstance.listExecutions(service, subservice, page, itemsPerPage)
            .sandbox(sandbox)
            .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LinkApi#listExecutions");
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
| **service** | **String**| Servicio del catálogo | |
| **subservice** | **String**| Operación del servicio | |
| **page** | **Integer**| Número de página, empieza en 1 | |
| **itemsPerPage** | **Integer**| Resultados por página | |
| **sandbox** | **Boolean**| Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

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
| **200** | Página de ejecuciones |  -  |
| **400** | Parámetros de paginación o filtros inválidos |  -  |
| **401** | API key ausente o inválida |  -  |
| **500** | Error interno |  -  |

<a id="listTestCases"></a>
# **listTestCases**
> List&lt;ControllerTestCaseModelTestCaseOutputMany&gt; listTestCases(service, subservice).execute();

Test cases de un servicio

Devuelve los test cases configurados para un servicio. En sandbox, la ejecución responde uno de ellos en lugar de llamar al proveedor (se elige con testCase o testCaseId al ejecutar).

### Example
```java
// Import classes:
import com.kiban.link.ApiClient;
import com.kiban.link.ApiException;
import com.kiban.link.Configuration;
import com.kiban.link.auth.*;
import com.kiban.link.models.*;
import com.kiban.link.api.LinkApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://link.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    LinkApi apiInstance = new LinkApi(defaultClient);
    String service = "service_example"; // String | Servicio del catálogo
    String subservice = "subservice_example"; // String | Operación del servicio
    try {
      List<ControllerTestCaseModelTestCaseOutputMany> result = apiInstance.listTestCases(service, subservice)
            .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LinkApi#listTestCases");
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
| **service** | **String**| Servicio del catálogo | |
| **subservice** | **String**| Operación del servicio | |

### Return type

[**List&lt;ControllerTestCaseModelTestCaseOutputMany&gt;**](ControllerTestCaseModelTestCaseOutputMany.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Test cases del servicio |  -  |
| **400** | Servicio u operación ausente |  -  |
| **401** | API key ausente o inválida |  -  |
| **500** | Error interno |  -  |

