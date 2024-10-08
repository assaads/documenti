---
title: Configuration Files
description: Documentation for configuration files used in Documenti.
---

## documentation_sections.json

This JSON file defines the structure and content of the documentation generated by Documenti. It outlines the sections to be included in the documentation and provides descriptions for each section.

### Structure

The file consists of key-value pairs, where:

- **Key:** Represents the title of the section.
- **Value:** Represents the description of the section. This description serves as context for the Gemini AI model when generating the documentation content.

### Example

```json
{
  "Overview": "A high-level overview of the project, including its purpose, key features, and target audience.",
  "Installation": "Step-by-step instructions on how to install the project, including prerequisites and dependencies.",
  "API Reference": "Detailed documentation of the public API, including classes, methods, and parameters, with a focus on usage examples and code snippets.",
  "Contribution Guidelines": "Guidelines for contributing to the project, including coding style, branching strategy, and pull request process."
}
```

### Usage

- **Modifying Existing Sections:** You can modify the descriptions of existing sections to provide more context or change the focus of the generated content.
- **Adding New Sections:** Add new key-value pairs to introduce additional sections to your documentation.
- **Reordering Sections:** The order of keys in the file determines the order of sections in the generated documentation.

## .env (Environment Variables)

While not explicitly a configuration file in the project, Documenti relies on environment variables for sensitive information.

### GEMINI_API_KEY

- **Purpose:** Stores the API key for authenticating with the Gemini API.
- **Usage:** Set this environment variable to your Gemini API key. It's highly recommended to store this key securely and avoid hardcoding it in the source code.

### Example

```bash
export GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
```

## Starlight UI Configuration (astro.config.mjs)

Although not directly modified by the user, the `language_processor.py` script updates the `astro.config.mjs` file in the Starlight UI directory to configure language support.

### locales

- **Purpose:** Defines the supported languages for the documentation website.
- **Usage:** The `language_processor.py` script automatically adds entries for each selected language, specifying the language code and label.

### Example

```javascript
locales: {
  // English docs in `src/content/docs/en/`
  'en': {
    label: 'English',
  },
  // French docs in `src/content/docs/fr/`
  'fr': {
    label: 'Français',
    lang: 'fr',
  },
  // Spanish docs in `src/content/docs/es/`
  'es': {
    label: 'Español',
    lang: 'es',
  },
},
```



