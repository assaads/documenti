---
title: Riferimenti API
description: Documentazione di tutte le API nel codice base di Documenti.
---

Documenti, nella sua implementazione attuale, non espone alcuna API esterna. Funziona come uno strumento a riga di comando autonomo che elabora localmente le codebase e genera file di documentazione.

Pertanto, non ci sono endpoint API da documentare in questo contesto.

Tuttavia, Documenti si basa sull'API Gemini fornita da Google per la sua funzionalità principale di generazione del contenuto della documentazione.

## API Gemini

L'API Gemini è una potente API basata su cloud che consente agli sviluppatori di interagire con i modelli linguistici di grandi dimensioni di Google. Documenti utilizza l'API Gemini per inviare prompt contenenti informazioni sul codice e descrizioni delle sezioni, ricevendo risposte con il contenuto della documentazione generato.

### Autenticazione

- **Chiave API:** L'autenticazione all'API Gemini viene eseguita utilizzando una chiave API, che dovrebbe essere archiviata in modo sicuro come variabile d'ambiente (`GEMINI_API_KEY`).

### Formato della richiesta

Il formato specifico della richiesta per l'API Gemini varia a seconda del modello e dell'attività. In generale, le richieste in genere includono:

- **Modello:** Il nome del modello Gemini da utilizzare (ad esempio, `gemini-1.5-pro`).
- **Prompt:** Il prompt di testo contenente istruzioni e contesto per il modello. Nel caso di Documenti, questo include le informazioni sul codice base e le descrizioni delle sezioni.
- **Parametri:** È possibile specificare parametri aggiuntivi per controllare il comportamento del modello, come temperatura, top_p e max_output_tokens.

### Formato della risposta

La risposta dall'API Gemini in genere include:

- **Testo generato:** Il testo generato dal modello in base al prompt e ai parametri forniti.
- **Metadati:** Potrebbero essere inclusi metadati aggiuntivi, come il punteggio di confidenza del modello o eventuali flag di sicurezza attivati.

### Esempio di richiesta e risposta

Sebbene il formato esatto non sia mostrato nel codice base di Documenti, un esempio semplificato di una richiesta e risposta API Gemini potrebbe essere simile al seguente:

**Richiesta:**

```json
{
  "model": "gemini-1.5-pro",
  "prompt": "Genera la documentazione per la funzione `calcola_somma`:\n\n```python\ndef calcola_somma(a, b):\n  \"\"\"Calcola la somma di due numeri.\"\"\"\n  return a + b\n```",
  "temperature": 0.7,
  "max_output_tokens": 100
}
```

**Risposta:**

```json
{
  "generated_text": "## calcola_somma\n\nQuesta funzione calcola la somma di due numeri.\n\n**Parametri:**\n\n- `a`: Il primo numero.\n- `b`: Il secondo numero.\n\n**Restituisce:**\n\nLa somma di `a` e `b`.",
  "metadata": {
    "safety_flags": [],
    "confidence": 0.95
  }
}
```

Fare riferimento alla documentazione ufficiale dell'API Gemini per informazioni dettagliate sui formati di richiesta e risposta, sui modelli disponibili e sui parametri. 
