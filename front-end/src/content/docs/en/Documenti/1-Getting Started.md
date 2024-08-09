---
title: Getting Started
description: A guide on how to install, set up, and quickly get started with using Documenti.
---

## Prerequisites

Before getting started with Documenti, ensure you have the following prerequisites installed on your system:

- **Python 3.7 or higher:** Documenti is built using Python, so you need to have a compatible version installed. 
- **Virtual Environment (Recommended):** It's highly recommended to use a virtual environment to manage project dependencies and avoid conflicts with other Python projects.
- **Text Editor or IDE:** Choose your preferred text editor or IDE for working with the code and configuration files.

## Installation

Follow these steps to install Documenti and its dependencies:

1. **Clone the Repository:** Clone the Documenti repository from GitHub to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/Documenti.git 
   ```

   Replace `your-username` with the actual username of the repository.

2. **Create a Virtual Environment:** Navigate to the cloned repository directory and create a virtual environment using the `venv` module:

   ```bash
   cd Documenti
   python3 -m venv venv 
   ```

3. **Activate the Virtual Environment:** Activate the virtual environment using the appropriate command for your operating system:

   - **Linux/macOS:**
     ```bash
     source venv/bin/activate
     ```
   - **Windows:**
     ```bash
     venv\Scripts\activate
     ```

4. **Install Dependencies:** Install the required packages listed in the `requirements.txt` file using `pip`:

   ```bash
   pip install -r requirements.txt
   ```

## Setting Up

1. **Obtain a Gemini API Key:**
   - Sign up for a Google Cloud account and enable the Gemini API.
   - Create an API key and note it down securely.

2. **Set the Environment Variable:**
   - Set the `GEMINI_API_KEY` environment variable to your Gemini API key.
   - You can do this by adding the following line to your `.bashrc` or `.zshrc` file (for Linux/macOS) or your system environment variables (for Windows):

     ```bash
     export GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
     ```

   - Replace `"YOUR_GEMINI_API_KEY"` with your actual API key.

## Quick Start

1. **Prepare Your Codebase:** Ensure your codebase is organized in a directory structure that Documenti can parse.
2. **Define Documentation Structure:** Modify the `documentation_sections.json` file to define the desired structure and sections for your documentation.
3. **Run Documenti:** Execute the `main.py` script to start the documentation generation process:

   ```bash
   python main.py
   ```

   - You will be prompted to enter the path to your codebase directory and the name of your project.
   - You can also choose to generate documentation in multiple languages.

4. **Access Documentation:** Once the process is complete, you can access your generated documentation in the specified output directory.

## Basic Usage Example

Here's a basic example of how to use Documenti:

1. **Define a Simple `documentation_sections.json`:**

   ```json
   {
     "Overview": "A general overview of the project.",
     "API Reference": "Documentation of the project's API."
   }
   ```

2. **Run `main.py`:**

   ```bash
   python main.py
   ```

   - Enter the path to your codebase directory.
   - Enter the project name (e.g., "MyProject").

3. **Output:** Documenti will generate two Markdown files:
   - `1-Overview.md` containing the overview documentation.
   - `2-API Reference.md` containing the API reference documentation.

These files will be located in a directory named "MyProject" within the output directory.
