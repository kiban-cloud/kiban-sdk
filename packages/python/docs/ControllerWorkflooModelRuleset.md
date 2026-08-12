# ControllerWorkflooModelRuleset


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decision** | [**List[ControllerWorkflooModelRules]**](ControllerWorkflooModelRules.md) |  | [optional] 
**exit** | **str** |  | [optional] 
**labels** | **List[str]** |  | [optional] 

## Example

```python
from kiban.sdk.workfloo.models.controller_workfloo_model_ruleset import ControllerWorkflooModelRuleset

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerWorkflooModelRuleset from a JSON string
controller_workfloo_model_ruleset_instance = ControllerWorkflooModelRuleset.from_json(json)
# print the JSON string representation of the object
print(ControllerWorkflooModelRuleset.to_json())

# convert the object into a dict
controller_workfloo_model_ruleset_dict = controller_workfloo_model_ruleset_instance.to_dict()
# create an instance of ControllerWorkflooModelRuleset from a dict
controller_workfloo_model_ruleset_from_dict = ControllerWorkflooModelRuleset.from_dict(controller_workfloo_model_ruleset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


