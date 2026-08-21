# ControllerMicroserviceModelLinkExecutionPage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_page** | **int** |  | [optional] 
**has_next_page** | **bool** |  | [optional] 
**items** | [**List[ControllerMicroserviceModelMicroserviceResumeDto]**](ControllerMicroserviceModelMicroserviceResumeDto.md) |  | [optional] 

## Example

```python
from kiban.sdk.link.models.controller_microservice_model_link_execution_page import ControllerMicroserviceModelLinkExecutionPage

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerMicroserviceModelLinkExecutionPage from a JSON string
controller_microservice_model_link_execution_page_instance = ControllerMicroserviceModelLinkExecutionPage.from_json(json)
# print the JSON string representation of the object
print(ControllerMicroserviceModelLinkExecutionPage.to_json())

# convert the object into a dict
controller_microservice_model_link_execution_page_dict = controller_microservice_model_link_execution_page_instance.to_dict()
# create an instance of ControllerMicroserviceModelLinkExecutionPage from a dict
controller_microservice_model_link_execution_page_from_dict = ControllerMicroserviceModelLinkExecutionPage.from_dict(controller_microservice_model_link_execution_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


