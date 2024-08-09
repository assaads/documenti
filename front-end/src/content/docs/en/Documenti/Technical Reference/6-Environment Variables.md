---
title: Environment Variables
description: Documentation for environment variables used in Documenti.
---

## `GEMINI_API_KEY`

- **Purpose:** Stores the API key required for authenticating with the Gemini API. Documenti uses this key to interact with Google's large language models and generate documentation content.
- **How to Set:**
    - **Linux/macOS:** Add the following line to your `.bashrc` or `.zshrc` file, replacing `"YOUR_GEMINI_API_KEY"` with your actual API key: 
        ```bash
        export GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
        ```
    - **Windows:**
        1. Search for "Environment Variables" in the Start Menu.
        2. Click on "Edit the system environment variables."
        3. Click the "Environment Variables" button.
        4. Under "System Variables," click "New."
        5. Enter `GEMINI_API_KEY` as the variable name and your API key as the variable value.
        6. Click "OK" on all open windows.
- **Default Value:** None. This environment variable is mandatory and must be set for Documenti to function.



