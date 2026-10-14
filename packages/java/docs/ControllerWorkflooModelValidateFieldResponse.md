

# ControllerWorkflooModelValidateFieldResponse


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**checkId** | **String** | CheckId identifica la validación ejecutada. |  [optional] |
|**errors** | **Map&lt;String, String&gt;** | Errors trae, por campo, el código de formato o el mensaje del servicio. |  [optional] |
|**filled** | **Map&lt;String, Object&gt;** | Filled son los campos que el validador rellenó. |  [optional] |
|**missingInputs** | **List&lt;String&gt;** | MissingInputs son los campos que faltan capturar para poder validar (status PENDING_INPUTS). |  [optional] |
|**options** | **Map&lt;String, List&lt;String&gt;&gt;** | Options son los campos con varios candidatos (p. ej. las colonias de un código postal): campo → candidatos. Al entregar el formulario sólo se acepta uno de ellos. |  [optional] |
|**reused** | **Boolean** | Reused indica que se reusó una validación anterior con los mismos datos. |  [optional] |
|**status** | **String** | Status es VALID, INVALID, FORMAT_ERROR o PENDING_INPUTS. |  [optional] |



