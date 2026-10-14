# Kiban.Workfloo.Model.ControllerWorkflooModelValidateFieldResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckId** | **string** | CheckId identifica la validación ejecutada. | [optional] 
**Errors** | **Dictionary&lt;string, string&gt;** | Errors trae, por campo, el código de formato o el mensaje del servicio. | [optional] 
**Filled** | **Dictionary&lt;string, Object&gt;** | Filled son los campos que el validador rellenó. | [optional] 
**MissingInputs** | **List&lt;string&gt;** | MissingInputs son los campos que faltan capturar para poder validar (status PENDING_INPUTS). | [optional] 
**Options** | **Dictionary&lt;string, List&lt;string&gt;&gt;** | Options son los campos con varios candidatos (p. ej. las colonias de un código postal): campo → candidatos. Al entregar el formulario sólo se acepta uno de ellos. | [optional] 
**Reused** | **bool** | Reused indica que se reusó una validación anterior con los mismos datos. | [optional] 
**Status** | **string** | Status es VALID, INVALID, FORMAT_ERROR o PENDING_INPUTS. | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

