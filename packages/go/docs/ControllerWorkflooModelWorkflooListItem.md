# ControllerWorkflooModelWorkflooListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancelledAt** | Pointer to **string** |  | [optional] 
**CancelledBy** | Pointer to **string** |  | [optional] 
**CompanyName** | Pointer to **string** |  | [optional] 
**Created** | Pointer to **string** | Ejecución completa (content&#x3D;true): lo mismo que GET /api/v1/workfloo/{id}. | [optional] 
**CreatedAt** | Pointer to **string** | Resumen (content&#x3D;false). | [optional] 
**CreatedBy** | Pointer to **string** |  | [optional] 
**CurrentNodeName** | Pointer to **string** |  | [optional] 
**FirstName** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** | Comunes a las dos formas. | [optional] 
**IdUnykoo** | Pointer to **int32** |  | [optional] 
**IpOrigin** | Pointer to **string** |  | [optional] 
**Labels** | Pointer to **[]string** |  | [optional] 
**LastName1** | Pointer to **string** |  | [optional] 
**LastName2** | Pointer to **string** |  | [optional] 
**Modified** | Pointer to **string** |  | [optional] 
**ModifiedAt** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Nodes** | Pointer to [**[]ControllerWorkflooModelNodeResume**](ControllerWorkflooModelNodeResume.md) |  | [optional] 
**Origin** | Pointer to **string** |  | [optional] 
**RfcPf** | Pointer to **string** |  | [optional] 
**RfcPm** | Pointer to **string** |  | [optional] 
**SceneryId** | Pointer to **string** |  | [optional] 
**SceneryName** | Pointer to **string** |  | [optional] 
**SecondName** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**Steps** | Pointer to [**[]ControllerWorkflooModelNode**](ControllerWorkflooModelNode.md) |  | [optional] 

## Methods

### NewControllerWorkflooModelWorkflooListItem

`func NewControllerWorkflooModelWorkflooListItem() *ControllerWorkflooModelWorkflooListItem`

NewControllerWorkflooModelWorkflooListItem instantiates a new ControllerWorkflooModelWorkflooListItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewControllerWorkflooModelWorkflooListItemWithDefaults

`func NewControllerWorkflooModelWorkflooListItemWithDefaults() *ControllerWorkflooModelWorkflooListItem`

NewControllerWorkflooModelWorkflooListItemWithDefaults instantiates a new ControllerWorkflooModelWorkflooListItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancelledAt

`func (o *ControllerWorkflooModelWorkflooListItem) GetCancelledAt() string`

GetCancelledAt returns the CancelledAt field if non-nil, zero value otherwise.

### GetCancelledAtOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetCancelledAtOk() (*string, bool)`

GetCancelledAtOk returns a tuple with the CancelledAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelledAt

`func (o *ControllerWorkflooModelWorkflooListItem) SetCancelledAt(v string)`

SetCancelledAt sets CancelledAt field to given value.

### HasCancelledAt

`func (o *ControllerWorkflooModelWorkflooListItem) HasCancelledAt() bool`

HasCancelledAt returns a boolean if a field has been set.

### GetCancelledBy

`func (o *ControllerWorkflooModelWorkflooListItem) GetCancelledBy() string`

GetCancelledBy returns the CancelledBy field if non-nil, zero value otherwise.

### GetCancelledByOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetCancelledByOk() (*string, bool)`

GetCancelledByOk returns a tuple with the CancelledBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelledBy

`func (o *ControllerWorkflooModelWorkflooListItem) SetCancelledBy(v string)`

SetCancelledBy sets CancelledBy field to given value.

### HasCancelledBy

`func (o *ControllerWorkflooModelWorkflooListItem) HasCancelledBy() bool`

HasCancelledBy returns a boolean if a field has been set.

### GetCompanyName

`func (o *ControllerWorkflooModelWorkflooListItem) GetCompanyName() string`

GetCompanyName returns the CompanyName field if non-nil, zero value otherwise.

### GetCompanyNameOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetCompanyNameOk() (*string, bool)`

GetCompanyNameOk returns a tuple with the CompanyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyName

`func (o *ControllerWorkflooModelWorkflooListItem) SetCompanyName(v string)`

SetCompanyName sets CompanyName field to given value.

### HasCompanyName

`func (o *ControllerWorkflooModelWorkflooListItem) HasCompanyName() bool`

HasCompanyName returns a boolean if a field has been set.

### GetCreated

`func (o *ControllerWorkflooModelWorkflooListItem) GetCreated() string`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetCreatedOk() (*string, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ControllerWorkflooModelWorkflooListItem) SetCreated(v string)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *ControllerWorkflooModelWorkflooListItem) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetCreatedAt

`func (o *ControllerWorkflooModelWorkflooListItem) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ControllerWorkflooModelWorkflooListItem) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ControllerWorkflooModelWorkflooListItem) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetCreatedBy

`func (o *ControllerWorkflooModelWorkflooListItem) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *ControllerWorkflooModelWorkflooListItem) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *ControllerWorkflooModelWorkflooListItem) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### GetCurrentNodeName

