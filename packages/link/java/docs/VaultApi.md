# VaultApi

All URIs are relative to *https://link.kiban.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createVault**](VaultApi.md#createVault) | **POST** /api/v3/vault/na | Crear una credencial |
| [**deleteVault**](VaultApi.md#deleteVault) | **DELETE** /api/v3/vault/na/{id} | Borrar una credencial |
| [**getVault**](VaultApi.md#getVault) | **GET** /api/v1/vault/na/{id} | Detalle de una credencial |
| [**listVaults**](VaultApi.md#listVaults) | **GET** /api/v1/vault/na | Listar credenciales |
| [**updateVault**](VaultApi.md#updateVault) | **PUT** /api/v3/vault/na/{id} | Editar una credencial |
| [**validateVault**](VaultApi.md#validateVault) | **POST** /api/v3/{service}/{subservice}/vault | Validar una credencial para un servicio |


<a id="createVault"></a>
# **createVault**
> ControllerMicroserviceModelMicroserviceDetailDto createVault(domainVaultModelVaultDto).sandbox(sandbox).execute();

Crear una credencial

Guarda una credencial (vault) para usarla después en los servicios que la piden. El tipo sale del catálogo de tipos de credencial; value, value2… son sus secretos y nunca se devuelven.

### Example
```java
// Import classes:
import com.kiban.link.ApiClient;
import com.kiban.link.ApiException;
import com.kiban.link.Configuration;
import com.kiban.link.auth.*;
import com.kiban.link.models.*;
import com.kiban.link.api.VaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://link.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    VaultApi apiInstance = new VaultApi(defaultClient);
    DomainVaultModelVaultDto domainVaultModelVaultDto = new DomainVaultModelVaultDto(); // DomainVaultModelVaultDto | Credencial
    Boolean sandbox = true; // Boolean | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      ControllerMicroserviceModelMicroserviceDetailDto result = apiInstance.createVault(domainVaultModelVaultDto)
            .sandbox(sandbox)
            .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling VaultApi#createVault");
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
| **domainVaultModelVaultDto** | [**DomainVaultModelVaultDto**](DomainVaultModelVaultDto.md)| Credencial | |
| **sandbox** | **Boolean**| Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

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

<a id="deleteVault"></a>
# **deleteVault**
> deleteVault(id).sandbox(sandbox).execute();

Borrar una credencial

Borra una credencial guardada (vault) y su secreto.

### Example
```java
// Import classes:
import com.kiban.link.ApiClient;
import com.kiban.link.ApiException;
import com.kiban.link.Configuration;
import com.kiban.link.auth.*;
import com.kiban.link.models.*;
import com.kiban.link.api.VaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://link.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    VaultApi apiInstance = new VaultApi(defaultClient);
    String id = "id_example"; // String | Id de la credencial
    Boolean sandbox = true; // Boolean | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      apiInstance.deleteVault(id)
            .sandbox(sandbox)
            .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling VaultApi#deleteVault");
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
| **id** | **String**| Id de la credencial | |
| **sandbox** | **Boolean**| Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

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
| **200** | Credencial borrada |  -  |
| **400** | Id ausente |  -  |
| **401** | API key ausente o inválida |  -  |
| **403** | Sin permiso para borrar credenciales |  -  |
| **404** | La credencial no existe |  -  |
| **500** | Error interno |  -  |

<a id="getVault"></a>
# **getVault**
> ControllerMicroserviceModelMicroserviceDetailDto getVault(id).sandbox(sandbox).execute();

Detalle de una credencial

Devuelve una credencial guardada, sin sus secretos.

### Example
```java
// Import classes:
import com.kiban.link.ApiClient;
import com.kiban.link.ApiException;
import com.kiban.link.Configuration;
import com.kiban.link.auth.*;
import com.kiban.link.models.*;
import com.kiban.link.api.VaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://link.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    VaultApi apiInstance = new VaultApi(defaultClient);
    String id = "id_example"; // String | Id de la credencial
    Boolean sandbox = true; // Boolean | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      ControllerMicroserviceModelMicroserviceDetailDto result = apiInstance.getVault(id)
            .sandbox(sandbox)
            .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling VaultApi#getVault");
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
| **id** | **String**| Id de la credencial | |
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
| **200** | Credencial |  -  |
| **400** | Id ausente |  -  |
| **401** | API key ausente o inválida |  -  |
| **404** | La credencial no existe |  -  |
| **500** | Error interno |  -  |

<a id="listVaults"></a>
# **listVaults**
> ControllerMicroserviceModelExecutionPage listVaults(page, itemsPerPage).sandbox(sandbox).execute();

Listar credenciales

Devuelve una página de las credenciales guardadas, sin sus secretos.

### Example
```java
// Import classes:
import com.kiban.link.ApiClient;
import com.kiban.link.ApiException;
import com.kiban.link.Configuration;
import com.kiban.link.auth.*;
import com.kiban.link.models.*;
import com.kiban.link.api.VaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://link.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    VaultApi apiInstance = new VaultApi(defaultClient);
    Integer page = 56; // Integer | Número de página, empieza en 1
    Integer itemsPerPage = 56; // Integer | Resultados por página
    Boolean sandbox = true; // Boolean | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      ControllerMicroserviceModelExecutionPage result = apiInstance.listVaults(page, itemsPerPage)
            .sandbox(sandbox)
            .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling VaultApi#listVaults");
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
| **200** | Página de credenciales |  -  |
| **400** | Parámetros de paginación inválidos |  -  |
| **401** | API key ausente o inválida |  -  |
| **500** | Error interno |  -  |

<a id="updateVault"></a>
# **updateVault**
> updateVault(id, domainVaultModelVaultEditDto).sandbox(sandbox).execute();

Editar una credencial

Actualiza una credencial guardada (vault). Se mandan todos sus campos, incluidos los secretos.

### Example
```java
// Import classes:
import com.kiban.link.ApiClient;
import com.kiban.link.ApiException;
import com.kiban.link.Configuration;
import com.kiban.link.auth.*;
import com.kiban.link.models.*;
import com.kiban.link.api.VaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://link.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    VaultApi apiInstance = new VaultApi(defaultClient);
    String id = "id_example"; // String | Id de la credencial
    DomainVaultModelVaultEditDto domainVaultModelVaultEditDto = new DomainVaultModelVaultEditDto(); // DomainVaultModelVaultEditDto | Credencial con sus nuevos valores
    Boolean sandbox = true; // Boolean | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      apiInstance.updateVault(id, domainVaultModelVaultEditDto)
            .sandbox(sandbox)
            .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling VaultApi#updateVault");
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
| **id** | **String**| Id de la credencial | |
| **domainVaultModelVaultEditDto** | [**DomainVaultModelVaultEditDto**](DomainVaultModelVaultEditDto.md)| Credencial con sus nuevos valores | |
| **sandbox** | **Boolean**| Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

### Return type

null (empty response body)

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

<a id="validateVault"></a>
# **validateVault**
> ControllerMicroserviceModelVaultValidationDto validateVault(service, subservice, controllerMicroserviceModelVaultNameDto).sandbox(sandbox).execute();

Validar una credencial para un servicio

Dice si una credencial existe y sirve para el servicio indicado en la ruta.

### Example
```java
// Import classes:
import com.kiban.link.ApiClient;
import com.kiban.link.ApiException;
import com.kiban.link.Configuration;
import com.kiban.link.auth.*;
import com.kiban.link.models.*;
import com.kiban.link.api.VaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://link.kiban.com");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    VaultApi apiInstance = new VaultApi(defaultClient);
    String service = "service_example"; // String | Servicio del catálogo
    String subservice = "subservice_example"; // String | Operación del servicio
    ControllerMicroserviceModelVaultNameDto controllerMicroserviceModelVaultNameDto = new ControllerMicroserviceModelVaultNameDto(); // ControllerMicroserviceModelVaultNameDto | Nombre de la credencial
    Boolean sandbox = true; // Boolean | Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito
    try {
      ControllerMicroserviceModelVaultValidationDto result = apiInstance.validateVault(service, subservice, controllerMicroserviceModelVaultNameDto)
            .sandbox(sandbox)
            .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling VaultApi#validateVault");
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
| **controllerMicroserviceModelVaultNameDto** | [**ControllerMicroserviceModelVaultNameDto**](ControllerMicroserviceModelVaultNameDto.md)| Nombre de la credencial | |
| **sandbox** | **Boolean**| Fuerza el modo sandbox. Se ignora en el host sandbox, donde ya es implícito | [optional] |

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

