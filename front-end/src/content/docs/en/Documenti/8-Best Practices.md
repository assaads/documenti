---
title: Best Practices
description: Guidance on effectively using Documenti for optimal results.
---

## Writing Effective Section Descriptions

The quality of your generated documentation heavily relies on the clarity and context provided in the `documentation_sections.json` file. Here are some tips for writing effective section descriptions:

- **Be Specific:** Clearly state the purpose and scope of each section. Avoid vague or overly broad descriptions.
- **Provide Context:** Include relevant information about the code being documented, such as the function's purpose, the class's role, or the module's functionalities.
- **Focus on User Needs:** Consider the target audience for your documentation and tailor the descriptions to their level of understanding and information needs.
- **Use Examples:** Whenever possible, provide examples of what you expect the documentation to cover. This helps the Gemini AI model understand your intentions.

## Optimizing Code for Documentation

While Documenti can handle various code styles, following certain practices can improve the quality and clarity of the generated documentation.

- **Meaningful Comments:** Write clear and informative comments within your code. These comments serve as valuable context for the Gemini AI model.
- **Descriptive Naming:** Use descriptive names for functions, classes, variables, and other code elements. This makes the generated documentation more readable and understandable.
- **Modular Code Structure:** Organize your code into well-defined modules and classes. This makes it easier for the AI model to understand the relationships between different parts of the codebase.

## Managing Large Codebases

For large codebases, consider these strategies to optimize the documentation generation process:

- **Exclude Unnecessary Files:** Modify the `skip_dirs` and `skip_files` lists in `code_parser.py` to exclude any files or directories that are not relevant to the documentation.
- **Split Codebase:** If your codebase is exceptionally large, you might need to split it into smaller, more manageable chunks and generate documentation separately for each chunk.

## Security Considerations

- **Protect Your API Key:** Store your Gemini API key securely as an environment variable. Avoid hardcoding it in your source code.
- **Secure Deployment:** If deploying Documenti in a production environment, implement appropriate security measures, such as firewalls, authentication, and data encryption.

## Performance Optimization

- **Rate Limiting:** Be mindful of rate limits imposed by the Gemini API. Implement mechanisms to control the rate of requests to avoid delays or errors.
- **Resource Allocation:** For demanding workloads, consider increasing the resources allocated to the Documenti process or using a more powerful machine.

## Staying Up-to-Date

- **Gemini API Updates:** Monitor the Gemini API documentation for any updates or changes that might affect Documenti's functionality.
- **Documenti Updates:** Keep an eye out for new versions of Documenti that might include improvements, bug fixes, or new features.

By following these best practices, you can maximize the effectiveness of Documenti and generate high-quality documentation for your software projects. 
