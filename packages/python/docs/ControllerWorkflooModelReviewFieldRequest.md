# ControllerWorkflooModelReviewFieldRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_id** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**source_node_id** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_review_field_request import ControllerWorkflooModelReviewFieldRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelReviewFieldRequest from a JSON string
controller_workfloo_model_review_field_request_instance = ControllerWorkflooModelReviewFieldRequest.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelReviewFieldRequest.to_json())

# convert the object into a dict
controller_workfloo_model_review_field_request_dict = controller_workfloo_model_review_field_request_instance.to_dict()
# create an instance of ControllerWorkflooModelReviewFieldRequest from a dict
controller_workfloo_model_review_field_request_from_dict = ControllerWorkflooModelReviewFieldRequest.from_dict(controller_workfloo_model_review_field_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


