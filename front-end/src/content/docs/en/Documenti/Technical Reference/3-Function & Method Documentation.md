---
title: Function & Method Documentation
description: Documentation for each function and method in the Documenti codebase.
---

## `main.py`

### `main()`

- **Purpose:** Orchestrates the documentation generation process, handling user input, code parsing, and documentation processing.
- **Parameters:** None
- **Return Value:** None
- **Exceptions:** 
    - `ValueError`: If the user provides an invalid input for language selection.

## `code_parser.py`

### `generate_combined_file(codebase_directory)`

- **Purpose:** Parses the codebase directory and combines the content of all eligible files into a single string.
- **Parameters:**
    - `codebase_directory`: (string) The path to the directory containing the codebase.
- **Return Value:** (string) The combined content of all parsed files, including file paths as comments.
- **Exceptions:**
    - `ValueError`: If the combined output exceeds the line limit for Gemini AI input.

## `documentation_processor.py`

### `handler(project_name, language="")`

- **Purpose:** Manages the documentation generation process for each selected language.
- **Parameters:**
    - `project_name`: (string) The name of the project.
    - `language`: (string, optional) The language code for the documentation. Defaults to "".
- **Return Value:** None
- **Exceptions:** None

### `process_item(key, value, language)`

- **Purpose:** Processes a single documentation section, requesting content from Gemini AI.
- **Parameters:**
    - `key`: (string) The section title.
    - `value`: (string) The section description.
    - `language`: (string) The language code for the documentation.
- **Return Value:** (string) The generated documentation content for the section.
- **Exceptions:** None

### `process_dict(input_dict, process_func, output_dir, language)`

- **Purpose:** Recursively processes the documentation structure dictionary, generating content and writing to files.
- **Parameters:**
    - `input_dict`: (dictionary) The documentation structure dictionary.
    - `process_func`: (function) The function to call for processing individual sections (usually `process_item`).
    - `output_dir`: (string) The output directory for the generated Markdown files.
    - `language`: (string) The language code for the documentation.
- **Return Value:** None
- **Exceptions:** None

## `gemini_client.py`

### `init(codebase)`

- **Purpose:** Initializes the Gemini AI agent and sends the codebase for context.
- **Parameters:**
    - `codebase`: (string) The combined codebase string.
- **Return Value:** None
- **Exceptions:** None

### `define_format()`

- **Purpose:** Defines the output format for the Gemini AI model.
- **Parameters:** None
- **Return Value:** (string) The response from the AI model.
- **Exceptions:** None

### `send_codebase(codebase: str)`

- **Purpose:** Sends the codebase to the Gemini AI model for context.
- **Parameters:**
    - `codebase`: (string) The combined codebase string.
- **Return Value:** (string) The response from the AI model.
- **Exceptions:** None

### `request_documentation(documentation_subject: str, language: str)`

- **Purpose:** Requests documentation for a specific section from the Gemini AI model.
- **Parameters:**
    - `documentation_subject`: (string) The section topic, combining title and description.
    - `language`: (string) The language code for the documentation.
- **Return Value:** (string) The generated documentation content for the section.
- **Exceptions:** None

## `language_processor.py`

### `choose_languages()`

- **Purpose:** Allows the user to select multiple languages for documentation generation.
- **Parameters:** None
- **Return Value:** (list) A list of selected languages.
- **Exceptions:**
    - `ValueError`: If the user provides an invalid language selection.

### `update_config(selected_languages)`

- **Purpose:** Updates the Starlight UI configuration to include the selected languages.
- **Parameters:**
    - `selected_languages`: (list) The list of selected languages.
- **Return Value:** None
- **Exceptions:** None

## `fe_builder.py`

### `copy_directory()`

- **Purpose:** Copies the Starlight UI directory to the parent directory.
- **Parameters:** None
- **Return Value:** None
- **Exceptions:** None


