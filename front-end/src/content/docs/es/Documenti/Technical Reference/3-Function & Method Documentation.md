---
title: Documentación de funciones y métodos
description: Documentación para cada función y método en el código base de Documenti.
---

## `main.py`

### `main()`

- **Propósito:** Orquesta el proceso de generación de documentación, manejando la entrada del usuario, el análisis del código y el procesamiento de la documentación.
- **Parámetros:** Ninguno
- **Valor de retorno:** Ninguno
- **Excepciones:** 
    - `ValueError`: Si el usuario proporciona una entrada no válida para la selección de idioma.

## `code_parser.py`

### `generate_combined_file(codebase_directory)`

- **Propósito:** Analiza el directorio del código base y combina el contenido de todos los archivos elegibles en una sola cadena.
- **Parámetros:**
    - `codebase_directory`: (cadena) La ruta al directorio que contiene el código base.
- **Valor de retorno:** (cadena) El contenido combinado de todos los archivos analizados, incluidas las rutas de archivo como comentarios.
- **Excepciones:**
    - `ValueError`: Si la salida combinada excede el límite de líneas para la entrada de la IA de Gemini.

## `documentation_processor.py`

### `handler(project_name, language="")`

- **Propósito:** Gestiona el proceso de generación de documentación para cada idioma seleccionado.
- **Parámetros:**
    - `project_name`: (cadena) El nombre del proyecto.
    - `language`: (cadena, opcional) El código de idioma para la documentación. El valor predeterminado es "".
- **Valor de retorno:** Ninguno
- **Excepciones:** Ninguno

### `process_item(key, value, language)`

- **Propósito:** Procesa una sola sección de documentación, solicitando contenido de la IA de Gemini.
- **Parámetros:**
    - `key`: (cadena) El título de la sección.
    - `value`: (cadena) La descripción de la sección.
    - `language`: (cadena) El código de idioma para la documentación.
- **Valor de retorno:** (cadena) El contenido de la documentación generada para la sección.
- **Excepciones:** Ninguno

### `process_dict(input_dict, process_func, output_dir, language)`

- **Propósito:** Procesa recursivamente el diccionario de estructura de la documentación, generando contenido y escribiendo en archivos.
- **Parámetros:**
    - `input_dict`: (diccionario) El diccionario de estructura de la documentación.
    - `process_func`: (función) La función a llamar para procesar secciones individuales (generalmente `process_item`).
    - `output_dir`: (cadena) El directorio de salida para los archivos Markdown generados.
    - `language`: (cadena) El código de idioma para la documentación.
- **Valor de retorno:** Ninguno
- **Excepciones:** Ninguno

## `gemini_client.py`

### `init(codebase)`

- **Propósito:** Inicializa el agente de IA de Gemini y envía el código base para contexto.
- **Parámetros:**
    - `codebase`: (cadena) La cadena combinada del código base.
- **Valor de retorno:** Ninguno
- **Excepciones:** Ninguno

### `define_format()`

- **Propósito:** Define el formato de salida para el modelo de IA de Gemini.
- **Parámetros:** Ninguno
- **Valor de retorno:** (cadena) La respuesta del modelo de IA.
- **Excepciones:** Ninguno

### `send_codebase(codebase: str)`

- **Propósito:** Envía el código base al modelo de IA de Gemini para contexto.
- **Parámetros:**
    - `codebase`: (cadena) La cadena combinada del código base.
- **Valor de retorno:** (cadena) La respuesta del modelo de IA.
- **Excepciones:** Ninguno

### `request_documentation(documentation_subject: str, language: str)`

- **Propósito:** Solicita documentación para una sección específica del modelo de IA de Gemini.
- **Parámetros:**
    - `documentation_subject`: (cadena) El tema de la sección, combinando el título y la descripción.
    - `language`: (cadena) El código de idioma para la documentación.
- **Valor de retorno:** (cadena) El contenido de la documentación generada para la sección.
- **Excepciones:** Ninguno

## `language_processor.py`

### `choose_languages()`

- **Propósito:** Permite al usuario seleccionar varios idiomas para la generación de documentación.
- **Parámetros:** Ninguno
- **Valor de retorno:** (lista) Una lista de idiomas seleccionados.
- **Excepciones:**
    - `ValueError`: Si el usuario proporciona una selección de idioma no válida.

### `update_config(selected_languages)`

- **Propósito:** Actualiza la configuración de la interfaz de usuario de Starlight para incluir los idiomas seleccionados.
- **Parámetros:**
    - `selected_languages`: (lista) La lista de idiomas seleccionados.
- **Valor de retorno:** Ninguno
- **Excepciones:** Ninguno

## `fe_builder.py`

### `copy_directory()`

- **Propósito:** Copia el directorio de la interfaz de usuario de Starlight al directorio principal.
- **Parámetros:** Ninguno
- **Valor de retorno:** Ninguno
- **Excepciones:** Ninguno




