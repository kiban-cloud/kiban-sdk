# DomainVaultModelVaultEditDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_renew** | **bool** |  | [optional] 
**name** | **str** |  | 
**type** | **str** |  | 
**value** | **str** |  | 
**value2** | **str** |  | [optional] 
**value3** | **str** |  | [optional] 
**value4** | **str** |  | [optional] 

## Example

```python
from kiban.link.models.domain_vault_model_vault_edit_dto import DomainVaultModelVaultEditDto

# TODO update the JSON string below
json = "{}"
# create an instance of DomainVaultModelVaultEditDto from a JSON string
domain_vault_model_vault_edit_dto_instance = DomainVaultModelVaultEditDto.from_json(json)
# print the JSON string representation of the object
print(DomainVaultModelVaultEditDto.to_json())

# convert the object into a dict
domain_vault_model_vault_edit_dto_dict = domain_vault_model_vault_edit_dto_instance.to_dict()
# create an instance of DomainVaultModelVaultEditDto from a dict
domain_vault_model_vault_edit_dto_from_dict = DomainVaultModelVaultEditDto.from_dict(domain_vault_model_vault_edit_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


