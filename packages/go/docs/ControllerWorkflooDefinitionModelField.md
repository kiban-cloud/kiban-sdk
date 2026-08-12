# ControllerWorkflooDefinitionModelField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FieldMetadata** | Pointer to [**ControllerWorkflooDefinitionModelFieldMetadata**](ControllerWorkflooDefinitionModelFieldMetadata.md) |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Predefined** | Pointer to **bool** |  | [optional] 
**Required** | Pointer to **bool** |  | [optional] 
**Section** | Pointer to **string** |  | [optional] 
**Set** | Pointer to [**ControllerWorkflooDefinitionModelSetData**](ControllerWorkflooDefinitionModelSetData.md) |  | [optional] 
**ShowIf** | Pointer to [**[]ControllerWorkflooDefinitionModelShowIf**](ControllerWorkflooDefinitionModelShowIf.md) |  | [optional] 

## Methods

### NewControllerWorkflooDefinitionModelField

`func NewControllerWorkflooDefinitionModelField() *ControllerWorkflooDefinitionModelField`

NewControllerWorkflooDefinitionModelField instantiates a new ControllerWorkflooDefinitionModelField object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewControllerWorkflooDefinitionModelFieldWithDefaults

`func NewControllerWorkflooDefinitionModelFieldWithDefaults() *ControllerWorkflooDefinitionModelField`

NewControllerWorkflooDefinitionModelFieldWithDefaults instantiates a new ControllerWorkflooDefinitionModelField object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFieldMetadata

`func (o *ControllerWorkflooDefinitionModelField) GetFieldMetadata() ControllerWorkflooDefinitionModelFieldMetadata`

GetFieldMetadata returns the FieldMetadata field if non-nil, zero value otherwise.

### GetFieldMetadataOk

`func (o *ControllerWorkflooDefinitionModelField) GetFieldMetadataOk() (*ControllerWorkflooDefinitionModelFieldMetadata, bool)`

GetFieldMetadataOk returns a tuple with the FieldMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldMetadata

`func (o *ControllerWorkflooDefinitionModelField) SetFieldMetadata(v ControllerWorkflooDefinitionModelFieldMetadata)`

SetFieldMetadata sets FieldMetadata field to given value.

### HasFieldMetadata

`func (o *ControllerWorkflooDefinitionModelField) HasFieldMetadata() bool`

HasFieldMetadata returns a boolean if a field has been set.

### GetId

`func (o *ControllerWorkflooDefinitionModelField) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ControllerWorkflooDefinitionModelField) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ControllerWorkflooDefinitionModelField) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ControllerWorkflooDefinitionModelField) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ControllerWorkflooDefinitionModelField) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ControllerWorkflooDefinitionModelField) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ControllerWorkflooDefinitionModelField) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ControllerWorkflooDefinitionModelField) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPredefined

`func (o *ControllerWorkflooDefinitionModelField) GetPredefined() bool`

GetPredefined returns the Predefined field if non-nil, zero value otherwise.

### GetPredefinedOk

`func (o *ControllerWorkflooDefinitionModelField) GetPredefinedOk() (*bool, bool)`

GetPredefinedOk returns a tuple with the Predefined field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredefined

`func (o *ControllerWorkflooDefinitionModelField) SetPredefined(v bool)`

SetPredefined sets Predefined field to given value.

### HasPredefined

`func (o *ControllerWorkflooDefinitionModelField) HasPredefined() bool`

HasPredefined returns a boolean if a field has been set.

### GetRequired

`func (o *ControllerWorkflooDefinitionModelField) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *ControllerWorkflooDefinitionModelField) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *ControllerWorkflooDefinitionModelField) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *ControllerWorkflooDefinitionModelField) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetSection

`func (o *ControllerWorkflooDefinitionModelField) GetSection() string`

GetSection returns the Section field if non-nil, zero value otherwise.

### GetSectionOk

`func (o *ControllerWorkflooDefinitionModelField) GetSectionOk() (*string, bool)`

GetSectionOk returns a tuple with the Section field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSection

`func (o *ControllerWorkflooDefinitionModelField) SetSection(v string)`

SetSection sets Section field to given value.

### HasSection

`func (o *ControllerWorkflooDefinitionModelField) HasSection() bool`

HasSection returns a boolean if a field has been set.

### GetSet

`func (o *ControllerWorkflooDefinitionModelField) GetSet() ControllerWorkflooDefinitionModelSetData`

GetSet returns the Set field if non-nil, zero value otherwise.

### GetSetOk

`func (o *ControllerWorkflooDefinitionModelField) GetSetOk() (*ControllerWorkflooDefinitionModelSetData, bool)`

GetSetOk returns a tuple with the Set field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSet

`func (o *ControllerWorkflooDefinitionModelField) SetSet(v ControllerWorkflooDefinitionModelSetData)`

SetSet sets Set field to given value.

### HasSet

`func (o *ControllerWorkflooDefinitionModelField) HasSet() bool`

HasSet returns a boolean if a field has been set.

### GetShowIf

`func (o *ControllerWorkflooDefinitionModelField) GetShowIf() []ControllerWorkflooDefinitionModelShowIf`

GetShowIf returns the ShowIf field if non-nil, zero value otherwise.

### GetShowIfOk

`func (o *ControllerWorkflooDefinitionModelField) GetShowIfOk() (*[]ControllerWorkflooDefinitionModelShowIf, bool)`

GetShowIfOk returns a tuple with the ShowIf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowIf

`func (o *ControllerWorkflooDefinitionModelField) SetShowIf(v []ControllerWorkflooDefinitionModelShowIf)`

SetShowIf sets ShowIf field to given value.

### HasShowIf

`func (o *ControllerWorkflooDefinitionModelField) HasShowIf() bool`

HasShowIf returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


