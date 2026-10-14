# ControllerWorkflooModelFileResponseV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FileBase64** | Pointer to **string** | FileBase64 es el archivo en base64; sólo viene en el 200. | [optional] 
**RetryAfter** | Pointer to **int32** | RetryAfter son los segundos a esperar antes de volver a pedirlo; sólo viene en el 202 (y también en el header Retry-After). | [optional] 
**Status** | Pointer to **string** | Status es \&quot;PROCESSING\&quot;; sólo viene en el 202. | [optional] 

## Methods

### NewControllerWorkflooModelFileResponseV2

`func NewControllerWorkflooModelFileResponseV2() *ControllerWorkflooModelFileResponseV2`

NewControllerWorkflooModelFileResponseV2 instantiates a new ControllerWorkflooModelFileResponseV2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewControllerWorkflooModelFileResponseV2WithDefaults

`func NewControllerWorkflooModelFileResponseV2WithDefaults() *ControllerWorkflooModelFileResponseV2`

NewControllerWorkflooModelFileResponseV2WithDefaults instantiates a new ControllerWorkflooModelFileResponseV2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFileBase64

`func (o *ControllerWorkflooModelFileResponseV2) GetFileBase64() string`

GetFileBase64 returns the FileBase64 field if non-nil, zero value otherwise.

### GetFileBase64Ok

`func (o *ControllerWorkflooModelFileResponseV2) GetFileBase64Ok() (*string, bool)`

GetFileBase64Ok returns a tuple with the FileBase64 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileBase64

`func (o *ControllerWorkflooModelFileResponseV2) SetFileBase64(v string)`

SetFileBase64 sets FileBase64 field to given value.

### HasFileBase64

`func (o *ControllerWorkflooModelFileResponseV2) HasFileBase64() bool`

HasFileBase64 returns a boolean if a field has been set.

### GetRetryAfter

`func (o *ControllerWorkflooModelFileResponseV2) GetRetryAfter() int32`

GetRetryAfter returns the RetryAfter field if non-nil, zero value otherwise.

### GetRetryAfterOk

`func (o *ControllerWorkflooModelFileResponseV2) GetRetryAfterOk() (*int32, bool)`

GetRetryAfterOk returns a tuple with the RetryAfter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetryAfter

`func (o *ControllerWorkflooModelFileResponseV2) SetRetryAfter(v int32)`

SetRetryAfter sets RetryAfter field to given value.

### HasRetryAfter

`func (o *ControllerWorkflooModelFileResponseV2) HasRetryAfter() bool`

HasRetryAfter returns a boolean if a field has been set.

### GetStatus

`func (o *ControllerWorkflooModelFileResponseV2) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ControllerWorkflooModelFileResponseV2) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ControllerWorkflooModelFileResponseV2) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ControllerWorkflooModelFileResponseV2) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


