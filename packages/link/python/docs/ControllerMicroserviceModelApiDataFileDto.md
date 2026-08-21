# ControllerMicroserviceModelApiDataFileDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **List[int]** |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.link.models.controller_microservice_model_api_data_file_dto import ControllerMicroserviceModelApiDataFileDto

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerMicroserviceModelApiDataFileDto from a JSON string
controller_microservice_model_api_data_file_dto_instance = ControllerMicroserviceModelApiDataFileDto.from_json(json)
# print the JSON string representation of the object
print(ControllerMicroserviceModelApiDataFileDto.to_json())

# convert the object into a dict
controller_microservice_model_api_data_file_dto_dict = controller_microservice_model_api_data_file_dto_instance.to_dict()
# create an instance of ControllerMicroserviceModelApiDataFileDto from a dict
controller_microservice_model_api_data_file_dto_from_dict = ControllerMicroserviceModelApiDataFileDto.from_dict(controller_microservice_model_api_data_file_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


