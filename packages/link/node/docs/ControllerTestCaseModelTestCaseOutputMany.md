# ControllerTestCaseModelTestCaseOutputMany


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** |  | [optional] [default to undefined]
**_default** | **boolean** | Default marca el caso que sandbox responde cuando no se indica testCaseId. | [optional] [default to undefined]
**httpCode** | **number** | HttpCode es el código HTTP con el que sandbox responde este caso (200: la consulta sale bien). | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**modifiedAt** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**origin** | **string** |  | [optional] [default to undefined]
**service** | **string** |  | [optional] [default to undefined]
**status** | **string** | Status es el status de la respuesta de sandbox con este caso; vacío equivale a SUCCESS. | [optional] [default to undefined]
**subService** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ControllerTestCaseModelTestCaseOutputMany } from '@kiban/link';

const instance: ControllerTestCaseModelTestCaseOutputMany = {
    createdAt,
    _default,
    httpCode,
    id,
    modifiedAt,
    name,
    origin,
    service,
    status,
    subService,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
