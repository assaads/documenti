---
title: Sécurité
description: Diagrammes architecturaux mettant en évidence les mesures de sécurité dans Documenti.
---

L'architecture actuelle de Documenti, en tant que générateur de documentation autonome, ne met pas en œuvre de manière inhérente des mesures de sécurité robustes telles que des pare-feu, des systèmes d'authentification ou du chiffrement. Cependant, lorsque l'on considère son intégration avec des services externes comme Gemini AI et des scénarios de déploiement potentiels, plusieurs considérations de sécurité entrent en jeu.

## Sécurisation de la clé API Gemini

La clé API Gemini est une information d'identification cruciale qui permet d'accéder au modèle d'IA Gemini. La protection de cette clé est primordiale pour empêcher tout accès non autorisé et tout abus potentiel.

### Variables d'environnement et stockage sécurisé

```
+---------------------+
|  Entrée utilisateur  |
+---------------------+
       |
       | (Chemin du code base, Nom du projet, Choix de langue)
       v
+-----------------------+     +-----------------------+
|  Analyseur de code    |---->| Processeur de documentation |
+-----------------------+     +-----------------------+
                                       |
                                       | (Accès à la variable d'environnement GEMINI_API_KEY)
                                       v
                             +-----------------+    +-----------------+
                             | Client Gemini  |--->| Gemini AI      |
                             +-----------------+    +-----------------+
```

- **Variables d'environnement :** Stockez la clé API Gemini en tant que variable d'environnement (`GEMINI_API_KEY`) au lieu de la coder en dur dans le code source.
- **Stockage sécurisé :** Pour les déploiements en production, utilisez les mécanismes de stockage sécurisé fournis par votre fournisseur de cloud ou votre système d'exploitation pour stocker les variables d'environnement sensibles.

## Considérations relatives au déploiement sécurisé

En fonction de la manière et de l'endroit où Documenti est déployé, des mesures de sécurité supplémentaires peuvent être nécessaires.

### Pare-feu et sécurité réseau

- **Déploiement dans le cloud :** Si Documenti est déployé sur une plateforme cloud, utilisez les capacités de pare-feu de la plateforme pour restreindre l'accès à l'application Documenti et aux ressources associées.
- **Déploiement sur site :** Mettez en œuvre des pare-feu et une segmentation du réseau pour isoler Documenti des autres systèmes et limiter les vecteurs d'attaque potentiels.

### Authentification et autorisation

- **Contrôle d'accès des utilisateurs :** Si Documenti est exposé à plusieurs utilisateurs, mettez en œuvre des mécanismes d'authentification et d'autorisation pour contrôler l'accès à l'application et à ses fonctionnalités.
- **Contrôle d'accès basé sur les rôles (RBAC) :** Envisagez d'utiliser le RBAC pour accorder différents niveaux d'accès aux utilisateurs en fonction de leurs rôles et responsabilités.

### Chiffrement des données

- **Stockage du code base :** Si le code base contient des informations sensibles, envisagez de chiffrer le code base au repos ou pendant la transmission à l'application Documenti.
- **Stockage de la sortie :** Envisagez de chiffrer les fichiers de documentation générés s'ils contiennent des informations sensibles ou confidentielles.

## Conclusion

Bien que Documenti lui-même ne dispose pas de fonctions de sécurité intégrées, il est essentiel de prendre en compte les considérations de sécurité liées aux clés API, aux environnements de déploiement et à la protection des données. En mettant en œuvre des mesures de sécurité appropriées, vous pouvez atténuer les risques et garantir le fonctionnement sécurisé de Documenti.






