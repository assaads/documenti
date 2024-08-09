---
title: Guide pratiche
description: Guide dettagliate su come eseguire attività specifiche con Documenti.
---

## Come personalizzare la struttura della documentazione

Documenti ti consente di personalizzare la struttura e il contenuto della documentazione generata per soddisfare le tue esigenze specifiche. Questa guida spiegherà come personalizzare la struttura della documentazione utilizzando il file `documentation_sections.json`.

### Capire il file `documentation_sections.json`

Il file `documentation_sections.json` è un file di configurazione JSON che definisce le sezioni e il loro ordine nella tua documentazione. Ogni chiave in questo file rappresenta un titolo di sezione e il valore corrispondente è una descrizione di quella sezione. Questa descrizione serve come contesto per Gemini AI durante la generazione del contenuto della documentazione.

### Modificare le sezioni esistenti

Puoi modificare la descrizione delle sezioni esistenti per fornire più contesto all'IA. Ad esempio, se hai una sezione intitolata "Riferimento API", puoi espandere la sua descrizione per specificare quali parti dell'API devono essere documentate:

```json
{
  "Riferimento API": "Documentazione dettagliata dell'API pubblica, incluse classi, metodi e parametri, con particolare attenzione a esempi di utilizzo e frammenti di codice."
}
```

### Aggiungere nuove sezioni

Per aggiungere una nuova sezione alla tua documentazione, aggiungi semplicemente una nuova coppia chiave-valore al file `documentation_sections.json`. Ad esempio, potresti aggiungere una sezione per "Linee guida per il contributo":

```json
{
  "Riferimento API": "Documentazione dettagliata dell'API pubblica, incluse classi, metodi e parametri, con particolare attenzione a esempi di utilizzo e frammenti di codice.",
  "Linee guida per il contributo": "Linee guida per contribuire al progetto, inclusi lo stile di codifica, la strategia di branching e il processo di pull request."
}
```

### Riordinare le sezioni

L'ordine delle chiavi nel file `documentation_sections.json` determina l'ordine delle sezioni nella tua documentazione generata. Puoi riorganizzare le chiavi per cambiare l'ordine delle sezioni.

### Generare documentazione con la struttura personalizzata

Dopo aver apportato modifiche al file `documentation_sections.json`, esegui nuovamente lo script `main.py`. Documenti genererà la documentazione in base alla struttura e alle descrizioni aggiornate.

## Come generare documentazione in più lingue

Documenti supporta la generazione di documentazione in più lingue, ampliando la sua accessibilità a un pubblico più ampio. Questa guida ti guiderà attraverso il processo di generazione di documentazione multilingue.

### Scegliere le lingue durante il runtime

Quando esegui lo script `main.py`, ti verrà chiesto: "Vuoi scegliere più lingue (la lingua predefinita è l'inglese)? (sì/no):". Inserisci "sì" per abilitare la generazione di documentazione multilingue.

Ti verrà quindi presentata una lista di lingue disponibili. Seleziona le lingue per le quali desideri generare la documentazione inserendo i loro numeri corrispondenti separati da virgole. Ad esempio, per generare documentazione in inglese, spagnolo e tedesco, dovresti inserire "1,2,3".

### Output specifico della lingua

Documenti creerà directory separate per ogni lingua selezionata all'interno della directory di output. Ogni directory di lingua conterrà gli stessi file Markdown della documentazione in inglese, ma il contenuto verrà generato nella lingua corrispondente.

### Aggiornare la configurazione dell'interfaccia utente di Starlight

Se utilizzi l'interfaccia utente di Starlight per presentare la tua documentazione, devi aggiornare la sua configurazione per includere le lingue selezionate. Lo script `language_processor.py` gestisce questo automaticamente modificando il file `astro.config.mjs` nella directory dell'interfaccia utente di Starlight.

### Rivedere la documentazione multilingue

Dopo che lo script è terminato, puoi rivedere la documentazione generata in ogni directory specifica della lingua.

## Come integrare Documenti con l'interfaccia utente di Starlight

Starlight è un'interfaccia utente di documentazione user-friendly che può essere utilizzata per presentare la documentazione generata da Documenti. Questa guida illustra i passaggi per integrare Documenti con Starlight.

### Copiare la directory dell'interfaccia utente di Starlight

Lo script `fe_builder.py` è responsabile della copia della directory dell'interfaccia utente di Starlight nella directory principale del progetto Documenti. Ciò garantisce che l'interfaccia utente sia accessibile per l'integrazione.

### Aggiornare la configurazione di Starlight

Lo script `language_processor.py` aggiorna automaticamente il file di configurazione di Starlight (`astro.config.mjs`) per includere le lingue selezionate per la generazione della documentazione.

### Costruire l'interfaccia utente di Starlight

Una volta generata la documentazione e aggiornata la configurazione di Starlight, puoi costruire l'interfaccia utente di Starlight utilizzando i seguenti comandi all'interno della directory dell'interfaccia utente di Starlight:

```bash
npm install
npm run build
```

### Pubblicare l'interfaccia utente di Starlight

Puoi quindi pubblicare l'interfaccia utente costruita utilizzando:

```bash
npm run preview
```

Questo avvierà un server di sviluppo locale in cui potrai accedere al tuo sito Web di documentazione.

### Personalizzare l'interfaccia utente di Starlight

Starlight offre varie opzioni di personalizzazione, come la tematizzazione e le regolazioni del layout. Fai riferimento alla documentazione di Starlight per maggiori dettagli su come personalizzare l'interfaccia utente.



