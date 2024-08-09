---
title: FAQs
description: Frequently asked questions about Documenti.
---

## General

### What is Documenti?

Documenti is a command-line tool that leverages the power of Google's Gemini AI to automatically generate documentation for your codebase. It aims to simplify and streamline the process of creating comprehensive and informative documentation for software projects.

### How does Documenti work?

Documenti parses your codebase, extracts relevant information, and constructs prompts for the Gemini AI model. The AI model then generates documentation content based on the provided code and instructions. The generated content is formatted into Markdown files, which can be used to create a documentation website.

### What languages does Documenti support?

Documenti can generate documentation in multiple languages. You can select your desired languages during the documentation generation process. The default language is English.

### What are the prerequisites for using Documenti?

You need to have Python 3.7 or higher installed on your system. It's also recommended to use a virtual environment to manage project dependencies. You will also need a Gemini API key from Google Cloud.

### How do I install Documenti?

1. Clone the Documenti repository from GitHub.
2. Create and activate a virtual environment.
3. Install the dependencies listed in `requirements.txt`.
4. Set the `GEMINI_API_KEY` environment variable to your Gemini API key.

## Usage

### How do I customize the documentation structure?

You can customize the structure and content of your documentation by modifying the `documentation_sections.json` file. This file defines the sections to be included and their descriptions.

### Can I generate documentation for a specific part of my codebase?

Currently, Documenti processes the entire codebase provided as input. You can exclude specific files or directories by modifying the `skip_dirs` and `skip_files` lists in `code_parser.py`.

### How do I integrate Documenti with Starlight UI?

Documenti automatically copies the Starlight UI directory to the parent directory. You can then build and serve the UI using the commands provided in the Starlight documentation.

## Troubleshooting

### I'm getting authentication errors when connecting to the Gemini API.

- Ensure that you have set the `GEMINI_API_KEY` environment variable correctly.
- Verify that your API key is valid and has not expired.
- Check your network connectivity to ensure you can access Google Cloud services.

### The generated documentation is empty or incomplete for some sections.

- Provide more detailed and informative descriptions for the sections in `documentation_sections.json`.
- Experiment with different prompt structures and wording to guide the AI model more effectively.

### Documenti is taking a long time to generate documentation.

- Consider excluding unnecessary files or directories from the parsing process.
- If your codebase is very large, try splitting it into smaller chunks and generating documentation separately.

### I encountered an error that's not listed here. Where can I get help?

- Consult the Documenti documentation for more comprehensive troubleshooting information.
- Seek assistance from the Documenti community or submit an issue on the project's GitHub repository. 




