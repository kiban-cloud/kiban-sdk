# ControllerWorkflooModelWorkfloo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**created_by** | **str** |  | [optional] 
**current_node_name** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**id_unykoo** | **int** |  | [optional] 
**ip_origin** | **str** |  | [optional] 
**labels** | **List[str]** |  | [optional] 
**last_name1** | **str** |  | [optional] 
**last_name2** | **str** |  | [optional] 
**modified_at** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**origin** | **str** |  | [optional] 
**rfc_pf** | **str** |  | [optional] 
**rfc_pm** | **str** |  | [optional] 
**second_name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**steps** | [**List[ControllerWorkflooModelNode]**](ControllerWorkflooModelNode.md) |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_workfloo import ControllerWorkflooModelWorkfloo

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelWorkfloo from a JSON string
controller_workfloo_model_workfloo_instance = ControllerWorkflooModelWorkfloo.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelWorkfloo.to_json())

# convert the object into a dict
controller_workfloo_model_workfloo_dict = controller_workfloo_model_workfloo_instance.to_dict()
# create an instance of ControllerWorkflooModelWorkfloo from a dict
controller_workfloo_model_workfloo_from_dict = ControllerWorkflooModelWorkfloo.from_dict(controller_workfloo_model_workfloo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


