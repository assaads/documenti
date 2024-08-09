---
title: Variables d'environnement
description: Documentation pour les variables d'environnement utilisées dans Documenti.
---

## `GEMINI_API_KEY`

- **Objectif :** Stocke la clé API requise pour l'authentification auprès de l'API Gemini. Documenti utilise cette clé pour interagir avec les modèles de langage de grande taille de Google et générer le contenu de la documentation.
- **Comment la définir :**
    - **Linux/macOS :** Ajoutez la ligne suivante à votre fichier `.bashrc` ou `.zshrc`, en remplaçant `"VOTRE_CLÉ_API_GEMINI"` par votre clé API réelle :
        ```bash
        export GEMINI_API_KEY="VOTRE_CLÉ_API_GEMINI"
        ```
    - **Windows :**
        1. Recherchez « Variables d'environnement » dans le menu Démarrer.
        2. Cliquez sur « Modifier les variables d'environnement du système ».
        3. Cliquez sur le bouton « Variables d'environnement ».
        4. Sous « Variables système », cliquez sur « Nouveau ».
        5. Saisissez `GEMINI_API_KEY` comme nom de variable et votre clé API comme valeur de variable.
        6. Cliquez sur « OK » dans toutes les fenêtres ouvertes.
- **Valeur par défaut :** Aucune. Cette variable d'environnement est obligatoire et doit être définie pour que Documenti fonctionne.






