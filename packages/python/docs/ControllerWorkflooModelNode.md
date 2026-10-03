# ControllerWorkflooModelNode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | [**ControllerWorkflooModelApi**](ControllerWorkflooModelApi.md) |  | [optional] 
**created** | **str** |  | [optional] 
**created_by** | **str** | TODO MOVER | [optional] 
**decision_tree** | [**List[ControllerWorkflooModelDecisionTree]**](ControllerWorkflooModelDecisionTree.md) |  | [optional] 
**form** | [**ControllerWorkflooModelForm**](ControllerWorkflooModelForm.md) |  | [optional] 
**id** | **str** |  | [optional] 
**link** | [**ControllerWorkflooModelLink**](ControllerWorkflooModelLink.md) |  | [optional] 
**modified** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**ruleset** | [**ControllerWorkflooModelRuleset**](ControllerWorkflooModelRuleset.md) |  | [optional] 
**status** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**variables** | [**ControllerWorkflooModelVariables**](ControllerWorkflooModelVariables.md) |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_node import ControllerWorkflooModelNode

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelNode from a JSON string
controller_workfloo_model_node_instance = ControllerWorkflooModelNode.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelNode.to_json())

# convert the object into a dict
controller_workfloo_model_node_dict = controller_workfloo_model_node_instance.to_dict()
# create an instance of ControllerWorkflooModelNode from a dict
controller_workfloo_model_node_from_dict = ControllerWorkflooModelNode.from_dict(controller_workfloo_model_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


