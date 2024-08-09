---
title: Guides pratiques
description: Guides détaillés sur la façon d'effectuer des tâches spécifiques avec Documenti.
---

## Comment personnaliser la structure de la documentation

Documenti vous permet d'adapter la structure et le contenu de votre documentation générée pour répondre à vos besoins spécifiques. Ce guide expliquera comment personnaliser la structure de la documentation en utilisant le fichier `documentation_sections.json`.

### Comprendre le fichier `documentation_sections.json`

Le fichier `documentation_sections.json` est un fichier de configuration JSON qui définit les sections et leur ordre dans votre documentation. Chaque clé de ce fichier représente un titre de section, et la valeur correspondante est une description de cette section. Cette description sert de contexte à l'IA Gemini lors de la génération du contenu de la documentation.

### Modifier les sections existantes

Vous pouvez modifier la description des sections existantes pour fournir plus de contexte à l'IA. Par exemple, si vous avez une section intitulée "Référence de l'API", vous pouvez développer sa description pour spécifier quelles parties de l'API doivent être documentées :

```json
{
  "Référence de l'API": "Documentation détaillée de l'API publique, y compris les classes, les méthodes et les paramètres, en mettant l'accent sur des exemples d'utilisation et des extraits de code."
}
```

### Ajouter de nouvelles sections

Pour ajouter une nouvelle section à votre documentation, il suffit d'ajouter une nouvelle paire clé-valeur au fichier `documentation_sections.json`. Par exemple, vous pouvez ajouter une section pour "Directives de contribution" :

```json
{
  "Référence de l'API": "Documentation détaillée de l'API publique, y compris les classes, les méthodes et les paramètres, en mettant l'accent sur des exemples d'utilisation et des extraits de code.",
  "Directives de contribution": "Directives pour contribuer au projet, y compris le style de codage, la stratégie de branchement et le processus de pull request."
}
```

### Réorganiser les sections

L'ordre des clés dans le fichier `documentation_sections.json` détermine l'ordre des sections dans votre documentation générée. Vous pouvez réorganiser les clés pour modifier l'ordre des sections.

### Générer la documentation avec la structure personnalisée

Après avoir apporté des modifications au fichier `documentation_sections.json`, réexécutez le script `main.py`. Documenti générera la documentation en fonction de la structure et des descriptions mises à jour.

## Comment générer une documentation en plusieurs langues

Documenti prend en charge la génération de documentation en plusieurs langues, ce qui la rend accessible à un public plus large. Ce guide vous guidera à travers le processus de génération de documentation multilingue.

### Choisir les langues pendant l'exécution

Lorsque vous exécutez le script `main.py`, vous serez invité à répondre à la question suivante : "Voulez-vous choisir plusieurs langues (la langue par défaut est l'anglais) ? (oui/non) :". Entrez "oui" pour activer la génération de documentation multilingue.

Une liste des langues disponibles vous sera alors présentée. Sélectionnez les langues pour lesquelles vous souhaitez générer une documentation en entrant leurs numéros correspondants séparés par des virgules. Par exemple, pour générer une documentation en anglais, espagnol et allemand, vous devez entrer "1,2,3".

### Sortie spécifique à la langue

Documenti créera des répertoires distincts pour chaque langue sélectionnée dans le répertoire de sortie. Chaque répertoire de langue contiendra les mêmes fichiers Markdown que la documentation en anglais, mais le contenu sera généré dans la langue correspondante.

### Mise à jour de la configuration de l'interface utilisateur de Starlight

Si vous utilisez l'interface utilisateur de Starlight pour présenter votre documentation, vous devez mettre à jour sa configuration pour inclure les langues sélectionnées. Le script `language_processor.py` gère cela automatiquement en modifiant le fichier `astro.config.mjs` dans le répertoire de l'interface utilisateur de Starlight.

### Examen de la documentation multilingue

Une fois le script terminé, vous pouvez examiner la documentation générée dans chaque répertoire spécifique à la langue.

## Comment intégrer Documenti à l'interface utilisateur de Starlight

Starlight est une interface utilisateur de documentation conviviale qui peut être utilisée pour présenter la documentation générée par Documenti. Ce guide décrit les étapes à suivre pour intégrer Documenti à Starlight.

### Copie du répertoire de l'interface utilisateur de Starlight

Le script `fe_builder.py` est responsable de la copie du répertoire de l'interface utilisateur de Starlight dans le répertoire parent du projet Documenti. Cela garantit que l'interface utilisateur est accessible pour l'intégration.

### Mise à jour de la configuration de Starlight

Le script `language_processor.py` met automatiquement à jour le fichier de configuration de Starlight (`astro.config.mjs`) pour inclure les langues sélectionnées pour la génération de documentation.

### Construction de l'interface utilisateur de Starlight

Une fois la documentation générée et la configuration de Starlight mise à jour, vous pouvez construire l'interface utilisateur de Starlight en utilisant les commandes suivantes dans le répertoire de l'interface utilisateur de Starlight :

```bash
npm install
npm run build
```

### Publication de l'interface utilisateur de Starlight

Vous pouvez ensuite publier l'interface utilisateur construite en utilisant :

```bash
npm run preview
```

Cela lancera un serveur de développement local où vous pourrez accéder à votre site web de documentation.

### Personnalisation de l'interface utilisateur de Starlight

Starlight offre diverses options de personnalisation, telles que la thématisation et les ajustements de mise en page. Reportez-vous à la documentation de Starlight pour plus de détails sur la façon de personnaliser l'interface utilisateur.

