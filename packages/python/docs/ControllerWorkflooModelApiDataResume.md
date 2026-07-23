# ControllerWorkflooModelApiDataResume


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **object** |  | [optional] 
**headers** | **Dict[str, str]** |  | [optional] 
**http_code** | **int** |  | [optional] 
**var_query_params** | **Dict[str, str]** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_api_data_resume import ControllerWorkflooModelApiDataResume

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelApiDataResume from a JSON string
controller_workfloo_model_api_data_resume_instance = ControllerWorkflooModelApiDataResume.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelApiDataResume.to_json())

# convert the object into a dict
controller_workfloo_model_api_data_resume_dict = controller_workfloo_model_api_data_resume_instance.to_dict()
# create an instance of ControllerWorkflooModelApiDataResume from a dict
controller_workfloo_model_api_data_resume_from_dict = ControllerWorkflooModelApiDataResume.from_dict(controller_workfloo_model_api_data_resume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


