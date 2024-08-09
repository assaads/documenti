---
title: Guide de dépannage
description: Solutions aux problèmes courants rencontrés lors de l'utilisation de Documenti.
---

## Problèmes liés à l'API Gemini

### Erreurs d'authentification

- **Problème :** Vous rencontrez des erreurs liées à l'authentification lorsque Documenti essaie de se connecter à l'API Gemini.
- **Causes possibles :**
    - Variable d'environnement `GEMINI_API_KEY` incorrecte ou manquante.
    - Clé API non valide.
    - Problèmes de connectivité réseau empêchant l'accès à l'API Gemini.
- **Solution :**
    1. **Vérifier la clé API :** Vérifiez que vous avez correctement défini la variable d'environnement `GEMINI_API_KEY` et que la clé API est valide. Vous pouvez trouver votre clé API dans la console Google Cloud.
    2. **Vérifier la connectivité réseau :** Assurez-vous que votre machine dispose d'une connexion Internet stable et qu'elle peut accéder aux services Google Cloud.

### Limitation de débit

- **Problème :** Vous rencontrez des retards ou des erreurs en raison de la limitation de débit de l'API Gemini.
- **Causes possibles :**
    - Envoi de trop nombreuses requêtes à l'API dans un court laps de temps.
    - Dépassement de votre quota pour l'API Gemini.
- **Solution :**
    1. **Réduire la fréquence des requêtes :** Mettez en œuvre des mécanismes pour contrôler le rythme des requêtes envoyées à l'API Gemini. Vous pouvez introduire des délais entre les requêtes ou utiliser un système de file d'attente pour répartir la charge de travail.
    2. **Augmenter le quota :** Si nécessaire, vous pouvez demander une augmentation de quota pour l'API Gemini via la console Google Cloud.

## Erreurs d'analyse de code

### Problèmes de lecture de fichiers

- **Problème :** Documenti ne parvient pas à lire les fichiers de votre répertoire de base de code.
- **Causes possibles :**
    - Chemin d'accès au répertoire de la base de code incorrect fourni.
    - Autorisations de fichier insuffisantes.
    - Problèmes d'encodage des fichiers.
- **Solution :**
    1. **Vérifier le chemin d'accès à la base de code :** Assurez-vous que le chemin d'accès à votre répertoire de base de code est correct et que le répertoire existe.
    2. **Vérifier les autorisations de fichier :** Assurez-vous que le script Documenti dispose des autorisations de lecture pour tous les fichiers du répertoire de la base de code.
    3. **Ajuster l'encodage des fichiers :** Si les fichiers de votre base de code utilisent un encodage différent de `ISO-8859-1`, modifiez le paramètre `encoding` dans `code_parser.py` pour qu'il corresponde à l'encodage correct.

### Fichiers ou répertoires exclus

- **Problème :** Certains fichiers ou répertoires ne sont pas inclus dans le processus de génération de la documentation.
- **Causes possibles :**
    - Les fichiers ou répertoires sont répertoriés dans les listes `skip_dirs` ou `skip_files` dans `code_parser.py`.
- **Solution :**
    1. **Examiner les exclusions :** Vérifiez les listes `skip_dirs` et `skip_files` dans `code_parser.py` et supprimez toutes les entrées pour les fichiers ou répertoires que vous souhaitez inclure dans la documentation.

## Problèmes de génération de sortie

### Documentation vide ou incomplète

- **Problème :** La documentation générée est vide ou incomplète pour certaines sections.
- **Causes possibles :**
    - Contexte insuffisant ou descriptions peu claires dans le fichier `documentation_sections.json`.
    - Erreurs ou limitations dans la capacité du modèle d'IA Gemini à comprendre le code.
- **Solution :**
    1. **Améliorer les descriptions des sections :** Fournissez des descriptions plus détaillées et informatives pour les sections dans `documentation_sections.json`.
    2. **Affiner les invites :** Expérimentez avec différentes structures d'invites et formulations pour guider le modèle d'IA Gemini plus efficacement.

## Problèmes d'intégration de l'interface utilisateur Starlight

### Erreurs de prise en charge linguistique

- **Problème :** L'interface utilisateur Starlight n'affiche pas correctement les langues sélectionnées.
- **Causes possibles :**
    - Erreurs dans la modification du script `language_processor.py` de `astro.config.mjs`.
- **Solution :**
    1. **Examiner la configuration des paramètres régionaux :** Vérifiez la section `locales` dans `astro.config.mjs` et assurez-vous que les entrées pour les langues sélectionnées sont correctes.

Ces conseils de dépannage traitent des problèmes courants rencontrés lors de l'utilisation de Documenti. Si vous rencontrez des problèmes qui ne sont pas abordés ici, consultez la documentation du projet ou demandez l'aide de la communauté. 




