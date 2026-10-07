# ControllerWorkflooDefinitionModelFileDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileMetadata** | [**ControllerWorkflooDefinitionModelFileMetadata**](ControllerWorkflooDefinitionModelFileMetadata.md) |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**predefined** | **boolean** |  | [optional] [default to undefined]
**required** | **boolean** |  | [optional] [default to undefined]
**set** | [**ControllerWorkflooDefinitionModelSetDataDocument**](ControllerWorkflooDefinitionModelSetDataDocument.md) |  | [optional] [default to undefined]
**sourcePdfNodeId** | **string** | SourcePdfNodeId: id del nodo PDF que genera este archivo. Cuando viene, el motor lo toma de ahí y no lo pide en el paso. | [optional] [default to undefined]

## Example

```typescript
import { ControllerWorkflooDefinitionModelFileDocument } from '@kiban/workfloo';

const instance: ControllerWorkflooDefinitionModelFileDocument = {
    fileMetadata,
    id,
    name,
    predefined,
    required,
    set,
    sourcePdfNodeId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
