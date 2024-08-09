---
title: Codes d'erreur et messages
description: Explication des codes d'erreur et des messages dans Documenti.
---

## `ValueError`

### Sélection de langue non valide

- **Message :** « Option non valide. Veuillez saisir 'oui'/'o' ou 'non'/'n'. »
- **Signification :** Cette erreur se produit lorsque l'utilisateur fournit une entrée non valide lorsqu'on lui demande de choisir plusieurs langues pendant le processus de génération de la documentation.
- **Action de l'utilisateur :** Assurez-vous de saisir « oui » ou « non » (ou leurs abréviations respectives « o » ou « n ») lorsque vous êtes invité à sélectionner une langue.

### Index de langue non valide

- **Message :** « Option non valide : {i}. Veuillez saisir des nombres entre 1 et {len(languages)}. »
- **Signification :** Cette erreur survient lorsque l'utilisateur saisit un nombre non valide lors de la sélection des langues dans la liste affichée.
- **Action de l'utilisateur :** Passez en revue la liste des langues disponibles et leurs numéros correspondants. Saisissez uniquement des nombres valides séparés par des virgules lorsque vous êtes invité à sélectionner une langue.

### Limite de lignes de la base de code dépassée

- **Message :** « La sortie combinée de la base de code comporte {num_lines} lignes, ce qui dépasse la limite de 29 000 lignes. »
- **Signification :** Cette erreur indique que le contenu combiné de votre base de code, après l'analyse, dépasse la limite d'entrée maximale du modèle d'IA Gemini.
- **Action de l'utilisateur :** Envisagez de réduire la taille de votre base de code en excluant les fichiers ou répertoires inutiles pendant le processus d'analyse. Vous pouvez modifier les listes `skip_dirs` et `skip_files` dans `code_parser.py` pour exclure des fichiers ou répertoires spécifiques. Vous pouvez également envisager de diviser votre base de code en plusieurs parties plus petites et de générer la documentation séparément pour chaque partie.

## Erreurs de lecture de fichiers

Bien qu'elles ne soient pas explicitement gérées avec des codes d'erreur spécifiques, Documenti peut rencontrer des erreurs lors de la lecture des fichiers de la base de code.

### `Impossible de lire le fichier {file_path}. Erreur : {e}`

- **Signification :** Ce message est affiché sur la console lorsque le `code_parser` rencontre une erreur en essayant de lire un fichier du répertoire de la base de code. Le message d'erreur spécifique (`{e}`) fournit des détails sur le problème rencontré.
- **Action de l'utilisateur :**
    - **Vérifier le chemin d'accès au fichier :** Vérifiez que le chemin d'accès au fichier est correct et que le fichier existe.
    - **Vérifier les autorisations du fichier :** Assurez-vous que le script Documenti dispose des autorisations suffisantes pour lire le fichier.
    - **Vérifier l'encodage du fichier :** Le script tente de lire les fichiers en utilisant l'encodage `ISO-8859-1`. Si vos fichiers utilisent un encodage différent, vous devrez peut-être modifier le paramètre `encoding` dans `code_parser.py`.






