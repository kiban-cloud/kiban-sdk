# Ejemplos: flujo completo de un integrador

El mismo programa en los 5 lenguajes: ejecuta un workfloo y lo **conduce hasta
que termina**. En cada vuelta consulta el estatus, ve en qué paso está parada la
ejecución y responde lo que ese paso pide. Al final imprime el detalle.

| Lenguaje | Archivo | Cómo correrlo |
|---|---|---|
| Node | [`node/flujo-completo.mjs`](node/flujo-completo.mjs) | `(cd packages/node && npm install && npx tsc)` y luego `node examples/node/flujo-completo.mjs` |
| Python | [`python/flujo_completo.py`](python/flujo_completo.py) | `pip install ./packages/python` y luego `python3 examples/python/flujo_completo.py` |
| Go | [`go/main.go`](go/main.go) | `cd examples/go && go run .` |
| Java | [`java/src/main/java/FlujoCompleto.java`](java/src/main/java/FlujoCompleto.java) | `(cd packages/java && mvn -q install -DskipTests)` y luego `cd examples/java && mvn -q compile exec:java` |
| C# | [`csharp/Program.cs`](csharp/Program.cs) | `cd examples/csharp && dotnet run` |

## Qué necesita

```bash
export KIBAN_API_KEY=...                  # tu API key
export KIBAN_WORKFLOO_DEFINITION_ID=...   # la definición a ejecutar
```

Opcionales:

| Variable | Default | Para qué |
|---|---|---|
| `KIBAN_ANSWERS` | `answers.example.json` | las respuestas del formulario y los documentos |
| `KIBAN_HOST` | `https://workfloo.kiban.com` | otro host |
| `KIBAN_SANDBOX` | `false` | `true` corre en modo sandbox |
| `KIBAN_SCENARIO_ID` | — | escenario de prueba; obligatorio en sandbox si la definición tiene conectores |

**Las respuestas** salen de [`answers.example.json`](answers.example.json):
`form` es `{campoId: valor}` y `documents` es `{documentoId: ruta}`, con la ruta
relativa al propio archivo. Copialo y ajustalo a tu definición. Si el
formulario pide un campo obligatorio que no está ahí, el programa se detiene y
lista los que faltan. **Los códigos** (NIP, código de verificación) y las
correcciones se piden por consola, porque los recibe una persona en ese
momento.

Sin sandbox cada corrida es una ejecución real y consume saldo.

## Cómo decide qué hacer

| El estatus dice | El ejemplo hace |
|---|---|
| `status` es `SUCCESS`, `ERROR` o `ABANDONED` | termina y muestra el detalle (`getWorkfloo`) |
| `currentNodeType` vacío, o termina en `_PROCESSING` / `_PROGRESS` | espera: el motor trabaja o le toca a otra persona |
| `FORM` | `executeWorkflooForm` con los campos de `form.formFieldSection[].fields[]` |
| `DOCUMENT` | `executeWorkflooDocument` con cada archivo en base64 (omite los que traen `sourcePdfNodeId`: los genera el workfloo) |
| `LINK` con `verification` | `validateWorkflooOtp`; ante un 400 muestra los intentos restantes y vuelve a pedir el código |
| `LINK` con `link.phase` `CREATE_ACCOUNT` | `sendWorkflooNip` |
| `LINK` con `link.phase` `VALIDATE` / `VALIDATE_2` | `validateWorkflooNip` |
| `LINK` con `link.widget` | avisa que la persona debe completar el widget |
| `VALIDATION` con `validation.state` `CORRECTION` | `submitWorkflooCorrection` con los campos que el revisor rechazó |
| `VALIDATION` en `REVIEW`, `TIMER` | espera |

Dos detalles que el código respeta y conviene copiar:

- **`verification` se revisa antes que la fase.** El código de un proveedor
  externo (p. ej. Truora) también se estaciona en `VALIDATE`, igual que el NIP,
  pero se valida con otro endpoint.
- **Cada paso se atiende una sola vez.** Entre que respondés y que el motor
  avanza, el estatus puede seguir mostrando el mismo paso por un momento. El
  ejemplo recuerda el último paso que atendió (nodo + tipo + fase + estado) y no
  lo repite; si el motor pasa por otro paso y regresa, sí lo vuelve a atender.

## En producción: webhook en lugar de consultar en bucle

Estos ejemplos consultan el estatus cada 3 segundos porque así se pueden correr
sin infraestructura. En una integración real, pasá `callbackUrl` (y
opcionalmente `callbackXApiKey`) al ejecutar: workfloo te avisa en cada cambio
con **el mismo objeto** que devuelve `getWorkflooStatus`, así que la tabla de
arriba aplica sin cambios. Los headers `x-kiban-event-id` y `x-kiban-event-type`
de cada entrega sirven para deduplicar y enrutar.

## Lo que no cubren

Son el flujo de quien **ejecuta** el workfloo. No muestran la decisión del
revisor interno (`reviewWorkflooValidation`), la descarga de archivos
(`getWorkflooFile`), los reenvíos (`resendWorkflooNip`, `fallbackWorkflooOtp`),
documentos de tipo *set* (que van como arreglo de objetos), el historial
paginado ni los pools. Cada operación tiene su ejemplo de uso en
`packages/<lenguaje>/docs/` (en C# esas docs sólo listan parámetros y tipos; el
uso está en [`packages/csharp/README.md`](../packages/csharp/README.md)).
