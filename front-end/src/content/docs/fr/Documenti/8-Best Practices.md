---
title: Bonnes pratiques
description: Conseils pour utiliser efficacement Documenti afin d'obtenir des résultats optimaux.
---

## Rédiger des descriptions de sections efficaces

La qualité de votre documentation générée dépend fortement de la clarté et du contexte fournis dans le fichier `documentation_sections.json`. Voici quelques conseils pour rédiger des descriptions de sections efficaces :

- **Soyez précis :** Indiquez clairement l'objectif et la portée de chaque section. Évitez les descriptions vagues ou trop générales.
- **Fournissez du contexte :** Incluez des informations pertinentes sur le code documenté, telles que l'objectif de la fonction, le rôle de la classe ou les fonctionnalités du module.
- **Concentrez-vous sur les besoins des utilisateurs :** Tenez compte du public cible de votre documentation et adaptez les descriptions à son niveau de compréhension et à ses besoins en matière d'informations.
- **Utilisez des exemples :** Dans la mesure du possible, fournissez des exemples de ce que vous attendez de la documentation. Cela permet au modèle d'IA Gemini de comprendre vos intentions.

## Optimiser le code pour la documentation

Bien que Documenti puisse gérer différents styles de code, le respect de certaines pratiques peut améliorer la qualité et la clarté de la documentation générée.

- **Commentaires significatifs :** Rédigez des commentaires clairs et informatifs dans votre code. Ces commentaires servent de contexte précieux au modèle d'IA Gemini.
- **Nommage descriptif :** Utilisez des noms descriptifs pour les fonctions, les classes, les variables et les autres éléments de code. Cela rend la documentation générée plus lisible et compréhensible.
- **Structure de code modulaire :** Organisez votre code de manière modulaire, en séparant les préoccupations en fonctions, classes et modules distincts.

## Gestion des bases de code volumineuses

Pour les bases de code volumineuses, envisagez les stratégies suivantes pour optimiser le processus de génération de documentation :

- **Exclure les fichiers inutiles :** Modifiez les listes `skip_dirs` et `skip_files` dans `code_parser.py` pour exclure les fichiers ou répertoires qui ne sont pas pertinents pour la documentation.
- **Diviser la base de code :** Si votre base de code est exceptionnellement volumineuse, vous pouvez la diviser en plusieurs parties plus petites et plus faciles à gérer, et générer la documentation séparément pour chaque partie.

## Considérations relatives à la sécurité

- **Protéger votre clé API :** Stockez votre clé API Gemini de manière sécurisée en tant que variable d'environnement. Évitez de la coder en dur dans votre code source.
- **Déploiement sécurisé :** Si vous déployez Documenti dans un environnement de production, mettez en œuvre des mesures de sécurité appropriées, telles que des pare-feu, une authentification et un chiffrement des données.

## Optimisation des performances

- **Limitation de débit :** Tenez compte des limites de débit imposées par l'API Gemini. Mettez en œuvre des mécanismes pour contrôler le rythme des requêtes afin d'éviter les retards ou les erreurs.
- **Allocation des ressources :** Pour les charges de travail exigeantes, envisagez d'augmenter les ressources allouées au processus Documenti ou d'utiliser une machine plus puissante.

## Se tenir à jour

- **Mises à jour de l'API Gemini :** Surveillez la documentation de l'API Gemini pour toute mise à jour ou modification susceptible d'affecter les fonctionnalités de Documenti.
- **Mises à jour de Documenti :** Surveillez les nouvelles versions de Documenti qui pourraient inclure des améliorations, des corrections de bogues ou de nouvelles fonctionnalités.

En suivant ces bonnes pratiques, vous pouvez maximiser l'efficacité de Documenti et générer une documentation de haute qualité pour vos projets logiciels. 
