# WorkflooApi

All URIs are relative to *https://workfloo.kiban.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**executeWorkfloo**](WorkflooApi.md#executeWorkfloo) | **POST** /api/v1/workfloo | Ejecutar un workfloo |
| [**executeWorkflooDocument**](WorkflooApi.md#executeWorkflooDocument) | **POST** /api/v1/workfloo/{id}/document | Enviar los documentos de un paso |
| [**executeWorkflooForm**](WorkflooApi.md#executeWorkflooForm) | **POST** /api/v1/workfloo/{id}/form | Enviar el formulario de un paso |
| [**fallbackWorkflooOtp**](WorkflooApi.md#fallbackWorkflooOtp) | **PATCH** /api/v1/workfloo/{id}/otp/fallback | Reenviar el código de verificación (OTP) |
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
| [**validateWorkflooOtp**](WorkflooApi.md#validateWorkflooOtp) | **PATCH** /api/v1/workfloo/{id}/otp/validate | Validar el código de verificación (OTP) |


<a id="executeWorkfloo"></a>
# **executeWorkfloo**
> ControllerWorkflooModelExecuteResponse executeWorkfloo(controllerWorkflooModelExecute).sandbox(sandbox).execute();

Ejecutar un workfloo

Crea y arranca una ejecución a partir de una definición de workfloo. Devuelve el id de la ejecución para consultar su estatus.

### Example
```java
// Import classes:
import com.kiban.workfloo.ApiClient;
import com.kiban.workfloo.ApiException;
import com.kiban.workfloo.Configuration;
import com.kiban.workfloo.auth.*;
import com.kiban.workfloo.models.*;
import com.kiban.workfloo.api.WorkflooApi;

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
      ControllerWorkflooModelExecuteResponse result = apiInstance.executeWorkfloo(controllerWorkflooModelExecute)
            .sandbox(sandbox)
            .execute();
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
> executeWorkflooDocument(id, body).sandbox(sandbox).execute();

Enviar los documentos de un paso

Envía los documentos del nodo DOCUMENT actual. El body es un objeto {documentoId: base64} (los de tipo \&quot;set\&quot; van como arreglo de objetos).

### Example
```java
// Import classes:
import com.kiban.workfloo.ApiClient;
import com.kiban.workfloo.ApiException;
import com.kiban.workfloo.Configuration;
import com.kiban.workfloo.auth.*;
import com.kiban.workfloo.models.*;
import com.kiban.workfloo.api.WorkflooApi;

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
      apiInstance.executeWorkflooDocument(id, body)
            .sandbox(sandbox)
            .execute();
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
> executeWorkflooForm(id, body).sandbox(sandbox).execute();

Enviar el formulario de un paso

Envía las respuestas del nodo FORM actual de la ejecución. El body es un objeto {campoId: valor} con los campos del formulario.

### Example
```java
// Import classes:
import com.kiban.workfloo.ApiClient;
import com.kiban.workfloo.ApiException;
import com.kiban.workfloo.Configuration;
import com.kiban.workfloo.auth.*;
import com.kiban.workfloo.models.*;
import com.kiban.workfloo.api.WorkflooApi;

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
      apiInstance.executeWorkflooForm(id, body)
            .sandbox(sandbox)
            .execute();
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

<a id="fallbackWorkflooOtp"></a>
# **fallbackWorkflooOtp**
> fallbackWorkflooOtp(id).sandbox(sandbox).execute();

Reenviar el código de verificación (OTP)

Pide al proveedor una validación nueva (y un código nuevo) para el paso de verificación. Cada reenvío es una consulta facturada y el número de reenvíos lo limita el nodo; al agotarlos responde 400/403 con &#x60;{\&quot;error\&quot;}&#x60;.

### Example
```java
// Import classes:
import com.kiban.workfloo.ApiClient;
import com.kiban.workfloo.ApiException;
import com.kiban.workfloo.Configuration;
import com.kiban.workfloo.auth.*;
import com.kiban.workfloo.models.*;
import com.kiban.workfloo.api.WorkflooApi;

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
      apiInstance.fallbackWorkflooOtp(id)
            .sandbox(sandbox)
            .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling WorkflooApi#fallbackWorkflooOtp");
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

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Código reenviado |  -  |
| **400** | Reenvíos agotados o error de negocio |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin código pendiente, sin reenvíos, sin acceso, o la ejecución siguió ocupada procesando otro paso tras ~4.5 s de espera |  -  |
| **404** | La ejecución no existe |  -  |
| **500** | Error interno (incluye otra petición tomando la ejecución en el mismo instante; reintentar) |  -  |
| **503** | Servicio dependiente no disponible |  -  |

<a id="getWorkfloo"></a>
# **getWorkfloo**
> ControllerWorkflooModelWorkflooResume getWorkfloo(id).sandbox(sandbox).execute();

Detalle de una ejecución

Devuelve el historial completo de una ejecución: todos sus nodos con request/response, variables, documentos y decisiones.

### Example
```java
// Import classes:
import com.kiban.workfloo.ApiClient;
import com.kiban.workfloo.ApiException;
import com.kiban.workfloo.Configuration;
import com.kiban.workfloo.auth.*;
import com.kiban.workfloo.models.*;
import com.kiban.workfloo.api.WorkflooApi;

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
      ControllerWorkflooModelWorkflooResume result = apiInstance.getWorkfloo(id)
            .sandbox(sandbox)
            .execute();
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
> ControllerWorkflooModelFileResponse getWorkflooFile(id, nodeId, name).sandbox(sandbox).execute();

Descargar un archivo de un nodo

Devuelve, en base64, un archivo producido/subido en un nodo de la ejecución, identificado por nodeId + name.

### Example
```java
// Import classes:
import com.kiban.workfloo.ApiClient;
import com.kiban.workfloo.ApiException;
import com.kiban.workfloo.Configuration;
import com.kiban.workfloo.auth.*;
import com.kiban.workfloo.models.*;
import com.kiban.workfloo.api.WorkflooApi;

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
      ControllerWorkflooModelFileResponse result = apiInstance.getWorkflooFile(id, nodeId, name)
            .sandbox(sandbox)
            .execute();
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
> ControllerWorkflooModelWorkflooStatus getWorkflooStatus(id).sandbox(sandbox).execute();

Estatus de una ejecución

Devuelve el estado actual de la ejecución y el paso en el que está parada, con el payload que ese paso espera (formulario, documento, NIP, timer o corrección). Cuando el paso está procesando, currentNodeType lleva el sufijo _PROCESSING y el payload se omite.

### Example
```java
// Import classes:
import com.kiban.workfloo.ApiClient;
import com.kiban.workfloo.ApiException;
import com.kiban.workfloo.Configuration;
import com.kiban.workfloo.auth.*;
import com.kiban.workfloo.models.*;
import com.kiban.workfloo.api.WorkflooApi;

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
      ControllerWorkflooModelWorkflooStatus result = apiInstance.getWorkflooStatus(id)
            .sandbox(sandbox)
            .execute();
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
> ControllerWorkflooModelWorkflooPage listWorkfloos(page, itemsPerPage).status(status).from(from).to(to).sandbox(sandbox).execute();

Historial de ejecuciones (v1)

Devuelve una página de ejecuciones envuelta en un objeto con currentPage/hasNextPage/items. Cualquier query param adicional no listado aquí se interpreta como filtro de búsqueda sobre el listado (searchableBy).

### Example
```java
// Import classes:
import com.kiban.workfloo.ApiClient;
import com.kiban.workfloo.ApiException;
import com.kiban.workfloo.Configuration;
import com.kiban.workfloo.auth.*;
import com.kiban.workfloo.models.*;
import com.kiban.workfloo.api.WorkflooApi;

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
      ControllerWorkflooModelWorkflooPage result = apiInstance.listWorkfloos(page, itemsPerPage)
            .status(status)
            .from(from)
            .to(to)
            .sandbox(sandbox)
            .execute();
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
> List&lt;ControllerWorkflooModelWorkflooListItem&gt; listWorkfloosV2().page(page).itemsPerPage(itemsPerPage).from(from).to(to).origin(origin).status(status).name(name).id(id).nodesFormSearchableByRfcPf(nodesFormSearchableByRfcPf).nodesFormSearchableByFirstName(nodesFormSearchableByFirstName).nodesFormSearchableBySecondName(nodesFormSearchableBySecondName).nodesFormSearchableByLastName1(nodesFormSearchableByLastName1).nodesFormSearchableByLastName2(nodesFormSearchableByLastName2).nodesFormSearchableByRfcPm(nodesFormSearchableByRfcPm).nodesFormSearchableByCompanyName(nodesFormSearchableByCompanyName).format(format).content(content).labels(labels).sandbox(sandbox).execute();

Historial de ejecuciones (v2)

Devuelve el arreglo de ejecuciones directo, sin envoltorio. La paginación viaja en el header Link. content&#x3D;true agrega a cada elemento la ejecución completa, con todos sus nodos (la misma forma que getWorkfloo); por defecto es false y llega el resumen. format&#x3D;CSV devuelve un archivo CSV en lugar de JSON. Los SDKs tipan la respuesta como JSON: para el CSV hay que leer el cuerpo crudo de la respuesta. Cualquier query param adicional no listado aquí se interpreta como filtro de búsqueda sobre el listado (searchableBy).

### Example
```java
// Import classes:
import com.kiban.workfloo.ApiClient;
import com.kiban.workfloo.ApiException;
import com.kiban.workfloo.Configuration;
import com.kiban.workfloo.auth.*;
import com.kiban.workfloo.models.*;
import com.kiban.workfloo.api.WorkflooApi;

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
    Integer itemsPerPage = 56; // Integer | Cantidad de resultados por página, entre 1 y 10000
    String from = "from_example"; // String | Fecha inicial del rango (ISO 8601)
    String to = "to_example"; // String | Fecha final del rango (ISO 8601)
    String origin = "origin_example"; // String | Origen de la ejecución: KIBAN_CLOUD, API o FRONT
    String status = "status_example"; // String | Estado de la ejecución: SUCCESS, ERROR o PROGRESS
    String name = "name_example"; // String | Nombre del workfloo (búsqueda parcial)
    String id = "id_example"; // String | Id exacto de la ejecución
    String nodesFormSearchableByRfcPf = "nodesFormSearchableByRfcPf_example"; // String | RFC de persona física (empieza con, sin distinguir mayúsculas)
    String nodesFormSearchableByFirstName = "nodesFormSearchableByFirstName_example"; // String | Nombre (empieza con, sin distinguir mayúsculas)
    String nodesFormSearchableBySecondName = "nodesFormSearchableBySecondName_example"; // String | Segundo nombre (empieza con, sin distinguir mayúsculas)
    String nodesFormSearchableByLastName1 = "nodesFormSearchableByLastName1_example"; // String | Apellido paterno (empieza con, sin distinguir mayúsculas)
    String nodesFormSearchableByLastName2 = "nodesFormSearchableByLastName2_example"; // String | Apellido materno (empieza con, sin distinguir mayúsculas)
    String nodesFormSearchableByRfcPm = "nodesFormSearchableByRfcPm_example"; // String | RFC de persona moral (empieza con, sin distinguir mayúsculas)
    String nodesFormSearchableByCompanyName = "nodesFormSearchableByCompanyName_example"; // String | Razón social (empieza con, sin distinguir mayúsculas)
    String format = "JSON"; // String | Formato de la respuesta; por defecto JSON
    Boolean content = true; // Boolean | Agrega la ejecución completa (todos sus nodos) a cada elemento; por defecto false
    String labels = "labels_example"; // String | Etiquetas, separadas por punto y coma
    Boolean sandbox = true; // Boolean | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      List<ControllerWorkflooModelWorkflooListItem> result = apiInstance.listWorkfloosV2()
            .page(page)
            .itemsPerPage(itemsPerPage)
            .from(from)
            .to(to)
            .origin(origin)
            .status(status)
            .name(name)
            .id(id)
            .nodesFormSearchableByRfcPf(nodesFormSearchableByRfcPf)
            .nodesFormSearchableByFirstName(nodesFormSearchableByFirstName)
            .nodesFormSearchableBySecondName(nodesFormSearchableBySecondName)
            .nodesFormSearchableByLastName1(nodesFormSearchableByLastName1)
            .nodesFormSearchableByLastName2(nodesFormSearchableByLastName2)
            .nodesFormSearchableByRfcPm(nodesFormSearchableByRfcPm)
            .nodesFormSearchableByCompanyName(nodesFormSearchableByCompanyName)
            .format(format)
            .content(content)
            .labels(labels)
            .sandbox(sandbox)
            .execute();
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
| **itemsPerPage** | **Integer**| Cantidad de resultados por página, entre 1 y 10000 | [optional] |
| **from** | **String**| Fecha inicial del rango (ISO 8601) | [optional] |
| **to** | **String**| Fecha final del rango (ISO 8601) | [optional] |
| **origin** | **String**| Origen de la ejecución: KIBAN_CLOUD, API o FRONT | [optional] |
| **status** | **String**| Estado de la ejecución: SUCCESS, ERROR o PROGRESS | [optional] |
| **name** | **String**| Nombre del workfloo (búsqueda parcial) | [optional] |
| **id** | **String**| Id exacto de la ejecución | [optional] |
| **nodesFormSearchableByRfcPf** | **String**| RFC de persona física (empieza con, sin distinguir mayúsculas) | [optional] |
| **nodesFormSearchableByFirstName** | **String**| Nombre (empieza con, sin distinguir mayúsculas) | [optional] |
| **nodesFormSearchableBySecondName** | **String**| Segundo nombre (empieza con, sin distinguir mayúsculas) | [optional] |
| **nodesFormSearchableByLastName1** | **String**| Apellido paterno (empieza con, sin distinguir mayúsculas) | [optional] |
| **nodesFormSearchableByLastName2** | **String**| Apellido materno (empieza con, sin distinguir mayúsculas) | [optional] |
| **nodesFormSearchableByRfcPm** | **String**| RFC de persona moral (empieza con, sin distinguir mayúsculas) | [optional] |
| **nodesFormSearchableByCompanyName** | **String**| Razón social (empieza con, sin distinguir mayúsculas) | [optional] |
| **format** | **String**| Formato de la respuesta; por defecto JSON | [optional] [enum: JSON, CSV] |
| **content** | **Boolean**| Agrega la ejecución completa (todos sus nodos) a cada elemento; por defecto false | [optional] |
| **labels** | **String**| Etiquetas, separadas por punto y coma | [optional] |
| **sandbox** | **Boolean**| Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

### Return type

[**List&lt;ControllerWorkflooModelWorkflooListItem&gt;**](ControllerWorkflooModelWorkflooListItem.md)

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
> ControllerWorkflooModelNipResendStatus resendWorkflooNip(id).sandbox(sandbox).controllerWorkflooModelNipResendRequest(controllerWorkflooModelNipResendRequest).execute();

Reenviar el NIP

Reenvía el NIP y devuelve el estado del flujo NIP. El body es opcional (teléfono al que reenviar).

### Example
```java
// Import classes:
import com.kiban.workfloo.ApiClient;
import com.kiban.workfloo.ApiException;
import com.kiban.workfloo.Configuration;
import com.kiban.workfloo.auth.*;
import com.kiban.workfloo.models.*;
import com.kiban.workfloo.api.WorkflooApi;

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
      ControllerWorkflooModelNipResendStatus result = apiInstance.resendWorkflooNip(id)
            .sandbox(sandbox)
            .controllerWorkflooModelNipResendRequest(controllerWorkflooModelNipResendRequest)
            .execute();
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
> reviewWorkflooValidation(id, controllerWorkflooModelReviewRequest).sandbox(sandbox).execute();

Revisar un paso de validación

Aplica la decisión del revisor sobre un nodo VALIDATION en estado REVIEW: aprobar o rechazar. En un rechazo, reviews indica los campos a corregir con su mensaje.

### Example
```java
// Import classes:
import com.kiban.workfloo.ApiClient;
import com.kiban.workfloo.ApiException;
import com.kiban.workfloo.Configuration;
import com.kiban.workfloo.auth.*;
import com.kiban.workfloo.models.*;
import com.kiban.workfloo.api.WorkflooApi;

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
      apiInstance.reviewWorkflooValidation(id, controllerWorkflooModelReviewRequest)
            .sandbox(sandbox)
            .execute();
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
> sendWorkflooNip(id).sandbox(sandbox).controllerWorkflooModelNipSendRequest(controllerWorkflooModelNipSendRequest).execute();

Enviar el NIP

Envía el NIP (código de un solo uso) del nodo NIP actual. El body es opcional; si se incluye teléfono, countryCode y phoneNumber van juntos.

### Example
```java
// Import classes:
import com.kiban.workfloo.ApiClient;
import com.kiban.workfloo.ApiException;
import com.kiban.workfloo.Configuration;
import com.kiban.workfloo.auth.*;
import com.kiban.workfloo.models.*;
import com.kiban.workfloo.api.WorkflooApi;

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
      apiInstance.sendWorkflooNip(id)
            .sandbox(sandbox)
            .controllerWorkflooModelNipSendRequest(controllerWorkflooModelNipSendRequest)
            .execute();
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
> submitWorkflooCorrection(id, body).sandbox(sandbox).execute();

Enviar la corrección de un paso de validación

Reenvía los campos corregidos por el prospecto cuando un nodo VALIDATION está en estado CORRECTION. El body es un objeto {campoId: valor}, igual que el formulario.

### Example
```java
// Import classes:
import com.kiban.workfloo.ApiClient;
import com.kiban.workfloo.ApiException;
import com.kiban.workfloo.Configuration;
import com.kiban.workfloo.auth.*;
import com.kiban.workfloo.models.*;
import com.kiban.workfloo.api.WorkflooApi;

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
      apiInstance.submitWorkflooCorrection(id, body)
            .sandbox(sandbox)
            .execute();
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
> ControllerWorkflooModelNipValidateResponse validateWorkflooNip(id, controllerWorkflooModelNipValidateRequest).sandbox(sandbox).execute();

Validar el NIP

Valida el NIP capturado por el usuario y devuelve la fase resultante del flujo NIP.

### Example
```java
// Import classes:
import com.kiban.workfloo.ApiClient;
import com.kiban.workfloo.ApiException;
import com.kiban.workfloo.Configuration;
import com.kiban.workfloo.auth.*;
import com.kiban.workfloo.models.*;
import com.kiban.workfloo.api.WorkflooApi;

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
      ControllerWorkflooModelNipValidateResponse result = apiInstance.validateWorkflooNip(id, controllerWorkflooModelNipValidateRequest)
            .sandbox(sandbox)
            .execute();
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

<a id="validateWorkflooOtp"></a>
# **validateWorkflooOtp**
> validateWorkflooOtp(id, controllerWorkflooModelOtpValidateRequest).sandbox(sandbox).execute();

Validar el código de verificación (OTP)

Envía al proveedor el código que tecleó la persona en el paso de verificación (ver &#x60;verification&#x60; en el estatus). Un código incorrecto con intentos restantes responde 400 con &#x60;{\&quot;error\&quot;, \&quot;remainingRetries\&quot;}&#x60; y la ejecución sigue estacionada; al agotar los intentos responde 403, salvo que el nodo tenga rama de error, en cuyo caso el flujo continúa por ahí y responde 200.

### Example
```java
// Import classes:
import com.kiban.workfloo.ApiClient;
import com.kiban.workfloo.ApiException;
import com.kiban.workfloo.Configuration;
import com.kiban.workfloo.auth.*;
import com.kiban.workfloo.models.*;
import com.kiban.workfloo.api.WorkflooApi;

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
    ControllerWorkflooModelOtpValidateRequest controllerWorkflooModelOtpValidateRequest = new ControllerWorkflooModelOtpValidateRequest(); // ControllerWorkflooModelOtpValidateRequest | El código a validar
    Boolean sandbox = true; // Boolean | Fuerza el ambiente sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      apiInstance.validateWorkflooOtp(id, controllerWorkflooModelOtpValidateRequest)
            .sandbox(sandbox)
            .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling WorkflooApi#validateWorkflooOtp");
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
| **controllerWorkflooModelOtpValidateRequest** | [**ControllerWorkflooModelOtpValidateRequest**](ControllerWorkflooModelOtpValidateRequest.md)| El código a validar | |
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
| **200** | Código validado (o intentos agotados con rama de error) |  -  |
| **400** | Token ausente o código incorrecto (incluye remainingRetries) |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin código pendiente, intentos agotados, sin acceso, o la ejecución siguió ocupada procesando otro paso tras ~4.5 s de espera |  -  |
| **404** | La ejecución no existe |  -  |
| **500** | Error interno (incluye otra petición tomando la ejecución en el mismo instante; reintentar) |  -  |
| **503** | Servicio dependiente no disponible |  -  |

