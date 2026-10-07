# Kiban.Workfloo.Model.ControllerWorkflooModelWorkflooStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancelledAt** | **string** |  | [optional] 
**CancelledBy** | **string** | Rastro de la cancelación manual, ausente en cualquier otro desenlace. Mismas dos reglas que en WorkflooResume: sólo la cancelación desde la consola los llena, y la fecha es un puntero para que omitempty funcione. | [optional] 
**CurrentNodeId** | **string** |  | [optional] 
**CurrentNodeName** | **string** |  | [optional] 
**CurrentNodeType** | **string** |  | [optional] 
**Document** | [**ControllerWorkflooDefinitionModelDocument**](ControllerWorkflooDefinitionModelDocument.md) |  | [optional] 
**Form** | [**ControllerWorkflooDefinitionModelForm**](ControllerWorkflooDefinitionModelForm.md) |  | [optional] 
**Id** | **string** |  | [optional] 
**Link** | [**ControllerWorkflooModelLinkNipStatus**](ControllerWorkflooModelLinkNipStatus.md) |  | [optional] 
**Name** | **string** |  | [optional] 
**Status** | **string** |  | [optional] 
**Timer** | [**ControllerWorkflooModelTimer**](ControllerWorkflooModelTimer.md) |  | [optional] 
**Validation** | [**ControllerWorkflooModelValidationStatus**](ControllerWorkflooModelValidationStatus.md) |  | [optional] 
**Verification** | [**ControllerWorkflooModelVerificationStatus**](ControllerWorkflooModelVerificationStatus.md) | Verification aparece SÓLO cuando la ejecución está esperando que alguien teclee un código. Su ausencia es lo que le dice al integrador que no hay nada pendiente de ese lado. | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

