#!/usr/bin/env python3
"""Smoke test del SDK de Python: ejecutar → estatus → historial.

Este SDK usa SIEMPRE producción (config/environments.json). El host y el nombre
de la var de API key salen de ahí. Por defecto corre en modo real (sandbox=false);
se puede forzar modo sandbox por corrida con KIBAN_SANDBOX=true.

La API key NUNCA va en el código. Se lee de KIBAN_API_KEY_PROD (o del genérico
KIBAN_API_KEY).

    export KIBAN_API_KEY_PROD=...             # o KIBAN_API_KEY genérico
    export KIBAN_WORKFLOO_DEFINITION_ID=...   # una definición válida
    export KIBAN_SCENARIO_ID=...              # requerido en modo sandbox si la
                                              # definición tiene nodos LINK
    export KIBAN_SANDBOX=true                 # opcional; por defecto false (real)
    python3 scripts/smoke_test.py

Requiere las dependencias del paquete generado:
    pip install pydantic urllib3 python-dateutil
"""
import json
import os
import sys
import time


def _bool_env(name):
    val = os.environ.get(name)
    return val.strip().lower() in ("1", "true", "yes") if val is not None else None


def resolve_environment():
    cfg_path = os.path.join(os.path.dirname(__file__), "..", "config", "environments.json")
    with open(cfg_path) as fh:
        cfg = json.load(fh)

    env = os.environ.get("KIBAN_ENV") or cfg["defaultEnv"]
    if env not in cfg["environments"]:
        sys.exit(f"Ambiente desconocido: {env!r}. Válidos: {list(cfg['environments'])}")

    spec = cfg["environments"][env]
    key = os.environ.get(spec["apiKeyVar"]) or os.environ.get("KIBAN_API_KEY")
    # sandbox: override por KIBAN_SANDBOX; si no, el default del ambiente.
    override = _bool_env("KIBAN_SANDBOX")
    sandbox = override if override is not None else bool(spec.get("sandbox"))
    return env, spec["host"], spec["apiKeyVar"], key, sandbox


env_name, host, key_var, api_key, sandbox_mode = resolve_environment()
# sandbox=True sólo cuando corre en modo sandbox; si no, se omite.
sandbox_flag = True if sandbox_mode else None
definition_id = os.environ.get("KIBAN_WORKFLOO_DEFINITION_ID")
scenario_id = os.environ.get("KIBAN_SCENARIO_ID")  # opcional; requerido si hay nodos LINK

print(f"Ambiente: {env_name} ({host}) — sandbox={sandbox_mode}")

if not api_key:
    sys.exit(f"Falta la API key: exporta {key_var} (o KIBAN_API_KEY).")
if not definition_id:
    sys.exit("Falta KIBAN_WORKFLOO_DEFINITION_ID en el entorno.")

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

config = Configuration(host=host)
config.api_key["ApiKeyAuth"] = api_key

with ApiClient(config) as client:
    api = WorkflooApi(client)

    print("1/3 execute_workfloo …")
    execute_body = ControllerWorkflooModelExecute(idWorkflooDefinition=definition_id)
    if scenario_id:
        execute_body.scenario_id = scenario_id
    created = api.execute_workfloo(execute_body, sandbox=sandbox_flag)
    print(f"    id={created.id} idUnykoo={created.id_unykoo}")
    if not created.id:
        sys.exit("La ejecución no devolvió id.")

    time.sleep(2)  # deja que el primer nodo arranque

    print("2/3 get_workfloo_status …")
    status = api.get_workfloo_status(created.id, sandbox=sandbox_flag)
    print(f"    status={status.status} nodo={status.current_node_name!r} tipo={status.current_node_type!r}")

    print("3/3 list_workfloos (v1) …")
    page = api.list_workfloos(page=1, items_per_page=5, sandbox=sandbox_flag)
    print(f"    currentPage={page.current_page} hasNextPage={page.has_next_page} items={len(page.items or [])}")

    print("    list_workfloos_v2 …")
    items = api.list_workfloos_v2(page=1, items_per_page=5, sandbox=sandbox_flag)
    print(f"    v2 devolvió {len(items or [])} items (arreglo plano)")

print("\nSMOKE TEST OK")
