---
title: Componenti
description: Diagrammi architettonici dei componenti principali del sistema Documenti.
---

## Architettura di alto livello

```
+---------------------+    +-----------------------+    +-----------------+
|     Input utente      |--->|  Parser del codice    |--->| Client Gemini  |
+---------------------+    +-----------------------+    +-----------------+
                       |                         ^      |                 |
                       |                         |      |                 |
                       v                         |      |                 v
                 +-----------------------+      |      +-----------------------+
                 | documentation_sections.json |------|  Processore di documentazione  |
                 +-----------------------+      |      +-----------------------+
                                               |      |                 |
                                               |      |                 v
                                               |      +-------------+--------+
                                               |                  | Output  |
                                               +------------------+ Markdown +
                                                                 |  File   |
                                                                 +-------------+
```

## Dettagli del componente

### Input utente

- Fornisce il percorso della directory del codice base e il nome del progetto.
- Facoltativamente, sceglie più lingue per la generazione della documentazione.

### Parser del codice base (`code_parser.py`)

- Legge il codice base dalla directory fornita.
- Estrae informazioni rilevanti, come percorsi di file, definizioni di funzioni e commenti.
- Combina le informazioni estratte in un'unica stringa.

### `documentation_sections.json`

- Definisce la struttura e le sezioni della documentazione.
- Ogni coppia chiave-valore rappresenta un titolo di sezione e una descrizione.

### Client Gemini (`gemini_client.py`)

- Inizializza una sessione di chat con il modello AI Gemini.
- Invia prompt a Gemini in base alle informazioni del codice base e alla struttura della documentazione.
- Riceve risposte da Gemini contenenti il contenuto della documentazione generata.

### Processore di documentazione (`documentation_processor.py`)

- Legge il file `documentation_sections.json`.
- Itera attraverso ogni sezione e invia una richiesta al Client Gemini.
- Elabora le risposte da Gemini e scrive il contenuto generato in file Markdown.

### File Markdown di output

- La documentazione generata viene archiviata in file Markdown.
- Ogni sezione nel file `documentation_sections.json` corrisponde a un file Markdown separato.

## Dipendenze esterne

### Gemini AI

- Modello linguistico di grandi dimensioni di Google, utilizzato per generare contenuto di documentazione.

### Interfaccia utente Starlight (opzionale)

- Un'interfaccia utente di documentazione che può essere utilizzata per presentare i file Markdown generati.

## Flusso di dati

1. L'utente fornisce input al sistema.
2. Il parser del codice base analizza il codice base ed estrae le informazioni rilevanti.
3. Il processore di documentazione legge il file `documentation_sections.json`.
4. Per ogni sezione:
   - Il processore di documentazione invia una richiesta al Client Gemini.
   - Il Client Gemini invia un prompt a Gemini AI.
   - Gemini AI genera contenuto di documentazione e lo invia di nuovo al Client Gemini.
   - Il Client Gemini restituisce la risposta al processore di documentazione.
   - Il processore di documentazione scrive il contenuto in un file Markdown.
5. I file Markdown generati vengono salvati nella directory di output.
6. (Opzionale) L'interfaccia utente di Starlight può essere utilizzata per presentare il sito Web di documentazione.





