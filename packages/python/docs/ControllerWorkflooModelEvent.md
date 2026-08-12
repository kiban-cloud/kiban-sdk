# ControllerWorkflooModelEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** |  | [optional] 
**error_message** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_event import ControllerWorkflooModelEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelEvent from a JSON string
controller_workfloo_model_event_instance = ControllerWorkflooModelEvent.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelEvent.to_json())

# convert the object into a dict
controller_workfloo_model_event_dict = controller_workfloo_model_event_instance.to_dict()
# create an instance of ControllerWorkflooModelEvent from a dict
controller_workfloo_model_event_from_dict = ControllerWorkflooModelEvent.from_dict(controller_workfloo_model_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


