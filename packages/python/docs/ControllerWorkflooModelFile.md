# ControllerWorkflooModelFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **Dict[str, str]** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_file import ControllerWorkflooModelFile

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelFile from a JSON string
controller_workfloo_model_file_instance = ControllerWorkflooModelFile.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelFile.to_json())

# convert the object into a dict
controller_workfloo_model_file_dict = controller_workfloo_model_file_instance.to_dict()
# create an instance of ControllerWorkflooModelFile from a dict
controller_workfloo_model_file_from_dict = ControllerWorkflooModelFile.from_dict(controller_workfloo_model_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


