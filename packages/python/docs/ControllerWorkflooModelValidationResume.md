# ControllerWorkflooModelValidationResume


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decision** | **str** |  | [optional] 
**reviewed_at** | **str** |  | [optional] 
**reviewed_by** | **str** |  | [optional] 
**reviewer_note** | **str** |  | [optional] 
**reviews** | [**List[ControllerWorkflooModelReviewResume]**](ControllerWorkflooModelReviewResume.md) |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_validation_resume import ControllerWorkflooModelValidationResume

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelValidationResume from a JSON string
controller_workfloo_model_validation_resume_instance = ControllerWorkflooModelValidationResume.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelValidationResume.to_json())

# convert the object into a dict
controller_workfloo_model_validation_resume_dict = controller_workfloo_model_validation_resume_instance.to_dict()
# create an instance of ControllerWorkflooModelValidationResume from a dict
controller_workfloo_model_validation_resume_from_dict = ControllerWorkflooModelValidationResume.from_dict(controller_workfloo_model_validation_resume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


