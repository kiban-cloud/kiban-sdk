# ControllerWorkflooModelApiHttp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **List[int]** |  | [optional] 
**var_date** | **str** |  | [optional] 
**headers** | **Dict[str, str]** |  | [optional] 
**http_code** | **int** |  | [optional] 
**var_query_params** | **Dict[str, str]** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_api_http import ControllerWorkflooModelApiHttp

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelApiHttp from a JSON string
controller_workfloo_model_api_http_instance = ControllerWorkflooModelApiHttp.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelApiHttp.to_json())

# convert the object into a dict
controller_workfloo_model_api_http_dict = controller_workfloo_model_api_http_instance.to_dict()
# create an instance of ControllerWorkflooModelApiHttp from a dict
controller_workfloo_model_api_http_from_dict = ControllerWorkflooModelApiHttp.from_dict(controller_workfloo_model_api_http_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


