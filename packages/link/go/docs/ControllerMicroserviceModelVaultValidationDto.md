# ControllerMicroserviceModelVaultValidationDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** | valid: existe y sirve para el servicio; notValid: existe pero es de otro tipo; notFound: no existe. | [optional] 

## Methods

### NewControllerMicroserviceModelVaultValidationDto

`func NewControllerMicroserviceModelVaultValidationDto() *ControllerMicroserviceModelVaultValidationDto`

NewControllerMicroserviceModelVaultValidationDto instantiates a new ControllerMicroserviceModelVaultValidationDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewControllerMicroserviceModelVaultValidationDtoWithDefaults

`func NewControllerMicroserviceModelVaultValidationDtoWithDefaults() *ControllerMicroserviceModelVaultValidationDto`

NewControllerMicroserviceModelVaultValidationDtoWithDefaults instantiates a new ControllerMicroserviceModelVaultValidationDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *ControllerMicroserviceModelVaultValidationDto) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ControllerMicroserviceModelVaultValidationDto) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ControllerMicroserviceModelVaultValidationDto) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ControllerMicroserviceModelVaultValidationDto) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


