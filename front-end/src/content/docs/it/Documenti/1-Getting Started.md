---
title: Guida introduttiva
description: Una guida su come installare, configurare e iniziare rapidamente a usare Documenti.
---

## Prerequisiti

Prima di iniziare a usare Documenti, assicurati di avere i seguenti prerequisiti installati sul tuo sistema:

- **Python 3.7 o superiore:** Documenti è costruito usando Python, quindi è necessario avere una versione compatibile installata. 
- **Ambiente virtuale (consigliato):** È altamente consigliato utilizzare un ambiente virtuale per gestire le dipendenze del progetto ed evitare conflitti con altri progetti Python.
- **Editor di testo o IDE:** Scegli il tuo editor di testo o IDE preferito per lavorare con il codice e i file di configurazione.

## Installazione

Segui questi passaggi per installare Documenti e le sue dipendenze:

1. **Clona il repository:** Clona il repository Documenti da GitHub sulla tua macchina locale usando il seguente comando:

   ```bash
   git clone https://github.com/your-username/Documenti.git 
   ```

   Sostituisci `your-username` con il nome utente effettivo del repository.

2. **Crea un ambiente virtuale:** Passa alla directory del repository clonato e crea un ambiente virtuale usando il modulo `venv`:

   ```bash
   cd Documenti
   python3 -m venv venv 
   ```

3. **Attiva l'ambiente virtuale:** Attiva l'ambiente virtuale usando il comando appropriato per il tuo sistema operativo:

   - **Linux/macOS:**
     ```bash
     source venv/bin/activate
     ```
   - **Windows:**
     ```bash
     venv\Scripts\activate
     ```

4. **Installa le dipendenze:** Installa i pacchetti richiesti elencati nel file `requirements.txt` usando `pip`:

   ```bash
   pip install -r requirements.txt
   ```

## Configurazione

1. **Ottieni una chiave API Gemini:**
   - Registrati per un account Google Cloud e abilita l'API Gemini.
   - Crea una chiave API e annotala in modo sicuro.

2. **Imposta la variabile d'ambiente:**
   - Imposta la variabile d'ambiente `GEMINI_API_KEY` sulla tua chiave API Gemini.
   - Puoi farlo aggiungendo la seguente riga al tuo file `.bashrc` o `.zshrc` (per Linux/macOS) o alle variabili d'ambiente di sistema (per Windows):

     ```bash
     export GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
     ```

   - Sostituisci `"YOUR_GEMINI_API_KEY"` con la tua chiave API effettiva.

## Guida rapida

1. **Prepara la tua base di codice:** Assicurati che la tua base di codice sia organizzata in una struttura di directory che Documenti può analizzare.
2. **Definisci la struttura della documentazione:** Modifica il file `documentation_sections.json` per definire la struttura e le sezioni desiderate per la tua documentazione.
3. **Esegui Documenti:** Esegui lo script `main.py` per avviare il processo di generazione della documentazione:

   ```bash
   python main.py
   ```

   - Ti verrà richiesto di inserire il percorso della directory della tua base di codice e il nome del tuo progetto.
   - Puoi anche scegliere di generare la documentazione in più lingue.

4. **Accedi alla documentazione:** Una volta completato il processo, puoi accedere alla documentazione generata nella directory di output specificata.

## Esempio di utilizzo di base

Ecco un esempio di base su come usare Documenti:

1. **Definisci un semplice `documentation_sections.json`:**

   ```json
   {
     "Panoramica": "Una panoramica generale del progetto.",
     "Riferimento API": "Documentazione dell'API del progetto."
   }
   ```

2. **Esegui `main.py`:**

   ```bash
   python main.py
   ```

   - Inserisci il percorso della directory della tua base di codice.
   - Inserisci il nome del progetto (ad esempio, "MyProject").

3. **Output:** Documenti genererà due file Markdown:
   - `1-Panoramica.md` contenente la documentazione della panoramica.
   - `2-Riferimento API.md` contenente la documentazione del riferimento API.

Questi file saranno posizionati in una directory denominata "MyProject" all'interno della directory di output.


