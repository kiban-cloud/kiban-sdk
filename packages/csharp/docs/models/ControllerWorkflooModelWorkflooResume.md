# kiban.sdk.workfloo.Model.ControllerWorkflooModelWorkflooResume

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancelledAt** | **string** |  | [optional] 
**CancelledBy** | **string** | CancelledBy / CancelledAt sólo viajan si un usuario canceló la ejecución a mano desde la consola. Una ABANDONED por expiración del sistema no los trae, y son lo único que distingue un caso del otro (el status es el mismo). CancelledAt es *time.Time porque el omitempty de encoding/json NO omite un struct en cero: un time.Time plano emitiría siempre \&quot;0001-01-01T00:00:00Z\&quot; (mismo patrón que NodeDetail.DateFound). | [optional] 
**Created** | **string** |  | [optional] 
**Id** | **string** |  | [optional] 
**IdUnykoo** | **int** |  | [optional] 
**IpOrigin** | **string** |  | [optional] 
**Labels** | **List&lt;string&gt;** |  | [optional] 
**Modified** | **string** |  | [optional] 
**Name** | **string** |  | [optional] 
**Nodes** | [**List&lt;ControllerWorkflooModelNodeResume&gt;**](ControllerWorkflooModelNodeResume.md) |  | [optional] 
**Origin** | **string** |  | [optional] 
**SceneryId** | **string** |  | [optional] 
**SceneryName** | **string** |  | [optional] 
**Status** | **string** |  | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

