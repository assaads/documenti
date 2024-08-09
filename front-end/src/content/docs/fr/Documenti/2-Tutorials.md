---
title: Tutoriels
description: Guides étape par étape pour vous aider à comprendre comment utiliser les différentes fonctionnalités de Documenti.
---

## Tutoriel 1 : Générer une documentation basique

Ce tutoriel vous guidera à travers le processus de génération d'une documentation basique pour votre base de code en utilisant Documenti.

### Étape 1 : Préparer votre base de code

Assurez-vous que votre base de code est organisée dans une structure de répertoire que Documenti peut analyser. Cela signifie avoir vos fichiers de code source dans un répertoire bien défini. Par exemple :

```
mon-projet/
  - src/
    - main.py
    - utils.py
  - tests/
    - test_main.py
```

### Étape 2 : Définir un fichier `documentation_sections.json` simple

Créez un fichier `documentation_sections.json` dans le répertoire racine du projet Documenti. Ce fichier définit la structure et les sections de votre documentation. Pour ce tutoriel, nous allons créer une structure simple avec deux sections :

```json
{
  "Aperçu": "Un aperçu général du projet.",
  "Structure du code": "Description de l'organisation du code du projet."
}
```

### Étape 3 : Exécuter Documenti

Ouvrez votre terminal, naviguez jusqu'au répertoire du projet Documenti et exécutez le script `main.py` :

```bash
python main.py
```

Il vous sera demandé de saisir les informations suivantes :

- **Chemin vers le répertoire de la base de code :** Entrez le chemin relatif vers le répertoire contenant votre base de code. Par exemple, si votre base de code se trouve dans `mon-projet/`, et que vous exécutez le script depuis le répertoire `Documenti`, vous devez entrer `../mon-projet/`.
- **Nom du projet :** Entrez un nom pour votre projet. Ce nom sera utilisé pour créer un répertoire pour votre documentation. Par exemple, vous pouvez entrer "MonProjet".

### Étape 4 : Examiner la documentation générée

Une fois que le script a fini de s'exécuter, vous trouverez votre documentation générée dans le répertoire de sortie. Par défaut, il s'agit de `../front-end/src/content/docs/`. Dans ce répertoire, il y aura un dossier nommé d'après votre projet (par exemple, "MonProjet"). À l'intérieur de ce dossier, vous trouverez deux fichiers Markdown :

- `1-Aperçu.md` : Contient la documentation pour la section "Aperçu".
- `2-Structure du code.md` : Contient la documentation pour la section "Structure du code".

Vous pouvez ouvrir ces fichiers dans un éditeur ou une visionneuse Markdown pour examiner le contenu généré.

## Tutoriel 2 : Générer une documentation multilingue

Ce tutoriel vous montrera comment générer une documentation en plusieurs langues en utilisant Documenti.

### Étape 1 : Choisir les langues

Lorsque vous exécutez `main.py`, il vous sera demandé : "Voulez-vous choisir plusieurs langues (la langue par défaut est l'anglais) ? (oui/non) :". Entrez "oui" pour sélectionner des langues supplémentaires.

Vous serez alors présenté avec une liste des langues disponibles. Entrez les numéros correspondant à vos langues souhaitées, séparés par des virgules. Par exemple, pour générer une documentation en anglais, français et espagnol, vous devez entrer "1,4,2".

### Étape 2 : Examiner la documentation générée

Documenti générera des dossiers de documentation séparés pour chaque langue sélectionnée. Par exemple, si vous avez choisi l'anglais, le français et l'espagnol, vous trouverez trois dossiers dans le répertoire de sortie :

- `en/MonProjet` : Contient la documentation en anglais.
- `fr/MonProjet` : Contient la documentation en français.
- `es/MonProjet` : Contient la documentation en espagnol.

Chaque dossier de langue contiendra les mêmes fichiers Markdown que dans le tutoriel 1, mais le contenu sera généré dans la langue correspondante.

## Tutoriel 3 : Personnaliser la structure de la documentation

Ce tutoriel vous montrera comment personnaliser la structure et le contenu de votre documentation en modifiant le fichier `documentation_sections.json`.

### Étape 1 : Ajouter ou modifier des sections

Vous pouvez ajouter de nouvelles sections ou modifier les sections existantes dans le fichier `documentation_sections.json`. Par exemple, vous pouvez ajouter une section pour "Instructions d'installation" :

```json
{
  "Aperçu": "Un aperçu général du projet.",
  "Structure du code": "Description de l'organisation du code du projet.",
  "Instructions d'installation": "Étapes pour installer le projet."
}
```

### Étape 2 : Fournir des descriptions plus détaillées

Au lieu d'un simple titre de section, vous pouvez fournir une description plus détaillée pour chaque section dans le fichier `documentation_sections.json`. Cette description sera utilisée par Gemini AI comme contexte lors de la génération du contenu de la documentation. Par exemple :

```json
{
  "Aperçu": "Un aperçu de haut niveau du projet, y compris son but, ses principales caractéristiques et son public cible.",
  "Structure du code": "Une description détaillée de l'organisation du code du projet, y compris les modules, les classes et les fonctions.",
  "Instructions d'installation": "Des instructions étape par étape sur la façon d'installer le projet, y compris les prérequis et les dépendances."
}
```

### Étape 3 : Examiner la documentation générée

Après avoir modifié le fichier `documentation_sections.json`, réexécutez le script `main.py`. Documenti générera la documentation en fonction de la structure et des descriptions mises à jour.