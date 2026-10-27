# ControllerWorkflooModelRejectedField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**detail** | **List[str]** |  | [optional] 
**id** | **str** |  | [optional] 
**label** | **str** |  | [optional] 
**reason** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from kiban.workfloo.models.controller_workfloo_model_rejected_field import ControllerWorkflooModelRejectedField

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelRejectedField from a JSON string
controller_workfloo_model_rejected_field_instance = ControllerWorkflooModelRejectedField.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelRejectedField.to_json())

# convert the object into a dict
controller_workfloo_model_rejected_field_dict = controller_workfloo_model_rejected_field_instance.to_dict()
# create an instance of ControllerWorkflooModelRejectedField from a dict
controller_workfloo_model_rejected_field_from_dict = ControllerWorkflooModelRejectedField.from_dict(controller_workfloo_model_rejected_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


