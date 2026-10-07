# ControllerWorkflooModelWorkflooListItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancelled_at** | **str** |  | [optional] 
**cancelled_by** | **str** |  | [optional] 
**company_name** | **str** |  | [optional] 
**created** | **str** | Ejecución completa (content&#x3D;true): lo mismo que GET /api/v1/workfloo/{id}. | [optional] 
**created_at** | **str** | Resumen (content&#x3D;false). | [optional] 
**created_by** | **str** |  | [optional] 
**current_node_name** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**id** | **str** | Comunes a las dos formas. | [optional] 
**id_unykoo** | **int** |  | [optional] 
**ip_origin** | **str** |  | [optional] 
**labels** | **List[str]** |  | [optional] 
**last_name1** | **str** |  | [optional] 
**last_name2** | **str** |  | [optional] 
**modified** | **str** |  | [optional] 
**modified_at** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**nodes** | [**List[ControllerWorkflooModelNodeResume]**](ControllerWorkflooModelNodeResume.md) |  | [optional] 
**origin** | **str** |  | [optional] 
**rfc_pf** | **str** |  | [optional] 
**rfc_pm** | **str** |  | [optional] 
**scenery_id** | **str** |  | [optional] 
**scenery_name** | **str** |  | [optional] 
**second_name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**steps** | [**List[ControllerWorkflooModelNode]**](ControllerWorkflooModelNode.md) |  | [optional] 

## Example

```python
from kiban.workfloo.models.controller_workfloo_model_workfloo_list_item import ControllerWorkflooModelWorkflooListItem

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelWorkflooListItem from a JSON string
controller_workfloo_model_workfloo_list_item_instance = ControllerWorkflooModelWorkflooListItem.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelWorkflooListItem.to_json())

# convert the object into a dict
controller_workfloo_model_workfloo_list_item_dict = controller_workfloo_model_workfloo_list_item_instance.to_dict()
# create an instance of ControllerWorkflooModelWorkflooListItem from a dict
controller_workfloo_model_workfloo_list_item_from_dict = ControllerWorkflooModelWorkflooListItem.from_dict(controller_workfloo_model_workfloo_list_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


