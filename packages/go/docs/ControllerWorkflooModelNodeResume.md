# ControllerWorkflooModelNodeResume

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiData** | Pointer to [**ControllerWorkflooModelApiData**](ControllerWorkflooModelApiData.md) |  | [optional] 
**Created** | Pointer to **string** |  | [optional] 
**Data** | Pointer to [**[]ControllerWorkflooModelData**](ControllerWorkflooModelData.md) |  | [optional] 
**DecisionTree** | Pointer to [**[]ControllerWorkflooModelDecisionTree**](ControllerWorkflooModelDecisionTree.md) |  | [optional] 
**Detail** | Pointer to [**ControllerWorkflooModelNodeDetail**](ControllerWorkflooModelNodeDetail.md) |  | [optional] 
**Documents** | Pointer to [**map[string]ControllerWorkflooModelDocumentsResume**](ControllerWorkflooModelDocumentsResume.md) |  | [optional] 
**Files** | Pointer to [**[]ControllerWorkflooModelFile**](ControllerWorkflooModelFile.md) |  | [optional] 
**Form** | Pointer to [**ControllerWorkflooModelFormResume**](ControllerWorkflooModelFormResume.md) |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Label** | Pointer to [**ControllerWorkflooModelLabel**](ControllerWorkflooModelLabel.md) |  | [optional] 
**Link** | Pointer to [**ControllerWorkflooModelLinkResume**](ControllerWorkflooModelLinkResume.md) |  | [optional] 
**Modified** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Pdf** | Pointer to [**ControllerWorkflooModelPdf**](ControllerWorkflooModelPdf.md) |  | [optional] 
**Request** | Pointer to **interface{}** |  | [optional] 
**Response** | Pointer to **interface{}** |  | [optional] 
**Ruleset** | Pointer to [**ControllerWorkflooModelRuleset**](ControllerWorkflooModelRuleset.md) |  | [optional] 
**Timer** | Pointer to [**ControllerWorkflooModelTimer**](ControllerWorkflooModelTimer.md) |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Validation** | Pointer to [**ControllerWorkflooModelValidationResume**](ControllerWorkflooModelValidationResume.md) |  | [optional] 
**Variables** | Pointer to [**[]ControllerWorkflooModelVariable**](ControllerWorkflooModelVariable.md) |  | [optional] 

## Methods

### NewControllerWorkflooModelNodeResume

`func NewControllerWorkflooModelNodeResume() *ControllerWorkflooModelNodeResume`

NewControllerWorkflooModelNodeResume instantiates a new ControllerWorkflooModelNodeResume object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewControllerWorkflooModelNodeResumeWithDefaults

`func NewControllerWorkflooModelNodeResumeWithDefaults() *ControllerWorkflooModelNodeResume`

NewControllerWorkflooModelNodeResumeWithDefaults instantiates a new ControllerWorkflooModelNodeResume object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiData

`func (o *ControllerWorkflooModelNodeResume) GetApiData() ControllerWorkflooModelApiData`

GetApiData returns the ApiData field if non-nil, zero value otherwise.

### GetApiDataOk

`func (o *ControllerWorkflooModelNodeResume) GetApiDataOk() (*ControllerWorkflooModelApiData, bool)`

GetApiDataOk returns a tuple with the ApiData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiData

`func (o *ControllerWorkflooModelNodeResume) SetApiData(v ControllerWorkflooModelApiData)`

SetApiData sets ApiData field to given value.

### HasApiData

`func (o *ControllerWorkflooModelNodeResume) HasApiData() bool`

HasApiData returns a boolean if a field has been set.

### GetCreated

`func (o *ControllerWorkflooModelNodeResume) GetCreated() string`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ControllerWorkflooModelNodeResume) GetCreatedOk() (*string, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ControllerWorkflooModelNodeResume) SetCreated(v string)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *ControllerWorkflooModelNodeResume) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetData

