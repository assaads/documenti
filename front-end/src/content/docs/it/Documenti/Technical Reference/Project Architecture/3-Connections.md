---
title: Connessioni
description: Diagrammi architettonici che illustrano le interazioni tra i componenti in Documenti.
---

## Diagramma di interazione dei componenti

```
+---------------------+
|     Input utente      |
+---------------------+
       |
       | (Percorso della codebase, Nome del progetto, Scelte della lingua)
       v
+-----------------------+
|  Parser del codice    |
+-----------------------+
       |
       | (Stringa combinata della codebase)
       v
+-----------------+    +-----------------------+
| Client Gemini  |<----|  Processore di documentazione  |
+-----------------+    +-----------------------+
       ^                |                       |
       |                |                       |
       | (Chiamate API)    |                       | (Richieste di documentazione)
       |                |                       |
       |                v                       v
       |          +-----------------------+    +-----------------+
       +----------| documentation_sections.json |--->| Gemini AI      |
                  +-----------------------+    +-----------------+
                                                   |
                                                   | (Contenuto della documentazione generato)
                                                   v
                                             +-------------+
                                             | Output      |
                                             | Markdown    |
                                             |  File      |
                                             +-------------+
```

## Dettagli dell'interazione

1. **Input utente:** L'utente avvia il processo di generazione della documentazione fornendo input allo script `main.py`, inclusi il percorso della directory della codebase, il nome del progetto e le eventuali scelte di lingua.

2. **Analisi del codice base:** Il `Parser del codice` (`code_parser.py`) legge il codice base dalla directory specificata ed estrae le informazioni rilevanti, combinandole in un'unica rappresentazione in stringa del codice.

3. **Struttura della documentazione:** Il `Processore di documentazione` (`documentation_processor.py`) legge il file `documentation_sections.json` per determinare la struttura e le sezioni della documentazione.

4. **Richieste di documentazione:** Il `Processore di documentazione` scorre le sezioni definite in `documentation_sections.json` e invia richieste al `Client Gemini` (`gemini_client.py`) per ogni sezione.

5. **Interazione con Gemini AI:** Il `Client Gemini` interagisce con il modello di `Gemini AI` tramite chiamate API. Invia prompt contenenti le informazioni del codice base e le descrizioni delle sezioni e riceve risposte contenenti il contenuto della documentazione generato.

6. **Elaborazione del contenuto:** Il `Processore di documentazione` riceve le risposte dal `Client Gemini`, elabora il contenuto generato e lo scrive in file Markdown separati per ogni sezione.

7. **File Markdown di output:** L'output finale è un insieme di file Markdown contenenti la documentazione generata, organizzata in base alla struttura definita in `documentation_sections.json`.

## Flusso di dati

Le frecce nel diagramma indicano la direzione del flusso di dati tra i componenti:

- L'input utente passa dall'utente allo script `main.py`.
- La stringa del codice base passa dal `Parser del codice` al `Client Gemini` e al `Processore di documentazione`.
- Le richieste di documentazione passano dal `Processore di documentazione` al `Client Gemini`.
- Le chiamate API passano tra il `Client Gemini` e `Gemini AI`.
- Il contenuto della documentazione generato passa da `Gemini AI` al `Client Gemini`.
- I file Markdown finali vengono scritti nella directory di output.





