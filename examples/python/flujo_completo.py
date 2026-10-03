#!/usr/bin/env python3
"""Flujo completo de un integrador con el SDK de Python.

Ejecuta un workfloo y lo conduce hasta que termina: consulta el estatus, ve en
qué paso está parado y responde lo que ese paso pide (formulario, documentos,
NIP, código de verificación o corrección). Al final imprime el detalle.

    export KIBAN_API_KEY=...
    export KIBAN_WORKFLOO_DEFINITION_ID=...
    python3 examples/python/flujo_completo.py

Variables opcionales: KIBAN_ANSWERS (default examples/answers.example.json),
KIBAN_HOST (default https://workfloo.kiban.com), KIBAN_SANDBOX=true y
KIBAN_SCENARIO_ID (obligatorio en sandbox si la definición tiene conectores).

Requiere el SDK instalado:  pip install ./packages/python
"""
import base64
import json
import os
import sys
import time

from kiban.sdk.workfloo import (
    ApiClient,
    Configuration,
    ControllerWorkflooModelExecute,
    ControllerWorkflooModelNipValidateRequest,
    ControllerWorkflooModelOtpValidateRequest,
    WorkflooApi,
)
from kiban.sdk.workfloo.exceptions import ApiException

FINISHED = {"SUCCESS", "ERROR", "ABANDONED"}
NIP_PHASES = {"CREATE_ACCOUNT", "VALIDATE", "VALIDATE_2"}
POLL_SECONDS = 3

EXAMPLES_DIR = os.path.join(os.path.dirname(__file__), "..")


def env(name, default=None, required=False):
    value = os.environ.get(name, default)
    if required and not value:
        sys.exit(f"Falta la variable {name}.")
    return value


def ask(prompt):
    return input(f"    {prompt}: ").strip()


def load_answers(path):
    with open(path) as fh:
        answers = json.load(fh)
    base = os.path.dirname(os.path.abspath(path))
    answers["_base"] = base
    return answers


def form_values(status, answers):
    """Arma {campoId: valor} con los campos que pide el formulario."""
    values, missing = {}, []
    for section in status.form.form_field_section or []:
        for field in section.fields or []:
            if field.id in answers["form"]:
                values[field.id] = answers["form"][field.id]
            elif field.required:
                missing.append(f"{field.id} ({field.name})")
    if missing:
        sys.exit("Faltan respuestas para campos obligatorios: " + ", ".join(missing))
    return values


def document_values(status, answers):
    """Arma {documentoId: base64} con los archivos que pide el paso."""
    values, missing = {}, []
    for doc in status.document.document_field or []:
        if doc.source_pdf_node_id:
            continue  # lo genera el propio workfloo; no se sube
        path = answers["documents"].get(doc.id)
        if path is None:
            if doc.required:
                missing.append(f"{doc.id} ({doc.name})")
            continue
        with open(os.path.join(answers["_base"], path), "rb") as fh:
            values[doc.id] = base64.b64encode(fh.read()).decode()
    if missing:
        sys.exit("Faltan archivos para documentos obligatorios: " + ", ".join(missing))
    return values


def validate_otp(api, wf_id, verification, sandbox):
    """Pide el código hasta que el proveedor lo acepte o se acaben los intentos."""
    print(f"    Código enviado por {verification.channel} a {verification.masked_destination}")
    while True:
        token = ask("Código recibido")
        try:
            api.validate_workfloo_otp(wf_id, ControllerWorkflooModelOtpValidateRequest(token=token), sandbox=sandbox)
            return
        except ApiException as exc:
            # 400 = código incorrecto con intentos restantes; la ejecución sigue viva.
            if exc.status != 400:
                raise
            detail = json.loads(exc.body or "{}")
            print(f"    {detail.get('error')} Intentos restantes: {detail.get('remainingRetries')}")


def main():
    host = env("KIBAN_HOST", "https://workfloo.kiban.com")
    sandbox = True if env("KIBAN_SANDBOX", "false").lower() == "true" else None
    definition_id = env("KIBAN_WORKFLOO_DEFINITION_ID", required=True)
    answers = load_answers(env("KIBAN_ANSWERS", os.path.join(EXAMPLES_DIR, "answers.example.json")))

    config = Configuration(host=host)
    config.api_key["ApiKeyAuth"] = env("KIBAN_API_KEY", required=True)

    with ApiClient(config) as client:
        api = WorkflooApi(client)

        body = ControllerWorkflooModelExecute(id_workfloo_definition=definition_id)
        if env("KIBAN_SCENARIO_ID"):
            body.scenario_id = env("KIBAN_SCENARIO_ID")
        wf_id = api.execute_workfloo(body, sandbox=sandbox).id
        print(f"Ejecución {wf_id}")

        # Cada paso estacionado se atiende una vez; si el motor pasa por otro
        # paso y regresa, se vuelve a atender.
        last_step = None
        while True:
            status = api.get_workfloo_status(wf_id, sandbox=sandbox)
            if status.status in FINISHED:
                break

            node_type = status.current_node_type or ""
            if not node_type or node_type.endswith("_PROGRESS") or node_type.endswith("_PROCESSING"):
                time.sleep(POLL_SECONDS)  # el motor está trabajando
                continue

            phase = status.link.phase if status.link else ""
            state = status.validation.state if status.validation else ""
            step = f"{status.current_node_id}:{node_type}:{phase}:{state}"
            if step == last_step:
                time.sleep(POLL_SECONDS)
                continue
            last_step = step
            print(f"Paso: {status.current_node_name} ({node_type})")

            if node_type == "FORM":
                api.execute_workfloo_form(wf_id, form_values(status, answers), sandbox=sandbox)

            elif node_type == "DOCUMENT":
                api.execute_workfloo_document(wf_id, document_values(status, answers), sandbox=sandbox)

            # El código de un proveedor externo se reconoce por `verification`,
            # que va antes que la fase: también se estaciona en VALIDATE.
            elif node_type == "LINK" and status.verification:
                validate_otp(api, wf_id, status.verification, sandbox)

            elif node_type == "LINK" and phase == "CREATE_ACCOUNT":
                api.send_workfloo_nip(wf_id, sandbox=sandbox)
                print("    NIP enviado")

            elif node_type == "LINK" and phase in NIP_PHASES:
                nip = ask("NIP recibido")
                result = api.validate_workfloo_nip(
                    wf_id, ControllerWorkflooModelNipValidateRequest(nip=nip), sandbox=sandbox)
                print(f"    Fase: {result.phase}")

            elif node_type == "LINK" and status.link and status.link.widget:
                print(f"    La persona debe completar el widget: {status.link.widget}")

            elif node_type == "VALIDATION" and state == "CORRECTION":
                print(f"    El revisor pidió corregir: {status.validation.reviewer_note or ''}")
                corrected = {}
                for field in status.validation.fields:
                    corrected[field.field_id] = ask(f"{field.name or field.field_id} ({field.message})")
                api.submit_workfloo_correction(wf_id, corrected, sandbox=sandbox)

            elif node_type == "VALIDATION":
                print("    Esperando la revisión interna")

            elif node_type == "TIMER":
                print(f"    Espera programada hasta {status.timer.end_wait_date}")

            time.sleep(POLL_SECONDS)

        print(f"Terminó en {status.status}")
        detail = api.get_workfloo(wf_id, sandbox=sandbox)
        for node in detail.nodes or []:
            print(f"  - {node.name} ({node.type})")


if __name__ == "__main__":
    main()
