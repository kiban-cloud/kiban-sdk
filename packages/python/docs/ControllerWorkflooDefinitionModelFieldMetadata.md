# ControllerWorkflooDefinitionModelFieldMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_filled_by** | [**List[ControllerWorkflooDefinitionModelAutoFilledBy]**](ControllerWorkflooDefinitionModelAutoFilledBy.md) |  | [optional] 
**autofill_node_id** | **str** |  | [optional] 
**default_value** | **object** |  | [optional] 
**html** | **str** |  | [optional] 
**map** | **Dict[str, str]** |  | [optional] 
**max** | **int** |  | [optional] 
**max_length** | **int** |  | [optional] 
**max_val** | **float** |  | [optional] 
**min** | **int** |  | [optional] 
**min_length** | **int** |  | [optional] 
**min_val** | **float** |  | [optional] 
**regex** | **str** |  | [optional] 
**regex_message** | **str** |  | [optional] 
**show** | [**ControllerWorkflooDefinitionModelShow**](ControllerWorkflooDefinitionModelShow.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_definition_model_field_metadata import ControllerWorkflooDefinitionModelFieldMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooDefinitionModelFieldMetadata from a JSON string
controller_workfloo_definition_model_field_metadata_instance = ControllerWorkflooDefinitionModelFieldMetadata.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooDefinitionModelFieldMetadata.to_json())

# convert the object into a dict
controller_workfloo_definition_model_field_metadata_dict = controller_workfloo_definition_model_field_metadata_instance.to_dict()
# create an instance of ControllerWorkflooDefinitionModelFieldMetadata from a dict
controller_workfloo_definition_model_field_metadata_from_dict = ControllerWorkflooDefinitionModelFieldMetadata.from_dict(controller_workfloo_definition_model_field_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


