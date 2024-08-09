---
title: Flusso di dati
description: Diagrammi architettonici che illustrano il flusso di dati nel sistema Documenti.
---

## Diagramma di flusso di dati

```
+-----------+     +----------------+     +-----------------+     +--------------+     +-------------+
| Utente      |---->| Input codebase |---->| Parser codebase  |---->| Client Gemini |---->| Gemini AI   |
+-----------+     +----------------+     +-----------------+     +--------------+     +-------------+
                  (Percorso della   |     (Informazioni   |     (Prompt con    |     (Documentazione  |
                  directory del     |     estratte dal    |     codice e       |     generata)       |
                  codice base)      |     codice)         |     sezioni)      |     contenuto)       |
                                     |                       |                     |                     |
                                     v                       v                     v                     |
                                +-----------------+     +-----------------+     +-----------------+     |
                                | Definizioni      |---->| Costruzione     |---->| Elaborazione   |-----+
                                | delle sezioni    |     | dei prompt       |     | delle risposte  |
                                +-----------------+     +-----------------+     +-----------------+
                                     |                       |                     |
                                     v                       v                     v
                                +-----------------+     +-----------------+     +-------------+
                                |   Generazione    |---->| File Markdown   |---->| Sito web di    |
                                |   dell'output   |     |                 |     | documentazione |
                                +-----------------+     +-----------------+     +-------------+
```

## Ciclo di vita dei dati

1. **Input utente:** L'utente fornisce il percorso della directory del codice base come input.

2. **Input codebase:** Il sistema acquisisce il percorso della directory del codice base come input.

3. **Parser codebase:** Il `Parser codebase` elabora il codice base ed estrae informazioni rilevanti come funzioni, classi, commenti, ecc.

4. **Definizioni delle sezioni:** Il file `documentation_sections.json` definisce la struttura e il contenuto desiderati della documentazione.

5. **Costruzione dei prompt:** Per ogni sezione, il sistema costruisce un prompt contenente le informazioni sul codice estratte e la descrizione della sezione.

6. **Client Gemini:** Il `Client Gemini` invia il prompt costruito al modello AI Gemini.

7. **Gemini AI:** Il modello AI Gemini elabora il prompt e genera il contenuto della documentazione per il codice e la sezione dati.

8. **Elaborazione delle risposte:** Il `Client Gemini` riceve il contenuto generato da Gemini e lo restituisce al sistema.

9. **Generazione dell'output:** Il sistema formatta il contenuto ricevuto in file Markdown per ogni sezione.

10. **File Markdown:** La documentazione generata viene archiviata come file Markdown.

11. **Sito web di documentazione (opzionale):** I file Markdown possono essere utilizzati per creare un sito web di documentazione utilizzando uno strumento come Starlight UI.

## Trasformazioni dei dati

- **Codebase a informazioni estratte:** Il `Parser codebase` trasforma la codebase grezza in dati strutturati contenenti elementi di codice rilevanti.
- **Informazioni estratte e definizioni delle sezioni a prompt:** Il sistema combina le informazioni sul codice estratte e le descrizioni delle sezioni per creare un prompt per Gemini AI.
- **Prompt a contenuto generato:** Il modello AI Gemini trasforma il prompt in contenuto di documentazione leggibile dall'uomo.
- **Contenuto generato a file Markdown:** Il sistema trasforma il contenuto generato in file Markdown formattati.

Il diagramma di flusso di dati e la descrizione del ciclo di vita illustrano come i dati vengono acquisiti, elaborati, trasformati e infine presentati come documentazione nel sistema Documenti. 






