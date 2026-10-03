# ControllerWorkflooModelTimer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_wait_date** | **str** |  | [optional] 
**remaining_time** | [**ControllerWorkflooModelRemainingTime**](ControllerWorkflooModelRemainingTime.md) |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_timer import ControllerWorkflooModelTimer

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelTimer from a JSON string
controller_workfloo_model_timer_instance = ControllerWorkflooModelTimer.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelTimer.to_json())

# convert the object into a dict
controller_workfloo_model_timer_dict = controller_workfloo_model_timer_instance.to_dict()
# create an instance of ControllerWorkflooModelTimer from a dict
controller_workfloo_model_timer_from_dict = ControllerWorkflooModelTimer.from_dict(controller_workfloo_model_timer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


