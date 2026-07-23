# ControllerWorkflooModelNodeResume


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_data** | [**ControllerWorkflooModelApiData**](ControllerWorkflooModelApiData.md) |  | [optional] 
**created** | **str** |  | [optional] 
**data** | [**List[ControllerWorkflooModelData]**](ControllerWorkflooModelData.md) |  | [optional] 
**decision_tree** | [**List[ControllerWorkflooModelDecisionTree]**](ControllerWorkflooModelDecisionTree.md) |  | [optional] 
**detail** | [**ControllerWorkflooModelNodeDetail**](ControllerWorkflooModelNodeDetail.md) |  | [optional] 
**documents** | [**Dict[str, ControllerWorkflooModelDocumentsResume]**](ControllerWorkflooModelDocumentsResume.md) |  | [optional] 
**files** | [**List[ControllerWorkflooModelFile]**](ControllerWorkflooModelFile.md) |  | [optional] 
**form** | [**ControllerWorkflooModelFormResume**](ControllerWorkflooModelFormResume.md) |  | [optional] 
**id** | **str** |  | [optional] 
**label** | [**ControllerWorkflooModelLabel**](ControllerWorkflooModelLabel.md) |  | [optional] 
**link** | [**ControllerWorkflooModelLinkResume**](ControllerWorkflooModelLinkResume.md) |  | [optional] 
**modified** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**pdf** | [**ControllerWorkflooModelPdf**](ControllerWorkflooModelPdf.md) |  | [optional] 
**request** | **object** |  | [optional] 
**response** | **object** |  | [optional] 
**ruleset** | [**ControllerWorkflooModelRuleset**](ControllerWorkflooModelRuleset.md) |  | [optional] 
**timer** | [**ControllerWorkflooModelTimer**](ControllerWorkflooModelTimer.md) |  | [optional] 
**type** | **str** |  | [optional] 
**validation** | [**ControllerWorkflooModelValidationResume**](ControllerWorkflooModelValidationResume.md) |  | [optional] 
**variables** | [**List[ControllerWorkflooModelVariable]**](ControllerWorkflooModelVariable.md) |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_node_resume import ControllerWorkflooModelNodeResume

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelNodeResume from a JSON string
controller_workfloo_model_node_resume_instance = ControllerWorkflooModelNodeResume.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelNodeResume.to_json())

# convert the object into a dict
controller_workfloo_model_node_resume_dict = controller_workfloo_model_node_resume_instance.to_dict()
# create an instance of ControllerWorkflooModelNodeResume from a dict
controller_workfloo_model_node_resume_from_dict = ControllerWorkflooModelNodeResume.from_dict(controller_workfloo_model_node_resume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


