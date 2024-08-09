---
title: Guida alla risoluzione dei problemi
description: Soluzioni ai problemi comuni che si possono incontrare durante l'utilizzo di Documenti.
---

## Problemi con l'API Gemini

### Errori di autenticazione

- **Problema:** Si verificano errori relativi all'autenticazione quando Documenti tenta di connettersi all'API Gemini.
- **Possibili cause:**
    - Variabile d'ambiente `GEMINI_API_KEY` errata o mancante.
    - Chiave API non valida.
    - Problemi di connettività di rete che impediscono l'accesso all'API Gemini.
- **Soluzione:**
    1. **Verificare la chiave API:** Verificare di aver impostato correttamente la variabile d'ambiente `GEMINI_API_KEY` e che la chiave API sia valida. Puoi trovare la tua chiave API nella console di Google Cloud.
    2. **Controllare la connettività di rete:** Assicurarsi che la macchina disponga di una connessione Internet stabile e che possa accedere ai servizi di Google Cloud.

### Limitazione della velocità

- **Problema:** Si verificano ritardi o errori a causa della limitazione della velocità dell'API Gemini.
- **Possibili cause:**
    - Invio di troppe richieste all'API in un breve periodo di tempo.
    - Superamento della quota per l'API Gemini.
- **Soluzione:**
    1. **Ridurre la frequenza delle richieste:** Implementare meccanismi per controllare la velocità delle richieste inviate all'API Gemini. È possibile introdurre ritardi tra le richieste o utilizzare un sistema di accodamento per distribuire il carico di lavoro.
    2. **Aumentare la quota:** Se necessario, è possibile richiedere un aumento della quota per l'API Gemini tramite la console di Google Cloud.

## Errori di analisi del codice

### Problemi di lettura dei file

- **Problema:** Documenti non riesce a leggere i file dalla directory del codice base.
- **Possibili cause:**
    - Percorso della directory del codice base fornito errato.
    - Autorizzazioni dei file insufficienti.
    - Problemi di codifica dei file.
- **Soluzione:**
    1. **Verificare il percorso del codice base:** Assicurarsi che il percorso della directory del codice base sia accurato e che la directory esista.
    2. **Controllare le autorizzazioni dei file:** Assicurarsi che lo script Documenti disponga delle autorizzazioni di lettura per tutti i file nella directory del codice base.
    3. **Regolare la codifica dei file:** Se i file del codice base utilizzano una codifica diversa da `ISO-8859-1`, modificare il parametro `encoding` in `code_parser.py` per corrispondere alla codifica corretta.

### File o directory esclusi

- **Problema:** Alcuni file o directory non sono inclusi nel processo di generazione della documentazione.
- **Possibili cause:**
    - I file o le directory sono elencati negli elenchi `skip_dirs` o `skip_files` in `code_parser.py`.
- **Soluzione:**
    1. **Rivedere le esclusioni:** Controllare gli elenchi `skip_dirs` e `skip_files` in `code_parser.py` e rimuovere eventuali voci per file o directory che si desidera includere nella documentazione.

## Problemi di generazione dell'output

### Documentazione vuota o incompleta

- **Problema:** La documentazione generata è vuota o incompleta per alcune sezioni.
- **Possibili cause:**
    - Contesto insufficiente o descrizioni poco chiare nel file `documentation_sections.json`.
    - Errori o limitazioni nella capacità del modello AI Gemini di comprendere il codice.
- **Soluzione:**
    1. **Migliorare le descrizioni delle sezioni:** Fornire descrizioni più dettagliate e informative per le sezioni in `documentation_sections.json`.
    2. **Affina i prompt:** Sperimentare diverse strutture e formulazioni dei prompt per guidare il modello AI Gemini in modo più efficace.

## Problemi di integrazione con l'interfaccia utente di Starlight

### Errori di supporto linguistico

- **Problema:** L'interfaccia utente di Starlight non visualizza correttamente le lingue selezionate.
- **Possibili cause:**
    - Errori nella modifica dello script `language_processor.py` di `astro.config.mjs`.
- **Soluzione:**
    1. **Rivedere la configurazione delle impostazioni internazionali:** Controllare la sezione `locales` in `astro.config.mjs` e assicurarsi che le voci per le lingue selezionate siano corrette.

Questi suggerimenti per la risoluzione dei problemi affrontano i problemi comuni riscontrati durante l'utilizzo di Documenti. Se si riscontrano problemi non trattati qui, consultare la documentazione del progetto o richiedere assistenza alla community. 




