---
title: Concetti
description: Concetti chiave, architettura e principi di progettazione del progetto Documenti.
---

## Concetti chiave

Documenti è costruito attorno all'idea di automatizzare la documentazione del codice utilizzando la potenza dei modelli linguistici di grandi dimensioni (LLM). Mira a semplificare e snellire il processo di generazione di documentazione completa per progetti software.

### Documentazione basata sull'intelligenza artificiale

- **Sfruttare gli LLM:** Documenti utilizza Gemini AI di Google, un potente LLM, per comprendere il codice e generare documentazione leggibile dall'uomo.
- **Prompt engineering:** Il cuore della funzionalità di Documenti risiede nella costruzione di prompt efficaci che forniscono all'LLM il contesto e le istruzioni necessarie per generare documentazione pertinente.

### Struttura personalizzabile

- **Flessibilità:** Documenti consente agli utenti di definire la struttura e il contenuto della loro documentazione tramite un file di configurazione `documentation_sections.json`.
- **Output personalizzato:** Questa flessibilità consente agli utenti di generare documentazione in linea con le specifiche esigenze e preferenze del progetto.

### Supporto multilingue

- **Accessibilità:** Documenti supporta la generazione di documentazione in più lingue, rendendola accessibile a un pubblico più ampio.
- **Configurazione delle impostazioni internazionali:** Il modulo `language_processor.py` gestisce la selezione della lingua e aggiorna la configurazione dell'interfaccia utente di Starlight per supportare le lingue scelte.

## Architettura

Documenti segue un'architettura modulare, con componenti distinti responsabili di compiti specifici:

- **Parser del codice base:** Estrae le informazioni rilevanti dal codice base.
- **Processore di documentazione:** Gestisce la comunicazione con il modello AI Gemini e genera il contenuto della documentazione.
- **Client Gemini:** Gestisce le interazioni con l'API Gemini.
- **Processore della lingua:** Facilita il supporto multilingue.
- **Integrazione dell'interfaccia utente di Starlight:** Consente di presentare la documentazione generata in un'interfaccia web intuitiva.

## Principi di progettazione

### Automazione

- **Ridurre lo sforzo manuale:** Documenti si sforza di automatizzare il più possibile il processo di documentazione, riducendo al minimo la necessità di scrittura manuale.
- **Efficienza:** Automatizzando le attività ripetitive, Documenti consente agli sviluppatori di concentrarsi su altri aspetti dei loro progetti.

### Semplicità

- **Interfaccia user-friendly:** Documenti fornisce un'interfaccia a riga di comando semplice, che lo rende facile da usare.
- **Configurazione chiara:** Il file `documentation_sections.json` offre un modo semplice e intuitivo per definire la struttura della documentazione.

### Estensibilità

- **Design modulare:** L'architettura modulare di Documenti consente future estensioni e integrazioni con altri strumenti o servizi.
- **Personalizzabilità:** La possibilità di personalizzare la struttura e il contenuto della documentazione offre flessibilità per varie esigenze del progetto.

## Conclusione

Documenti incarna i principi di automazione, semplicità ed estensibilità nel suo approccio alla documentazione del codice. Sfruttando le capacità degli LLM e fornendo un'interfaccia user-friendly, Documenti mira a consentire agli sviluppatori di creare documentazione di alta qualità con il minimo sforzo.




