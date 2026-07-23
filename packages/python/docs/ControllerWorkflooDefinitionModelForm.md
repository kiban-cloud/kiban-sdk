# ControllerWorkflooDefinitionModelForm


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form_field_section** | [**List[ControllerWorkflooDefinitionModelFormFieldSection]**](ControllerWorkflooDefinitionModelFormFieldSection.md) |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_definition_model_form import ControllerWorkflooDefinitionModelForm

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooDefinitionModelForm from a JSON string
controller_workfloo_definition_model_form_instance = ControllerWorkflooDefinitionModelForm.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooDefinitionModelForm.to_json())

# convert the object into a dict
controller_workfloo_definition_model_form_dict = controller_workfloo_definition_model_form_instance.to_dict()
# create an instance of ControllerWorkflooDefinitionModelForm from a dict
controller_workfloo_definition_model_form_from_dict = ControllerWorkflooDefinitionModelForm.from_dict(controller_workfloo_definition_model_form_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


