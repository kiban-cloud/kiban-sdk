# ControllerWorkflooModelNode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Api** | Pointer to [**ControllerWorkflooModelApi**](ControllerWorkflooModelApi.md) |  | [optional] 
**Created** | Pointer to **string** |  | [optional] 
**CreatedBy** | Pointer to **string** | TODO MOVER | [optional] 
**DecisionTree** | Pointer to [**[]ControllerWorkflooModelDecisionTree**](ControllerWorkflooModelDecisionTree.md) |  | [optional] 
**Form** | Pointer to [**ControllerWorkflooModelForm**](ControllerWorkflooModelForm.md) |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Link** | Pointer to [**ControllerWorkflooModelLink**](ControllerWorkflooModelLink.md) |  | [optional] 
**Modified** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Ruleset** | Pointer to [**ControllerWorkflooModelRuleset**](ControllerWorkflooModelRuleset.md) |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Variables** | Pointer to [**ControllerWorkflooModelVariables**](ControllerWorkflooModelVariables.md) |  | [optional] 

## Methods

### NewControllerWorkflooModelNode

`func NewControllerWorkflooModelNode() *ControllerWorkflooModelNode`

NewControllerWorkflooModelNode instantiates a new ControllerWorkflooModelNode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewControllerWorkflooModelNodeWithDefaults

`func NewControllerWorkflooModelNodeWithDefaults() *ControllerWorkflooModelNode`

NewControllerWorkflooModelNodeWithDefaults instantiates a new ControllerWorkflooModelNode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApi

`func (o *ControllerWorkflooModelNode) GetApi() ControllerWorkflooModelApi`

GetApi returns the Api field if non-nil, zero value otherwise.

### GetApiOk

`func (o *ControllerWorkflooModelNode) GetApiOk() (*ControllerWorkflooModelApi, bool)`

GetApiOk returns a tuple with the Api field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApi

`func (o *ControllerWorkflooModelNode) SetApi(v ControllerWorkflooModelApi)`

SetApi sets Api field to given value.

### HasApi

`func (o *ControllerWorkflooModelNode) HasApi() bool`

HasApi returns a boolean if a field has been set.

### GetCreated

`func (o *ControllerWorkflooModelNode) GetCreated() string`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ControllerWorkflooModelNode) GetCreatedOk() (*string, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ControllerWorkflooModelNode) SetCreated(v string)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *ControllerWorkflooModelNode) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetCreatedBy

`func (o *ControllerWorkflooModelNode) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *ControllerWorkflooModelNode) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *ControllerWorkflooModelNode) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *ControllerWorkflooModelNode) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### GetDecisionTree

`func (o *ControllerWorkflooModelNode) GetDecisionTree() []ControllerWorkflooModelDecisionTree`

GetDecisionTree returns the DecisionTree field if non-nil, zero value otherwise.

### GetDecisionTreeOk

`func (o *ControllerWorkflooModelNode) GetDecisionTreeOk() (*[]ControllerWorkflooModelDecisionTree, bool)`

GetDecisionTreeOk returns a tuple with the DecisionTree field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionTree

`func (o *ControllerWorkflooModelNode) SetDecisionTree(v []ControllerWorkflooModelDecisionTree)`

SetDecisionTree sets DecisionTree field to given value.

### HasDecisionTree

`func (o *ControllerWorkflooModelNode) HasDecisionTree() bool`

HasDecisionTree returns a boolean if a field has been set.

### GetForm

`func (o *ControllerWorkflooModelNode) GetForm() ControllerWorkflooModelForm`

GetForm returns the Form field if non-nil, zero value otherwise.

### GetFormOk

`func (o *ControllerWorkflooModelNode) GetFormOk() (*ControllerWorkflooModelForm, bool)`

GetFormOk returns a tuple with the Form field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForm

`func (o *ControllerWorkflooModelNode) SetForm(v ControllerWorkflooModelForm)`

SetForm sets Form field to given value.

### HasForm

`func (o *ControllerWorkflooModelNode) HasForm() bool`

HasForm returns a boolean if a field has been set.

### GetId

`func (o *ControllerWorkflooModelNode) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ControllerWorkflooModelNode) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ControllerWorkflooModelNode) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ControllerWorkflooModelNode) HasId() bool`

HasId returns a boolean if a field has been set.

### GetLink

`func (o *ControllerWorkflooModelNode) GetLink() ControllerWorkflooModelLink`

GetLink returns the Link field if non-nil, zero value otherwise.

### GetLinkOk

`func (o *ControllerWorkflooModelNode) GetLinkOk() (*ControllerWorkflooModelLink, bool)`

GetLinkOk returns a tuple with the Link field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLink

`func (o *ControllerWorkflooModelNode) SetLink(v ControllerWorkflooModelLink)`

SetLink sets Link field to given value.

### HasLink

`func (o *ControllerWorkflooModelNode) HasLink() bool`

HasLink returns a boolean if a field has been set.

### GetModified

`func (o *ControllerWorkflooModelNode) GetModified() string`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *ControllerWorkflooModelNode) GetModifiedOk() (*string, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *ControllerWorkflooModelNode) SetModified(v string)`

SetModified sets Modified field to given value.

### HasModified

`func (o *ControllerWorkflooModelNode) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetName

`func (o *ControllerWorkflooModelNode) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ControllerWorkflooModelNode) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ControllerWorkflooModelNode) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ControllerWorkflooModelNode) HasName() bool`

HasName returns a boolean if a field has been set.

### GetRuleset

`func (o *ControllerWorkflooModelNode) GetRuleset() ControllerWorkflooModelRuleset`

GetRuleset returns the Ruleset field if non-nil, zero value otherwise.

### GetRulesetOk

`func (o *ControllerWorkflooModelNode) GetRulesetOk() (*ControllerWorkflooModelRuleset, bool)`

GetRulesetOk returns a tuple with the Ruleset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleset

`func (o *ControllerWorkflooModelNode) SetRuleset(v ControllerWorkflooModelRuleset)`

SetRuleset sets Ruleset field to given value.

### HasRuleset

`func (o *ControllerWorkflooModelNode) HasRuleset() bool`

HasRuleset returns a boolean if a field has been set.

### GetStatus

`func (o *ControllerWorkflooModelNode) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ControllerWorkflooModelNode) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ControllerWorkflooModelNode) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ControllerWorkflooModelNode) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *ControllerWorkflooModelNode) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ControllerWorkflooModelNode) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ControllerWorkflooModelNode) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ControllerWorkflooModelNode) HasType() bool`

HasType returns a boolean if a field has been set.

### GetVariables

`func (o *ControllerWorkflooModelNode) GetVariables() ControllerWorkflooModelVariables`

GetVariables returns the Variables field if non-nil, zero value otherwise.

### GetVariablesOk

`func (o *ControllerWorkflooModelNode) GetVariablesOk() (*ControllerWorkflooModelVariables, bool)`

GetVariablesOk returns a tuple with the Variables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariables

`func (o *ControllerWorkflooModelNode) SetVariables(v ControllerWorkflooModelVariables)`

SetVariables sets Variables field to given value.

### HasVariables

`func (o *ControllerWorkflooModelNode) HasVariables() bool`

HasVariables returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


