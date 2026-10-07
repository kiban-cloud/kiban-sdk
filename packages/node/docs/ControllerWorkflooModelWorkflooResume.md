# ControllerWorkflooModelWorkflooResume


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancelledAt** | **string** |  | [optional] [default to undefined]
**cancelledBy** | **string** | CancelledBy / CancelledAt sólo viajan si un usuario canceló la ejecución a mano desde la consola. Una ABANDONED por expiración del sistema no los trae, y son lo único que distingue un caso del otro (el status es el mismo). CancelledAt es *time.Time porque el omitempty de encoding/json NO omite un struct en cero: un time.Time plano emitiría siempre \&quot;0001-01-01T00:00:00Z\&quot; (mismo patrón que NodeDetail.DateFound). | [optional] [default to undefined]
**created** | **string** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**idUnykoo** | **number** |  | [optional] [default to undefined]
**ipOrigin** | **string** |  | [optional] [default to undefined]
**labels** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**modified** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**nodes** | [**Array&lt;ControllerWorkflooModelNodeResume&gt;**](ControllerWorkflooModelNodeResume.md) |  | [optional] [default to undefined]
**origin** | **string** |  | [optional] [default to undefined]
**sceneryId** | **string** |  | [optional] [default to undefined]
**sceneryName** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ControllerWorkflooModelWorkflooResume } from '@kiban/workfloo';

const instance: ControllerWorkflooModelWorkflooResume = {
    cancelledAt,
    cancelledBy,
    created,
    id,
    idUnykoo,
    ipOrigin,
    labels,
    modified,
    name,
    nodes,
    origin,
    sceneryId,
    sceneryName,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
