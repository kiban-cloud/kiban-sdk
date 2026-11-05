## @kiban/link@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @kiban/link@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://link.kiban.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*LinkApi* | [**executeService**](docs/LinkApi.md#executeservice) | **POST** /api/v3/{service}/{subservice} | Ejecutar un servicio de link
*LinkApi* | [**getExecution**](docs/LinkApi.md#getexecution) | **GET** /api/v1/{service}/{subservice}/{id} | Detalle de una ejecución
*LinkApi* | [**getFile**](docs/LinkApi.md#getfile) | **GET** /api/v1/file | Descargar un archivo de una ejecución
*LinkApi* | [**listExecutions**](docs/LinkApi.md#listexecutions) | **GET** /api/v1/{service}/{subservice} | Historial de ejecuciones de un servicio
*LinkApi* | [**listTestCases**](docs/LinkApi.md#listtestcases) | **GET** /api/v3/{service}/{subservice}/test_case | Test cases de un servicio
*VaultApi* | [**createVault**](docs/VaultApi.md#createvault) | **POST** /api/v3/vault/na | Crear una credencial
*VaultApi* | [**deleteVault**](docs/VaultApi.md#deletevault) | **DELETE** /api/v3/vault/na/{id} | Borrar una credencial
*VaultApi* | [**getVault**](docs/VaultApi.md#getvault) | **GET** /api/v1/vault/na/{id} | Detalle de una credencial
*VaultApi* | [**listVaults**](docs/VaultApi.md#listvaults) | **GET** /api/v1/vault/na | Listar credenciales
*VaultApi* | [**updateVault**](docs/VaultApi.md#updatevault) | **PUT** /api/v3/vault/na/{id} | Editar una credencial
*VaultApi* | [**validateVault**](docs/VaultApi.md#validatevault) | **POST** /api/v3/{service}/{subservice}/vault | Validar una credencial para un servicio


### Documentation For Models

 - [ControllerMicroserviceModelApiDataDetailDto](docs/ControllerMicroserviceModelApiDataDetailDto.md)
 - [ControllerMicroserviceModelApiDataEventDto](docs/ControllerMicroserviceModelApiDataEventDto.md)
 - [ControllerMicroserviceModelApiDataFileDto](docs/ControllerMicroserviceModelApiDataFileDto.md)
 - [ControllerMicroserviceModelApiDataHttpDto](docs/ControllerMicroserviceModelApiDataHttpDto.md)
 - [ControllerMicroserviceModelEventDto](docs/ControllerMicroserviceModelEventDto.md)
 - [ControllerMicroserviceModelExecutionPage](docs/ControllerMicroserviceModelExecutionPage.md)
 - [ControllerMicroserviceModelMicroserviceDetailDto](docs/ControllerMicroserviceModelMicroserviceDetailDto.md)
 - [ControllerMicroserviceModelMicroserviceResumeDto](docs/ControllerMicroserviceModelMicroserviceResumeDto.md)
 - [ControllerMicroserviceModelValidationErrorDto](docs/ControllerMicroserviceModelValidationErrorDto.md)
 - [ControllerMicroserviceModelVaultNameDto](docs/ControllerMicroserviceModelVaultNameDto.md)
 - [ControllerMicroserviceModelVaultValidationDto](docs/ControllerMicroserviceModelVaultValidationDto.md)
 - [ControllerTestCaseModelTestCaseOutputMany](docs/ControllerTestCaseModelTestCaseOutputMany.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="ApiKeyAuth"></a>
### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header

