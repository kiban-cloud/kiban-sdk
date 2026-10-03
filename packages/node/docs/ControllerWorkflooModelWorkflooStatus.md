# ControllerWorkflooModelWorkflooStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancelledAt** | **string** |  | [optional] [default to undefined]
**cancelledBy** | **string** | Rastro de la cancelación manual, ausente en cualquier otro desenlace. Mismas dos reglas que en WorkflooResume: sólo la cancelación desde la consola los llena, y la fecha es un puntero para que omitempty funcione. | [optional] [default to undefined]
**currentNodeId** | **string** |  | [optional] [default to undefined]
**currentNodeName** | **string** |  | [optional] [default to undefined]
**currentNodeType** | **string** |  | [optional] [default to undefined]
**document** | [**ControllerWorkflooDefinitionModelDocument**](ControllerWorkflooDefinitionModelDocument.md) |  | [optional] [default to undefined]
**form** | [**ControllerWorkflooDefinitionModelForm**](ControllerWorkflooDefinitionModelForm.md) |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**link** | [**ControllerWorkflooModelLinkNipStatus**](ControllerWorkflooModelLinkNipStatus.md) |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**timer** | [**ControllerWorkflooModelTimer**](ControllerWorkflooModelTimer.md) |  | [optional] [default to undefined]
**validation** | [**ControllerWorkflooModelValidationStatus**](ControllerWorkflooModelValidationStatus.md) |  | [optional] [default to undefined]
**verification** | [**ControllerWorkflooModelVerificationStatus**](ControllerWorkflooModelVerificationStatus.md) | Verification aparece SÓLO cuando la ejecución está esperando que alguien teclee un código. Su ausencia es lo que le dice al integrador que no hay nada pendiente de ese lado. | [optional] [default to undefined]

## Example

```typescript
import { ControllerWorkflooModelWorkflooStatus } from 'kiban.sdk.workfloo';

const instance: ControllerWorkflooModelWorkflooStatus = {
    cancelledAt,
    cancelledBy,
    currentNodeId,
    currentNodeName,
    currentNodeType,
    document,
    form,
    id,
    link,
    name,
    status,
    timer,
    validation,
    verification,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