`func (o *ControllerWorkflooModelNodeResume) GetData() []ControllerWorkflooModelData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ControllerWorkflooModelNodeResume) GetDataOk() (*[]ControllerWorkflooModelData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ControllerWorkflooModelNodeResume) SetData(v []ControllerWorkflooModelData)`

SetData sets Data field to given value.

### HasData

`func (o *ControllerWorkflooModelNodeResume) HasData() bool`

HasData returns a boolean if a field has been set.

### GetDecisionTree

`func (o *ControllerWorkflooModelNodeResume) GetDecisionTree() []ControllerWorkflooModelDecisionTree`

GetDecisionTree returns the DecisionTree field if non-nil, zero value otherwise.

### GetDecisionTreeOk

`func (o *ControllerWorkflooModelNodeResume) GetDecisionTreeOk() (*[]ControllerWorkflooModelDecisionTree, bool)`

GetDecisionTreeOk returns a tuple with the DecisionTree field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionTree

`func (o *ControllerWorkflooModelNodeResume) SetDecisionTree(v []ControllerWorkflooModelDecisionTree)`

SetDecisionTree sets DecisionTree field to given value.

### HasDecisionTree

`func (o *ControllerWorkflooModelNodeResume) HasDecisionTree() bool`

HasDecisionTree returns a boolean if a field has been set.

### GetDetail

`func (o *ControllerWorkflooModelNodeResume) GetDetail() ControllerWorkflooModelNodeDetail`

GetDetail returns the Detail field if non-nil, zero value otherwise.

### GetDetailOk

`func (o *ControllerWorkflooModelNodeResume) GetDetailOk() (*ControllerWorkflooModelNodeDetail, bool)`

GetDetailOk returns a tuple with the Detail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetail

`func (o *ControllerWorkflooModelNodeResume) SetDetail(v ControllerWorkflooModelNodeDetail)`

SetDetail sets Detail field to given value.

### HasDetail

`func (o *ControllerWorkflooModelNodeResume) HasDetail() bool`

HasDetail returns a boolean if a field has been set.

### GetDocuments

`func (o *ControllerWorkflooModelNodeResume) GetDocuments() map[string]ControllerWorkflooModelDocumentsResume`

GetDocuments returns the Documents field if non-nil, zero value otherwise.

### GetDocumentsOk

`func (o *ControllerWorkflooModelNodeResume) GetDocumentsOk() (*map[string]ControllerWorkflooModelDocumentsResume, bool)`

GetDocumentsOk returns a tuple with the Documents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocuments

`func (o *ControllerWorkflooModelNodeResume) SetDocuments(v map[string]ControllerWorkflooModelDocumentsResume)`

SetDocuments sets Documents field to given value.

### HasDocuments

`func (o *ControllerWorkflooModelNodeResume) HasDocuments() bool`

HasDocuments returns a boolean if a field has been set.

### GetFiles

