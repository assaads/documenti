---
title: Troubleshooting Guide
description: Solutions to common problems encountered while using Documenti.
---

## Gemini API Issues

### Authentication Errors

- **Problem:** You encounter errors related to authentication when Documenti tries to connect to the Gemini API.
- **Possible Causes:**
    - Incorrect or missing `GEMINI_API_KEY` environment variable.
    - Invalid API key.
    - Network connectivity issues preventing access to the Gemini API.
- **Solution:**
    1. **Verify API Key:** Double-check that you have set the `GEMINI_API_KEY` environment variable correctly and that the API key is valid. You can find your API key in the Google Cloud Console.
    2. **Check Network Connectivity:** Ensure that your machine has a stable internet connection and can access Google Cloud services.

### Rate Limiting

- **Problem:** You experience delays or errors due to rate limiting from the Gemini API.
- **Possible Causes:**
    - Sending too many requests to the API in a short period.
    - Exceeding your quota for the Gemini API.
- **Solution:**
    1. **Reduce Request Frequency:** Implement mechanisms to control the rate of requests sent to the Gemini API. You could introduce delays between requests or use a queueing system to spread out the workload.
    2. **Increase Quota:** If necessary, you can request a quota increase for the Gemini API through the Google Cloud Console.

## Code Parsing Errors

### File Reading Issues

- **Problem:** Documenti fails to read files from your codebase directory.
- **Possible Causes:**
    - Incorrect codebase directory path provided.
    - Insufficient file permissions.
    - File encoding issues.
- **Solution:**
    1. **Verify Codebase Path:** Ensure that the path to your codebase directory is accurate and that the directory exists.
    2. **Check File Permissions:** Make sure that the Documenti script has read permissions for all files in the codebase directory.
    3. **Adjust File Encoding:** If your codebase files use a different encoding than `ISO-8859-1`, modify the `encoding` parameter in `code_parser.py` to match the correct encoding.

### Excluded Files or Directories

- **Problem:** Certain files or directories are not included in the documentation generation process.
- **Possible Causes:**
    - The files or directories are listed in the `skip_dirs` or `skip_files` lists in `code_parser.py`.
- **Solution:**
    1. **Review Exclusions:** Check the `skip_dirs` and `skip_files` lists in `code_parser.py` and remove any entries for files or directories that you want to include in the documentation.

## Output Generation Problems

### Empty or Incomplete Documentation

- **Problem:** The generated documentation is empty or incomplete for certain sections.
- **Possible Causes:**
    - Insufficient context or unclear descriptions in the `documentation_sections.json` file.
    - Errors or limitations in the Gemini AI model's ability to understand the code.
- **Solution:**
    1. **Improve Section Descriptions:** Provide more detailed and informative descriptions for the sections in `documentation_sections.json`.
    2. **Refine Prompts:** Experiment with different prompt structures and wording to guide the Gemini AI model more effectively.

## Starlight UI Integration Issues

### Language Support Errors

- **Problem:** The Starlight UI does not display the selected languages correctly.
- **Possible Causes:**
    - Errors in the `language_processor.py` script's modification of `astro.config.mjs`.
- **Solution:**
    1. **Review Locale Configuration:** Check the `locales` section in `astro.config.mjs` and ensure that the entries for the selected languages are correct.

These troubleshooting tips address common issues encountered while using Documenti. If you face problems not covered here, consult the project's documentation or seek assistance from the community. 
