# ControllerWorkflooModelForm


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**List[ControllerWorkflooModelFormField]**](ControllerWorkflooModelFormField.md) |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_form import ControllerWorkflooModelForm

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelForm from a JSON string
controller_workfloo_model_form_instance = ControllerWorkflooModelForm.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelForm.to_json())

# convert the object into a dict
controller_workfloo_model_form_dict = controller_workfloo_model_form_instance.to_dict()
# create an instance of ControllerWorkflooModelForm from a dict
controller_workfloo_model_form_from_dict = ControllerWorkflooModelForm.from_dict(controller_workfloo_model_form_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


