# ControllerWorkflooModelRejection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at** | **str** |  | [optional] 
**fields** | [**List[ControllerWorkflooModelRejectedField]**](ControllerWorkflooModelRejectedField.md) |  | [optional] 
**http_code** | **int** |  | [optional] 
**node_id** | **str** |  | [optional] 
**node_name** | **str** |  | [optional] 
**node_type** | **str** |  | [optional] 
**raw** | **Dict[str, str]** |  | [optional] 
**reason** | **str** |  | [optional] 

## Example

```python
from kiban.workfloo.models.controller_workfloo_model_rejection import ControllerWorkflooModelRejection

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelRejection from a JSON string
controller_workfloo_model_rejection_instance = ControllerWorkflooModelRejection.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelRejection.to_json())

# convert the object into a dict
controller_workfloo_model_rejection_dict = controller_workfloo_model_rejection_instance.to_dict()
# create an instance of ControllerWorkflooModelRejection from a dict
controller_workfloo_model_rejection_from_dict = ControllerWorkflooModelRejection.from_dict(controller_workfloo_model_rejection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


