# LinkApi

All URIs are relative to *https://link.kiban.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV1FileGet**](LinkApi.md#apiV1FileGet) | **GET** /api/v1/file | Descargar un archivo de una ejecución |
| [**apiVversionServiceSubserviceGet**](LinkApi.md#apiVversionServiceSubserviceGet) | **GET** /api/v{version}/{service}/{subservice} | Historial de ejecuciones de un servicio |
| [**apiVversionServiceSubserviceIdGet**](LinkApi.md#apiVversionServiceSubserviceIdGet) | **GET** /api/v{version}/{service}/{subservice}/{id} | Detalle de una ejecución |
| [**apiVversionServiceSubservicePost**](LinkApi.md#apiVversionServiceSubservicePost) | **POST** /api/v{version}/{service}/{subservice} | Ejecutar un servicio de Link |
| [**apiVversionServiceSubserviceTestCaseGet**](LinkApi.md#apiVversionServiceSubserviceTestCaseGet) | **GET** /api/v{version}/{service}/{subservice}/test_case | Test cases de un servicio (sandbox) |
| [**apiVversionServiceSubserviceVaultPost**](LinkApi.md#apiVversionServiceSubserviceVaultPost) | **POST** /api/v{version}/{service}/{subservice}/vault | Validar un vault |


<a id="apiV1FileGet"></a>
# **apiV1FileGet**
> File apiV1FileGet(path)

Descargar un archivo de una ejecución

Descarga un archivo generado por una ejecución (por ejemplo un PDF o comprobante). La ruta del archivo se obtiene del detalle de la ejecución y se pasa en el query param path.

### Example
```java
// Import classes:
import kiban.sdk.link.ApiClient;
import kiban.sdk.link.ApiException;
import kiban.sdk.link.Configuration;
import kiban.sdk.link.auth.*;
import kiban.sdk.link.models.*;
import kiban.sdk.link.api.LinkApi;

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
    try {
      File result = apiInstance.apiV1FileGet(path);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LinkApi#apiV1FileGet");
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
| **400** | Query param path ausente |  -  |
| **401** | API key ausente o inválida |  -  |
| **500** | Error interno |  -  |

<a id="apiVversionServiceSubserviceGet"></a>
# **apiVversionServiceSubserviceGet**
> ControllerMicroserviceModelLinkExecutionPage apiVversionServiceSubserviceGet(version, service, subservice, page, itemsPerPage)

Historial de ejecuciones de un servicio

Devuelve una página del historial de ejecuciones de un service/subservice. Cualquier query param adicional no listado aquí se interpreta como filtro de búsqueda sobre el listado (searchableBy).

### Example
```java
// Import classes:
import kiban.sdk.link.ApiClient;
import kiban.sdk.link.ApiException;
import kiban.sdk.link.Configuration;
import kiban.sdk.link.auth.*;
import kiban.sdk.link.models.*;
import kiban.sdk.link.api.LinkApi;

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
    String version = "version_example"; // String | Versión de la API (por ejemplo 1 o 2)
    String service = "service_example"; // String | Servicio del catálogo Link
    String subservice = "subservice_example"; // String | Operación del servicio
    Integer page = 56; // Integer | Número de página, empieza en 1
    Integer itemsPerPage = 56; // Integer | Cantidad de resultados por página
    try {
      ControllerMicroserviceModelLinkExecutionPage result = apiInstance.apiVversionServiceSubserviceGet(version, service, subservice, page, itemsPerPage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LinkApi#apiVversionServiceSubserviceGet");
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
| **version** | **String**| Versión de la API (por ejemplo 1 o 2) | |
| **service** | **String**| Servicio del catálogo Link | |
| **subservice** | **String**| Operación del servicio | |
| **page** | **Integer**| Número de página, empieza en 1 | |
| **itemsPerPage** | **Integer**| Cantidad de resultados por página | |

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
| **200** | Página de ejecuciones |  -  |
| **400** | Query params de paginación ausentes o mal formados |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | La API key no tiene acceso al listado |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

<a id="apiVversionServiceSubserviceIdGet"></a>
# **apiVversionServiceSubserviceIdGet**
> ControllerMicroserviceModelMicroserviceDetailDto apiVversionServiceSubserviceIdGet(version, service, subservice, id)

Detalle de una ejecución

Devuelve el detalle de una ejecución: su estatus, la respuesta procesada y el raw de las llamadas al proveedor (apiData).

### Example
```java
// Import classes:
import kiban.sdk.link.ApiClient;
import kiban.sdk.link.ApiException;
import kiban.sdk.link.Configuration;
import kiban.sdk.link.auth.*;
import kiban.sdk.link.models.*;
import kiban.sdk.link.api.LinkApi;

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
    String version = "version_example"; // String | Versión de la API (por ejemplo 1 o 2)
    String service = "service_example"; // String | Servicio del catálogo Link
    String subservice = "subservice_example"; // String | Operación del servicio
    String id = "id_example"; // String | Id de la ejecución
    try {
      ControllerMicroserviceModelMicroserviceDetailDto result = apiInstance.apiVversionServiceSubserviceIdGet(version, service, subservice, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LinkApi#apiVversionServiceSubserviceIdGet");
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
| **version** | **String**| Versión de la API (por ejemplo 1 o 2) | |
| **service** | **String**| Servicio del catálogo Link | |
| **subservice** | **String**| Operación del servicio | |
| **id** | **String**| Id de la ejecución | |

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
| **400** | Id ausente o mal formado |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | La API key no tiene acceso a esa ejecución |  -  |
| **404** | La ejecución no existe |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

<a id="apiVversionServiceSubservicePost"></a>
# **apiVversionServiceSubservicePost**
> ControllerMicroserviceModelMicroserviceDetailDto apiVversionServiceSubservicePost(version, service, subservice, body, origin, mock)

Ejecutar un servicio de Link

Ejecuta un servicio del catálogo Link (por ejemplo curp/validate, sat/pf_data_from_rfc, nip/send). El servicio y la operación se eligen en la ruta con {service}/{subservice}. El cuerpo de la petición depende del servicio elegido: cada servicio define sus propios campos. Consulta el catálogo de servicios para el detalle de cada uno. En sandbox no se llama al proveedor real; se devuelve un test case configurable.

### Example
```java
// Import classes:
import kiban.sdk.link.ApiClient;
import kiban.sdk.link.ApiException;
import kiban.sdk.link.Configuration;
import kiban.sdk.link.auth.*;
import kiban.sdk.link.models.*;
import kiban.sdk.link.api.LinkApi;

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
    String version = "version_example"; // String | Versión de la API (por ejemplo 1 o 2)
    String service = "service_example"; // String | Servicio del catálogo Link (por ejemplo curp, sat, imss, nip, sms)
    String subservice = "subservice_example"; // String | Operación del servicio (por ejemplo validate, send, pf_data_from_rfc)
    Object body = null; // Object | Cuerpo específico del servicio. Sus campos varían por service/subservice
    String origin = "origin_example"; // String | Identificador libre del origen de la petición, para atribución
    Boolean mock = true; // Boolean | Si es true no llama al proveedor real y devuelve una respuesta mock
    try {
      ControllerMicroserviceModelMicroserviceDetailDto result = apiInstance.apiVversionServiceSubservicePost(version, service, subservice, body, origin, mock);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LinkApi#apiVversionServiceSubservicePost");
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
| **version** | **String**| Versión de la API (por ejemplo 1 o 2) | |
| **service** | **String**| Servicio del catálogo Link (por ejemplo curp, sat, imss, nip, sms) | |
| **subservice** | **String**| Operación del servicio (por ejemplo validate, send, pf_data_from_rfc) | |
| **body** | **Object**| Cuerpo específico del servicio. Sus campos varían por service/subservice | |
| **origin** | **String**| Identificador libre del origen de la petición, para atribución | [optional] |
| **mock** | **Boolean**| Si es true no llama al proveedor real y devuelve una respuesta mock | [optional] |

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
| **400** | Cuerpo inválido o campos requeridos ausentes para ese servicio |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | La API key no tiene acceso a ese servicio |  -  |
| **406** | El proveedor rechazó la petición |  -  |
| **408** | Tiempo de espera agotado con el proveedor |  -  |
| **409** | Conflicto al procesar la ejecución |  -  |
| **500** | Error interno |  -  |
| **503** | Servicio dependiente no disponible |  -  |

<a id="apiVversionServiceSubserviceTestCaseGet"></a>
# **apiVversionServiceSubserviceTestCaseGet**
> List&lt;ControllerTestCaseModelTestCaseOutputMany&gt; apiVversionServiceSubserviceTestCaseGet(version, service, subservice)

Test cases de un servicio (sandbox)

Devuelve los test cases configurados para un service/subservice. En sandbox, la ejecución de ese servicio devuelve uno de estos test cases en lugar de llamar al proveedor real.

### Example
```java
// Import classes:
import kiban.sdk.link.ApiClient;
import kiban.sdk.link.ApiException;
import kiban.sdk.link.Configuration;
import kiban.sdk.link.auth.*;
import kiban.sdk.link.models.*;
import kiban.sdk.link.api.LinkApi;

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
    String version = "version_example"; // String | Versión de la API (por ejemplo 1 o 2)
    String service = "service_example"; // String | Servicio del catálogo Link
    String subservice = "subservice_example"; // String | Operación del servicio
    try {
      List<ControllerTestCaseModelTestCaseOutputMany> result = apiInstance.apiVversionServiceSubserviceTestCaseGet(version, service, subservice);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LinkApi#apiVversionServiceSubserviceTestCaseGet");
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
| **version** | **String**| Versión de la API (por ejemplo 1 o 2) | |
| **service** | **String**| Servicio del catálogo Link | |
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
| **400** | Service o subservice ausente |  -  |
| **401** | API key ausente o inválida |  -  |
| **500** | Error interno |  -  |

<a id="apiVversionServiceSubserviceVaultPost"></a>
# **apiVversionServiceSubserviceVaultPost**
> Map&lt;String, String&gt; apiVversionServiceSubserviceVaultPost(version, service, subservice, controllerMicroserviceModelVaultNameDto)

Validar un vault

Verifica si un vault (credencial guardada) existe y es del tipo correcto para el servicio. Devuelve status: valid, notValid o notFound.

### Example
```java
// Import classes:
import kiban.sdk.link.ApiClient;
import kiban.sdk.link.ApiException;
import kiban.sdk.link.Configuration;
import kiban.sdk.link.auth.*;
import kiban.sdk.link.models.*;
import kiban.sdk.link.api.LinkApi;

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
    String version = "version_example"; // String | Versión de la API (por ejemplo 1 o 2)
    String service = "service_example"; // String | Servicio del catálogo Link
    String subservice = "subservice_example"; // String | Operación del servicio
    ControllerMicroserviceModelVaultNameDto controllerMicroserviceModelVaultNameDto = new ControllerMicroserviceModelVaultNameDto(); // ControllerMicroserviceModelVaultNameDto | Nombre del vault a validar
    try {
      Map<String, String> result = apiInstance.apiVversionServiceSubserviceVaultPost(version, service, subservice, controllerMicroserviceModelVaultNameDto);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LinkApi#apiVversionServiceSubserviceVaultPost");
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
| **version** | **String**| Versión de la API (por ejemplo 1 o 2) | |
| **service** | **String**| Servicio del catálogo Link | |
| **subservice** | **String**| Operación del servicio | |
| **controllerMicroserviceModelVaultNameDto** | [**ControllerMicroserviceModelVaultNameDto**](ControllerMicroserviceModelVaultNameDto.md)| Nombre del vault a validar | |

### Return type

**Map&lt;String, String&gt;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Resultado de la validación: {\\\&quot;status\\\&quot;: \\\&quot;valid|notValid|notFound\\\&quot;} |  -  |
| **400** | Cuerpo inválido |  -  |
| **401** | API key ausente o inválida |  -  |
| **500** | Error interno |  -  |

