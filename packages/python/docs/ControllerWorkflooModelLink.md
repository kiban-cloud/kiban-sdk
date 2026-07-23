# ControllerWorkflooModelLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **Dict[str, object]** |  | [optional] 
**id** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**service** | **str** |  | [optional] 
**sub_service** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_link import ControllerWorkflooModelLink

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelLink from a JSON string
controller_workfloo_model_link_instance = ControllerWorkflooModelLink.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelLink.to_json())

# convert the object into a dict
controller_workfloo_model_link_dict = controller_workfloo_model_link_instance.to_dict()
# create an instance of ControllerWorkflooModelLink from a dict
controller_workfloo_model_link_from_dict = ControllerWorkflooModelLink.from_dict(controller_workfloo_model_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


