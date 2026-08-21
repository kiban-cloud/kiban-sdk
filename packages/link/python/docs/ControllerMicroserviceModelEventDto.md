# ControllerMicroserviceModelEventDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** |  | [optional] 
**error_message** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from kiban.sdk.link.models.controller_microservice_model_event_dto import ControllerMicroserviceModelEventDto

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerMicroserviceModelEventDto from a JSON string
controller_microservice_model_event_dto_instance = ControllerMicroserviceModelEventDto.from_json(json)
# print the JSON string representation of the object
print(ControllerMicroserviceModelEventDto.to_json())

# convert the object into a dict
controller_microservice_model_event_dto_dict = controller_microservice_model_event_dto_instance.to_dict()
# create an instance of ControllerMicroserviceModelEventDto from a dict
controller_microservice_model_event_dto_from_dict = ControllerMicroserviceModelEventDto.from_dict(controller_microservice_model_event_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


