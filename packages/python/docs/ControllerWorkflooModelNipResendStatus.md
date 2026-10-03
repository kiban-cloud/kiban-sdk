# ControllerWorkflooModelNipResendStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**nip_type** | **str** |  | [optional] 
**phase** | **str** |  | [optional] 
**phone_number** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_nip_resend_status import ControllerWorkflooModelNipResendStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelNipResendStatus from a JSON string
controller_workfloo_model_nip_resend_status_instance = ControllerWorkflooModelNipResendStatus.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelNipResendStatus.to_json())

# convert the object into a dict
controller_workfloo_model_nip_resend_status_dict = controller_workfloo_model_nip_resend_status_instance.to_dict()
# create an instance of ControllerWorkflooModelNipResendStatus from a dict
controller_workfloo_model_nip_resend_status_from_dict = ControllerWorkflooModelNipResendStatus.from_dict(controller_workfloo_model_nip_resend_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


