# ControllerMicroserviceModelExecutionPage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_page** | **int** |  | [optional] 
**has_next_page** | **bool** |  | [optional] 
**items** | [**List[ControllerMicroserviceModelMicroserviceResumeDto]**](ControllerMicroserviceModelMicroserviceResumeDto.md) |  | [optional] 

## Example

```python
from kiban.link.models.controller_microservice_model_execution_page import ControllerMicroserviceModelExecutionPage

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerMicroserviceModelExecutionPage from a JSON string
controller_microservice_model_execution_page_instance = ControllerMicroserviceModelExecutionPage.from_json(json)
# print the JSON string representation of the object
print(ControllerMicroserviceModelExecutionPage.to_json())

# convert the object into a dict
controller_microservice_model_execution_page_dict = controller_microservice_model_execution_page_instance.to_dict()
# create an instance of ControllerMicroserviceModelExecutionPage from a dict
controller_microservice_model_execution_page_from_dict = ControllerMicroserviceModelExecutionPage.from_dict(controller_microservice_model_execution_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


