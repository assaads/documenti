---
title: Documentación de clases y módulos
description: Documentación para cada clase y módulo en el código base de Documenti.
---

## `main.py`

Este módulo sirve como punto de entrada para la aplicación Documenti. Orquesta todo el proceso de generación de documentación, manejando la entrada del usuario, el análisis del código, el procesamiento de la documentación y la salida final.

### Funciones

- `main()`:
    - Esta función es el punto de entrada principal del script.
    - Solicita al usuario el directorio del código base y el nombre del proyecto.
    - Maneja el proceso de selección de idioma, permitiendo a los usuarios elegir varios idiomas para la documentación.
    - Inicializa el agente de IA de Gemini llamando a `init()` desde el módulo `gemini_client`.
    - Invoca la función `handler()` desde el módulo `documentation_processor` para generar documentación para cada idioma seleccionado.

## `code_parser.py`

Este módulo es responsable de analizar el código base proporcionado por el usuario y extraer información relevante para la generación de documentación.

### Funciones

- `generate_combined_file(codebase_directory)`:
    - Toma la ruta del directorio del código base como entrada.
    - Define listas de directorios y archivos para omitir durante el análisis.
    - Recorre el directorio del código base, leyendo cada archivo elegible y agregando su contenido a una cadena combinada.
    - Incluye rutas de archivo como comentarios en la cadena combinada para contexto.
    - Comprueba el recuento de líneas de la salida combinada para asegurarse de que no exceda el límite de entrada de la IA de Gemini.
    - Devuelve la cadena combinada del código base.

## `documentation_processor.py`

Este módulo maneja la interacción con el modelo de IA de Gemini y la generación de archivos de documentación.

### Funciones

- `handler(project_name, language="")`:
    - Carga la estructura de la documentación desde `documentation_sections.json`.
    - Crea la estructura del directorio de salida en función del nombre del proyecto y los idiomas seleccionados.
    - Llama a `process_dict()` para generar documentación para cada sección.

- `process_item(key, value, language)`:
    - Procesa pares clave-valor individuales de `documentation_sections.json`, que representan secciones y sus descripciones.
    - Construye una cadena de tema de sección combinando la clave y el valor.
    - Solicita documentación del modelo de IA de Gemini utilizando `request_documentation()` desde el módulo `gemini_client`.
    - Devuelve el contenido de la documentación generada.

- `process_dict(input_dict, process_func, output_dir, language)`:
    - Procesa recursivamente el diccionario de `documentation_sections.json`.
    - Para diccionarios anidados, crea subdirectorios en la estructura de salida.
    - Para pares clave-valor, llama al `process_func` proporcionado (generalmente `process_item`) para generar contenido de documentación.
    - Escribe el contenido generado en archivos Markdown en el directorio de salida apropiado.

## `gemini_client.py`

Este módulo gestiona la comunicación con el modelo de IA de Gemini a través de la API de Gemini.

### Funciones

- `init(codebase)`:
    - Inicializa el agente de IA de Gemini.
    - Define el formato de salida deseado para la IA utilizando `define_format()`.
    - Envía todo el código base a la IA utilizando `send_codebase()`.

- `define_format()`:
    - Envía una indicación al modelo de IA de Gemini, instruyéndolo sobre el formato esperado para la salida de la documentación.
    - Esto incluye especificar la estructura de Markdown, las variaciones de idioma y otras pautas de formato.

- `send_codebase(codebase: str)`:
    - Envía la cadena combinada del código base al modelo de IA de Gemini.
    - Esto proporciona a la IA el contexto de todo el código base para solicitudes de documentación posteriores.

- `request_documentation(documentation_subject: str, language: str)`:
    - Construye una indicación para el modelo de IA de Gemini solicitando documentación para una sección específica.
    - Incluye la descripción de la sección y el idioma deseado para la documentación.
    - Envía la indicación a la IA y devuelve el contenido de la documentación generada.

## `language_processor.py`

Este módulo maneja la selección de idioma y actualiza la configuración de la interfaz de usuario de Starlight en consecuencia.

### Funciones

- `choose_languages()`:
    - Presenta una lista de idiomas disponibles al usuario.
    - Solicita al usuario que seleccione los idiomas deseados para la generación de documentación.
    - Valida la selección del usuario.
    - Actualiza la configuración de la interfaz de usuario de Starlight utilizando `update_config()`.
    - Devuelve una lista de idiomas seleccionados.

- `update_config(selected_languages)`:
    - Modifica el archivo `astro.config.mjs` en el directorio de la interfaz de usuario de Starlight.
    - Agrega los idiomas seleccionados a la configuración regional de la interfaz de usuario, habilitando la compatibilidad con varios idiomas.

## `fe_builder.py`

Este módulo es responsable de copiar el directorio de la interfaz de usuario de Starlight al directorio principal.

### Funciones

- `copy_directory()`:
    - Copia todo el directorio de la interfaz de usuario de Starlight al directorio principal del proyecto Documenti.
    - Esto hace que la interfaz de usuario sea accesible para la integración con la documentación generada.

Estas descripciones de clases y módulos proporcionan una descripción general detallada del código base de Documenti, describiendo el propósito, las funcionalidades y las interacciones de cada componente. 
