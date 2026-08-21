# ControllerMicroserviceModelApiDataHttpDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **object** |  | [optional] 
**var_date** | **str** |  | [optional] 
**headers** | **Dict[str, str]** |  | [optional] 
**http_code** | **int** |  | [optional] 

## Example

```python
from kiban.sdk.link.models.controller_microservice_model_api_data_http_dto import ControllerMicroserviceModelApiDataHttpDto

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerMicroserviceModelApiDataHttpDto from a JSON string
controller_microservice_model_api_data_http_dto_instance = ControllerMicroserviceModelApiDataHttpDto.from_json(json)
# print the JSON string representation of the object
print(ControllerMicroserviceModelApiDataHttpDto.to_json())

# convert the object into a dict
controller_microservice_model_api_data_http_dto_dict = controller_microservice_model_api_data_http_dto_instance.to_dict()
# create an instance of ControllerMicroserviceModelApiDataHttpDto from a dict
controller_microservice_model_api_data_http_dto_from_dict = ControllerMicroserviceModelApiDataHttpDto.from_dict(controller_microservice_model_api_data_http_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


