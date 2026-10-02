

# ControllerWorkflooModelWorkflooResume


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**cancelledAt** | **String** |  |  [optional] |
|**cancelledBy** | **String** | CancelledBy / CancelledAt sólo viajan si un usuario canceló la ejecución a mano desde la consola. Una ABANDONED por expiración del sistema no los trae, y son lo único que distingue un caso del otro (el status es el mismo). CancelledAt es *time.Time porque el omitempty de encoding/json NO omite un struct en cero: un time.Time plano emitiría siempre \&quot;0001-01-01T00:00:00Z\&quot; (mismo patrón que NodeDetail.DateFound). |  [optional] |
|**created** | **String** |  |  [optional] |
|**id** | **String** |  |  [optional] |
|**idUnykoo** | **Integer** |  |  [optional] |
|**ipOrigin** | **String** |  |  [optional] |
|**labels** | **List&lt;String&gt;** |  |  [optional] |
|**modified** | **String** |  |  [optional] |
|**name** | **String** |  |  [optional] |
|**nodes** | [**List&lt;ControllerWorkflooModelNodeResume&gt;**](ControllerWorkflooModelNodeResume.md) |  |  [optional] |
|**origin** | **String** |  |  [optional] |
|**sceneryId** | **String** |  |  [optional] |
|**sceneryName** | **String** |  |  [optional] |
|**status** | **String** |  |  [optional] |