`func (o *ControllerWorkflooModelNodeResume) GetFiles() []ControllerWorkflooModelFile`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *ControllerWorkflooModelNodeResume) GetFilesOk() (*[]ControllerWorkflooModelFile, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *ControllerWorkflooModelNodeResume) SetFiles(v []ControllerWorkflooModelFile)`

SetFiles sets Files field to given value.

### HasFiles

`func (o *ControllerWorkflooModelNodeResume) HasFiles() bool`

HasFiles returns a boolean if a field has been set.

### GetForm

`func (o *ControllerWorkflooModelNodeResume) GetForm() ControllerWorkflooModelFormResume`

GetForm returns the Form field if non-nil, zero value otherwise.

### GetFormOk

`func (o *ControllerWorkflooModelNodeResume) GetFormOk() (*ControllerWorkflooModelFormResume, bool)`

GetFormOk returns a tuple with the Form field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForm

`func (o *ControllerWorkflooModelNodeResume) SetForm(v ControllerWorkflooModelFormResume)`

SetForm sets Form field to given value.

### HasForm

`func (o *ControllerWorkflooModelNodeResume) HasForm() bool`

HasForm returns a boolean if a field has been set.

### GetId

`func (o *ControllerWorkflooModelNodeResume) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ControllerWorkflooModelNodeResume) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ControllerWorkflooModelNodeResume) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ControllerWorkflooModelNodeResume) HasId() bool`

HasId returns a boolean if a field has been set.

### GetLabel

`func (o *ControllerWorkflooModelNodeResume) GetLabel() ControllerWorkflooModelLabel`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *ControllerWorkflooModelNodeResume) GetLabelOk() (*ControllerWorkflooModelLabel, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *ControllerWorkflooModelNodeResume) SetLabel(v ControllerWorkflooModelLabel)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *ControllerWorkflooModelNodeResume) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetLink

`func (o *ControllerWorkflooModelNodeResume) GetLink() ControllerWorkflooModelLinkResume`

GetLink returns the Link field if non-nil, zero value otherwise.

### GetLinkOk

`func (o *ControllerWorkflooModelNodeResume) GetLinkOk() (*ControllerWorkflooModelLinkResume, bool)`

GetLinkOk returns a tuple with the Link field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLink

`func (o *ControllerWorkflooModelNodeResume) SetLink(v ControllerWorkflooModelLinkResume)`

SetLink sets Link field to given value.

### HasLink

`func (o *ControllerWorkflooModelNodeResume) HasLink() bool`

HasLink returns a boolean if a field has been set.

### GetModified

`func (o *ControllerWorkflooModelNodeResume) GetModified() string`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *ControllerWorkflooModelNodeResume) GetModifiedOk() (*string, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *ControllerWorkflooModelNodeResume) SetModified(v string)`

SetModified sets Modified field to given value.

### HasModified

`func (o *ControllerWorkflooModelNodeResume) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetName

`func (o *ControllerWorkflooModelNodeResume) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ControllerWorkflooModelNodeResume) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ControllerWorkflooModelNodeResume) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ControllerWorkflooModelNodeResume) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPdf

`func (o *ControllerWorkflooModelNodeResume) GetPdf() ControllerWorkflooModelPdf`

GetPdf returns the Pdf field if non-nil, zero value otherwise.

### GetPdfOk

`func (o *ControllerWorkflooModelNodeResume) GetPdfOk() (*ControllerWorkflooModelPdf, bool)`

GetPdfOk returns a tuple with the Pdf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPdf

`func (o *ControllerWorkflooModelNodeResume) SetPdf(v ControllerWorkflooModelPdf)`

SetPdf sets Pdf field to given value.

### HasPdf

`func (o *ControllerWorkflooModelNodeResume) HasPdf() bool`

HasPdf returns a boolean if a field has been set.

### GetRequest

`func (o *ControllerWorkflooModelNodeResume) GetRequest() interface{}`

GetRequest returns the Request field if non-nil, zero value otherwise.

### GetRequestOk

`func (o *ControllerWorkflooModelNodeResume) GetRequestOk() (*interface{}, bool)`

GetRequestOk returns a tuple with the Request field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequest

`func (o *ControllerWorkflooModelNodeResume) SetRequest(v interface{})`

SetRequest sets Request field to given value.

### HasRequest

`func (o *ControllerWorkflooModelNodeResume) HasRequest() bool`

HasRequest returns a boolean if a field has been set.

### SetRequestNil

`func (o *ControllerWorkflooModelNodeResume) SetRequestNil(b bool)`

 SetRequestNil sets the value for Request to be an explicit nil

### UnsetRequest
`func (o *ControllerWorkflooModelNodeResume) UnsetRequest()`

UnsetRequest ensures that no value is present for Request, not even an explicit nil
### GetResponse

`func (o *ControllerWorkflooModelNodeResume) GetResponse() interface{}`

GetResponse returns the Response field if non-nil, zero value otherwise.

### GetResponseOk

