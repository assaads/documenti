---
title: Documentazione di funzioni e metodi
description: Documentazione per ogni funzione e metodo nel codice base di Documenti.
---

## `main.py`

### `main()`

- **Scopo:** Orchestra il processo di generazione della documentazione, gestendo l'input dell'utente, l'analisi del codice e l'elaborazione della documentazione.
- **Parametri:** Nessuno
- **Valore di ritorno:** Nessuno
- **Eccezioni:** 
    - `ValueError`: Se l'utente fornisce un input non valido per la selezione della lingua.

## `code_parser.py`

### `generate_combined_file(codebase_directory)`

- **Scopo:** Analizza la directory del codice base e combina il contenuto di tutti i file idonei in un'unica stringa.
- **Parametri:**
    - `codebase_directory`: (stringa) Il percorso della directory contenente il codice base.
- **Valore di ritorno:** (stringa) Il contenuto combinato di tutti i file analizzati, inclusi i percorsi dei file come commenti.
- **Eccezioni:**
    - `ValueError`: Se l'output combinato supera il limite di righe per l'input dell'AI Gemini.

## `documentation_processor.py`

### `handler(project_name, language="")`

- **Scopo:** Gestisce il processo di generazione della documentazione per ogni lingua selezionata.
- **Parametri:**
    - `project_name`: (stringa) Il nome del progetto.
    - `language`: (stringa, opzionale) Il codice della lingua per la documentazione. Il valore predefinito è "".
- **Valore di ritorno:** Nessuno
- **Eccezioni:** Nessuno

### `process_item(key, value, language)`

- **Scopo:** Elabora una singola sezione di documentazione, richiedendo il contenuto all'AI Gemini.
- **Parametri:**
    - `key`: (stringa) Il titolo della sezione.
    - `value`: (stringa) La descrizione della sezione.
    - `language`: (stringa) Il codice della lingua per la documentazione.
- **Valore di ritorno:** (stringa) Il contenuto della documentazione generato per la sezione.
- **Eccezioni:** Nessuno

### `process_dict(input_dict, process_func, output_dir, language)`

- **Scopo:** Elabora ricorsivamente il dizionario della struttura della documentazione, generando contenuti e scrivendo su file.
- **Parametri:**
    - `input_dict`: (dizionario) Il dizionario della struttura della documentazione.
    - `process_func`: (funzione) La funzione da chiamare per l'elaborazione delle singole sezioni (in genere `process_item`).
    - `output_dir`: (stringa) La directory di output per i file Markdown generati.
    - `language`: (stringa) Il codice della lingua per la documentazione.
- **Valore di ritorno:** Nessuno
- **Eccezioni:** Nessuno

## `gemini_client.py`

### `init(codebase)`

- **Scopo:** Inizializza l'agente AI Gemini e invia il codice base per il contesto.
- **Parametri:**
    - `codebase`: (stringa) La stringa combinata del codice base.
- **Valore di ritorno:** Nessuno
- **Eccezioni:** Nessuno

### `define_format()`

- **Scopo:** Definisce il formato di output per il modello AI Gemini.
- **Parametri:** Nessuno
- **Valore di ritorno:** (stringa) La risposta del modello AI.
- **Eccezioni:** Nessuno

### `send_codebase(codebase: str)`

- **Scopo:** Invia il codice base al modello AI Gemini per il contesto.
- **Parametri:**
    - `codebase`: (stringa) La stringa combinata del codice base.
- **Valore di ritorno:** (stringa) La risposta del modello AI.
- **Eccezioni:** Nessuno

### `request_documentation(documentation_subject: str, language: str)`

- **Scopo:** Richiede la documentazione per una sezione specifica dal modello AI Gemini.
- **Parametri:**
    - `documentation_subject`: (stringa) L'argomento della sezione, combinando titolo e descrizione.
    - `language`: (stringa) Il codice della lingua per la documentazione.
- **Valore di ritorno:** (stringa) Il contenuto della documentazione generato per la sezione.
- **Eccezioni:** Nessuno

## `language_processor.py`

### `choose_languages()`

- **Scopo:** Consente all'utente di selezionare più lingue per la generazione della documentazione.
- **Parametri:** Nessuno
- **Valore di ritorno:** (lista) Un elenco di lingue selezionate.
- **Eccezioni:**
    - `ValueError`: Se l'utente fornisce una selezione di lingua non valida.

### `update_config(selected_languages)`

- **Scopo:** Aggiorna la configurazione dell'interfaccia utente di Starlight per includere le lingue selezionate.
- **Parametri:**
    - `selected_languages`: (lista) L'elenco di lingue selezionate.
- **Valore di ritorno:** Nessuno
- **Eccezioni:** Nessuno

## `fe_builder.py`

### `copy_directory()`

- **Scopo:** Copia la directory dell'interfaccia utente di Starlight nella directory principale.
- **Parametri:** Nessuno
- **Valore di ritorno:** Nessuno
- **Eccezioni:** Nessuno






