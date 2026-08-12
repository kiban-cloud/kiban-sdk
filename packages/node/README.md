## kiban.sdk.workfloo@0.1.0

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
npm install kiban.sdk.workfloo@0.1.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://workfloo.kiban.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PoolApi* | [**executePool**](docs/PoolApi.md#executepool) | **POST** /api/v1/pool | Ejecutar un pool
*WorkflooApi* | [**executeWorkfloo**](docs/WorkflooApi.md#executeworkfloo) | **POST** /api/v1/workfloo | Ejecutar un workfloo
*WorkflooApi* | [**executeWorkflooDocument**](docs/WorkflooApi.md#executeworkfloodocument) | **POST** /api/v1/workfloo/{id}/document | Enviar los documentos de un paso
*WorkflooApi* | [**executeWorkflooForm**](docs/WorkflooApi.md#executeworkflooform) | **POST** /api/v1/workfloo/{id}/form | Enviar el formulario de un paso
*WorkflooApi* | [**getWorkfloo**](docs/WorkflooApi.md#getworkfloo) | **GET** /api/v1/workfloo/{id} | Detalle de una ejecución
*WorkflooApi* | [**getWorkflooFile**](docs/WorkflooApi.md#getworkfloofile) | **GET** /api/v1/workfloo/{id}/file | Descargar un archivo de un nodo
*WorkflooApi* | [**getWorkflooStatus**](docs/WorkflooApi.md#getworkfloostatus) | **GET** /api/v1/workfloo/status/{id} | Estatus de una ejecución
*WorkflooApi* | [**listWorkfloos**](docs/WorkflooApi.md#listworkfloos) | **GET** /api/v1/workfloo | Historial de ejecuciones (v1)
*WorkflooApi* | [**listWorkfloosV2**](docs/WorkflooApi.md#listworkfloosv2) | **GET** /api/v2/workfloo | Historial de ejecuciones (v2)
*WorkflooApi* | [**resendWorkflooNip**](docs/WorkflooApi.md#resendworkfloonip) | **PATCH** /api/v1/workfloo/{id}/nip/resend | Reenviar el NIP
*WorkflooApi* | [**reviewWorkflooValidation**](docs/WorkflooApi.md#reviewworkfloovalidation) | **POST** /api/v1/workfloo/{id}/review | Revisar un paso de validación
*WorkflooApi* | [**sendWorkflooNip**](docs/WorkflooApi.md#sendworkfloonip) | **PATCH** /api/v1/workfloo/{id}/nip/send | Enviar el NIP
*WorkflooApi* | [**submitWorkflooCorrection**](docs/WorkflooApi.md#submitworkfloocorrection) | **POST** /api/v1/workfloo/{id}/correction | Enviar la corrección de un paso de validación
*WorkflooApi* | [**validateWorkflooNip**](docs/WorkflooApi.md#validateworkfloonip) | **PATCH** /api/v1/workfloo/{id}/nip/validate | Validar el NIP


### Documentation For Models

 - [ControllerPoolModelExecute](docs/ControllerPoolModelExecute.md)
 - [ControllerPoolModelExecuteResponse](docs/ControllerPoolModelExecuteResponse.md)
 - [ControllerWorkflooDefinitionModelAutoFilledBy](docs/ControllerWorkflooDefinitionModelAutoFilledBy.md)
 - [ControllerWorkflooDefinitionModelDocument](docs/ControllerWorkflooDefinitionModelDocument.md)
 - [ControllerWorkflooDefinitionModelField](docs/ControllerWorkflooDefinitionModelField.md)
 - [ControllerWorkflooDefinitionModelFieldMetadata](docs/ControllerWorkflooDefinitionModelFieldMetadata.md)
 - [ControllerWorkflooDefinitionModelFileDocument](docs/ControllerWorkflooDefinitionModelFileDocument.md)
 - [ControllerWorkflooDefinitionModelFileDocumentSet](docs/ControllerWorkflooDefinitionModelFileDocumentSet.md)
 - [ControllerWorkflooDefinitionModelFileMetadata](docs/ControllerWorkflooDefinitionModelFileMetadata.md)
 - [ControllerWorkflooDefinitionModelForm](docs/ControllerWorkflooDefinitionModelForm.md)
 - [ControllerWorkflooDefinitionModelFormFieldSection](docs/ControllerWorkflooDefinitionModelFormFieldSection.md)
 - [ControllerWorkflooDefinitionModelSetData](docs/ControllerWorkflooDefinitionModelSetData.md)
 - [ControllerWorkflooDefinitionModelSetDataDocument](docs/ControllerWorkflooDefinitionModelSetDataDocument.md)
 - [ControllerWorkflooDefinitionModelShow](docs/ControllerWorkflooDefinitionModelShow.md)
 - [ControllerWorkflooDefinitionModelShowIf](docs/ControllerWorkflooDefinitionModelShowIf.md)
 - [ControllerWorkflooModelApi](docs/ControllerWorkflooModelApi.md)
 - [ControllerWorkflooModelApiData](docs/ControllerWorkflooModelApiData.md)
 - [ControllerWorkflooModelApiDataResume](docs/ControllerWorkflooModelApiDataResume.md)
 - [ControllerWorkflooModelApiHttp](docs/ControllerWorkflooModelApiHttp.md)
 - [ControllerWorkflooModelData](docs/ControllerWorkflooModelData.md)
 - [ControllerWorkflooModelDecisionTree](docs/ControllerWorkflooModelDecisionTree.md)
 - [ControllerWorkflooModelDocumentsResume](docs/ControllerWorkflooModelDocumentsResume.md)
 - [ControllerWorkflooModelEvent](docs/ControllerWorkflooModelEvent.md)
 - [ControllerWorkflooModelExecute](docs/ControllerWorkflooModelExecute.md)
 - [ControllerWorkflooModelExecuteResponse](docs/ControllerWorkflooModelExecuteResponse.md)
 - [ControllerWorkflooModelFile](docs/ControllerWorkflooModelFile.md)
 - [ControllerWorkflooModelFileResponse](docs/ControllerWorkflooModelFileResponse.md)
 - [ControllerWorkflooModelForm](docs/ControllerWorkflooModelForm.md)
 - [ControllerWorkflooModelFormField](docs/ControllerWorkflooModelFormField.md)
 - [ControllerWorkflooModelFormResume](docs/ControllerWorkflooModelFormResume.md)
 - [ControllerWorkflooModelLabel](docs/ControllerWorkflooModelLabel.md)
 - [ControllerWorkflooModelLink](docs/ControllerWorkflooModelLink.md)
 - [ControllerWorkflooModelLinkNipStatus](docs/ControllerWorkflooModelLinkNipStatus.md)
 - [ControllerWorkflooModelLinkResume](docs/ControllerWorkflooModelLinkResume.md)
 - [ControllerWorkflooModelNipResendRequest](docs/ControllerWorkflooModelNipResendRequest.md)
 - [ControllerWorkflooModelNipResendStatus](docs/ControllerWorkflooModelNipResendStatus.md)
 - [ControllerWorkflooModelNipSendRequest](docs/ControllerWorkflooModelNipSendRequest.md)
 - [ControllerWorkflooModelNipValidateRequest](docs/ControllerWorkflooModelNipValidateRequest.md)
 - [ControllerWorkflooModelNipValidateResponse](docs/ControllerWorkflooModelNipValidateResponse.md)
 - [ControllerWorkflooModelNode](docs/ControllerWorkflooModelNode.md)
 - [ControllerWorkflooModelNodeDetail](docs/ControllerWorkflooModelNodeDetail.md)
 - [ControllerWorkflooModelNodeResume](docs/ControllerWorkflooModelNodeResume.md)
 - [ControllerWorkflooModelPdf](docs/ControllerWorkflooModelPdf.md)
 - [ControllerWorkflooModelRemainingTime](docs/ControllerWorkflooModelRemainingTime.md)
 - [ControllerWorkflooModelReviewFieldRequest](docs/ControllerWorkflooModelReviewFieldRequest.md)
 - [ControllerWorkflooModelReviewRequest](docs/ControllerWorkflooModelReviewRequest.md)
 - [ControllerWorkflooModelReviewResume](docs/ControllerWorkflooModelReviewResume.md)
 - [ControllerWorkflooModelRules](docs/ControllerWorkflooModelRules.md)
 - [ControllerWorkflooModelRuleset](docs/ControllerWorkflooModelRuleset.md)
 - [ControllerWorkflooModelTimer](docs/ControllerWorkflooModelTimer.md)
 - [ControllerWorkflooModelValidationField](docs/ControllerWorkflooModelValidationField.md)
 - [ControllerWorkflooModelValidationResume](docs/ControllerWorkflooModelValidationResume.md)
 - [ControllerWorkflooModelValidationStatus](docs/ControllerWorkflooModelValidationStatus.md)
 - [ControllerWorkflooModelVariable](docs/ControllerWorkflooModelVariable.md)
 - [ControllerWorkflooModelVariables](docs/ControllerWorkflooModelVariables.md)
 - [ControllerWorkflooModelWorkfloo](docs/ControllerWorkflooModelWorkfloo.md)
 - [ControllerWorkflooModelWorkflooPage](docs/ControllerWorkflooModelWorkflooPage.md)
 - [ControllerWorkflooModelWorkflooResume](docs/ControllerWorkflooModelWorkflooResume.md)
 - [ControllerWorkflooModelWorkflooStatus](docs/ControllerWorkflooModelWorkflooStatus.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="ApiKeyAuth"></a>
### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header

