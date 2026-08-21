## kiban.sdk.link@0.1.0

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
npm install kiban.sdk.link@0.1.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://link.kiban.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*LinkApi* | [**apiV1FileGet**](docs/LinkApi.md#apiv1fileget) | **GET** /api/v1/file | Descargar un archivo de una ejecución
*LinkApi* | [**apiVversionServiceSubserviceGet**](docs/LinkApi.md#apivversionservicesubserviceget) | **GET** /api/v{version}/{service}/{subservice} | Historial de ejecuciones de un servicio
*LinkApi* | [**apiVversionServiceSubserviceIdGet**](docs/LinkApi.md#apivversionservicesubserviceidget) | **GET** /api/v{version}/{service}/{subservice}/{id} | Detalle de una ejecución
*LinkApi* | [**apiVversionServiceSubservicePost**](docs/LinkApi.md#apivversionservicesubservicepost) | **POST** /api/v{version}/{service}/{subservice} | Ejecutar un servicio de Link
*LinkApi* | [**apiVversionServiceSubserviceTestCaseGet**](docs/LinkApi.md#apivversionservicesubservicetestcaseget) | **GET** /api/v{version}/{service}/{subservice}/test_case | Test cases de un servicio (sandbox)
*LinkApi* | [**apiVversionServiceSubserviceVaultPost**](docs/LinkApi.md#apivversionservicesubservicevaultpost) | **POST** /api/v{version}/{service}/{subservice}/vault | Validar un vault


### Documentation For Models

 - [ControllerMicroserviceModelApiDataDetailDto](docs/ControllerMicroserviceModelApiDataDetailDto.md)
 - [ControllerMicroserviceModelApiDataEventDto](docs/ControllerMicroserviceModelApiDataEventDto.md)
 - [ControllerMicroserviceModelApiDataFileDto](docs/ControllerMicroserviceModelApiDataFileDto.md)
 - [ControllerMicroserviceModelApiDataHttpDto](docs/ControllerMicroserviceModelApiDataHttpDto.md)
 - [ControllerMicroserviceModelEventDto](docs/ControllerMicroserviceModelEventDto.md)
 - [ControllerMicroserviceModelLinkExecutionPage](docs/ControllerMicroserviceModelLinkExecutionPage.md)
 - [ControllerMicroserviceModelMicroserviceDetailDto](docs/ControllerMicroserviceModelMicroserviceDetailDto.md)
 - [ControllerMicroserviceModelMicroserviceResumeDto](docs/ControllerMicroserviceModelMicroserviceResumeDto.md)
 - [ControllerMicroserviceModelVaultNameDto](docs/ControllerMicroserviceModelVaultNameDto.md)
 - [ControllerTestCaseModelTestCaseOutputMany](docs/ControllerTestCaseModelTestCaseOutputMany.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="ApiKeyAuth"></a>
### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header

