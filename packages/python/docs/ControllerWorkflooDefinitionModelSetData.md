# ControllerWorkflooDefinitionModelSetData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**List[ControllerWorkflooDefinitionModelField]**](ControllerWorkflooDefinitionModelField.md) |  | [optional] 
**optional_at** | **List[str]** |  | [optional] 
**required** | **List[str]** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_definition_model_set_data import ControllerWorkflooDefinitionModelSetData

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooDefinitionModelSetData from a JSON string
controller_workfloo_definition_model_set_data_instance = ControllerWorkflooDefinitionModelSetData.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooDefinitionModelSetData.to_json())

# convert the object into a dict
controller_workfloo_definition_model_set_data_dict = controller_workfloo_definition_model_set_data_instance.to_dict()
# create an instance of ControllerWorkflooDefinitionModelSetData from a dict
controller_workfloo_definition_model_set_data_from_dict = ControllerWorkflooDefinitionModelSetData.from_dict(controller_workfloo_definition_model_set_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


