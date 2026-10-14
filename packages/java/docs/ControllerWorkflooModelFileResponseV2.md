

# ControllerWorkflooModelFileResponseV2


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**fileBase64** | **String** | FileBase64 es el archivo en base64; sólo viene en el 200. |  [optional] |
|**retryAfter** | **Integer** | RetryAfter son los segundos a esperar antes de volver a pedirlo; sólo viene en el 202 (y también en el header Retry-After). |  [optional] |
|**status** | **String** | Status es \&quot;PROCESSING\&quot;; sólo viene en el 202. |  [optional] |



