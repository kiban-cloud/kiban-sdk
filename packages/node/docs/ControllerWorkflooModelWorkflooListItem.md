# ControllerWorkflooModelWorkflooListItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancelledAt** | **string** |  | [optional] [default to undefined]
**cancelledBy** | **string** |  | [optional] [default to undefined]
**companyName** | **string** |  | [optional] [default to undefined]
**created** | **string** | Ejecución completa (content&#x3D;true): lo mismo que GET /api/v1/workfloo/{id}. | [optional] [default to undefined]
**createdAt** | **string** | Resumen (content&#x3D;false). | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**currentNodeName** | **string** |  | [optional] [default to undefined]
**firstName** | **string** |  | [optional] [default to undefined]
**id** | **string** | Comunes a las dos formas. | [optional] [default to undefined]
**idUnykoo** | **number** |  | [optional] [default to undefined]
**ipOrigin** | **string** |  | [optional] [default to undefined]
**labels** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**lastName1** | **string** |  | [optional] [default to undefined]
**lastName2** | **string** |  | [optional] [default to undefined]
**modified** | **string** |  | [optional] [default to undefined]
**modifiedAt** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**nodes** | [**Array&lt;ControllerWorkflooModelNodeResume&gt;**](ControllerWorkflooModelNodeResume.md) |  | [optional] [default to undefined]
**origin** | **string** |  | [optional] [default to undefined]
**rfcPf** | **string** |  | [optional] [default to undefined]
**rfcPm** | **string** |  | [optional] [default to undefined]
**sceneryId** | **string** |  | [optional] [default to undefined]
**sceneryName** | **string** |  | [optional] [default to undefined]
**secondName** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**steps** | [**Array&lt;ControllerWorkflooModelNode&gt;**](ControllerWorkflooModelNode.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ControllerWorkflooModelWorkflooListItem } from 'kiban.sdk.workfloo';

const instance: ControllerWorkflooModelWorkflooListItem = {
    cancelledAt,
    cancelledBy,
    companyName,
    created,
    createdAt,
    createdBy,
    currentNodeName,
    firstName,
    id,
    idUnykoo,
    ipOrigin,
    labels,
    lastName1,
    lastName2,
    modified,
    modifiedAt,
    name,
    nodes,
    origin,
    rfcPf,
    rfcPm,
    sceneryId,
    sceneryName,
    secondName,
    status,
    steps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
