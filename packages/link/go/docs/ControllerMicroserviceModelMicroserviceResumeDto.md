# ControllerMicroserviceModelMicroserviceResumeDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | Pointer to **string** |  | [optional] 
**Duration** | Pointer to **int32** |  | [optional] 
**ErrorMessage** | Pointer to **string** |  | [optional] 
**Events** | Pointer to [**[]ControllerMicroserviceModelEventDto**](ControllerMicroserviceModelEventDto.md) |  | [optional] 
**FinishedAt** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**ModifiedAt** | Pointer to **string** |  | [optional] 
**Response** | Pointer to **interface{}** |  | [optional] 
**SearchableBy** | Pointer to **map[string]interface{}** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 

## Methods

### NewControllerMicroserviceModelMicroserviceResumeDto

`func NewControllerMicroserviceModelMicroserviceResumeDto() *ControllerMicroserviceModelMicroserviceResumeDto`

NewControllerMicroserviceModelMicroserviceResumeDto instantiates a new ControllerMicroserviceModelMicroserviceResumeDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewControllerMicroserviceModelMicroserviceResumeDtoWithDefaults

`func NewControllerMicroserviceModelMicroserviceResumeDtoWithDefaults() *ControllerMicroserviceModelMicroserviceResumeDto`

NewControllerMicroserviceModelMicroserviceResumeDtoWithDefaults instantiates a new ControllerMicroserviceModelMicroserviceResumeDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAt

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDuration

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetDuration() int32`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetDurationOk() (*int32, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) SetDuration(v int32)`

SetDuration sets Duration field to given value.

### HasDuration

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) HasDuration() bool`

HasDuration returns a boolean if a field has been set.

### GetErrorMessage

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetErrorMessage() string`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetErrorMessageOk() (*string, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) SetErrorMessage(v string)`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### GetEvents

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetEvents() []ControllerMicroserviceModelEventDto`

GetEvents returns the Events field if non-nil, zero value otherwise.

### GetEventsOk

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetEventsOk() (*[]ControllerMicroserviceModelEventDto, bool)`

GetEventsOk returns a tuple with the Events field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvents

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) SetEvents(v []ControllerMicroserviceModelEventDto)`

SetEvents sets Events field to given value.

### HasEvents

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) HasEvents() bool`

HasEvents returns a boolean if a field has been set.

### GetFinishedAt

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetFinishedAt() string`

GetFinishedAt returns the FinishedAt field if non-nil, zero value otherwise.

### GetFinishedAtOk

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetFinishedAtOk() (*string, bool)`

GetFinishedAtOk returns a tuple with the FinishedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFinishedAt

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) SetFinishedAt(v string)`

SetFinishedAt sets FinishedAt field to given value.

### HasFinishedAt

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) HasFinishedAt() bool`

HasFinishedAt returns a boolean if a field has been set.

### GetId

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetModifiedAt

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetModifiedAt() string`

GetModifiedAt returns the ModifiedAt field if non-nil, zero value otherwise.

### GetModifiedAtOk

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetModifiedAtOk() (*string, bool)`

GetModifiedAtOk returns a tuple with the ModifiedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedAt

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) SetModifiedAt(v string)`

SetModifiedAt sets ModifiedAt field to given value.

### HasModifiedAt

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) HasModifiedAt() bool`

HasModifiedAt returns a boolean if a field has been set.

### GetResponse

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetResponse() interface{}`

GetResponse returns the Response field if non-nil, zero value otherwise.

### GetResponseOk

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetResponseOk() (*interface{}, bool)`

GetResponseOk returns a tuple with the Response field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponse

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) SetResponse(v interface{})`

SetResponse sets Response field to given value.

### HasResponse

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) HasResponse() bool`

HasResponse returns a boolean if a field has been set.

### SetResponseNil

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) SetResponseNil(b bool)`

 SetResponseNil sets the value for Response to be an explicit nil

### UnsetResponse
`func (o *ControllerMicroserviceModelMicroserviceResumeDto) UnsetResponse()`

UnsetResponse ensures that no value is present for Response, not even an explicit nil
### GetSearchableBy

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetSearchableBy() map[string]interface{}`

GetSearchableBy returns the SearchableBy field if non-nil, zero value otherwise.

### GetSearchableByOk

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetSearchableByOk() (*map[string]interface{}, bool)`

GetSearchableByOk returns a tuple with the SearchableBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchableBy

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) SetSearchableBy(v map[string]interface{})`

SetSearchableBy sets SearchableBy field to given value.

### HasSearchableBy

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) HasSearchableBy() bool`

HasSearchableBy returns a boolean if a field has been set.

### GetStatus

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ControllerMicroserviceModelMicroserviceResumeDto) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


