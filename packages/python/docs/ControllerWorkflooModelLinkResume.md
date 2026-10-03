# ControllerWorkflooModelLinkResume


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[ControllerWorkflooModelEvent]**](ControllerWorkflooModelEvent.md) |  | [optional] 
**key** | **str** |  | [optional] 
**phase** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_link_resume import ControllerWorkflooModelLinkResume

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelLinkResume from a JSON string
controller_workfloo_model_link_resume_instance = ControllerWorkflooModelLinkResume.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelLinkResume.to_json())

# convert the object into a dict
controller_workfloo_model_link_resume_dict = controller_workfloo_model_link_resume_instance.to_dict()
# create an instance of ControllerWorkflooModelLinkResume from a dict
controller_workfloo_model_link_resume_from_dict = ControllerWorkflooModelLinkResume.from_dict(controller_workfloo_model_link_resume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


