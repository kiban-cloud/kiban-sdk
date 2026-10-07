# ControllerWorkflooModelVerificationStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** |  | [optional] 
**masked_destination** | **str** |  | [optional] 
**remaining_retries** | **int** |  | [optional] 
**validation_id** | **str** |  | [optional] 
**validation_type** | **str** |  | [optional] 

## Example

```python
from kiban.workfloo.models.controller_workfloo_model_verification_status import ControllerWorkflooModelVerificationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelVerificationStatus from a JSON string
controller_workfloo_model_verification_status_instance = ControllerWorkflooModelVerificationStatus.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelVerificationStatus.to_json())

# convert the object into a dict
controller_workfloo_model_verification_status_dict = controller_workfloo_model_verification_status_instance.to_dict()
# create an instance of ControllerWorkflooModelVerificationStatus from a dict
controller_workfloo_model_verification_status_from_dict = ControllerWorkflooModelVerificationStatus.from_dict(controller_workfloo_model_verification_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


