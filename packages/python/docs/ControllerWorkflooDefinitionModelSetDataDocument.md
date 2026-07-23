# ControllerWorkflooDefinitionModelSetDataDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**List[ControllerWorkflooDefinitionModelFileDocumentSet]**](ControllerWorkflooDefinitionModelFileDocumentSet.md) |  | [optional] 
**optional_at** | **List[str]** |  | [optional] 
**required** | **List[str]** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_definition_model_set_data_document import ControllerWorkflooDefinitionModelSetDataDocument

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooDefinitionModelSetDataDocument from a JSON string
controller_workfloo_definition_model_set_data_document_instance = ControllerWorkflooDefinitionModelSetDataDocument.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooDefinitionModelSetDataDocument.to_json())

# convert the object into a dict
controller_workfloo_definition_model_set_data_document_dict = controller_workfloo_definition_model_set_data_document_instance.to_dict()
# create an instance of ControllerWorkflooDefinitionModelSetDataDocument from a dict
controller_workfloo_definition_model_set_data_document_from_dict = ControllerWorkflooDefinitionModelSetDataDocument.from_dict(controller_workfloo_definition_model_set_data_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


