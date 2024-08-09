---
title: Tutorial
description: Guide passo passo per aiutarti a capire come utilizzare le diverse funzionalità di Documenti.
---

## Tutorial 1: Generare una documentazione di base

Questo tutorial ti guiderà attraverso il processo di generazione di una documentazione di base per la tua codebase utilizzando Documenti.

### Fase 1: Prepara la tua codebase

Assicurati che la tua codebase sia organizzata in una struttura di directory che Documenti possa analizzare. Ciò significa avere i tuoi file di codice sorgente in una directory ben definita. Ad esempio:

```
il-mio-progetto/
  - src/
    - main.py
    - utils.py
  - tests/
    - test_main.py
```

### Fase 2: Definisci un semplice `documentation_sections.json`

Crea un file `documentation_sections.json` nella directory principale del progetto Documenti. Questo file definisce la struttura e le sezioni della tua documentazione. Per questo tutorial, creeremo una struttura semplice con due sezioni:

```json
{
  "Panoramica": "Una panoramica generale del progetto.",
  "Struttura del codice": "Descrizione dell'organizzazione del codice del progetto."
}
```

### Fase 3: Esegui Documenti

Apri il tuo terminale, vai alla directory del progetto Documenti ed esegui lo script `main.py`:

```bash
python main.py
```

Ti verrà chiesto di inserire le seguenti informazioni:

- **Percorso della directory della codebase:** Inserisci il percorso relativo alla directory contenente la tua codebase. Ad esempio, se la tua codebase è in `il-mio-progetto/` e stai eseguendo lo script dalla directory `Documenti`, dovresti inserire `../il-mio-progetto/`.
- **Nome del progetto:** Inserisci un nome per il tuo progetto. Questo verrà utilizzato per creare una directory per la tua documentazione. Ad esempio, potresti inserire "MyProject".

### Fase 4: Rivedi la documentazione generata

Una volta che lo script ha terminato l'esecuzione, troverai la documentazione generata nella directory di output. Per impostazione predefinita, questa è `../front-end/src/content/docs/`. All'interno di questa directory, ci sarà una cartella denominata in base al tuo progetto (ad esempio, "MyProject"). All'interno di questa cartella, troverai due file Markdown:

- `1-Panoramica.md`: Contiene la documentazione per la sezione "Panoramica".
- `2-Struttura del codice.md`: Contiene la documentazione per la sezione "Struttura del codice".

Puoi aprire questi file in un editor o visualizzatore Markdown per rivedere il contenuto generato.

## Tutorial 2: Generare documentazione multilingue

Questo tutorial ti mostrerà come generare documentazione in più lingue utilizzando Documenti.

### Fase 1: Scegliere le lingue

Quando esegui `main.py`, ti verrà chiesto: "Vuoi scegliere più lingue (la lingua predefinita è l'inglese)? (sì/no):". Inserisci "sì" per selezionare lingue aggiuntive.

Ti verrà quindi presentata una lista di lingue disponibili. Inserisci i numeri corrispondenti alle lingue desiderate, separati da virgole. Ad esempio, per generare documentazione in inglese, francese e spagnolo, dovresti inserire "1,4,2".

### Fase 2: Rivedi la documentazione generata

Documenti genererà cartelle di documentazione separate per ogni lingua selezionata. Ad esempio, se hai scelto inglese, francese e spagnolo, troverai tre cartelle nella directory di output:

- `en/MyProject`: Contiene la documentazione in inglese.
- `fr/MyProject`: Contiene la documentazione in francese.
- `es/MyProject`: Contiene la documentazione in spagnolo.

Ogni cartella di lingua conterrà gli stessi file Markdown del Tutorial 1, ma il contenuto verrà generato nella lingua corrispondente.

## Tutorial 3: Personalizzare la struttura della documentazione

Questo tutorial dimostrerà come personalizzare la struttura e il contenuto della tua documentazione modificando il file `documentation_sections.json`.

### Fase 1: Aggiungere o modificare sezioni

Puoi aggiungere nuove sezioni o modificare quelle esistenti nel file `documentation_sections.json`. Ad esempio, potresti aggiungere una sezione per "Istruzioni di installazione":

```json
{
  "Panoramica": "Una panoramica generale del progetto.",
  "Struttura del codice": "Descrizione dell'organizzazione del codice del progetto.",
  "Istruzioni di installazione": "Passaggi su come installare il progetto."
}
```

### Fase 2: Fornire descrizioni più dettagliate

Invece di un semplice titolo di sezione, puoi fornire una descrizione più dettagliata per ogni sezione nel file `documentation_sections.json`. Questa descrizione verrà utilizzata da Gemini AI come contesto durante la generazione del contenuto della documentazione. Ad esempio:

```json
{
  "Panoramica": "Una panoramica di alto livello del progetto, inclusi scopo, funzionalità chiave e pubblico di destinazione.",
  "Struttura del codice": "Una descrizione dettagliata dell'organizzazione del codice del progetto, inclusi moduli, classi e funzioni.",
  "Istruzioni di installazione": "Istruzioni passo passo su come installare il progetto, inclusi prerequisiti e dipendenze."
}
```

### Fase 3: Rivedi la documentazione generata

Dopo aver modificato il file `documentation_sections.json`, esegui nuovamente lo script `main.py`. Documenti genererà la documentazione in base alla struttura e alle descrizioni aggiornate.




