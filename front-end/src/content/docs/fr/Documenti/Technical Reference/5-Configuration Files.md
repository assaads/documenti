---
title: Fichiers de configuration
description: Documentation pour les fichiers de configuration utilisés dans Documenti.
---

## documentation_sections.json

Ce fichier JSON définit la structure et le contenu de la documentation générée par Documenti. Il décrit les sections à inclure dans la documentation et fournit des descriptions pour chaque section.

### Structure

Le fichier est constitué de paires clé-valeur, où :

- **Clé :** Représente le titre de la section.
- **Valeur :** Représente la description de la section. Cette description sert de contexte au modèle d'IA Gemini lors de la génération du contenu de la documentation.

### Exemple

```json
{
  "Aperçu": "Un aperçu de haut niveau du projet, y compris son objectif, ses principales fonctionnalités et son public cible.",
  "Installation": "Instructions étape par étape sur la façon d'installer le projet, y compris les prérequis et les dépendances.",
  "Référence de l'API": "Documentation détaillée de l'API publique, y compris les classes, les méthodes et les paramètres, en mettant l'accent sur des exemples d'utilisation et des extraits de code.",
  "Directives de contribution": "Directives pour contribuer au projet, y compris le style de codage, la stratégie de branchement et le processus de pull request."
}
```

### Utilisation

- **Modification des sections existantes :** Vous pouvez modifier les descriptions des sections existantes pour fournir plus de contexte ou modifier l'orientation du contenu généré.
- **Ajout de nouvelles sections :** Ajoutez de nouvelles paires clé-valeur pour introduire des sections supplémentaires dans votre documentation.
- **Réorganisation des sections :** L'ordre des clés dans le fichier détermine l'ordre des sections dans la documentation générée.

## .env (Variables d'environnement)

Bien qu'il ne s'agisse pas explicitement d'un fichier de configuration dans le projet, Documenti s'appuie sur les variables d'environnement pour les informations sensibles.

### GEMINI_API_KEY

- **Objectif :** Stocke la clé API pour l'authentification auprès de l'API Gemini.
- **Utilisation :** Définissez cette variable d'environnement sur votre clé API Gemini. Il est fortement recommandé de stocker cette clé de manière sécurisée et d'éviter de la coder en dur dans le code source.

### Exemple

```bash
export GEMINI_API_KEY="VOTRE_CLÉ_API_GEMINI"
```

## Configuration de l'interface utilisateur Starlight (astro.config.mjs)

Bien qu'il ne soit pas directement modifié par l'utilisateur, le script `language_processor.py` met à jour le fichier `astro.config.mjs` dans le répertoire de l'interface utilisateur Starlight pour configurer la prise en charge des langues.

### locales

- **Objectif :** Définit les langues prises en charge pour le site Web de documentation.
- **Utilisation :** Le script `language_processor.py` ajoute automatiquement des entrées pour chaque langue sélectionnée, en spécifiant le code de langue et l'étiquette.

### Exemple

```javascript
locales: {
  // Documentation en anglais dans `src/content/docs/en/`
  'en': {
    label: 'English',
  },
  // Documentation en français dans `src/content/docs/fr/`
  'fr': {
    label: 'Français',
    lang: 'fr',
  },
  // Documentation en espagnol dans `src/content/docs/es/`
  'es': {
    label: 'Español',
    lang: 'es',
  },
},
```







