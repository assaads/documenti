---
title: Components
description: Architectural diagrams of the main components of the Documenti system.
---

## High-Level Architecture

```
+---------------------+    +-----------------------+    +-----------------+
|     User Input      |--->|  Codebase Parser      |--->| Gemini Client  |
+---------------------+    +-----------------------+    +-----------------+
                       |                         ^      |                 |
                       |                         |      |                 |
                       v                         |      |                 v
                 +-----------------------+      |      +-----------------------+
                 | documentation_sections.json |------|  Documentation Processor  |
                 +-----------------------+      |      +-----------------------+
                                               |      |                 |
                                               |      |                 v
                                               |      +-------------+--------+
                                               |                  | Output  |
                                               +------------------+ Markdown +
                                                                 |  Files   |
                                                                 +-------------+
```

## Component Details

### User Input

- Provides the path to the codebase directory and the name of the project.
- Optionally chooses multiple languages for documentation generation.

### Codebase Parser (`code_parser.py`)

- Reads the codebase from the provided directory.
- Extracts relevant information, such as file paths, function definitions, and comments.
- Combines the extracted information into a single string.

### `documentation_sections.json`

- Defines the structure and sections of the documentation.
- Each key-value pair represents a section title and description.

### Gemini Client (`gemini_client.py`)

- Initializes a chat session with the Gemini AI model.
- Sends prompts to Gemini based on the codebase information and documentation structure.
- Receives responses from Gemini containing the generated documentation content.

### Documentation Processor (`documentation_processor.py`)

- Reads the `documentation_sections.json` file.
- Iterates through each section and sends a request to the Gemini Client.
- Processes the responses from Gemini and writes the generated content into Markdown files.

### Output Markdown Files

- The generated documentation is stored in Markdown files.
- Each section in the `documentation_sections.json` file corresponds to a separate Markdown file.

## External Dependencies

### Gemini AI

- Google's large language model, used for generating documentation content.

### Starlight UI (Optional)

- A documentation UI that can be used to present the generated Markdown files.

## Data Flow

1. The user provides input to the system.
2. The Codebase Parser analyzes the codebase and extracts relevant information.
3. The Documentation Processor reads the `documentation_sections.json` file.
4. For each section:
   - The Documentation Processor sends a request to the Gemini Client.
   - The Gemini Client sends a prompt to Gemini AI.
   - Gemini AI generates documentation content and sends it back to the Gemini Client.
   - The Gemini Client returns the response to the Documentation Processor.
   - The Documentation Processor writes the content into a Markdown file.
5. The generated Markdown files are saved in the output directory.
6. (Optional) The Starlight UI can be used to present the documentation website.


