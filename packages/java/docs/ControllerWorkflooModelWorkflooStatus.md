

# ControllerWorkflooModelWorkflooStatus


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**cancelledAt** | **String** |  |  [optional] |
|**cancelledBy** | **String** | Rastro de la cancelación manual, ausente en cualquier otro desenlace. Mismas dos reglas que en WorkflooResume: sólo la cancelación desde la consola los llena, y la fecha es un puntero para que omitempty funcione. |  [optional] |
|**currentNodeId** | **String** |  |  [optional] |
|**currentNodeName** | **String** |  |  [optional] |
|**currentNodeType** | **String** |  |  [optional] |
|**document** | [**ControllerWorkflooDefinitionModelDocument**](ControllerWorkflooDefinitionModelDocument.md) |  |  [optional] |
|**form** | [**ControllerWorkflooDefinitionModelForm**](ControllerWorkflooDefinitionModelForm.md) |  |  [optional] |
|**id** | **String** |  |  [optional] |
|**link** | [**ControllerWorkflooModelLinkNipStatus**](ControllerWorkflooModelLinkNipStatus.md) |  |  [optional] |
|**name** | **String** |  |  [optional] |
|**status** | **String** |  |  [optional] |
|**timer** | [**ControllerWorkflooModelTimer**](ControllerWorkflooModelTimer.md) |  |  [optional] |
|**validation** | [**ControllerWorkflooModelValidationStatus**](ControllerWorkflooModelValidationStatus.md) |  |  [optional] |
|**verification** | [**ControllerWorkflooModelVerificationStatus**](ControllerWorkflooModelVerificationStatus.md) | Verification aparece SÓLO cuando la ejecución está esperando que alguien teclee un código. Su ausencia es lo que le dice al integrador que no hay nada pendiente de ese lado. |  [optional] |



