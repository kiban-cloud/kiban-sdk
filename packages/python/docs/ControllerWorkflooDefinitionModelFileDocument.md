# ControllerWorkflooDefinitionModelFileDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_metadata** | [**ControllerWorkflooDefinitionModelFileMetadata**](ControllerWorkflooDefinitionModelFileMetadata.md) |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**predefined** | **bool** |  | [optional] 
**required** | **bool** |  | [optional] 
**set** | [**ControllerWorkflooDefinitionModelSetDataDocument**](ControllerWorkflooDefinitionModelSetDataDocument.md) |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_definition_model_file_document import ControllerWorkflooDefinitionModelFileDocument

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooDefinitionModelFileDocument from a JSON string
controller_workfloo_definition_model_file_document_instance = ControllerWorkflooDefinitionModelFileDocument.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooDefinitionModelFileDocument.to_json())

# convert the object into a dict
controller_workfloo_definition_model_file_document_dict = controller_workfloo_definition_model_file_document_instance.to_dict()
# create an instance of ControllerWorkflooDefinitionModelFileDocument from a dict
controller_workfloo_definition_model_file_document_from_dict = ControllerWorkflooDefinitionModelFileDocument.from_dict(controller_workfloo_definition_model_file_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


