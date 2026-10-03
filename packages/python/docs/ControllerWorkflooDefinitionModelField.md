# ControllerWorkflooDefinitionModelField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_metadata** | [**ControllerWorkflooDefinitionModelFieldMetadata**](ControllerWorkflooDefinitionModelFieldMetadata.md) |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**predefined** | **bool** |  | [optional] 
**required** | **bool** |  | [optional] 
**section** | **str** |  | [optional] 
**set** | [**ControllerWorkflooDefinitionModelSetData**](ControllerWorkflooDefinitionModelSetData.md) |  | [optional] 
**show_if** | [**List[ControllerWorkflooDefinitionModelShowIf]**](ControllerWorkflooDefinitionModelShowIf.md) |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_definition_model_field import ControllerWorkflooDefinitionModelField

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooDefinitionModelField from a JSON string
controller_workfloo_definition_model_field_instance = ControllerWorkflooDefinitionModelField.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooDefinitionModelField.to_json())

# convert the object into a dict
controller_workfloo_definition_model_field_dict = controller_workfloo_definition_model_field_instance.to_dict()
# create an instance of ControllerWorkflooDefinitionModelField from a dict
controller_workfloo_definition_model_field_from_dict = ControllerWorkflooDefinitionModelField.from_dict(controller_workfloo_definition_model_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


