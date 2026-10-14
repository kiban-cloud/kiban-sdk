# Kiban.Workfloo.Model.ControllerWorkflooModelFileResponseV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FileBase64** | **string** | FileBase64 es el archivo en base64; sólo viene en el 200. | [optional] 
**RetryAfter** | **int** | RetryAfter son los segundos a esperar antes de volver a pedirlo; sólo viene en el 202 (y también en el header Retry-After). | [optional] 
**Status** | **string** | Status es \&quot;PROCESSING\&quot;; sólo viene en el 202. | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

