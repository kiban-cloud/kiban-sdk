# ControllerWorkflooModelRejection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**At** | Pointer to **string** |  | [optional] 
**Fields** | Pointer to [**[]ControllerWorkflooModelRejectedField**](ControllerWorkflooModelRejectedField.md) |  | [optional] 
**HttpCode** | Pointer to **int32** |  | [optional] 
**NodeId** | Pointer to **string** |  | [optional] 
**NodeName** | Pointer to **string** |  | [optional] 
**NodeType** | Pointer to **string** |  | [optional] 
**Raw** | Pointer to **map[string]string** |  | [optional] 
**Reason** | Pointer to **string** |  | [optional] 

## Methods

### NewControllerWorkflooModelRejection

`func NewControllerWorkflooModelRejection() *ControllerWorkflooModelRejection`

NewControllerWorkflooModelRejection instantiates a new ControllerWorkflooModelRejection object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewControllerWorkflooModelRejectionWithDefaults

`func NewControllerWorkflooModelRejectionWithDefaults() *ControllerWorkflooModelRejection`

NewControllerWorkflooModelRejectionWithDefaults instantiates a new ControllerWorkflooModelRejection object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAt

`func (o *ControllerWorkflooModelRejection) GetAt() string`

GetAt returns the At field if non-nil, zero value otherwise.

### GetAtOk

`func (o *ControllerWorkflooModelRejection) GetAtOk() (*string, bool)`

GetAtOk returns a tuple with the At field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAt

`func (o *ControllerWorkflooModelRejection) SetAt(v string)`

SetAt sets At field to given value.

### HasAt

`func (o *ControllerWorkflooModelRejection) HasAt() bool`

HasAt returns a boolean if a field has been set.

### GetFields

`func (o *ControllerWorkflooModelRejection) GetFields() []ControllerWorkflooModelRejectedField`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *ControllerWorkflooModelRejection) GetFieldsOk() (*[]ControllerWorkflooModelRejectedField, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *ControllerWorkflooModelRejection) SetFields(v []ControllerWorkflooModelRejectedField)`

SetFields sets Fields field to given value.

### HasFields

`func (o *ControllerWorkflooModelRejection) HasFields() bool`

HasFields returns a boolean if a field has been set.

### SetFieldsNil

`func (o *ControllerWorkflooModelRejection) SetFieldsNil(b bool)`

 SetFieldsNil sets the value for Fields to be an explicit nil

### UnsetFields
`func (o *ControllerWorkflooModelRejection) UnsetFields()`

UnsetFields ensures that no value is present for Fields, not even an explicit nil
### GetHttpCode

`func (o *ControllerWorkflooModelRejection) GetHttpCode() int32`

GetHttpCode returns the HttpCode field if non-nil, zero value otherwise.

### GetHttpCodeOk

`func (o *ControllerWorkflooModelRejection) GetHttpCodeOk() (*int32, bool)`

GetHttpCodeOk returns a tuple with the HttpCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpCode

`func (o *ControllerWorkflooModelRejection) SetHttpCode(v int32)`

SetHttpCode sets HttpCode field to given value.

### HasHttpCode

`func (o *ControllerWorkflooModelRejection) HasHttpCode() bool`

HasHttpCode returns a boolean if a field has been set.

### GetNodeId

`func (o *ControllerWorkflooModelRejection) GetNodeId() string`

GetNodeId returns the NodeId field if non-nil, zero value otherwise.

### GetNodeIdOk

`func (o *ControllerWorkflooModelRejection) GetNodeIdOk() (*string, bool)`

GetNodeIdOk returns a tuple with the NodeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNodeId

`func (o *ControllerWorkflooModelRejection) SetNodeId(v string)`

SetNodeId sets NodeId field to given value.

### HasNodeId

`func (o *ControllerWorkflooModelRejection) HasNodeId() bool`

HasNodeId returns a boolean if a field has been set.

### GetNodeName

`func (o *ControllerWorkflooModelRejection) GetNodeName() string`

GetNodeName returns the NodeName field if non-nil, zero value otherwise.

### GetNodeNameOk

`func (o *ControllerWorkflooModelRejection) GetNodeNameOk() (*string, bool)`

GetNodeNameOk returns a tuple with the NodeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNodeName

`func (o *ControllerWorkflooModelRejection) SetNodeName(v string)`

SetNodeName sets NodeName field to given value.

### HasNodeName

`func (o *ControllerWorkflooModelRejection) HasNodeName() bool`

HasNodeName returns a boolean if a field has been set.

### GetNodeType

`func (o *ControllerWorkflooModelRejection) GetNodeType() string`

GetNodeType returns the NodeType field if non-nil, zero value otherwise.

### GetNodeTypeOk

`func (o *ControllerWorkflooModelRejection) GetNodeTypeOk() (*string, bool)`

GetNodeTypeOk returns a tuple with the NodeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNodeType

`func (o *ControllerWorkflooModelRejection) SetNodeType(v string)`

SetNodeType sets NodeType field to given value.

### HasNodeType

`func (o *ControllerWorkflooModelRejection) HasNodeType() bool`

HasNodeType returns a boolean if a field has been set.

### GetRaw

`func (o *ControllerWorkflooModelRejection) GetRaw() map[string]string`

GetRaw returns the Raw field if non-nil, zero value otherwise.

### GetRawOk

`func (o *ControllerWorkflooModelRejection) GetRawOk() (*map[string]string, bool)`

GetRawOk returns a tuple with the Raw field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRaw

`func (o *ControllerWorkflooModelRejection) SetRaw(v map[string]string)`

SetRaw sets Raw field to given value.

### HasRaw

`func (o *ControllerWorkflooModelRejection) HasRaw() bool`

HasRaw returns a boolean if a field has been set.

### SetRawNil

`func (o *ControllerWorkflooModelRejection) SetRawNil(b bool)`

 SetRawNil sets the value for Raw to be an explicit nil

### UnsetRaw
`func (o *ControllerWorkflooModelRejection) UnsetRaw()`

UnsetRaw ensures that no value is present for Raw, not even an explicit nil
### GetReason

`func (o *ControllerWorkflooModelRejection) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *ControllerWorkflooModelRejection) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *ControllerWorkflooModelRejection) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *ControllerWorkflooModelRejection) HasReason() bool`

HasReason returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


