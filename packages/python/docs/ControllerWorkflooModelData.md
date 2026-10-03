# ControllerWorkflooModelData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **List[Dict[str, object]]** |  | [optional] 
**section** | **Dict[str, str]** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_data import ControllerWorkflooModelData

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelData from a JSON string
controller_workfloo_model_data_instance = ControllerWorkflooModelData.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelData.to_json())

# convert the object into a dict
controller_workfloo_model_data_dict = controller_workfloo_model_data_instance.to_dict()
# create an instance of ControllerWorkflooModelData from a dict
controller_workfloo_model_data_from_dict = ControllerWorkflooModelData.from_dict(controller_workfloo_model_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


