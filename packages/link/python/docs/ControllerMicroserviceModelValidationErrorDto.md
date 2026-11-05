# ControllerMicroserviceModelValidationErrorDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**errors** | [**List[ControllerMicroserviceModelValidationErrorDto]**](ControllerMicroserviceModelValidationErrorDto.md) |  | [optional] 
**var_field** | **str** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from kiban.link.models.controller_microservice_model_validation_error_dto import ControllerMicroserviceModelValidationErrorDto

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerMicroserviceModelValidationErrorDto from a JSON string
controller_microservice_model_validation_error_dto_instance = ControllerMicroserviceModelValidationErrorDto.from_json(json)
# print the JSON string representation of the object
print(ControllerMicroserviceModelValidationErrorDto.to_json())

# convert the object into a dict
controller_microservice_model_validation_error_dto_dict = controller_microservice_model_validation_error_dto_instance.to_dict()
# create an instance of ControllerMicroserviceModelValidationErrorDto from a dict
controller_microservice_model_validation_error_dto_from_dict = ControllerMicroserviceModelValidationErrorDto.from_dict(controller_microservice_model_validation_error_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


