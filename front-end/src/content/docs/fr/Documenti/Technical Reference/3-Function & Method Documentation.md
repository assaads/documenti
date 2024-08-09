---
title: Documentation des fonctions et des méthodes
description: Documentation pour chaque fonction et méthode dans le codebase de Documenti.
---

## `main.py`

### `main()`

- **Objectif :** Orchestre le processus de génération de documentation, gère les entrées de l'utilisateur, l'analyse du code et le traitement de la documentation.
- **Paramètres :** Aucun
- **Valeur de retour :** Aucun
- **Exceptions :** 
    - `ValueError` : Si l'utilisateur fournit une entrée invalide pour la sélection de la langue.

## `code_parser.py`

### `generate_combined_file(codebase_directory)`

- **Objectif :** Analyse le répertoire de la base de code et combine le contenu de tous les fichiers éligibles en une seule chaîne.
- **Paramètres :**
    - `codebase_directory` : (chaîne) Le chemin d'accès au répertoire contenant la base de code.
- **Valeur de retour :** (chaîne) Le contenu combiné de tous les fichiers analysés, y compris les chemins d'accès aux fichiers en tant que commentaires.
- **Exceptions :**
    - `ValueError` : Si la sortie combinée dépasse la limite de lignes pour l'entrée de l'IA Gemini.

## `documentation_processor.py`

### `handler(project_name, language="")`

- **Objectif :** Gère le processus de génération de documentation pour chaque langue sélectionnée.
- **Paramètres :**
    - `project_name` : (chaîne) Le nom du projet.
    - `language` : (chaîne, facultatif) Le code de langue pour la documentation. La valeur par défaut est "".
- **Valeur de retour :** Aucun
- **Exceptions :** Aucun

### `process_item(key, value, language)`

- **Objectif :** Traite une seule section de documentation, en demandant le contenu à l'IA Gemini.
- **Paramètres :**
    - `key` : (chaîne) Le titre de la section.
    - `value` : (chaîne) La description de la section.
    - `language` : (chaîne) Le code de langue pour la documentation.
- **Valeur de retour :** (chaîne) Le contenu de la documentation généré pour la section.
- **Exceptions :** Aucun

### `process_dict(input_dict, process_func, output_dir, language)`

- **Objectif :** Traite récursivement le dictionnaire de structure de la documentation, génère le contenu et écrit dans les fichiers.
- **Paramètres :**
    - `input_dict` : (dictionnaire) Le dictionnaire de structure de la documentation.
    - `process_func` : (fonction) La fonction à appeler pour le traitement des sections individuelles (généralement `process_item`).
    - `output_dir` : (chaîne) Le répertoire de sortie pour les fichiers Markdown générés.
    - `language` : (chaîne) Le code de langue pour la documentation.
- **Valeur de retour :** Aucun
- **Exceptions :** Aucun

## `gemini_client.py`

### `init(codebase)`

- **Objectif :** Initialise l'agent d'IA Gemini et envoie la base de code pour le contexte.
- **Paramètres :**
    - `codebase` : (chaîne) La chaîne combinée de la base de code.
- **Valeur de retour :** Aucun
- **Exceptions :** Aucun

### `define_format()`

- **Objectif :** Définit le format de sortie pour le modèle d'IA Gemini.
- **Paramètres :** Aucun
- **Valeur de retour :** (chaîne) La réponse du modèle d'IA.
- **Exceptions :** Aucun

### `send_codebase(codebase: str)`

- **Objectif :** Envoie la base de code au modèle d'IA Gemini pour le contexte.
- **Paramètres :**
    - `codebase` : (chaîne) La chaîne combinée de la base de code.
- **Valeur de retour :** (chaîne) La réponse du modèle d'IA.
- **Exceptions :** Aucun

### `request_documentation(documentation_subject: str, language: str)`

- **Objectif :** Demande la documentation pour une section spécifique au modèle d'IA Gemini.
- **Paramètres :**
    - `documentation_subject` : (chaîne) Le sujet de la section, combinant le titre et la description.
    - `language` : (chaîne) Le code de langue pour la documentation.
- **Valeur de retour :** (chaîne) Le contenu de la documentation généré pour la section.
- **Exceptions :** Aucun

## `language_processor.py`

### `choose_languages()`

- **Objectif :** Permet à l'utilisateur de sélectionner plusieurs langues pour la génération de la documentation.
- **Paramètres :** Aucun
- **Valeur de retour :** (liste) Une liste des langues sélectionnées.
- **Exceptions :**
    - `ValueError` : Si l'utilisateur fournit une sélection de langue invalide.

### `update_config(selected_languages)`

- **Objectif :** Met à jour la configuration de l'interface utilisateur de Starlight pour inclure les langues sélectionnées.
- **Paramètres :**
    - `selected_languages` : (liste) La liste des langues sélectionnées.
- **Valeur de retour :** Aucun
- **Exceptions :** Aucun

## `fe_builder.py`

### `copy_directory()`

- **Objectif :** Copie le répertoire de l'interface utilisateur de Starlight dans le répertoire parent.
- **Paramètres :** Aucun
- **Valeur de retour :** Aucun
- **Exceptions :** Aucun






