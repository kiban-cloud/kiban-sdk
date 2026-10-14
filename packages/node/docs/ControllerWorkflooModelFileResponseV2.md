# ControllerWorkflooModelFileResponseV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileBase64** | **string** | FileBase64 es el archivo en base64; sólo viene en el 200. | [optional] [default to undefined]
**retryAfter** | **number** | RetryAfter son los segundos a esperar antes de volver a pedirlo; sólo viene en el 202 (y también en el header Retry-After). | [optional] [default to undefined]
**status** | **string** | Status es \&quot;PROCESSING\&quot;; sólo viene en el 202. | [optional] [default to undefined]

## Example

```typescript
import { ControllerWorkflooModelFileResponseV2 } from '@kiban/workfloo';

const instance: ControllerWorkflooModelFileResponseV2 = {
    fileBase64,
    retryAfter,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
