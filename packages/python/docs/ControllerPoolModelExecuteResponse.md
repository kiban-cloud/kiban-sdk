# ControllerPoolModelExecuteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_workfloo** | **str** |  | [optional] 
**id_workfloo_definition** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_pool_model_execute_response import ControllerPoolModelExecuteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerPoolModelExecuteResponse from a JSON string
controller_pool_model_execute_response_instance = ControllerPoolModelExecuteResponse.from_json(json)
# print the JSON string representation of the object
print(ControllerPoolModelExecuteResponse.to_json())

# convert the object into a dict
controller_pool_model_execute_response_dict = controller_pool_model_execute_response_instance.to_dict()
# create an instance of ControllerPoolModelExecuteResponse from a dict
controller_pool_model_execute_response_from_dict = ControllerPoolModelExecuteResponse.from_dict(controller_pool_model_execute_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


