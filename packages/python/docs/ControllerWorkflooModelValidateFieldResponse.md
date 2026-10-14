# ControllerWorkflooModelValidateFieldResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_id** | **str** | CheckId identifica la validación ejecutada. | [optional] 
**errors** | **Dict[str, str]** | Errors trae, por campo, el código de formato o el mensaje del servicio. | [optional] 
**filled** | **Dict[str, object]** | Filled son los campos que el validador rellenó. | [optional] 
**missing_inputs** | **List[str]** | MissingInputs son los campos que faltan capturar para poder validar (status PENDING_INPUTS). | [optional] 
**options** | **Dict[str, List[str]]** | Options son los campos con varios candidatos (p. ej. las colonias de un código postal): campo → candidatos. Al entregar el formulario sólo se acepta uno de ellos. | [optional] 
**reused** | **bool** | Reused indica que se reusó una validación anterior con los mismos datos. | [optional] 
**status** | **str** | Status es VALID, INVALID, FORMAT_ERROR o PENDING_INPUTS. | [optional] 

## Example

```python
from kiban.workfloo.models.controller_workfloo_model_validate_field_response import ControllerWorkflooModelValidateFieldResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelValidateFieldResponse from a JSON string
controller_workfloo_model_validate_field_response_instance = ControllerWorkflooModelValidateFieldResponse.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelValidateFieldResponse.to_json())

# convert the object into a dict
controller_workfloo_model_validate_field_response_dict = controller_workfloo_model_validate_field_response_instance.to_dict()
# create an instance of ControllerWorkflooModelValidateFieldResponse from a dict
controller_workfloo_model_validate_field_response_from_dict = ControllerWorkflooModelValidateFieldResponse.from_dict(controller_workfloo_model_validate_field_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


