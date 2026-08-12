# ControllerWorkflooModelReviewRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Decision** | Pointer to **string** |  | [optional] 
**ReviewerNote** | Pointer to **string** |  | [optional] 
**Reviews** | Pointer to [**[]ControllerWorkflooModelReviewFieldRequest**](ControllerWorkflooModelReviewFieldRequest.md) |  | [optional] 

## Methods

### NewControllerWorkflooModelReviewRequest

`func NewControllerWorkflooModelReviewRequest() *ControllerWorkflooModelReviewRequest`

NewControllerWorkflooModelReviewRequest instantiates a new ControllerWorkflooModelReviewRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewControllerWorkflooModelReviewRequestWithDefaults

`func NewControllerWorkflooModelReviewRequestWithDefaults() *ControllerWorkflooModelReviewRequest`

NewControllerWorkflooModelReviewRequestWithDefaults instantiates a new ControllerWorkflooModelReviewRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDecision

`func (o *ControllerWorkflooModelReviewRequest) GetDecision() string`

GetDecision returns the Decision field if non-nil, zero value otherwise.

### GetDecisionOk

`func (o *ControllerWorkflooModelReviewRequest) GetDecisionOk() (*string, bool)`

GetDecisionOk returns a tuple with the Decision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecision

`func (o *ControllerWorkflooModelReviewRequest) SetDecision(v string)`

SetDecision sets Decision field to given value.

### HasDecision

`func (o *ControllerWorkflooModelReviewRequest) HasDecision() bool`

HasDecision returns a boolean if a field has been set.

### GetReviewerNote

`func (o *ControllerWorkflooModelReviewRequest) GetReviewerNote() string`

GetReviewerNote returns the ReviewerNote field if non-nil, zero value otherwise.

### GetReviewerNoteOk

`func (o *ControllerWorkflooModelReviewRequest) GetReviewerNoteOk() (*string, bool)`

GetReviewerNoteOk returns a tuple with the ReviewerNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewerNote

`func (o *ControllerWorkflooModelReviewRequest) SetReviewerNote(v string)`

SetReviewerNote sets ReviewerNote field to given value.

### HasReviewerNote

`func (o *ControllerWorkflooModelReviewRequest) HasReviewerNote() bool`

HasReviewerNote returns a boolean if a field has been set.

### GetReviews

`func (o *ControllerWorkflooModelReviewRequest) GetReviews() []ControllerWorkflooModelReviewFieldRequest`

GetReviews returns the Reviews field if non-nil, zero value otherwise.

### GetReviewsOk

`func (o *ControllerWorkflooModelReviewRequest) GetReviewsOk() (*[]ControllerWorkflooModelReviewFieldRequest, bool)`

GetReviewsOk returns a tuple with the Reviews field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviews

`func (o *ControllerWorkflooModelReviewRequest) SetReviews(v []ControllerWorkflooModelReviewFieldRequest)`

SetReviews sets Reviews field to given value.

### HasReviews

`func (o *ControllerWorkflooModelReviewRequest) HasReviews() bool`

HasReviews returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


