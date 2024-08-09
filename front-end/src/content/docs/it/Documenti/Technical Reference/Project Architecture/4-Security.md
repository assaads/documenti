---
title: Sicurezza
description: Diagrammi architettonici che evidenziano le misure di sicurezza in Documenti.
---

L'architettura attuale di Documenti, come generatore di documentazione standalone, non implementa intrinsecamente misure di sicurezza robuste come firewall, sistemi di autenticazione o crittografia. Tuttavia, quando si considera la sua integrazione con servizi esterni come Gemini AI e potenziali scenari di implementazione, entrano in gioco diverse considerazioni sulla sicurezza.

## Proteggere la chiave API Gemini

La chiave API Gemini è un'informazione di identificazione cruciale che concede l'accesso al modello AI Gemini. Proteggere questa chiave è fondamentale per prevenire l'accesso non autorizzato e potenziali abusi.

### Variabili d'ambiente e archiviazione sicura

```
+---------------------+
|     Input utente      |
+---------------------+
       |
       | (Percorso della codebase, Nome del progetto, Scelte della lingua)
       v
+-----------------------+     +-----------------------+
|  Parser del codice    |---->|  Processore di documentazione  |
+-----------------------+     +-----------------------+
                                       |
                                       | (Accede alla variabile d'ambiente GEMINI_API_KEY)
                                       v
                             +-----------------+    +-----------------+
                             | Client Gemini  |--->| Gemini AI      |
                             +-----------------+    +-----------------+
```

- **Variabili d'ambiente:** Memorizza la chiave API Gemini come variabile d'ambiente (`GEMINI_API_KEY`) invece di codificarla nel codice sorgente.
- **Archiviazione sicura:** Per le implementazioni di produzione, sfrutta i meccanismi di archiviazione sicura forniti dal tuo provider cloud o dal sistema operativo per memorizzare le variabili d'ambiente sensibili.

## Considerazioni per un'implementazione sicura

A seconda di come e dove viene implementato Documenti, potrebbero essere necessarie misure di sicurezza aggiuntive.

### Firewall e sicurezza di rete

- **Implementazione cloud:** Se implementato su una piattaforma cloud, utilizza le funzionalità del firewall della piattaforma per limitare l'accesso all'applicazione Documenti e alle sue risorse associate.
- **Implementazione on-premise:** Implementa firewall e segmentazione della rete per isolare Documenti da altri sistemi e limitare potenziali vettori di attacco.

### Autenticazione e autorizzazione

- **Controllo degli accessi degli utenti:** Se Documenti è esposto a più utenti, implementa meccanismi di autenticazione e autorizzazione per controllare l'accesso all'applicazione e alle sue funzionalità.
- **Controllo degli accessi basato sui ruoli (RBAC):** Considera l'utilizzo di RBAC per concedere diversi livelli di accesso agli utenti in base ai loro ruoli e responsabilità.

### Crittografia dei dati

- **Archiviazione della codebase:** Se la codebase contiene informazioni sensibili, esplora la crittografia della codebase a riposo o durante la trasmissione all'applicazione Documenti.
- **Archiviazione dell'output:** Considera la crittografia dei file di documentazione generati se contengono informazioni sensibili o riservate.

## Conclusione

Sebbene Documenti stesso non disponga di funzionalità di sicurezza integrate, è fondamentale affrontare le considerazioni sulla sicurezza relative alle chiavi API, agli ambienti di implementazione e alla protezione dei dati. Implementando misure di sicurezza appropriate, è possibile mitigare i rischi e garantire il funzionamento sicuro di Documenti.