`func (o *ControllerWorkflooModelNodeResume) GetResponseOk() (*interface{}, bool)`

GetResponseOk returns a tuple with the Response field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponse

`func (o *ControllerWorkflooModelNodeResume) SetResponse(v interface{})`

SetResponse sets Response field to given value.

### HasResponse

`func (o *ControllerWorkflooModelNodeResume) HasResponse() bool`

HasResponse returns a boolean if a field has been set.

### SetResponseNil

`func (o *ControllerWorkflooModelNodeResume) SetResponseNil(b bool)`

 SetResponseNil sets the value for Response to be an explicit nil

### UnsetResponse
`func (o *ControllerWorkflooModelNodeResume) UnsetResponse()`

UnsetResponse ensures that no value is present for Response, not even an explicit nil
### GetRuleset

`func (o *ControllerWorkflooModelNodeResume) GetRuleset() ControllerWorkflooModelRuleset`

GetRuleset returns the Ruleset field if non-nil, zero value otherwise.

### GetRulesetOk

`func (o *ControllerWorkflooModelNodeResume) GetRulesetOk() (*ControllerWorkflooModelRuleset, bool)`

GetRulesetOk returns a tuple with the Ruleset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleset

`func (o *ControllerWorkflooModelNodeResume) SetRuleset(v ControllerWorkflooModelRuleset)`

SetRuleset sets Ruleset field to given value.

### HasRuleset

`func (o *ControllerWorkflooModelNodeResume) HasRuleset() bool`

HasRuleset returns a boolean if a field has been set.

### GetTimer

`func (o *ControllerWorkflooModelNodeResume) GetTimer() ControllerWorkflooModelTimer`

GetTimer returns the Timer field if non-nil, zero value otherwise.

### GetTimerOk

`func (o *ControllerWorkflooModelNodeResume) GetTimerOk() (*ControllerWorkflooModelTimer, bool)`

GetTimerOk returns a tuple with the Timer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimer

`func (o *ControllerWorkflooModelNodeResume) SetTimer(v ControllerWorkflooModelTimer)`

SetTimer sets Timer field to given value.

### HasTimer

`func (o *ControllerWorkflooModelNodeResume) HasTimer() bool`

HasTimer returns a boolean if a field has been set.

### GetType

`func (o *ControllerWorkflooModelNodeResume) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ControllerWorkflooModelNodeResume) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ControllerWorkflooModelNodeResume) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ControllerWorkflooModelNodeResume) HasType() bool`

HasType returns a boolean if a field has been set.

### GetValidation

`func (o *ControllerWorkflooModelNodeResume) GetValidation() ControllerWorkflooModelValidationResume`

GetValidation returns the Validation field if non-nil, zero value otherwise.

### GetValidationOk

`func (o *ControllerWorkflooModelNodeResume) GetValidationOk() (*ControllerWorkflooModelValidationResume, bool)`

GetValidationOk returns a tuple with the Validation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidation

`func (o *ControllerWorkflooModelNodeResume) SetValidation(v ControllerWorkflooModelValidationResume)`

SetValidation sets Validation field to given value.

### HasValidation

`func (o *ControllerWorkflooModelNodeResume) HasValidation() bool`

HasValidation returns a boolean if a field has been set.

### GetVariables

`func (o *ControllerWorkflooModelNodeResume) GetVariables() []ControllerWorkflooModelVariable`

GetVariables returns the Variables field if non-nil, zero value otherwise.

### GetVariablesOk

`func (o *ControllerWorkflooModelNodeResume) GetVariablesOk() (*[]ControllerWorkflooModelVariable, bool)`

GetVariablesOk returns a tuple with the Variables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariables

`func (o *ControllerWorkflooModelNodeResume) SetVariables(v []ControllerWorkflooModelVariable)`

SetVariables sets Variables field to given value.

### HasVariables

`func (o *ControllerWorkflooModelNodeResume) HasVariables() bool`

HasVariables returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


