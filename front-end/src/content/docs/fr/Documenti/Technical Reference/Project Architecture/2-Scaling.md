---
title: Mise à l'échelle
description: Diagrammes architecturaux montrant comment l'architecture de Documenti est conçue pour être mise à l'échelle.
---

Bien que l'architecture actuelle de Documenti ne soit pas explicitement conçue pour les déploiements à grande échelle, elle peut être mise à l'échelle pour gérer des charges de travail accrues avec quelques modifications. Voici quelques stratégies de mise à l'échelle potentielles :

## Mise à l'échelle des interactions avec Gemini AI

Le principal goulot d'étranglement pour la mise à l'échelle de Documenti est susceptible d'être les interactions avec le modèle d'IA Gemini. Voici comment nous pouvons y remédier :

### Mise à l'échelle horizontale avec des requêtes asynchrones

```
                             +-----------------+     +-----------------+
                             | Client Gemini  |---->| Client Gemini  |
                             +-----------------+     +-----------------+
                                  ^                    ^
                                  |                    |
+---------------------+    +-----------------------+    |
|  Entrée utilisateur  |--->|  Analyseur de code    |----+--->  Processeur de documentation  
+---------------------+    +-----------------------+    |     (avec file d'attente et workers)
                       |                         ^      |
                       |                         |      |
                       v                         |      |
                 +-----------------------+      |      |
                 | documentation_sections.json |------+
                 +-----------------------+           
```

1. **Système de file d'attente :** Introduisez un système de file d'attente (par exemple, RabbitMQ, Redis) pour gérer les requêtes de documentation.
2. **Processus de travail :** Implémentez plusieurs processus de travail qui consomment les requêtes de la file d'attente, interagissent avec Gemini AI et traitent les réponses.
3. **Requêtes asynchrones :** Utilisez des bibliothèques de requêtes asynchrones (par exemple, `aiohttp`) dans les processus de travail pour envoyer des requêtes à Gemini AI de manière concurrente.

Cette approche permet une mise à l'échelle horizontale en ajoutant davantage de processus de travail pour gérer le nombre croissant de requêtes de documentation.

## Mise à l'échelle de l'analyse du code base

Pour les très grandes bases de code, l'analyse du code peut également devenir un goulot d'étranglement. Voici une solution de mise à l'échelle potentielle :

### Analyse distribuée du code base

```
+---------------------+      +-----------------------+      +-----------------------+
|  Entrée utilisateur  |---->| Analyseur de code (Nœud 1) |---->| Analyseur de code (Nœud 2) |
+---------------------+      +-----------------------+      +-----------------------+
                                  |                    |
                                  v                    v
                                +-----------------------+
                                |  Sortie combinée     |
                                +-----------------------+
```

1. **Diviser le code base :** Divisez le code base en plus petits morceaux.
2. **Analyse distribuée :** Déployez plusieurs instances de l'analyseur de code, chacune étant responsable de l'analyse d'un morceau spécifique du code base.
3. **Combiner la sortie :** Agrégez la sortie analysée de toutes les instances en une seule sortie combinée.

Cela permet de distribuer la charge de travail d'analyse sur plusieurs machines, réduisant ainsi le temps total d'analyse.

## Mise à l'échelle verticale

La mise à l'échelle verticale peut également être appliquée aux composants individuels en augmentant leurs ressources (CPU, mémoire, etc.). Par exemple :

- **Client Gemini :** Allouez davantage de ressources aux instances du client Gemini pour gérer efficacement les requêtes simultanées.
- **Processeur de documentation :** Augmentez les ressources du processeur de documentation pour accélérer le traitement du contenu et l'écriture des fichiers.

## Conclusion

Bien que l'architecture actuelle de Documenti ne soit pas explicitement conçue pour une mise à l'échelle massive, ces stratégies de mise à l'échelle peuvent être mises en œuvre pour gérer des bases de code plus volumineuses et des demandes de génération de documentation plus importantes. Le choix de l'approche de mise à l'échelle dépend des exigences et des contraintes spécifiques de votre déploiement.




