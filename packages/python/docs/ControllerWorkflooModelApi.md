# ControllerWorkflooModelApi


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **int** |  | [optional] 
**request** | [**ControllerWorkflooModelApiHttp**](ControllerWorkflooModelApiHttp.md) |  | [optional] 
**response** | [**ControllerWorkflooModelApiHttp**](ControllerWorkflooModelApiHttp.md) |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_api import ControllerWorkflooModelApi

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelApi from a JSON string
controller_workfloo_model_api_instance = ControllerWorkflooModelApi.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelApi.to_json())

# convert the object into a dict
controller_workfloo_model_api_dict = controller_workfloo_model_api_instance.to_dict()
# create an instance of ControllerWorkflooModelApi from a dict
controller_workfloo_model_api_from_dict = ControllerWorkflooModelApi.from_dict(controller_workfloo_model_api_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


