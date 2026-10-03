# ControllerWorkflooDefinitionModelFileDocumentSet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_metadata** | [**ControllerWorkflooDefinitionModelFileMetadata**](ControllerWorkflooDefinitionModelFileMetadata.md) |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**predefined** | **bool** |  | [optional] 
**required** | **bool** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_definition_model_file_document_set import ControllerWorkflooDefinitionModelFileDocumentSet

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooDefinitionModelFileDocumentSet from a JSON string
controller_workfloo_definition_model_file_document_set_instance = ControllerWorkflooDefinitionModelFileDocumentSet.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooDefinitionModelFileDocumentSet.to_json())

# convert the object into a dict
controller_workfloo_definition_model_file_document_set_dict = controller_workfloo_definition_model_file_document_set_instance.to_dict()
# create an instance of ControllerWorkflooDefinitionModelFileDocumentSet from a dict
controller_workfloo_definition_model_file_document_set_from_dict = ControllerWorkflooDefinitionModelFileDocumentSet.from_dict(controller_workfloo_definition_model_file_document_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


