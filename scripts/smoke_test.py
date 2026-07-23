#!/usr/bin/env python3
"""Smoke test del SDK de Python contra SANDBOX: ejecutar → estatus → historial.

La API key NUNCA va en el código: se lee de la variable de entorno.

    export KIBAN_API_KEY=...                  # tu API key de sandbox
    export KIBAN_WORKFLOO_DEFINITION_ID=...   # una definición válida en sandbox
    python3 scripts/smoke_test.py

Requiere las dependencias del paquete generado:
    pip install pydantic urllib3 python-dateutil
"""
import os
import sys
import time

SANDBOX = "https://sandbox.workfloo.kiban.com"

api_key = os.environ.get("KIBAN_API_KEY")
definition_id = os.environ.get("KIBAN_WORKFLOO_DEFINITION_ID")
if not api_key or not definition_id:
    sys.exit("Falta KIBAN_API_KEY o KIBAN_WORKFLOO_DEFINITION_ID en el entorno.")

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "packages", "python"))

try:
    from kiban.sdk.workfloo import ApiClient, Configuration
    from kiban.sdk.workfloo.api.workfloo_api import WorkflooApi
    from kiban.sdk.workfloo.models.controller_workfloo_model_execute import (
        ControllerWorkflooModelExecute,
    )
except ModuleNotFoundError as exc:
    sys.exit(
        f"Falta una dependencia del SDK generado ({exc.name}). "
        "Instala: pip install pydantic urllib3 python-dateutil"
    )

config = Configuration(host=SANDBOX)
config.api_key["ApiKeyAuth"] = api_key

with ApiClient(config) as client:
    api = WorkflooApi(client)

    print("1/3 execute_workfloo …")
    created = api.execute_workfloo(
        ControllerWorkflooModelExecute(idWorkflooDefinition=definition_id)
    )
    print(f"    id={created.id} idUnykoo={created.id_unykoo}")
    if not created.id:
        sys.exit("La ejecución no devolvió id.")

    time.sleep(2)  # deja que el primer nodo arranque

    print("2/3 get_workfloo_status …")
    status = api.get_workfloo_status(created.id)
    print(f"    status={status.status} nodo={status.current_node_name!r} tipo={status.current_node_type!r}")

    print("3/3 list_workfloos (v1) …")
    page = api.list_workfloos(page=1, items_per_page=5)
    print(f"    currentPage={page.current_page} hasNextPage={page.has_next_page} items={len(page.items or [])}")

    print("    list_workfloos_v2 …")
    items = api.list_workfloos_v2(page=1, items_per_page=5)
    print(f"    v2 devolvió {len(items or [])} items (arreglo plano)")

print("\nSMOKE TEST OK")
