# ControllerWorkflooModelFileResponseV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_base64** | **str** | FileBase64 es el archivo en base64; sólo viene en el 200. | [optional] 
**retry_after** | **int** | RetryAfter son los segundos a esperar antes de volver a pedirlo; sólo viene en el 202 (y también en el header Retry-After). | [optional] 
**status** | **str** | Status es \&quot;PROCESSING\&quot;; sólo viene en el 202. | [optional] 

## Example

```python
from kiban.workfloo.models.controller_workfloo_model_file_response_v2 import ControllerWorkflooModelFileResponseV2

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelFileResponseV2 from a JSON string
controller_workfloo_model_file_response_v2_instance = ControllerWorkflooModelFileResponseV2.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelFileResponseV2.to_json())

# convert the object into a dict
controller_workfloo_model_file_response_v2_dict = controller_workfloo_model_file_response_v2_instance.to_dict()
# create an instance of ControllerWorkflooModelFileResponseV2 from a dict
controller_workfloo_model_file_response_v2_from_dict = ControllerWorkflooModelFileResponseV2.from_dict(controller_workfloo_model_file_response_v2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


