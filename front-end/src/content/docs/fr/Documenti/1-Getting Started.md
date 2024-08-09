---
title: Démarrage
description: Un guide sur la façon d'installer, de configurer et de démarrer rapidement avec Documenti.
---

## Prérequis

Avant de commencer avec Documenti, assurez-vous que les prérequis suivants sont installés sur votre système :

- **Python 3.7 ou supérieur :** Documenti est construit en utilisant Python, vous devez donc avoir une version compatible installée. 
- **Environnement virtuel (recommandé) :** Il est fortement recommandé d'utiliser un environnement virtuel pour gérer les dépendances du projet et éviter les conflits avec d'autres projets Python.
- **Éditeur de texte ou IDE :** Choisissez votre éditeur de texte ou IDE préféré pour travailler avec le code et les fichiers de configuration.

## Installation

Suivez ces étapes pour installer Documenti et ses dépendances :

1. **Cloner le référentiel :** Clonez le référentiel Documenti depuis GitHub sur votre machine locale en utilisant la commande suivante :

   ```bash
   git clone https://github.com/your-username/Documenti.git 
   ```

   Remplacez `your-username` par le nom d'utilisateur réel du référentiel.

2. **Créer un environnement virtuel :** Naviguez jusqu'au répertoire du référentiel cloné et créez un environnement virtuel en utilisant le module `venv` :

   ```bash
   cd Documenti
   python3 -m venv venv 
   ```

3. **Activer l'environnement virtuel :** Activez l'environnement virtuel en utilisant la commande appropriée pour votre système d'exploitation :

   - **Linux/macOS :**
     ```bash
     source venv/bin/activate
     ```
   - **Windows :**
     ```bash
     venv\Scripts\activate
     ```

4. **Installer les dépendances :** Installez les paquets requis listés dans le fichier `requirements.txt` en utilisant `pip` :

   ```bash
   pip install -r requirements.txt
   ```

## Configuration

1. **Obtenir une clé API Gemini :**
   - Inscrivez-vous pour un compte Google Cloud et activez l'API Gemini.
   - Créez une clé API et notez-la en lieu sûr.

2. **Définir la variable d'environnement :**
   - Définissez la variable d'environnement `GEMINI_API_KEY` sur votre clé API Gemini.
   - Vous pouvez le faire en ajoutant la ligne suivante à votre fichier `.bashrc` ou `.zshrc` (pour Linux/macOS) ou aux variables d'environnement de votre système (pour Windows) :

     ```bash
     export GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
     ```

   - Remplacez `"YOUR_GEMINI_API_KEY"` par votre clé API réelle.

## Démarrage rapide

1. **Préparer votre base de code :** Assurez-vous que votre base de code est organisée dans une structure de répertoire que Documenti peut analyser.
2. **Définir la structure de la documentation :** Modifiez le fichier `documentation_sections.json` pour définir la structure et les sections souhaitées pour votre documentation.
3. **Exécuter Documenti :** Exécutez le script `main.py` pour démarrer le processus de génération de documentation :

   ```bash
   python main.py
   ```

   - Vous serez invité à entrer le chemin vers le répertoire de votre base de code et le nom de votre projet.
   - Vous pouvez également choisir de générer la documentation en plusieurs langues.

4. **Accéder à la documentation :** Une fois le processus terminé, vous pouvez accéder à votre documentation générée dans le répertoire de sortie spécifié.

## Exemple d'utilisation basique

Voici un exemple basique de la façon d'utiliser Documenti :

1. **Définir un `documentation_sections.json` simple :**

   ```json
   {
     "Aperçu": "Un aperçu général du projet.",
     "Référence de l'API": "Documentation de l'API du projet."
   }
   ```

2. **Exécuter `main.py` :**

   ```bash
   python main.py
   ```

   - Entrez le chemin vers le répertoire de votre base de code.
   - Entrez le nom du projet (par exemple, "MonProjet").

3. **Sortie :** Documenti générera deux fichiers Markdown :
   - `1-Aperçu.md` contenant la documentation de l'aperçu.
   - `2-Référence de l'API.md` contenant la documentation de la référence de l'API.

Ces fichiers seront situés dans un répertoire nommé "MonProjet" dans le répertoire de sortie.




