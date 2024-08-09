---
title: FAQ
description: Domande frequenti su Documenti.
---

## Generale

### Cos'è Documenti?

Documenti è uno strumento a riga di comando che sfrutta la potenza di Gemini AI di Google per generare automaticamente la documentazione per la tua codebase. Mira a semplificare e snellire il processo di creazione di una documentazione completa e informativa per i progetti software.

### Come funziona Documenti?

Documenti analizza la tua codebase, estrae le informazioni rilevanti e costruisce prompt per il modello AI Gemini. Il modello AI genera quindi il contenuto della documentazione in base al codice e alle istruzioni forniti. Il contenuto generato viene formattato in file Markdown, che possono essere utilizzati per creare un sito Web di documentazione.

### Quali lingue sono supportate da Documenti?

Documenti può generare documentazione in più lingue. Puoi selezionare le lingue desiderate durante il processo di generazione della documentazione. La lingua predefinita è l'inglese.

### Quali sono i prerequisiti per utilizzare Documenti?

È necessario avere Python 3.7 o superiore installato sul sistema. Si consiglia inoltre di utilizzare un ambiente virtuale per gestire le dipendenze del progetto. Avrai anche bisogno di una chiave API Gemini da Google Cloud.

### Come si installa Documenti?

1. Clona il repository Documenti da GitHub.
2. Crea e attiva un ambiente virtuale.
3. Installa le dipendenze elencate in `requirements.txt`.
4. Imposta la variabile d'ambiente `GEMINI_API_KEY` sulla tua chiave API Gemini.

## Utilizzo

### Come personalizzare la struttura della documentazione?

È possibile personalizzare la struttura e il contenuto della documentazione modificando il file `documentation_sections.json`. Questo file definisce le sezioni da includere e le loro descrizioni.

### Posso generare documentazione per una parte specifica della mia codebase?

Attualmente, Documenti elabora l'intera codebase fornita come input. Puoi escludere file o directory specifici modificando gli elenchi `skip_dirs` e `skip_files` in `code_parser.py`.

### Come posso integrare Documenti con l'interfaccia utente di Starlight?

Documenti copia automaticamente la directory dell'interfaccia utente di Starlight nella directory principale. È quindi possibile creare e pubblicare l'interfaccia utente utilizzando i comandi forniti nella documentazione di Starlight.

## Risoluzione dei problemi

### Ricevo errori di autenticazione durante la connessione all'API Gemini.

- Assicurati di aver impostato correttamente la variabile d'ambiente `GEMINI_API_KEY`.
- Verifica che la tua chiave API sia valida e che non sia scaduta.
- Controlla la connettività di rete per assicurarti di poter accedere ai servizi Google Cloud.

### La documentazione generata è vuota o incompleta per alcune sezioni.

- Fornisci descrizioni più dettagliate e informative per le sezioni in `documentation_sections.json`.
- Sperimenta diverse strutture e formulazioni dei prompt per guidare il modello AI in modo più efficace.

### Documenti impiega molto tempo per generare la documentazione.

- Considera di escludere file o directory non necessari dal processo di analisi.
- Se la codebase è molto grande, prova a dividerla in blocchi più piccoli e genera la documentazione separatamente.

### Ho riscontrato un errore che non è elencato qui. Dove posso chiedere aiuto?

- Consulta la documentazione di Documenti per informazioni più complete sulla risoluzione dei problemi.
- Chiedi assistenza alla community di Documenti o invia un problema nel repository GitHub del progetto. 










