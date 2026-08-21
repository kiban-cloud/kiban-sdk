# ControllerMicroserviceModelApiDataDetailDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **int** |  | [optional] 
**events** | [**List[ControllerMicroserviceModelApiDataEventDto]**](ControllerMicroserviceModelApiDataEventDto.md) |  | [optional] 
**files** | [**List[ControllerMicroserviceModelApiDataFileDto]**](ControllerMicroserviceModelApiDataFileDto.md) |  | [optional] 
**request** | [**ControllerMicroserviceModelApiDataHttpDto**](ControllerMicroserviceModelApiDataHttpDto.md) |  | [optional] 
**response** | [**ControllerMicroserviceModelApiDataHttpDto**](ControllerMicroserviceModelApiDataHttpDto.md) |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.link.models.controller_microservice_model_api_data_detail_dto import ControllerMicroserviceModelApiDataDetailDto

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerMicroserviceModelApiDataDetailDto from a JSON string
controller_microservice_model_api_data_detail_dto_instance = ControllerMicroserviceModelApiDataDetailDto.from_json(json)
# print the JSON string representation of the object
print(ControllerMicroserviceModelApiDataDetailDto.to_json())

# convert the object into a dict
controller_microservice_model_api_data_detail_dto_dict = controller_microservice_model_api_data_detail_dto_instance.to_dict()
# create an instance of ControllerMicroserviceModelApiDataDetailDto from a dict
controller_microservice_model_api_data_detail_dto_from_dict = ControllerMicroserviceModelApiDataDetailDto.from_dict(controller_microservice_model_api_data_detail_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


