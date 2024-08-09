---
title: Class & Module Documentation
description: Documentation for each class and module in the Documenti codebase.
---

## `main.py`

This module serves as the entry point for the Documenti application. It orchestrates the entire documentation generation process, handling user input, code parsing, documentation processing, and final output.

### Functions

- `main()`:
    - This function is the main entry point of the script.
    - It prompts the user for the codebase directory and project name.
    - It handles the language selection process, allowing users to choose multiple languages for documentation.
    - It initializes the Gemini AI agent by calling `init()` from the `gemini_client` module.
    - It invokes the `handler()` function from the `documentation_processor` module to generate documentation for each selected language.

## `code_parser.py`

This module is responsible for parsing the user-provided codebase and extracting relevant information for documentation generation.

### Functions

- `generate_combined_file(codebase_directory)`:
    - Takes the codebase directory path as input.
    - Defines lists of directories and files to skip during parsing.
    - Traverses the codebase directory, reading each eligible file and appending its content to a combined string.
    - Includes file paths as comments in the combined string for context.
    - Checks the line count of the combined output to ensure it doesn't exceed the Gemini AI's input limit.
    - Returns the combined codebase string.

## `documentation_processor.py`

This module handles the interaction with the Gemini AI model and the generation of documentation files.

### Functions

- `handler(project_name, language="")`:
    - Loads the documentation structure from `documentation_sections.json`.
    - Creates the output directory structure based on the project name and selected languages.
    - Calls `process_dict()` to generate documentation for each section.

- `process_item(key, value, language)`:
    - Processes individual key-value pairs from `documentation_sections.json`, representing sections and their descriptions.
    - Constructs a section topic string combining the key and value.
    - Requests documentation from the Gemini AI model using `request_documentation()` from the `gemini_client` module.
    - Returns the generated documentation content.

- `process_dict(input_dict, process_func, output_dir, language)`:
    - Recursively processes the dictionary from `documentation_sections.json`.
    - For nested dictionaries, creates subdirectories in the output structure.
    - For key-value pairs, calls the provided `process_func` (usually `process_item`) to generate documentation content.
    - Writes the generated content to Markdown files in the appropriate output directory.

## `gemini_client.py`

This module manages the communication with the Gemini AI model through the Gemini API.

### Functions

- `init(codebase)`:
    - Initializes the Gemini AI agent.
    - Defines the desired output format for the AI using `define_format()`.
    - Sends the entire codebase to the AI using `send_codebase()`.

- `define_format()`:
    - Sends a prompt to the Gemini AI model, instructing it on the expected format for documentation output.
    - This includes specifying the Markdown structure, language variations, and other formatting guidelines.

- `send_codebase(codebase: str)`:
    - Sends the combined codebase string to the Gemini AI model.
    - This provides the AI with the context of the entire codebase for subsequent documentation requests.

- `request_documentation(documentation_subject: str, language: str)`:
    - Constructs a prompt for the Gemini AI model requesting documentation for a specific section.
    - Includes the section description and the desired language for the documentation.
    - Sends the prompt to the AI and returns the generated documentation content.

## `language_processor.py`

This module handles language selection and updates the Starlight UI configuration accordingly.

### Functions

- `choose_languages()`:
    - Presents a list of available languages to the user.
    - Prompts the user to select desired languages for documentation generation.
    - Validates the user's selection.
    - Updates the Starlight UI configuration using `update_config()`.
    - Returns a list of selected languages.

- `update_config(selected_languages)`:
    - Modifies the `astro.config.mjs` file in the Starlight UI directory.
    - Adds the selected languages to the UI's locale configuration, enabling multi-language support.

## `fe_builder.py`

This module is responsible for copying the Starlight UI directory to the parent directory.

### Functions

- `copy_directory()`:
    - Copies the entire Starlight UI directory to the parent directory of the Documenti project.
    - This makes the UI accessible for integration with the generated documentation.

These class and module descriptions provide a detailed overview of the Documenti codebase, outlining the purpose, functionalities, and interactions of each component. 
