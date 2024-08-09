---
title: Variabili d'ambiente
description: Documentazione per le variabili d'ambiente utilizzate in Documenti.
---

## `GEMINI_API_KEY`

- **Scopo:** Memorizza la chiave API richiesta per l'autenticazione con l'API Gemini. Documenti utilizza questa chiave per interagire con i modelli linguistici di grandi dimensioni di Google e generare il contenuto della documentazione.
- **Come impostarla:**
    - **Linux/macOS:** Aggiungi la seguente riga al tuo file `.bashrc` o `.zshrc`, sostituendo `"YOUR_GEMINI_API_KEY"` con la tua chiave API effettiva:
        ```bash
        export GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
        ```
    - **Windows:**
        1. Cerca "Variabili d'ambiente" nel menu Start.
        2. Fai clic su "Modifica le variabili d'ambiente di sistema".
        3. Fai clic sul pulsante "Variabili d'ambiente".
        4. In "Variabili di sistema", fai clic su "Nuovo".
        5. Inserisci `GEMINI_API_KEY` come nome della variabile e la tua chiave API come valore della variabile.
        6. Fai clic su "OK" in tutte le finestre aperte.
- **Valore predefinito:** Nessuno. Questa variabile d'ambiente è obbligatoria e deve essere impostata affinché Documenti funzioni.






