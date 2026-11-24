# ControllerTestCaseModelTestCaseOutputMany


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**default** | **bool** | Default marca el caso que sandbox responde cuando no se indica testCaseId. | [optional] 
**http_code** | **int** | HttpCode es el código HTTP con el que sandbox responde este caso (200: la consulta sale bien). | [optional] 
**id** | **str** |  | [optional] 
**modified_at** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**origin** | **str** |  | [optional] 
**service** | **str** |  | [optional] 
**status** | **str** | Status es el status de la respuesta de sandbox con este caso; vacío equivale a SUCCESS. | [optional] 
**sub_service** | **str** |  | [optional] 

## Example

```python
from kiban.link.models.controller_test_case_model_test_case_output_many import ControllerTestCaseModelTestCaseOutputMany

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerTestCaseModelTestCaseOutputMany from a JSON string
controller_test_case_model_test_case_output_many_instance = ControllerTestCaseModelTestCaseOutputMany.from_json(json)
# print the JSON string representation of the object
print(ControllerTestCaseModelTestCaseOutputMany.to_json())

# convert the object into a dict
controller_test_case_model_test_case_output_many_dict = controller_test_case_model_test_case_output_many_instance.to_dict()
# create an instance of ControllerTestCaseModelTestCaseOutputMany from a dict
controller_test_case_model_test_case_output_many_from_dict = ControllerTestCaseModelTestCaseOutputMany.from_dict(controller_test_case_model_test_case_output_many_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


