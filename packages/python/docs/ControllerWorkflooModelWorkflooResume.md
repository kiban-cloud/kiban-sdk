# ControllerWorkflooModelWorkflooResume


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**id_unykoo** | **int** |  | [optional] 
**ip_origin** | **str** |  | [optional] 
**labels** | **List[str]** |  | [optional] 
**modified** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**nodes** | [**List[ControllerWorkflooModelNodeResume]**](ControllerWorkflooModelNodeResume.md) |  | [optional] 
**origin** | **str** |  | [optional] 
**scenery_id** | **str** |  | [optional] 
**scenery_name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_workfloo_resume import ControllerWorkflooModelWorkflooResume

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelWorkflooResume from a JSON string
controller_workfloo_model_workfloo_resume_instance = ControllerWorkflooModelWorkflooResume.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelWorkflooResume.to_json())

# convert the object into a dict
controller_workfloo_model_workfloo_resume_dict = controller_workfloo_model_workfloo_resume_instance.to_dict()
# create an instance of ControllerWorkflooModelWorkflooResume from a dict
controller_workfloo_model_workfloo_resume_from_dict = ControllerWorkflooModelWorkflooResume.from_dict(controller_workfloo_model_workfloo_resume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


