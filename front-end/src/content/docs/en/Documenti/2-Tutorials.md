---
title: Tutorials
description: Step-by-step guides to help you understand how to use the different features of Documenti.
---

## Tutorial 1: Generating Basic Documentation

This tutorial will guide you through the process of generating basic documentation for your codebase using Documenti.

### Step 1: Prepare Your Codebase

Ensure your codebase is organized in a directory structure that Documenti can parse. This means having your source code files in a well-defined directory. For example:

```
my-project/
  - src/
    - main.py
    - utils.py
  - tests/
    - test_main.py
```

### Step 2: Define a Simple `documentation_sections.json`

Create a `documentation_sections.json` file in the root directory of the Documenti project. This file defines the structure and sections of your documentation. For this tutorial, we'll create a simple structure with two sections:

```json
{
  "Overview": "A general overview of the project.",
  "Code Structure": "Description of the project's code organization."
}
```

### Step 3: Run Documenti

Open your terminal, navigate to the Documenti project directory, and execute the `main.py` script:

```bash
python main.py
```

You will be prompted to enter the following information:

- **Path to the codebase directory:** Enter the relative path to the directory containing your codebase. For example, if your codebase is in `my-project/`, and you're running the script from the `Documenti` directory, you would enter `../my-project/`.
- **Name of the project:** Enter a name for your project. This will be used to create a directory for your documentation. For example, you could enter "MyProject".

### Step 4: Review the Generated Documentation

Once the script finishes running, you will find your generated documentation in the output directory. By default, this is `../front-end/src/content/docs/`. Within this directory, there will be a folder named after your project (e.g., "MyProject"). Inside this folder, you will find two Markdown files:

- `1-Overview.md`: Contains the documentation for the "Overview" section.
- `2-Code Structure.md`: Contains the documentation for the "Code Structure" section.

You can open these files in a Markdown editor or viewer to review the generated content.

## Tutorial 2: Generating Multi-Language Documentation

This tutorial will show you how to generate documentation in multiple languages using Documenti.

### Step 1: Choose Languages

When running `main.py`, you will be asked: "Do you want to choose multiple languages (the default language is English)? (yes/no):". Enter "yes" to select additional languages.

You will then be presented with a list of available languages. Enter the numbers corresponding to your desired languages, separated by commas. For example, to generate documentation in English, French, and Spanish, you would enter "1,4,2".

### Step 2: Review the Generated Documentation

Documenti will generate separate documentation folders for each selected language. For example, if you chose English, French, and Spanish, you would find three folders in the output directory:

- `en/MyProject`: Contains the English documentation.
- `fr/MyProject`: Contains the French documentation.
- `es/MyProject`: Contains the Spanish documentation.

Each language folder will contain the same Markdown files as in Tutorial 1, but the content will be generated in the corresponding language.

## Tutorial 3: Customizing the Documentation Structure

This tutorial will demonstrate how to customize the structure and content of your documentation by modifying the `documentation_sections.json` file.

### Step 1: Add or Modify Sections

You can add new sections or modify existing ones in the `documentation_sections.json` file. For example, you could add a section for "Installation Instructions":

```json
{
  "Overview": "A general overview of the project.",
  "Code Structure": "Description of the project's code organization.",
  "Installation Instructions": "Steps on how to install the project."
}
```

### Step 2: Provide More Detailed Descriptions

Instead of just a section title, you can provide a more detailed description for each section in the `documentation_sections.json` file. This description will be used by Gemini AI as context when generating the documentation content. For example:

```json
{
  "Overview": "A high-level overview of the project, including its purpose, key features, and target audience.",
  "Code Structure": "A detailed description of the project's code organization, including modules, classes, and functions.",
  "Installation Instructions": "Step-by-step instructions on how to install the project, including prerequisites and dependencies."
}
```

### Step 3: Review the Generated Documentation

After modifying the `documentation_sections.json` file, re-run the `main.py` script. Documenti will generate documentation based on the updated structure and descriptions.


