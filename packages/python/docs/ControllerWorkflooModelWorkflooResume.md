# ControllerWorkflooModelWorkflooResume


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancelled_at** | **str** |  | [optional] 
**cancelled_by** | **str** | CancelledBy / CancelledAt sólo viajan si un usuario canceló la ejecución a mano desde la consola. Una ABANDONED por expiración del sistema no los trae, y son lo único que distingue un caso del otro (el status es el mismo). CancelledAt es *time.Time porque el omitempty de encoding/json NO omite un struct en cero: un time.Time plano emitiría siempre \&quot;0001-01-01T00:00:00Z\&quot; (mismo patrón que NodeDetail.DateFound). | [optional] 
**created** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**id_unykoo** | **int** |  | [optional] 
**ip_origin** | **str** |  | [optional] 
**labels** | **List[str]** |  | [optional] 
**modified** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**nodes** | [**List[ControllerWorkflooModelNodeResume]**](ControllerWorkflooModelNodeResume.md) |  | [optional] 
**origin** | **str** |  | [optional] 
**scenery_id** | **str** |  | [optional] 
**scenery_name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from kiban.workfloo.models.controller_workfloo_model_workfloo_resume import ControllerWorkflooModelWorkflooResume

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelWorkflooResume from a JSON string
controller_workfloo_model_workfloo_resume_instance = ControllerWorkflooModelWorkflooResume.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelWorkflooResume.to_json())

# convert the object into a dict
controller_workfloo_model_workfloo_resume_dict = controller_workfloo_model_workfloo_resume_instance.to_dict()
# create an instance of ControllerWorkflooModelWorkflooResume from a dict
controller_workfloo_model_workfloo_resume_from_dict = ControllerWorkflooModelWorkflooResume.from_dict(controller_workfloo_model_workfloo_resume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


