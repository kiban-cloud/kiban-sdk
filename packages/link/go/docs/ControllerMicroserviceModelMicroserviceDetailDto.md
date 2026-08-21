# ControllerMicroserviceModelMicroserviceDetailDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiData** | Pointer to [**[]ControllerMicroserviceModelApiDataDetailDto**](ControllerMicroserviceModelApiDataDetailDto.md) |  | [optional] 
**Cost** | Pointer to **float32** |  | [optional] 
**CreatedAt** | Pointer to **string** |  | [optional] 
**Duration** | Pointer to **int32** |  | [optional] 
**ErrorMessage** | Pointer to **string** |  | [optional] 
**Events** | Pointer to [**[]ControllerMicroserviceModelEventDto**](ControllerMicroserviceModelEventDto.md) |  | [optional] 
**ExtraCost** | Pointer to **float32** |  | [optional] 
**FinishedAt** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**ModifiedAt** | Pointer to **string** |  | [optional] 
**Request** | Pointer to **interface{}** |  | [optional] 
**Response** | Pointer to **interface{}** |  | [optional] 
**SearchableBy** | Pointer to **map[string]interface{}** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 

## Methods

### NewControllerMicroserviceModelMicroserviceDetailDto

`func NewControllerMicroserviceModelMicroserviceDetailDto() *ControllerMicroserviceModelMicroserviceDetailDto`

NewControllerMicroserviceModelMicroserviceDetailDto instantiates a new ControllerMicroserviceModelMicroserviceDetailDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewControllerMicroserviceModelMicroserviceDetailDtoWithDefaults

`func NewControllerMicroserviceModelMicroserviceDetailDtoWithDefaults() *ControllerMicroserviceModelMicroserviceDetailDto`

NewControllerMicroserviceModelMicroserviceDetailDtoWithDefaults instantiates a new ControllerMicroserviceModelMicroserviceDetailDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiData

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetApiData() []ControllerMicroserviceModelApiDataDetailDto`

GetApiData returns the ApiData field if non-nil, zero value otherwise.

### GetApiDataOk

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetApiDataOk() (*[]ControllerMicroserviceModelApiDataDetailDto, bool)`

GetApiDataOk returns a tuple with the ApiData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiData

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) SetApiData(v []ControllerMicroserviceModelApiDataDetailDto)`

SetApiData sets ApiData field to given value.

### HasApiData

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) HasApiData() bool`

HasApiData returns a boolean if a field has been set.

### GetCost

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetCost() float32`

GetCost returns the Cost field if non-nil, zero value otherwise.

### GetCostOk

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetCostOk() (*float32, bool)`

GetCostOk returns a tuple with the Cost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCost

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) SetCost(v float32)`

SetCost sets Cost field to given value.

### HasCost

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) HasCost() bool`

HasCost returns a boolean if a field has been set.

### GetCreatedAt

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDuration

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetDuration() int32`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetDurationOk() (*int32, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) SetDuration(v int32)`

SetDuration sets Duration field to given value.

### HasDuration

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) HasDuration() bool`

HasDuration returns a boolean if a field has been set.

### GetErrorMessage

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetErrorMessage() string`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetErrorMessageOk() (*string, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) SetErrorMessage(v string)`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### GetEvents

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetEvents() []ControllerMicroserviceModelEventDto`

GetEvents returns the Events field if non-nil, zero value otherwise.

### GetEventsOk

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetEventsOk() (*[]ControllerMicroserviceModelEventDto, bool)`

GetEventsOk returns a tuple with the Events field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvents

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) SetEvents(v []ControllerMicroserviceModelEventDto)`

SetEvents sets Events field to given value.

### HasEvents

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) HasEvents() bool`

HasEvents returns a boolean if a field has been set.

### GetExtraCost

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetExtraCost() float32`

GetExtraCost returns the ExtraCost field if non-nil, zero value otherwise.

### GetExtraCostOk

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetExtraCostOk() (*float32, bool)`

GetExtraCostOk returns a tuple with the ExtraCost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraCost

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) SetExtraCost(v float32)`

SetExtraCost sets ExtraCost field to given value.

### HasExtraCost

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) HasExtraCost() bool`

HasExtraCost returns a boolean if a field has been set.

### GetFinishedAt

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetFinishedAt() string`

GetFinishedAt returns the FinishedAt field if non-nil, zero value otherwise.

### GetFinishedAtOk

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetFinishedAtOk() (*string, bool)`

GetFinishedAtOk returns a tuple with the FinishedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFinishedAt

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) SetFinishedAt(v string)`

SetFinishedAt sets FinishedAt field to given value.

### HasFinishedAt

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) HasFinishedAt() bool`

HasFinishedAt returns a boolean if a field has been set.

### GetId

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetModifiedAt

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetModifiedAt() string`

GetModifiedAt returns the ModifiedAt field if non-nil, zero value otherwise.

### GetModifiedAtOk

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetModifiedAtOk() (*string, bool)`

GetModifiedAtOk returns a tuple with the ModifiedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedAt

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) SetModifiedAt(v string)`

SetModifiedAt sets ModifiedAt field to given value.

### HasModifiedAt

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) HasModifiedAt() bool`

HasModifiedAt returns a boolean if a field has been set.

### GetRequest

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetRequest() interface{}`

GetRequest returns the Request field if non-nil, zero value otherwise.

### GetRequestOk

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetRequestOk() (*interface{}, bool)`

GetRequestOk returns a tuple with the Request field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequest

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) SetRequest(v interface{})`

SetRequest sets Request field to given value.

### HasRequest

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) HasRequest() bool`

HasRequest returns a boolean if a field has been set.

### SetRequestNil

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) SetRequestNil(b bool)`

 SetRequestNil sets the value for Request to be an explicit nil

### UnsetRequest
`func (o *ControllerMicroserviceModelMicroserviceDetailDto) UnsetRequest()`

UnsetRequest ensures that no value is present for Request, not even an explicit nil
### GetResponse

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetResponse() interface{}`

GetResponse returns the Response field if non-nil, zero value otherwise.

### GetResponseOk

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetResponseOk() (*interface{}, bool)`

GetResponseOk returns a tuple with the Response field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponse

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) SetResponse(v interface{})`

SetResponse sets Response field to given value.

### HasResponse

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) HasResponse() bool`

HasResponse returns a boolean if a field has been set.

### SetResponseNil

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) SetResponseNil(b bool)`

 SetResponseNil sets the value for Response to be an explicit nil

### UnsetResponse
`func (o *ControllerMicroserviceModelMicroserviceDetailDto) UnsetResponse()`

UnsetResponse ensures that no value is present for Response, not even an explicit nil
### GetSearchableBy

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetSearchableBy() map[string]interface{}`

GetSearchableBy returns the SearchableBy field if non-nil, zero value otherwise.

### GetSearchableByOk

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetSearchableByOk() (*map[string]interface{}, bool)`

GetSearchableByOk returns a tuple with the SearchableBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchableBy

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) SetSearchableBy(v map[string]interface{})`

SetSearchableBy sets SearchableBy field to given value.

### HasSearchableBy

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) HasSearchableBy() bool`

HasSearchableBy returns a boolean if a field has been set.

### GetStatus

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ControllerMicroserviceModelMicroserviceDetailDto) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


