# ControllerWorkflooModelExecute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback_url** | **str** |  | [optional] 
**callback_x_api_key** | **str** |  | [optional] 
**document** | **Dict[str, object]** |  | [optional] 
**form** | **Dict[str, object]** |  | [optional] 
**id_workfloo_definition** | **str** |  | 
**scenario_id** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_execute import ControllerWorkflooModelExecute

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelExecute from a JSON string
controller_workfloo_model_execute_instance = ControllerWorkflooModelExecute.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelExecute.to_json())

# convert the object into a dict
controller_workfloo_model_execute_dict = controller_workfloo_model_execute_instance.to_dict()
# create an instance of ControllerWorkflooModelExecute from a dict
controller_workfloo_model_execute_from_dict = ControllerWorkflooModelExecute.from_dict(controller_workfloo_model_execute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


