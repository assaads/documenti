---
title: Error Codes and Messages
description: Explanation of error codes and messages in Documenti.
---

## `ValueError`

### Invalid Language Selection

- **Message:** "Invalid option. Please enter 'yes'/'y' or 'no'/'n'."
- **Meaning:** This error occurs when the user provides an invalid input when asked about choosing multiple languages during the documentation generation process.
- **User Action:** Ensure you enter either "yes" or "no" (or their respective abbreviations "y" or "n") when prompted for language selection.

### Invalid Language Index

- **Message:** "Invalid option: {i}. Please enter numbers between 1 and {len(languages)}."
- **Meaning:** This error arises when the user enters an invalid number while selecting languages from the displayed list. 
- **User Action:** Review the list of available languages and their corresponding numbers. Enter only valid numbers separated by commas when prompted for language selection.

### Codebase Line Limit Exceeded

- **Message:** "The combined output of the codebase has {num_lines} lines, which exceeds the limit of 29000 lines."
- **Meaning:** This error indicates that the combined content of your codebase, after parsing, exceeds the maximum input limit for the Gemini AI model.
- **User Action:** Consider reducing the size of your codebase by excluding unnecessary files or directories during the parsing process. You can modify the `skip_dirs` and `skip_files` lists in `code_parser.py` to exclude specific files or directories. Alternatively, you could explore splitting your codebase into smaller chunks and generating documentation separately for each chunk.

## File Reading Errors

While not explicitly handled with specific error codes, Documenti may encounter errors while reading codebase files.

### `Could not read file {file_path}. Error: {e}`

- **Meaning:** This message is printed to the console when the `code_parser` encounters an error while attempting to read a file from the codebase directory. The specific error message (`{e}`) provides details about the encountered issue.
- **User Action:** 
    - **Check File Path:** Verify that the file path is correct and the file exists.
    - **Check File Permissions:** Ensure that the Documenti script has sufficient permissions to read the file.
    - **Check File Encoding:** The script attempts to read files using `ISO-8859-1` encoding. If your files use a different encoding, you might need to modify the `encoding` parameter in `code_parser.py`.


