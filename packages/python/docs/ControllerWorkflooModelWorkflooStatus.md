# ControllerWorkflooModelWorkflooStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_node_id** | **str** |  | [optional] 
**current_node_name** | **str** |  | [optional] 
**current_node_type** | **str** |  | [optional] 
**document** | [**ControllerWorkflooDefinitionModelDocument**](ControllerWorkflooDefinitionModelDocument.md) |  | [optional] 
**form** | [**ControllerWorkflooDefinitionModelForm**](ControllerWorkflooDefinitionModelForm.md) |  | [optional] 
**id** | **str** |  | [optional] 
**link** | [**ControllerWorkflooModelLinkNipStatus**](ControllerWorkflooModelLinkNipStatus.md) |  | [optional] 
**name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**timer** | [**ControllerWorkflooModelTimer**](ControllerWorkflooModelTimer.md) |  | [optional] 
**validation** | [**ControllerWorkflooModelValidationStatus**](ControllerWorkflooModelValidationStatus.md) |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_workfloo_status import ControllerWorkflooModelWorkflooStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelWorkflooStatus from a JSON string
controller_workfloo_model_workfloo_status_instance = ControllerWorkflooModelWorkflooStatus.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelWorkflooStatus.to_json())

# convert the object into a dict
controller_workfloo_model_workfloo_status_dict = controller_workfloo_model_workfloo_status_instance.to_dict()
# create an instance of ControllerWorkflooModelWorkflooStatus from a dict
controller_workfloo_model_workfloo_status_from_dict = ControllerWorkflooModelWorkflooStatus.from_dict(controller_workfloo_model_workfloo_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


