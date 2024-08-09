---
title: Connections
description: Architectural diagrams illustrating component interactions in Documenti.
---

## Component Interaction Diagram

```
+---------------------+
|     User Input      |
+---------------------+
       |
       | (Codebase path, Project name, Language choices)
       v
+-----------------------+
|  Codebase Parser      |
+-----------------------+
       |
       | (Combined codebase string)
       v
+-----------------+    +-----------------------+
| Gemini Client  |<----|  Documentation Processor  |
+-----------------+    +-----------------------+
       ^                |                       |
       |                |                       |
       | (API Calls)   |                       | (Documentation requests)
       |                |                       |
       |                v                       v
       |          +-----------------------+    +-----------------+
       +----------| documentation_sections.json |--->| Gemini AI      |
                  +-----------------------+    +-----------------+
                                                   |
                                                   | (Generated documentation content)
                                                   v
                                             +-------------+
                                             | Output      |
                                             | Markdown    |
                                             |  Files      |
                                             +-------------+
```

## Interaction Details

1. **User Input:** The user initiates the documentation generation process by providing input to the `main.py` script, including the path to the codebase directory, the project name, and optional language choices.

2. **Codebase Parsing:** The `Codebase Parser` (`code_parser.py`) reads the codebase from the specified directory and extracts relevant information, combining it into a single string representation of the code.

3. **Documentation Structure:** The `Documentation Processor` (`documentation_processor.py`) reads the `documentation_sections.json` file to determine the structure and sections of the documentation.

4. **Documentation Requests:** The `Documentation Processor` iterates through the sections defined in `documentation_sections.json` and sends requests to the `Gemini Client` (`gemini_client.py`) for each section.

5. **Gemini AI Interaction:** The `Gemini Client` interacts with the `Gemini AI` model through API calls. It sends prompts containing the codebase information and section descriptions, and receives responses containing the generated documentation content.

6. **Content Processing:** The `Documentation Processor` receives the responses from the `Gemini Client`, processes the generated content, and writes it into separate Markdown files for each section.

7. **Output Markdown Files:** The final output is a set of Markdown files containing the generated documentation, organized according to the structure defined in `documentation_sections.json`.

## Data Flow

The arrows in the diagram indicate the direction of data flow between components:

- User input flows from the user to the `main.py` script.
- The codebase string flows from the `Codebase Parser` to the `Gemini Client` and `Documentation Processor`.
- Documentation requests flow from the `Documentation Processor` to the `Gemini Client`.
- API calls flow between the `Gemini Client` and `Gemini AI`.
- Generated documentation content flows from `Gemini AI` back to the `Gemini Client`.
- The final Markdown files are written to the output directory.


