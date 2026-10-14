# ControllerWorkflooModelValidateFieldResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkId** | **string** | CheckId identifica la validación ejecutada. | [optional] [default to undefined]
**errors** | **{ [key: string]: string; }** | Errors trae, por campo, el código de formato o el mensaje del servicio. | [optional] [default to undefined]
**filled** | **{ [key: string]: any; }** | Filled son los campos que el validador rellenó. | [optional] [default to undefined]
**missingInputs** | **Array&lt;string&gt;** | MissingInputs son los campos que faltan capturar para poder validar (status PENDING_INPUTS). | [optional] [default to undefined]
**_options** | **{ [key: string]: Array&lt;string&gt;; }** | Options son los campos con varios candidatos (p. ej. las colonias de un código postal): campo → candidatos. Al entregar el formulario sólo se acepta uno de ellos. | [optional] [default to undefined]
**reused** | **boolean** | Reused indica que se reusó una validación anterior con los mismos datos. | [optional] [default to undefined]
**status** | **string** | Status es VALID, INVALID, FORMAT_ERROR o PENDING_INPUTS. | [optional] [default to undefined]

## Example

```typescript
import { ControllerWorkflooModelValidateFieldResponse } from '@kiban/workfloo';

const instance: ControllerWorkflooModelValidateFieldResponse = {
    checkId,
    errors,
    filled,
    missingInputs,
    _options,
    reused,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
