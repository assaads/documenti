---
title: Documentation des classes et des modules
description: Documentation pour chaque classe et module dans le codebase de Documenti.
---

## `main.py`

Ce module sert de point d'entrée pour l'application Documenti. Il orchestre l'ensemble du processus de génération de la documentation, en gérant les entrées de l'utilisateur, l'analyse du code, le traitement de la documentation et la sortie finale.

### Fonctions

- `main()`:
    - Cette fonction est le point d'entrée principal du script.
    - Elle demande à l'utilisateur le répertoire de la base de code et le nom du projet.
    - Elle gère le processus de sélection de la langue, permettant aux utilisateurs de choisir plusieurs langues pour la documentation.
    - Elle initialise l'agent d'IA Gemini en appelant `init()` depuis le module `gemini_client`.
    - Elle appelle la fonction `handler()` depuis le module `documentation_processor` pour générer la documentation pour chaque langue sélectionnée.

## `code_parser.py`

Ce module est responsable de l'analyse de la base de code fournie par l'utilisateur et de l'extraction des informations pertinentes pour la génération de la documentation.

### Fonctions

- `generate_combined_file(codebase_directory)`:
    - Prend en entrée le chemin d'accès au répertoire de la base de code.
    - Définit des listes de répertoires et de fichiers à ignorer pendant l'analyse.
    - Parcourt le répertoire de la base de code, lit chaque fichier éligible et ajoute son contenu à une chaîne combinée.
    - Inclut les chemins d'accès aux fichiers en tant que commentaires dans la chaîne combinée pour le contexte.
    - Vérifie le nombre de lignes de la sortie combinée pour s'assurer qu'il ne dépasse pas la limite d'entrée de l'IA Gemini.
    - Renvoie la chaîne combinée de la base de code.

## `documentation_processor.py`

Ce module gère l'interaction avec le modèle d'IA Gemini et la génération des fichiers de documentation.

### Fonctions

- `handler(project_name, language="")`:
    - Charge la structure de la documentation à partir de `documentation_sections.json`.
    - Crée la structure du répertoire de sortie en fonction du nom du projet et des langues sélectionnées.
    - Appelle `process_dict()` pour générer la documentation pour chaque section.

- `process_item(key, value, language)`:
    - Traite les paires clé-valeur individuelles de `documentation_sections.json`, représentant les sections et leurs descriptions.
    - Construit une chaîne de sujet de section combinant la clé et la valeur.
    - Demande la documentation au modèle d'IA Gemini en utilisant `request_documentation()` depuis le module `gemini_client`.
    - Renvoie le contenu de la documentation générée.

- `process_dict(input_dict, process_func, output_dir, language)`:
    - Traite récursivement le dictionnaire de `documentation_sections.json`.
    - Pour les dictionnaires imbriqués, crée des sous-répertoires dans la structure de sortie.
    - Pour les paires clé-valeur, appelle la fonction `process_func` fournie (généralement `process_item`) pour générer le contenu de la documentation.
    - Écrit le contenu généré dans des fichiers Markdown dans le répertoire de sortie approprié.

## `gemini_client.py`

Ce module gère la communication avec le modèle d'IA Gemini via l'API Gemini.

### Fonctions

- `init(codebase)`:
    - Initialise l'agent d'IA Gemini.
    - Définit le format de sortie souhaité pour l'IA en utilisant `define_format()`.
    - Envoie l'ensemble de la base de code à l'IA en utilisant `send_codebase()`.

- `define_format()`:
    - Envoie une requête au modèle d'IA Gemini, lui indiquant le format attendu pour la sortie de la documentation.
    - Cela inclut la spécification de la structure Markdown, les variations de langue et d'autres directives de formatage.

- `send_codebase(codebase: str)`:
    - Envoie la chaîne combinée de la base de code au modèle d'IA Gemini.
    - Cela fournit à l'IA le contexte de l'ensemble de la base de code pour les requêtes de documentation ultérieures.

- `request_documentation(documentation_subject: str, language: str)`:
    - Construit une requête pour le modèle d'IA Gemini demandant la documentation pour une section spécifique.
    - Inclut la description de la section et la langue souhaitée pour la documentation.
    - Envoie la requête à l'IA et renvoie le contenu de la documentation généré.

## `language_processor.py`

Ce module gère la sélection de la langue et met à jour la configuration de l'interface utilisateur de Starlight en conséquence.

### Fonctions

- `choose_languages()`:
    - Présente une liste des langues disponibles à l'utilisateur.
    - Demande à l'utilisateur de sélectionner les langues souhaitées pour la génération de la documentation.
    - Valide la sélection de l'utilisateur.
    - Met à jour la configuration de l'interface utilisateur de Starlight en utilisant `update_config()`.
    - Renvoie une liste des langues sélectionnées.

- `update_config(selected_languages)`:
    - Modifie le fichier `astro.config.mjs` dans le répertoire de l'interface utilisateur de Starlight.
    - Ajoute les langues sélectionnées à la configuration des paramètres régionaux de l'interface utilisateur, permettant la prise en charge multilingue.

## `fe_builder.py`

Ce module est responsable de la copie du répertoire de l'interface utilisateur de Starlight dans le répertoire parent.

### Fonctions

- `copy_directory()`:
    - Copie l'intégralité du répertoire de l'interface utilisateur de Starlight dans le répertoire parent du projet Documenti.
    - Cela rend l'interface utilisateur accessible pour l'intégration avec la documentation générée.

Ces descriptions de classes et de modules fournissent un aperçu détaillé du codebase de Documenti, en décrivant le but, les fonctionnalités et les interactions de chaque composant. 
