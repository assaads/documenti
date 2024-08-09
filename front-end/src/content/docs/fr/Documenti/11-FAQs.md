---
title: FAQ
description: Foire aux questions sur Documenti.
---

## Général

### Qu'est-ce que Documenti ?

Documenti est un outil en ligne de commande qui exploite la puissance de Gemini AI de Google pour générer automatiquement de la documentation pour votre base de code. Il vise à simplifier et à rationaliser le processus de création d'une documentation complète et informative pour les projets logiciels.

### Comment fonctionne Documenti ?

Documenti analyse votre base de code, extrait les informations pertinentes et construit des invites pour le modèle d'IA Gemini. Le modèle d'IA génère ensuite le contenu de la documentation en fonction du code et des instructions fournis. Le contenu généré est formaté dans des fichiers Markdown, qui peuvent être utilisés pour créer un site Web de documentation.

### Quelles langues Documenti prend-il en charge ?

Documenti peut générer de la documentation dans plusieurs langues. Vous pouvez sélectionner les langues souhaitées pendant le processus de génération de la documentation. La langue par défaut est l'anglais.

### Quels sont les prérequis pour utiliser Documenti ?

Vous devez avoir Python 3.7 ou une version ultérieure installée sur votre système. Il est également recommandé d'utiliser un environnement virtuel pour gérer les dépendances du projet. Vous aurez également besoin d'une clé API Gemini de Google Cloud.

### Comment installer Documenti ?

1. Clonez le référentiel Documenti depuis GitHub.
2. Créez et activez un environnement virtuel.
3. Installez les dépendances répertoriées dans `requirements.txt`.
4. Définissez la variable d'environnement `GEMINI_API_KEY` sur votre clé API Gemini.

## Utilisation

### Comment personnaliser la structure de la documentation ?

Vous pouvez personnaliser la structure et le contenu de votre documentation en modifiant le fichier `documentation_sections.json`. Ce fichier définit les sections à inclure et leurs descriptions.

### Puis-je générer de la documentation pour une partie spécifique de ma base de code ?

Actuellement, Documenti traite l'intégralité de la base de code fournie en entrée. Vous pouvez exclure des fichiers ou des répertoires spécifiques en modifiant les listes `skip_dirs` et `skip_files` dans `code_parser.py`.

### Comment intégrer Documenti à l'interface utilisateur Starlight ?

Documenti copie automatiquement le répertoire de l'interface utilisateur Starlight dans le répertoire parent. Vous pouvez ensuite construire et servir l'interface utilisateur en utilisant les commandes fournies dans la documentation de Starlight.

## Dépannage

### Je reçois des erreurs d'authentification lors de la connexion à l'API Gemini.

- Assurez-vous que vous avez correctement défini la variable d'environnement `GEMINI_API_KEY`.
- Vérifiez que votre clé API est valide et qu'elle n'a pas expiré.
- Vérifiez votre connectivité réseau pour vous assurer que vous pouvez accéder aux services Google Cloud.

### La documentation générée est vide ou incomplète pour certaines sections.

- Fournissez des descriptions plus détaillées et informatives pour les sections dans `documentation_sections.json`.
- Expérimentez avec différentes structures d'invites et formulations pour guider le modèle d'IA plus efficacement.

### Documenti prend beaucoup de temps à générer la documentation.

- Envisagez d'exclure les fichiers ou répertoires inutiles du processus d'analyse.
- Si votre base de code est très volumineuse, essayez de la diviser en plusieurs parties plus petites et de générer la documentation séparément.

### J'ai rencontré une erreur qui n'est pas répertoriée ici. Où puis-je obtenir de l'aide ?

- Consultez la documentation de Documenti pour obtenir des informations de dépannage plus complètes.
- Demandez l'aide de la communauté Documenti ou soumettez un problème sur le référentiel GitHub du projet. 








