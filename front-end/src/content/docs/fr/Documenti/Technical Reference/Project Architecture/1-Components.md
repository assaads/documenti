---
title: Composants
description: Diagrammes d'architecture des principaux composants du système Documenti.
---

## Architecture de haut niveau

```
+---------------------+    +-----------------------+    +-----------------+
|  Entrée utilisateur  |--->|  Analyseur de code    |--->| Client Gemini  |
+---------------------+    +-----------------------+    +-----------------+
                       |                         ^      |                 |
                       |                         |      |                 |
                       v                         |      |                 v
                 +-----------------------+      |      +-----------------------+
                 | documentation_sections.json |------| Processeur de documentation |
                 +-----------------------+      |      +-----------------------+
                                               |      |                 |
                                               |      |                 v
                                               |      +-------------+--------+
                                               |                  | Sortie    |
                                               +------------------+ Markdown +
                                                                 |  Fichiers   |
                                                                 +-------------+
```

## Détails des composants

### Entrée utilisateur

- Fournit le chemin d'accès au répertoire de la base de code et le nom du projet.
- Choisit éventuellement plusieurs langues pour la génération de la documentation.

### Analyseur de code (`code_parser.py`)

- Lit la base de code à partir du répertoire fourni.
- Extrait les informations pertinentes, telles que les chemins d'accès aux fichiers, les définitions de fonctions et les commentaires.
- Combine les informations extraites dans une seule chaîne.

### `documentation_sections.json`

- Définit la structure et les sections de la documentation.
- Chaque paire clé-valeur représente un titre de section et une description.

### Client Gemini (`gemini_client.py`)

- Initialise une session de chat avec le modèle d'IA Gemini.
- Envoie des requêtes à Gemini en fonction des informations de la base de code et de la structure de la documentation.
- Reçoit les réponses de Gemini contenant le contenu de la documentation générée.

### Processeur de documentation (`documentation_processor.py`)

- Lit le fichier `documentation_sections.json`.
- Itère sur chaque section et envoie une requête au client Gemini.
- Traite les réponses de Gemini et écrit le contenu généré dans des fichiers Markdown.

### Fichiers Markdown de sortie

- La documentation générée est stockée dans des fichiers Markdown.
- Chaque section du fichier `documentation_sections.json` correspond à un fichier Markdown distinct.

## Dépendances externes

### Gemini AI

- Modèle linguistique de grande taille de Google, utilisé pour générer le contenu de la documentation.

### Interface utilisateur Starlight (facultatif)

- Une interface utilisateur de documentation qui peut être utilisée pour présenter les fichiers Markdown générés.

## Flux de données

1. L'utilisateur fournit des entrées au système.
2. L'analyseur de code analyse la base de code et extrait les informations pertinentes.
3. Le processeur de documentation lit le fichier `documentation_sections.json`.
4. Pour chaque section :
   - Le processeur de documentation envoie une requête au client Gemini.
   - Le client Gemini envoie une requête à Gemini AI.
   - Gemini AI génère le contenu de la documentation et le renvoie au client Gemini.
   - Le client Gemini renvoie la réponse au processeur de documentation.
   - Le processeur de documentation écrit le contenu dans un fichier Markdown.
5. Les fichiers Markdown générés sont enregistrés dans le répertoire de sortie.
6. (Facultatif) L'interface utilisateur Starlight peut être utilisée pour présenter le site Web de documentation.




