---
title: Flux de données
description: Diagrammes architecturaux illustrant le flux de données dans le système Documenti.
---

## Diagramme de flux de données

```
+-----------+     +----------------+     +-----------------+     +--------------+     +-------------+
| Utilisateur |---->| Entrée du code  |---->| Analyseur de code |---->| Client Gemini |---->| Gemini AI   |
+-----------+     +----------------+     +-----------------+     +--------------+     +-------------+
                  (Chemin du        |     (Informations    |     (Requêtes avec  |     (Contenu de    |
                  répertoire du    |      extraites du   |     code et sections)|    documentation   |
                  code base)       |      code)         |                     |      généré)       |
                                     |                       |                     |                     |
                                     v                       v                     v                     |
                                +-----------------+     +-----------------+     +-----------------+     |
                                | Définitions de   |---->| Construction de |---->| Traitement de  |-----+
                                |  sections        |     |  requêtes        |     |  réponses       |
                                +-----------------+     +-----------------+     +-----------------+
                                     |                       |                     |
                                     v                       v                     v
                                +-----------------+     +-----------------+     +-------------+
                                |  Génération de   |---->| Fichiers Markdown  |---->| Site Web de   |
                                |  sortie         |     |                 |     | documentation |
                                +-----------------+     +-----------------+     +-------------+
```

## Cycle de vie des données

1. **Entrée utilisateur :** L'utilisateur fournit le chemin d'accès au répertoire de la base de code en entrée.

2. **Entrée du code base :** Le système prend le chemin d'accès au répertoire de la base de code en entrée.

3. **Analyse du code base :** L'`Analyseur de code` traite la base de code et extrait les informations pertinentes telles que les fonctions, les classes, les commentaires, etc.

4. **Définitions de sections :** Le fichier `documentation_sections.json` définit la structure et le contenu souhaités de la documentation.

5. **Construction de requêtes :** Pour chaque section, le système construit une requête contenant les informations de code extraites et la description de la section.

6. **Client Gemini :** Le `Client Gemini` envoie la requête construite au modèle d'IA Gemini.

7. **Gemini AI :** Le modèle d'IA Gemini traite la requête et génère le contenu de la documentation pour le code et la section donnés.

8. **Traitement des réponses :** Le `Client Gemini` reçoit le contenu généré par Gemini et le renvoie au système.

9. **Génération de sortie :** Le système formate le contenu reçu dans des fichiers Markdown pour chaque section.

10. **Fichiers Markdown :** La documentation générée est stockée sous forme de fichiers Markdown.

11. **Site Web de documentation (facultatif) :** Les fichiers Markdown peuvent être utilisés pour créer un site Web de documentation à l'aide d'un outil comme Starlight UI.

## Transformations de données

- **Code base vers informations extraites :** L'`Analyseur de code` transforme le code base brut en données structurées contenant les éléments de code pertinents.
- **Informations extraites et définitions de sections vers requête :** Le système combine les informations de code extraites et les descriptions de sections pour créer une requête pour Gemini AI.
- **Requête vers contenu généré :** Le modèle d'IA Gemini transforme la requête en contenu de documentation lisible par l'homme.
- **Contenu généré vers fichiers Markdown :** Le système transforme le contenu généré en fichiers Markdown formatés.

Le diagramme de flux de données et la description du cycle de vie illustrent comment les données sont ingérées, traitées, transformées et finalement présentées sous forme de documentation dans le système Documenti. 




