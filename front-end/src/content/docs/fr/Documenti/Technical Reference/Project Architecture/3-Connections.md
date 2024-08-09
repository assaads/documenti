---
title: Connexions
description: Diagrammes architecturaux illustrant les interactions entre les composants dans Documenti.
---

## Diagramme d'interaction des composants

```
+---------------------+
|  Entrée utilisateur  |
+---------------------+
       |
       | (Chemin du code base, Nom du projet, Choix de langue)
       v
+-----------------------+
|  Analyseur de code    |
+-----------------------+
       |
       | (Chaîne combinée du code base)
       v
+-----------------+    +-----------------------+
| Client Gemini  |<----| Processeur de documentation |
+-----------------+    +-----------------------+
       ^                |                       |
       |                |                       |
       | (Appels API)     |                       | (Requêtes de documentation)
       |                |                       |
       |                v                       v
       |          +-----------------------+    +-----------------+
       +----------| documentation_sections.json |--->| Gemini AI      |
                  +-----------------------+    +-----------------+
                                                   |
                                                   | (Contenu de la documentation généré)
                                                   v
                                             +-------------+
                                             | Sortie      |
                                             | Markdown    |
                                             |  Fichiers      |
                                             +-------------+
```

## Détails de l'interaction

1. **Entrée utilisateur :** L'utilisateur lance le processus de génération de documentation en fournissant des entrées au script `main.py`, notamment le chemin d'accès au répertoire de la base de code, le nom du projet et les choix de langue facultatifs.

2. **Analyse du code base :** L'`Analyseur de code` (`code_parser.py`) lit la base de code à partir du répertoire spécifié et extrait les informations pertinentes, en les combinant en une seule représentation sous forme de chaîne du code.

3. **Structure de la documentation :** Le `Processeur de documentation` (`documentation_processor.py`) lit le fichier `documentation_sections.json` pour déterminer la structure et les sections de la documentation.

4. **Requêtes de documentation :** Le `Processeur de documentation` itère sur les sections définies dans `documentation_sections.json` et envoie des requêtes au `Client Gemini` (`gemini_client.py`) pour chaque section.

5. **Interaction avec Gemini AI :** Le `Client Gemini` interagit avec le modèle d'`IA Gemini` via des appels API. Il envoie des requêtes contenant les informations de la base de code et les descriptions des sections, et reçoit des réponses contenant le contenu de la documentation généré.

6. **Traitement du contenu :** Le `Processeur de documentation` reçoit les réponses du `Client Gemini`, traite le contenu généré et l'écrit dans des fichiers Markdown distincts pour chaque section.

7. **Fichiers Markdown de sortie :** La sortie finale est un ensemble de fichiers Markdown contenant la documentation générée, organisée selon la structure définie dans `documentation_sections.json`.

## Flux de données

Les flèches du diagramme indiquent la direction du flux de données entre les composants :

- L'entrée utilisateur circule de l'utilisateur vers le script `main.py`.
- La chaîne du code base circule de l'`Analyseur de code` vers le `Client Gemini` et le `Processeur de documentation`.
- Les requêtes de documentation circulent du `Processeur de documentation` vers le `Client Gemini`.
- Les appels API circulent entre le `Client Gemini` et `l'IA Gemini`.
- Le contenu de la documentation généré circule de `l'IA Gemini` vers le `Client Gemini`.
- Les fichiers Markdown finaux sont écrits dans le répertoire de sortie.