`func (o *ControllerWorkflooModelWorkflooListItem) GetCurrentNodeName() string`

GetCurrentNodeName returns the CurrentNodeName field if non-nil, zero value otherwise.

### GetCurrentNodeNameOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetCurrentNodeNameOk() (*string, bool)`

GetCurrentNodeNameOk returns a tuple with the CurrentNodeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentNodeName

`func (o *ControllerWorkflooModelWorkflooListItem) SetCurrentNodeName(v string)`

SetCurrentNodeName sets CurrentNodeName field to given value.

### HasCurrentNodeName

`func (o *ControllerWorkflooModelWorkflooListItem) HasCurrentNodeName() bool`

HasCurrentNodeName returns a boolean if a field has been set.

### GetFirstName

`func (o *ControllerWorkflooModelWorkflooListItem) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *ControllerWorkflooModelWorkflooListItem) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *ControllerWorkflooModelWorkflooListItem) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetId

`func (o *ControllerWorkflooModelWorkflooListItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ControllerWorkflooModelWorkflooListItem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ControllerWorkflooModelWorkflooListItem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdUnykoo

`func (o *ControllerWorkflooModelWorkflooListItem) GetIdUnykoo() int32`

GetIdUnykoo returns the IdUnykoo field if non-nil, zero value otherwise.

### GetIdUnykooOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetIdUnykooOk() (*int32, bool)`

GetIdUnykooOk returns a tuple with the IdUnykoo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdUnykoo

`func (o *ControllerWorkflooModelWorkflooListItem) SetIdUnykoo(v int32)`

SetIdUnykoo sets IdUnykoo field to given value.

### HasIdUnykoo

`func (o *ControllerWorkflooModelWorkflooListItem) HasIdUnykoo() bool`

HasIdUnykoo returns a boolean if a field has been set.

### GetIpOrigin

`func (o *ControllerWorkflooModelWorkflooListItem) GetIpOrigin() string`

GetIpOrigin returns the IpOrigin field if non-nil, zero value otherwise.

### GetIpOriginOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetIpOriginOk() (*string, bool)`

GetIpOriginOk returns a tuple with the IpOrigin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpOrigin

`func (o *ControllerWorkflooModelWorkflooListItem) SetIpOrigin(v string)`

SetIpOrigin sets IpOrigin field to given value.

### HasIpOrigin

`func (o *ControllerWorkflooModelWorkflooListItem) HasIpOrigin() bool`

HasIpOrigin returns a boolean if a field has been set.

### GetLabels

`func (o *ControllerWorkflooModelWorkflooListItem) GetLabels() []string`

GetLabels returns the Labels field if non-nil, zero value otherwise.

### GetLabelsOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetLabelsOk() (*[]string, bool)`

GetLabelsOk returns a tuple with the Labels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabels

`func (o *ControllerWorkflooModelWorkflooListItem) SetLabels(v []string)`

SetLabels sets Labels field to given value.

### HasLabels

`func (o *ControllerWorkflooModelWorkflooListItem) HasLabels() bool`

HasLabels returns a boolean if a field has been set.

### SetLabelsNil

`func (o *ControllerWorkflooModelWorkflooListItem) SetLabelsNil(b bool)`

 SetLabelsNil sets the value for Labels to be an explicit nil

### UnsetLabels
`func (o *ControllerWorkflooModelWorkflooListItem) UnsetLabels()`

UnsetLabels ensures that no value is present for Labels, not even an explicit nil
### GetLastName1

`func (o *ControllerWorkflooModelWorkflooListItem) GetLastName1() string`

GetLastName1 returns the LastName1 field if non-nil, zero value otherwise.

### GetLastName1Ok

`func (o *ControllerWorkflooModelWorkflooListItem) GetLastName1Ok() (*string, bool)`

GetLastName1Ok returns a tuple with the LastName1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName1

`func (o *ControllerWorkflooModelWorkflooListItem) SetLastName1(v string)`

SetLastName1 sets LastName1 field to given value.

### HasLastName1

`func (o *ControllerWorkflooModelWorkflooListItem) HasLastName1() bool`

HasLastName1 returns a boolean if a field has been set.

### GetLastName2

`func (o *ControllerWorkflooModelWorkflooListItem) GetLastName2() string`

GetLastName2 returns the LastName2 field if non-nil, zero value otherwise.

### GetLastName2Ok

`func (o *ControllerWorkflooModelWorkflooListItem) GetLastName2Ok() (*string, bool)`

GetLastName2Ok returns a tuple with the LastName2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName2

`func (o *ControllerWorkflooModelWorkflooListItem) SetLastName2(v string)`

SetLastName2 sets LastName2 field to given value.

### HasLastName2

`func (o *ControllerWorkflooModelWorkflooListItem) HasLastName2() bool`

HasLastName2 returns a boolean if a field has been set.

### GetModified

`func (o *ControllerWorkflooModelWorkflooListItem) GetModified() string`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetModifiedOk() (*string, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *ControllerWorkflooModelWorkflooListItem) SetModified(v string)`

SetModified sets Modified field to given value.

### HasModified

`func (o *ControllerWorkflooModelWorkflooListItem) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetModifiedAt

`func (o *ControllerWorkflooModelWorkflooListItem) GetModifiedAt() string`

GetModifiedAt returns the ModifiedAt field if non-nil, zero value otherwise.

### GetModifiedAtOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetModifiedAtOk() (*string, bool)`

GetModifiedAtOk returns a tuple with the ModifiedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedAt

`func (o *ControllerWorkflooModelWorkflooListItem) SetModifiedAt(v string)`

SetModifiedAt sets ModifiedAt field to given value.

### HasModifiedAt

`func (o *ControllerWorkflooModelWorkflooListItem) HasModifiedAt() bool`

HasModifiedAt returns a boolean if a field has been set.

### GetName

`func (o *ControllerWorkflooModelWorkflooListItem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ControllerWorkflooModelWorkflooListItem) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ControllerWorkflooModelWorkflooListItem) HasName() bool`

HasName returns a boolean if a field has been set.

### GetNodes

`func (o *ControllerWorkflooModelWorkflooListItem) GetNodes() []ControllerWorkflooModelNodeResume`

GetNodes returns the Nodes field if non-nil, zero value otherwise.

### GetNodesOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetNodesOk() (*[]ControllerWorkflooModelNodeResume, bool)`

GetNodesOk returns a tuple with the Nodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNodes

`func (o *ControllerWorkflooModelWorkflooListItem) SetNodes(v []ControllerWorkflooModelNodeResume)`

SetNodes sets Nodes field to given value.

### HasNodes

`func (o *ControllerWorkflooModelWorkflooListItem) HasNodes() bool`

HasNodes returns a boolean if a field has been set.

### SetNodesNil

`func (o *ControllerWorkflooModelWorkflooListItem) SetNodesNil(b bool)`

 SetNodesNil sets the value for Nodes to be an explicit nil

### UnsetNodes
`func (o *ControllerWorkflooModelWorkflooListItem) UnsetNodes()`

UnsetNodes ensures that no value is present for Nodes, not even an explicit nil
### GetOrigin

`func (o *ControllerWorkflooModelWorkflooListItem) GetOrigin() string`

GetOrigin returns the Origin field if non-nil, zero value otherwise.

### GetOriginOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetOriginOk() (*string, bool)`

GetOriginOk returns a tuple with the Origin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin

`func (o *ControllerWorkflooModelWorkflooListItem) SetOrigin(v string)`

SetOrigin sets Origin field to given value.

### HasOrigin

`func (o *ControllerWorkflooModelWorkflooListItem) HasOrigin() bool`

HasOrigin returns a boolean if a field has been set.

### GetRfcPf

`func (o *ControllerWorkflooModelWorkflooListItem) GetRfcPf() string`

GetRfcPf returns the RfcPf field if non-nil, zero value otherwise.

### GetRfcPfOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetRfcPfOk() (*string, bool)`

GetRfcPfOk returns a tuple with the RfcPf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRfcPf

`func (o *ControllerWorkflooModelWorkflooListItem) SetRfcPf(v string)`

SetRfcPf sets RfcPf field to given value.

### HasRfcPf

`func (o *ControllerWorkflooModelWorkflooListItem) HasRfcPf() bool`

HasRfcPf returns a boolean if a field has been set.

### GetRfcPm

`func (o *ControllerWorkflooModelWorkflooListItem) GetRfcPm() string`

GetRfcPm returns the RfcPm field if non-nil, zero value otherwise.

### GetRfcPmOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetRfcPmOk() (*string, bool)`

GetRfcPmOk returns a tuple with the RfcPm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRfcPm

`func (o *ControllerWorkflooModelWorkflooListItem) SetRfcPm(v string)`

SetRfcPm sets RfcPm field to given value.

### HasRfcPm

`func (o *ControllerWorkflooModelWorkflooListItem) HasRfcPm() bool`

HasRfcPm returns a boolean if a field has been set.

### GetSceneryId

`func (o *ControllerWorkflooModelWorkflooListItem) GetSceneryId() string`

GetSceneryId returns the SceneryId field if non-nil, zero value otherwise.

### GetSceneryIdOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetSceneryIdOk() (*string, bool)`

GetSceneryIdOk returns a tuple with the SceneryId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSceneryId

`func (o *ControllerWorkflooModelWorkflooListItem) SetSceneryId(v string)`

SetSceneryId sets SceneryId field to given value.

### HasSceneryId

`func (o *ControllerWorkflooModelWorkflooListItem) HasSceneryId() bool`

HasSceneryId returns a boolean if a field has been set.

### GetSceneryName

`func (o *ControllerWorkflooModelWorkflooListItem) GetSceneryName() string`

GetSceneryName returns the SceneryName field if non-nil, zero value otherwise.

### GetSceneryNameOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetSceneryNameOk() (*string, bool)`

GetSceneryNameOk returns a tuple with the SceneryName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSceneryName

`func (o *ControllerWorkflooModelWorkflooListItem) SetSceneryName(v string)`

SetSceneryName sets SceneryName field to given value.

### HasSceneryName

`func (o *ControllerWorkflooModelWorkflooListItem) HasSceneryName() bool`

HasSceneryName returns a boolean if a field has been set.

### GetSecondName

`func (o *ControllerWorkflooModelWorkflooListItem) GetSecondName() string`

GetSecondName returns the SecondName field if non-nil, zero value otherwise.

### GetSecondNameOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetSecondNameOk() (*string, bool)`

GetSecondNameOk returns a tuple with the SecondName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecondName

`func (o *ControllerWorkflooModelWorkflooListItem) SetSecondName(v string)`

SetSecondName sets SecondName field to given value.

### HasSecondName

`func (o *ControllerWorkflooModelWorkflooListItem) HasSecondName() bool`

HasSecondName returns a boolean if a field has been set.

### GetStatus

`func (o *ControllerWorkflooModelWorkflooListItem) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ControllerWorkflooModelWorkflooListItem) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ControllerWorkflooModelWorkflooListItem) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetSteps

`func (o *ControllerWorkflooModelWorkflooListItem) GetSteps() []ControllerWorkflooModelNode`

GetSteps returns the Steps field if non-nil, zero value otherwise.

### GetStepsOk

`func (o *ControllerWorkflooModelWorkflooListItem) GetStepsOk() (*[]ControllerWorkflooModelNode, bool)`

GetStepsOk returns a tuple with the Steps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSteps

`func (o *ControllerWorkflooModelWorkflooListItem) SetSteps(v []ControllerWorkflooModelNode)`

SetSteps sets Steps field to given value.

### HasSteps

`func (o *ControllerWorkflooModelWorkflooListItem) HasSteps() bool`

HasSteps returns a boolean if a field has been set.

### SetStepsNil

`func (o *ControllerWorkflooModelWorkflooListItem) SetStepsNil(b bool)`

 SetStepsNil sets the value for Steps to be an explicit nil

### UnsetSteps
`func (o *ControllerWorkflooModelWorkflooListItem) UnsetSteps()`

UnsetSteps ensures that no value is present for Steps, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


