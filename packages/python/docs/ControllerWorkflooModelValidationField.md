# ControllerWorkflooModelValidationField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_id** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**value** | **object** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_validation_field import ControllerWorkflooModelValidationField

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelValidationField from a JSON string
controller_workfloo_model_validation_field_instance = ControllerWorkflooModelValidationField.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelValidationField.to_json())

# convert the object into a dict
controller_workfloo_model_validation_field_dict = controller_workfloo_model_validation_field_instance.to_dict()
# create an instance of ControllerWorkflooModelValidationField from a dict
controller_workfloo_model_validation_field_from_dict = ControllerWorkflooModelValidationField.from_dict(controller_workfloo_model_validation_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


