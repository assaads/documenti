---
title: File di configurazione
description: Documentazione per i file di configurazione utilizzati in Documenti.
---

## documentation_sections.json

Questo file JSON definisce la struttura e il contenuto della documentazione generata da Documenti. Definisce le sezioni da includere nella documentazione e fornisce descrizioni per ogni sezione.

### Struttura

Il file è costituito da coppie chiave-valore, dove:

- **Chiave:** Rappresenta il titolo della sezione.
- **Valore:** Rappresenta la descrizione della sezione. Questa descrizione serve come contesto per il modello AI Gemini durante la generazione del contenuto della documentazione.

### Esempio

```json
{
  "Panoramica": "Una panoramica di alto livello del progetto, incluso il suo scopo, le caratteristiche chiave e il pubblico di destinazione.",
  "Installazione": "Istruzioni passo passo su come installare il progetto, inclusi prerequisiti e dipendenze.",
  "Riferimento API": "Documentazione dettagliata dell'API pubblica, incluse classi, metodi e parametri, con particolare attenzione a esempi di utilizzo e frammenti di codice.",
  "Linee guida per il contributo": "Linee guida per contribuire al progetto, inclusi lo stile di codifica, la strategia di branching e il processo di pull request."
}
```

### Utilizzo

- **Modifica delle sezioni esistenti:** È possibile modificare le descrizioni delle sezioni esistenti per fornire più contesto o modificare l'obiettivo del contenuto generato.
- **Aggiunta di nuove sezioni:** Aggiungere nuove coppie chiave-valore per introdurre sezioni aggiuntive alla documentazione.
- **Riordino delle sezioni:** L'ordine delle chiavi nel file determina l'ordine delle sezioni nella documentazione generata.

## .env (Variabili d'ambiente)

Sebbene non sia esplicitamente un file di configurazione nel progetto, Documenti si basa sulle variabili d'ambiente per le informazioni sensibili.

### GEMINI_API_KEY

- **Scopo:** Memorizza la chiave API per l'autenticazione con l'API Gemini.
- **Utilizzo:** Imposta questa variabile d'ambiente sulla tua chiave API Gemini. Si consiglia vivamente di memorizzare questa chiave in modo sicuro ed evitare di codificarla nel codice sorgente.

### Esempio

```bash
export GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
```

## Configurazione dell'interfaccia utente di Starlight (astro.config.mjs)

Sebbene non sia direttamente modificato dall'utente, lo script `language_processor.py` aggiorna il file `astro.config.mjs` nella directory dell'interfaccia utente di Starlight per configurare il supporto della lingua.

### locales

- **Scopo:** Definisce le lingue supportate per il sito Web di documentazione.
- **Utilizzo:** Lo script `language_processor.py` aggiunge automaticamente voci per ogni lingua selezionata, specificando il codice della lingua e l'etichetta.

### Esempio

```javascript
locales: {
  // Documentazione in inglese in `src/content/docs/en/`
  'en': {
    label: 'English',
  },
  // Documentazione in francese in `src/content/docs/fr/`
  'fr': {
    label: 'Français',
    lang: 'fr',
  },
  // Documentazione in spagnolo in `src/content/docs/es/`
  'es': {
    label: 'Español',
    lang: 'es',
  },
},
```






