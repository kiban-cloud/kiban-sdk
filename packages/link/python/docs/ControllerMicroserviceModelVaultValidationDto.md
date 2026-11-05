# ControllerMicroserviceModelVaultValidationDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | valid: existe y sirve para el servicio; notValid: existe pero es de otro tipo; notFound: no existe. | [optional] 

## Example

```python
from kiban.link.models.controller_microservice_model_vault_validation_dto import ControllerMicroserviceModelVaultValidationDto

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerMicroserviceModelVaultValidationDto from a JSON string
controller_microservice_model_vault_validation_dto_instance = ControllerMicroserviceModelVaultValidationDto.from_json(json)
# print the JSON string representation of the object
print(ControllerMicroserviceModelVaultValidationDto.to_json())

# convert the object into a dict
controller_microservice_model_vault_validation_dto_dict = controller_microservice_model_vault_validation_dto_instance.to_dict()
# create an instance of ControllerMicroserviceModelVaultValidationDto from a dict
controller_microservice_model_vault_validation_dto_from_dict = ControllerMicroserviceModelVaultValidationDto.from_dict(controller_microservice_model_vault_validation_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


