---
title: Documentazione di classi e moduli
description: Documentazione per ogni classe e modulo nel codice base di Documenti.
---

## `main.py`

Questo modulo funge da punto di ingresso per l'applicazione Documenti. Orchestra l'intero processo di generazione della documentazione, gestendo l'input dell'utente, l'analisi del codice, l'elaborazione della documentazione e l'output finale.

### Funzioni

- `main()`:
    - Questa funzione è il punto di ingresso principale dello script.
    - Richiede all'utente la directory del codice base e il nome del progetto.
    - Gestisce il processo di selezione della lingua, consentendo agli utenti di scegliere più lingue per la documentazione.
    - Inizializza l'agente AI Gemini chiamando `init()` dal modulo `gemini_client`.
    - Invoca la funzione `handler()` dal modulo `documentation_processor` per generare la documentazione per ogni lingua selezionata.

## `code_parser.py`

Questo modulo è responsabile dell'analisi del codice base fornito dall'utente e dell'estrazione di informazioni rilevanti per la generazione della documentazione.

### Funzioni

- `generate_combined_file(codebase_directory)`:
    - Accetta il percorso della directory del codice base come input.
    - Definisce elenchi di directory e file da saltare durante l'analisi.
    - Attraversa la directory del codice base, leggendo ogni file idoneo e aggiungendo il suo contenuto a una stringa combinata.
    - Include i percorsi dei file come commenti nella stringa combinata per il contesto.
    - Controlla il conteggio delle righe dell'output combinato per assicurarsi che non superi il limite di input dell'AI Gemini.
    - Restituisce la stringa combinata del codice base.

## `documentation_processor.py`

Questo modulo gestisce l'interazione con il modello AI Gemini e la generazione dei file di documentazione.

### Funzioni

- `handler(project_name, language="")`:
    - Carica la struttura della documentazione da `documentation_sections.json`.
    - Crea la struttura della directory di output in base al nome del progetto e alle lingue selezionate.
    - Chiama `process_dict()` per generare la documentazione per ogni sezione.

- `process_item(key, value, language)`:
    - Elabora singole coppie chiave-valore da `documentation_sections.json`, che rappresentano sezioni e le loro descrizioni.
    - Costruisce una stringa di argomento della sezione combinando la chiave e il valore.
    - Richiede la documentazione dal modello AI Gemini utilizzando `request_documentation()` dal modulo `gemini_client`.
    - Restituisce il contenuto della documentazione generato.

- `process_dict(input_dict, process_func, output_dir, language)`:
    - Elabora ricorsivamente il dizionario da `documentation_sections.json`.
    - Per i dizionari annidati, crea sottodirectory nella struttura di output.
    - Per le coppie chiave-valore, chiama `process_func` fornito (in genere `process_item`) per generare il contenuto della documentazione.
    - Scrive il contenuto generato nei file Markdown nella directory di output appropriata.

## `gemini_client.py`

Questo modulo gestisce la comunicazione con il modello AI Gemini tramite l'API Gemini.

### Funzioni

- `init(codebase)`:
    - Inizializza l'agente AI Gemini.
    - Definisce il formato di output desiderato per l'IA utilizzando `define_format()`.
    - Invia l'intero codice base all'IA utilizzando `send_codebase()`.

- `define_format()`:
    - Invia un prompt al modello AI Gemini, istruendolo sul formato previsto per l'output della documentazione.
    - Ciò include la specifica della struttura Markdown, le variazioni di lingua e altre linee guida di formattazione.

- `send_codebase(codebase: str)`:
    - Invia la stringa combinata del codice base al modello AI Gemini.
    - Ciò fornisce all'IA il contesto dell'intero codice base per le successive richieste di documentazione.

- `request_documentation(documentation_subject: str, language: str)`:
    - Costruisce un prompt per il modello AI Gemini che richiede la documentazione per una sezione specifica.
    - Include la descrizione della sezione e la lingua desiderata per la documentazione.
    - Invia il prompt all'IA e restituisce il contenuto della documentazione generato.

## `language_processor.py`

Questo modulo gestisce la selezione della lingua e aggiorna di conseguenza la configurazione dell'interfaccia utente di Starlight.

### Funzioni

- `choose_languages()`:
    - Presenta un elenco di lingue disponibili all'utente.
    - Richiede all'utente di selezionare le lingue desiderate per la generazione della documentazione.
    - Convalida la selezione dell'utente.
    - Aggiorna la configurazione dell'interfaccia utente di Starlight utilizzando `update_config()`.
    - Restituisce un elenco di lingue selezionate.

- `update_config(selected_languages)`:
    - Modifica il file `astro.config.mjs` nella directory dell'interfaccia utente di Starlight.
    - Aggiunge le lingue selezionate alla configurazione delle impostazioni internazionali dell'interfaccia utente, abilitando il supporto multilingue.

## `fe_builder.py`

Questo modulo è responsabile della copia della directory dell'interfaccia utente di Starlight nella directory principale.

### Funzioni

- `copy_directory()`:
    - Copia l'intera directory dell'interfaccia utente di Starlight nella directory principale del progetto Documenti.
    - Ciò rende l'interfaccia utente accessibile per l'integrazione con la documentazione generata.

Queste descrizioni di classi e moduli forniscono una panoramica dettagliata del codice base di Documenti, delineando lo scopo, le funzionalità e le interazioni di ciascun componente. 
