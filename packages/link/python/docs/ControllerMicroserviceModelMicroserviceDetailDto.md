# ControllerMicroserviceModelMicroserviceDetailDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_data** | [**List[ControllerMicroserviceModelApiDataDetailDto]**](ControllerMicroserviceModelApiDataDetailDto.md) |  | [optional] 
**cost** | **float** |  | [optional] 
**created_at** | **str** |  | [optional] 
**duration** | **int** |  | [optional] 
**error_message** | **str** |  | [optional] 
**events** | [**List[ControllerMicroserviceModelEventDto]**](ControllerMicroserviceModelEventDto.md) |  | [optional] 
**extra_cost** | **float** |  | [optional] 
**finished_at** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**modified_at** | **str** |  | [optional] 
**request** | **object** |  | [optional] 
**response** | **object** |  | [optional] 
**searchable_by** | **Dict[str, object]** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.link.models.controller_microservice_model_microservice_detail_dto import ControllerMicroserviceModelMicroserviceDetailDto

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerMicroserviceModelMicroserviceDetailDto from a JSON string
controller_microservice_model_microservice_detail_dto_instance = ControllerMicroserviceModelMicroserviceDetailDto.from_json(json)
# print the JSON string representation of the object
print(ControllerMicroserviceModelMicroserviceDetailDto.to_json())

# convert the object into a dict
controller_microservice_model_microservice_detail_dto_dict = controller_microservice_model_microservice_detail_dto_instance.to_dict()
# create an instance of ControllerMicroserviceModelMicroserviceDetailDto from a dict
controller_microservice_model_microservice_detail_dto_from_dict = ControllerMicroserviceModelMicroserviceDetailDto.from_dict(controller_microservice_model_microservice_detail_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


