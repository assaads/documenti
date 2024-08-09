---
title: Références de l'API
description: Documentation de toutes les API dans la base de code Documenti.
---

Documenti, dans sa mise en œuvre actuelle, n'expose aucune API externe. Il fonctionne comme un outil de ligne de commande autonome qui traite les bases de code localement et génère des fichiers de documentation.

Par conséquent, il n'y a pas de points de terminaison d'API à documenter dans ce contexte.

Cependant, Documenti s'appuie sur l'API Gemini fournie par Google pour sa fonctionnalité principale de génération de contenu de documentation.

## API Gemini

L'API Gemini est une puissante API basée sur le cloud qui permet aux développeurs d'interagir avec les modèles de langage de grande taille de Google. Documenti utilise l'API Gemini pour envoyer des requêtes contenant des informations sur le code et des descriptions de sections, en recevant des réponses avec le contenu de la documentation généré.

### Authentification

- **Clé API :** L'authentification auprès de l'API Gemini s'effectue à l'aide d'une clé API, qui doit être stockée de manière sécurisée en tant que variable d'environnement (`GEMINI_API_KEY`).

### Format de la requête

Le format de requête spécifique pour l'API Gemini varie en fonction du modèle et de la tâche. En général, les requêtes incluent généralement :

- **Modèle :** Le nom du modèle Gemini à utiliser (par exemple, `gemini-1.5-pro`).
- **Invite :** L'invite textuelle contenant les instructions et le contexte pour le modèle. Dans le cas de Documenti, cela inclut les informations sur la base de code et les descriptions des sections.
- **Paramètres :** Des paramètres supplémentaires peuvent être spécifiés pour contrôler le comportement du modèle, tels que la température, top_p et max_output_tokens.

### Format de la réponse

La réponse de l'API Gemini comprend généralement :

- **Texte généré :** Le texte généré par le modèle en fonction de l'invite et des paramètres fournis.
- **Métadonnées :** Des métadonnées supplémentaires peuvent être incluses, telles que le score de confiance du modèle ou tous les indicateurs de sécurité déclenchés.

### Exemple de requête et de réponse

Bien que le format exact ne soit pas affiché dans la base de code de Documenti, un exemple simplifié d'une requête et d'une réponse de l'API Gemini pourrait ressembler à ceci :

**Requête :**

```json
{
  "model": "gemini-1.5-pro",
  "prompt": "Générer de la documentation pour la fonction `calculer_somme` :\n\n```python\ndef calculer_somme(a, b) :\n  \"\"\"Calcule la somme de deux nombres.\"\"\"\n  return a + b\n```",
  "temperature": 0.7,
  "max_output_tokens": 100
}
```

**Réponse :**

```json
{
  "generated_text": "## calculer_somme\n\nCette fonction calcule la somme de deux nombres.\n\n**Paramètres :**\n\n- `a` : Le premier nombre.\n- `b` : Le deuxième nombre.\n\n**Retourne :**\n\nLa somme de `a` et `b`.",
  "metadata": {
    "safety_flags": [],
    "confidence": 0.95
  }
}
```

Veuillez vous référer à la documentation officielle de l'API Gemini pour obtenir des informations détaillées sur les formats de requête et de réponse, les modèles disponibles et les paramètres.




