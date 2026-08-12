# ControllerWorkflooModelLinkNipStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **str** |  | [optional] 
**country_code** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**events** | [**List[ControllerWorkflooModelEvent]**](ControllerWorkflooModelEvent.md) |  | [optional] 
**key** | **str** |  | [optional] 
**key_type_node** | **str** |  | [optional] 
**nip_type** | **str** |  | [optional] 
**phase** | **str** |  | [optional] 
**phone_number** | **str** |  | [optional] 
**privacy_notice** | **str** |  | [optional] 
**terms** | **str** |  | [optional] 
**widget** | **object** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_link_nip_status import ControllerWorkflooModelLinkNipStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelLinkNipStatus from a JSON string
controller_workfloo_model_link_nip_status_instance = ControllerWorkflooModelLinkNipStatus.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelLinkNipStatus.to_json())

# convert the object into a dict
controller_workfloo_model_link_nip_status_dict = controller_workfloo_model_link_nip_status_instance.to_dict()
# create an instance of ControllerWorkflooModelLinkNipStatus from a dict
controller_workfloo_model_link_nip_status_from_dict = ControllerWorkflooModelLinkNipStatus.from_dict(controller_workfloo_model_link_nip_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


