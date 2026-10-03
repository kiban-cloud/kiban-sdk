# ControllerPoolModelExecute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_pool_definition** | **str** |  | 
**sceneries** | **Dict[str, str]** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_pool_model_execute import ControllerPoolModelExecute

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerPoolModelExecute from a JSON string
controller_pool_model_execute_instance = ControllerPoolModelExecute.from_json(json)
# print the JSON string representation of the object
print(ControllerPoolModelExecute.to_json())

# convert the object into a dict
controller_pool_model_execute_dict = controller_pool_model_execute_instance.to_dict()
# create an instance of ControllerPoolModelExecute from a dict
controller_pool_model_execute_from_dict = ControllerPoolModelExecute.from_dict(controller_pool_model_execute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


