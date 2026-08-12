# ControllerWorkflooModelValidationStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**List[ControllerWorkflooModelValidationField]**](ControllerWorkflooModelValidationField.md) |  | [optional] 
**instruction** | **str** |  | [optional] 
**reviewer_note** | **str** |  | [optional] 
**state** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_validation_status import ControllerWorkflooModelValidationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelValidationStatus from a JSON string
controller_workfloo_model_validation_status_instance = ControllerWorkflooModelValidationStatus.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelValidationStatus.to_json())

# convert the object into a dict
controller_workfloo_model_validation_status_dict = controller_workfloo_model_validation_status_instance.to_dict()
# create an instance of ControllerWorkflooModelValidationStatus from a dict
controller_workfloo_model_validation_status_from_dict = ControllerWorkflooModelValidationStatus.from_dict(controller_workfloo_model_validation_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


