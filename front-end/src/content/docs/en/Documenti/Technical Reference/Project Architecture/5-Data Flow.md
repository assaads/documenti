---
title: Data Flow
description: Architectural diagrams illustrating data flow in the Documenti system.
---

## Data Flow Diagram

```
+-----------+     +----------------+     +-----------------+     +--------------+     +-------------+
| User      |---->| Codebase Input |---->| Codebase Parser |---->| Gemini Client |---->| Gemini AI   |
+-----------+     +----------------+     +-----------------+     +--------------+     +-------------+
                  (Codebase        |     (Extracted code  |     (Prompts with  |     (Generated    |
                  directory path)   |      information)     |    code & sections)|    documentation   |
                                     |                       |                     |      content)      |
                                     v                       v                     v                     |
                                +-----------------+     +-----------------+     +-----------------+     |
                                | Section         |---->| Prompt           |---->| Response        |-----+
                                | Definitions    |     | Construction     |     | Processing      |
                                +-----------------+     +-----------------+     +-----------------+
                                     |                       |                     |
                                     v                       v                     v
                                +-----------------+     +-----------------+     +-------------+
                                |   Output        |---->| Markdown Files  |---->| Documentation |
                                |  Generation     |     |                 |     |   Website    |
                                +-----------------+     +-----------------+     +-------------+
```

## Data Lifecycle

1. **User Input:** The user provides the codebase directory path as input.

2. **Codebase Input:** The system takes the codebase directory path as input.

3. **Codebase Parsing:** The `Codebase Parser` processes the codebase and extracts relevant information like functions, classes, comments, etc.

4. **Section Definitions:** The `documentation_sections.json` file defines the desired structure and content of the documentation.

5. **Prompt Construction:** For each section, the system constructs a prompt containing the extracted code information and the section description.

6. **Gemini Client:** The `Gemini Client` sends the constructed prompt to the Gemini AI model.

7. **Gemini AI:** The Gemini AI model processes the prompt and generates documentation content for the given code and section.

8. **Response Processing:** The `Gemini Client` receives the generated content from Gemini and passes it back to the system.

9. **Output Generation:** The system formats the received content into Markdown files for each section.

10. **Markdown Files:** The generated documentation is stored as Markdown files.

11. **Documentation Website (Optional):** The Markdown files can be used to create a documentation website using a tool like Starlight UI.

## Data Transformations

- **Codebase to Extracted Information:** The `Codebase Parser` transforms the raw codebase into structured data containing relevant code elements.
- **Extracted Information and Section Definitions to Prompt:** The system combines the extracted code information and section descriptions to create a prompt for Gemini AI.
- **Prompt to Generated Content:** The Gemini AI model transforms the prompt into human-readable documentation content.
- **Generated Content to Markdown Files:** The system transforms the generated content into formatted Markdown files.

The data flow diagram and lifecycle description illustrate how data is ingested, processed, transformed, and ultimately presented as documentation in the Documenti system. 
