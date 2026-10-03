# ControllerWorkflooModelVariable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**value** | **object** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_variable import ControllerWorkflooModelVariable

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelVariable from a JSON string
controller_workfloo_model_variable_instance = ControllerWorkflooModelVariable.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelVariable.to_json())

# convert the object into a dict
controller_workfloo_model_variable_dict = controller_workfloo_model_variable_instance.to_dict()
# create an instance of ControllerWorkflooModelVariable from a dict
controller_workfloo_model_variable_from_dict = ControllerWorkflooModelVariable.from_dict(controller_workfloo_model_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


