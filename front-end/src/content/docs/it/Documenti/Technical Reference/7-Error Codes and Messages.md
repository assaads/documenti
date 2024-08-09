---
title: Codici di errore e messaggi
description: Spiegazione dei codici di errore e dei messaggi in Documenti.
---

## `ValueError`

### Selezione lingua non valida

- **Messaggio:** "Opzione non valida. Inserire 'sì'/'s' o 'no'/'n'."
- **Significato:** Questo errore si verifica quando l'utente fornisce un input non valido quando gli viene chiesto di scegliere più lingue durante il processo di generazione della documentazione.
- **Azione dell'utente:** Assicurarsi di inserire "sì" o "no" (o le rispettive abbreviazioni "s" o "n") quando richiesto per la selezione della lingua.

### Indice lingua non valido

- **Messaggio:** "Opzione non valida: {i}. Inserire numeri compresi tra 1 e {len(languages)}."
- **Significato:** Questo errore si verifica quando l'utente inserisce un numero non valido durante la selezione delle lingue dall'elenco visualizzato.
- **Azione dell'utente:** Rivedere l'elenco delle lingue disponibili e i relativi numeri. Inserire solo numeri validi separati da virgole quando richiesto per la selezione della lingua.

### Limite di righe del codice base superato

- **Messaggio:** "L'output combinato del codice base ha {num_lines} righe, il che supera il limite di 29000 righe."
- **Significato:** Questo errore indica che il contenuto combinato del codice base, dopo l'analisi, supera il limite massimo di input per il modello AI Gemini.
- **Azione dell'utente:** Prendere in considerazione la riduzione delle dimensioni del codice base escludendo file o directory non necessari durante il processo di analisi. È possibile modificare gli elenchi `skip_dirs` e `skip_files` in `code_parser.py` per escludere file o directory specifici. In alternativa, è possibile esplorare la suddivisione del codice base in blocchi più piccoli e generare la documentazione separatamente per ciascun blocco.

## Errori di lettura dei file

Sebbene non gestiti esplicitamente con codici di errore specifici, Documenti potrebbe riscontrare errori durante la lettura dei file del codice base.

### `Impossibile leggere il file {file_path}. Errore: {e}`

- **Significato:** Questo messaggio viene stampato sulla console quando `code_parser` incontra un errore durante il tentativo di lettura di un file dalla directory del codice base. Il messaggio di errore specifico (`{e}`) fornisce dettagli sul problema riscontrato.
- **Azione dell'utente:** 
    - **Controllare il percorso del file:** Verificare che il percorso del file sia corretto e che il file esista.
    - **Controllare le autorizzazioni del file:** Assicurarsi che lo script Documenti disponga di autorizzazioni sufficienti per leggere il file.
    - **Controllare la codifica del file:** Lo script tenta di leggere i file utilizzando la codifica `ISO-8859-1`. Se i file utilizzano una codifica diversa, potrebbe essere necessario modificare il parametro `encoding` in `code_parser.py`.




