# ControllerWorkflooModelNodeDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | **str** |  | [optional] 
**date_found** | **str** |  | [optional] 
**error_message** | **str** |  | [optional] 
**http_code** | **int** |  | [optional] 
**id_link** | **str** |  | [optional] 
**id_workfloo** | **str** |  | [optional] 
**origin** | **str** |  | [optional] 
**response_time** | **int** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_node_detail import ControllerWorkflooModelNodeDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelNodeDetail from a JSON string
controller_workfloo_model_node_detail_instance = ControllerWorkflooModelNodeDetail.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelNodeDetail.to_json())

# convert the object into a dict
controller_workfloo_model_node_detail_dict = controller_workfloo_model_node_detail_instance.to_dict()
# create an instance of ControllerWorkflooModelNodeDetail from a dict
controller_workfloo_model_node_detail_from_dict = ControllerWorkflooModelNodeDetail.from_dict(controller_workfloo_model_node_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


