# ControllerWorkflooModelReviewRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decision** | **str** |  | [optional] 
**reviewer_note** | **str** |  | [optional] 
**reviews** | [**List[ControllerWorkflooModelReviewFieldRequest]**](ControllerWorkflooModelReviewFieldRequest.md) |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_review_request import ControllerWorkflooModelReviewRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelReviewRequest from a JSON string
controller_workfloo_model_review_request_instance = ControllerWorkflooModelReviewRequest.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelReviewRequest.to_json())

# convert the object into a dict
controller_workfloo_model_review_request_dict = controller_workfloo_model_review_request_instance.to_dict()
# create an instance of ControllerWorkflooModelReviewRequest from a dict
controller_workfloo_model_review_request_from_dict = ControllerWorkflooModelReviewRequest.from_dict(controller_workfloo_model_review_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


