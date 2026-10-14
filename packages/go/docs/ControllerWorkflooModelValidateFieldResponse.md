# ControllerWorkflooModelValidateFieldResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckId** | Pointer to **string** | CheckId identifica la validación ejecutada. | [optional] 
**Errors** | Pointer to **map[string]string** | Errors trae, por campo, el código de formato o el mensaje del servicio. | [optional] 
**Filled** | Pointer to **map[string]interface{}** | Filled son los campos que el validador rellenó. | [optional] 
**MissingInputs** | Pointer to **[]string** | MissingInputs son los campos que faltan capturar para poder validar (status PENDING_INPUTS). | [optional] 
**Options** | Pointer to **map[string][]string** | Options son los campos con varios candidatos (p. ej. las colonias de un código postal): campo → candidatos. Al entregar el formulario sólo se acepta uno de ellos. | [optional] 
**Reused** | Pointer to **bool** | Reused indica que se reusó una validación anterior con los mismos datos. | [optional] 
**Status** | Pointer to **string** | Status es VALID, INVALID, FORMAT_ERROR o PENDING_INPUTS. | [optional] 

## Methods

### NewControllerWorkflooModelValidateFieldResponse

`func NewControllerWorkflooModelValidateFieldResponse() *ControllerWorkflooModelValidateFieldResponse`

NewControllerWorkflooModelValidateFieldResponse instantiates a new ControllerWorkflooModelValidateFieldResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewControllerWorkflooModelValidateFieldResponseWithDefaults

`func NewControllerWorkflooModelValidateFieldResponseWithDefaults() *ControllerWorkflooModelValidateFieldResponse`

NewControllerWorkflooModelValidateFieldResponseWithDefaults instantiates a new ControllerWorkflooModelValidateFieldResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckId

`func (o *ControllerWorkflooModelValidateFieldResponse) GetCheckId() string`

GetCheckId returns the CheckId field if non-nil, zero value otherwise.

### GetCheckIdOk

`func (o *ControllerWorkflooModelValidateFieldResponse) GetCheckIdOk() (*string, bool)`

GetCheckIdOk returns a tuple with the CheckId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckId

`func (o *ControllerWorkflooModelValidateFieldResponse) SetCheckId(v string)`

SetCheckId sets CheckId field to given value.

### HasCheckId

`func (o *ControllerWorkflooModelValidateFieldResponse) HasCheckId() bool`

HasCheckId returns a boolean if a field has been set.

### GetErrors

`func (o *ControllerWorkflooModelValidateFieldResponse) GetErrors() map[string]string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ControllerWorkflooModelValidateFieldResponse) GetErrorsOk() (*map[string]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ControllerWorkflooModelValidateFieldResponse) SetErrors(v map[string]string)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *ControllerWorkflooModelValidateFieldResponse) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### SetErrorsNil

`func (o *ControllerWorkflooModelValidateFieldResponse) SetErrorsNil(b bool)`

 SetErrorsNil sets the value for Errors to be an explicit nil

### UnsetErrors
`func (o *ControllerWorkflooModelValidateFieldResponse) UnsetErrors()`

UnsetErrors ensures that no value is present for Errors, not even an explicit nil
### GetFilled

`func (o *ControllerWorkflooModelValidateFieldResponse) GetFilled() map[string]interface{}`

GetFilled returns the Filled field if non-nil, zero value otherwise.

### GetFilledOk

`func (o *ControllerWorkflooModelValidateFieldResponse) GetFilledOk() (*map[string]interface{}, bool)`

GetFilledOk returns a tuple with the Filled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilled

`func (o *ControllerWorkflooModelValidateFieldResponse) SetFilled(v map[string]interface{})`

SetFilled sets Filled field to given value.

### HasFilled

`func (o *ControllerWorkflooModelValidateFieldResponse) HasFilled() bool`

HasFilled returns a boolean if a field has been set.

### SetFilledNil

`func (o *ControllerWorkflooModelValidateFieldResponse) SetFilledNil(b bool)`

 SetFilledNil sets the value for Filled to be an explicit nil

### UnsetFilled
`func (o *ControllerWorkflooModelValidateFieldResponse) UnsetFilled()`

UnsetFilled ensures that no value is present for Filled, not even an explicit nil
### GetMissingInputs

`func (o *ControllerWorkflooModelValidateFieldResponse) GetMissingInputs() []string`

GetMissingInputs returns the MissingInputs field if non-nil, zero value otherwise.

### GetMissingInputsOk

`func (o *ControllerWorkflooModelValidateFieldResponse) GetMissingInputsOk() (*[]string, bool)`

GetMissingInputsOk returns a tuple with the MissingInputs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMissingInputs

`func (o *ControllerWorkflooModelValidateFieldResponse) SetMissingInputs(v []string)`

SetMissingInputs sets MissingInputs field to given value.

### HasMissingInputs

`func (o *ControllerWorkflooModelValidateFieldResponse) HasMissingInputs() bool`

HasMissingInputs returns a boolean if a field has been set.

### SetMissingInputsNil

`func (o *ControllerWorkflooModelValidateFieldResponse) SetMissingInputsNil(b bool)`

 SetMissingInputsNil sets the value for MissingInputs to be an explicit nil

### UnsetMissingInputs
`func (o *ControllerWorkflooModelValidateFieldResponse) UnsetMissingInputs()`

UnsetMissingInputs ensures that no value is present for MissingInputs, not even an explicit nil
### GetOptions

`func (o *ControllerWorkflooModelValidateFieldResponse) GetOptions() map[string][]string`

GetOptions returns the Options field if non-nil, zero value otherwise.

### GetOptionsOk

`func (o *ControllerWorkflooModelValidateFieldResponse) GetOptionsOk() (*map[string][]string, bool)`

GetOptionsOk returns a tuple with the Options field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptions

`func (o *ControllerWorkflooModelValidateFieldResponse) SetOptions(v map[string][]string)`

SetOptions sets Options field to given value.

### HasOptions

`func (o *ControllerWorkflooModelValidateFieldResponse) HasOptions() bool`

HasOptions returns a boolean if a field has been set.

### SetOptionsNil

`func (o *ControllerWorkflooModelValidateFieldResponse) SetOptionsNil(b bool)`

 SetOptionsNil sets the value for Options to be an explicit nil

### UnsetOptions
`func (o *ControllerWorkflooModelValidateFieldResponse) UnsetOptions()`

UnsetOptions ensures that no value is present for Options, not even an explicit nil
### GetReused

`func (o *ControllerWorkflooModelValidateFieldResponse) GetReused() bool`

GetReused returns the Reused field if non-nil, zero value otherwise.

### GetReusedOk

`func (o *ControllerWorkflooModelValidateFieldResponse) GetReusedOk() (*bool, bool)`

GetReusedOk returns a tuple with the Reused field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReused

`func (o *ControllerWorkflooModelValidateFieldResponse) SetReused(v bool)`

SetReused sets Reused field to given value.

### HasReused

`func (o *ControllerWorkflooModelValidateFieldResponse) HasReused() bool`

HasReused returns a boolean if a field has been set.

### GetStatus

`func (o *ControllerWorkflooModelValidateFieldResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ControllerWorkflooModelValidateFieldResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ControllerWorkflooModelValidateFieldResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ControllerWorkflooModelValidateFieldResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


