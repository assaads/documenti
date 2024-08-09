---
title: Preguntas frecuentes
description: Preguntas frecuentes sobre Documenti.
---

## General

### ¿Qué es Documenti?

Documenti es una herramienta de línea de comandos que aprovecha el poder de la IA de Gemini de Google para generar automáticamente documentación para su código base. Su objetivo es simplificar y agilizar el proceso de creación de documentación completa e informativa para proyectos de software.

### ¿Cómo funciona Documenti?

Documenti analiza su código base, extrae información relevante y construye indicaciones para el modelo de IA de Gemini. Luego, el modelo de IA genera contenido de documentación basado en el código y las instrucciones proporcionados. El contenido generado se formatea en archivos Markdown, que se pueden utilizar para crear un sitio web de documentación.

### ¿Qué idiomas admite Documenti?

Documenti puede generar documentación en varios idiomas. Puede seleccionar los idiomas deseados durante el proceso de generación de documentación. El idioma predeterminado es el inglés.

### ¿Cuáles son los requisitos previos para utilizar Documenti?

Necesita tener Python 3.7 o superior instalado en su sistema. También se recomienda utilizar un entorno virtual para gestionar las dependencias del proyecto. También necesitará una clave de API de Gemini de Google Cloud.

### ¿Cómo instalo Documenti?

1. Clone el repositorio de Documenti desde GitHub.
2. Cree y active un entorno virtual.
3. Instale las dependencias enumeradas en `requirements.txt`.
4. Configure la variable de entorno `GEMINI_API_KEY` con su clave de API de Gemini.

## Uso

### ¿Cómo personalizo la estructura de la documentación?

Puede personalizar la estructura y el contenido de su documentación modificando el archivo `documentation_sections.json`. Este archivo define las secciones que se incluirán y sus descripciones.

### ¿Puedo generar documentación para una parte específica de mi código base?

Actualmente, Documenti procesa todo el código base proporcionado como entrada. Puede excluir archivos o directorios específicos modificando las listas `skip_dirs` y `skip_files` en `code_parser.py`.

### ¿Cómo integro Documenti con la interfaz de usuario de Starlight?

Documenti copia automáticamente el directorio de la interfaz de usuario de Starlight al directorio principal. Luego, puede compilar y servir la interfaz de usuario utilizando los comandos proporcionados en la documentación de Starlight.

## Resolución de problemas

### Estoy recibiendo errores de autenticación al conectarme a la API de Gemini.

- Asegúrese de haber configurado correctamente la variable de entorno `GEMINI_API_KEY`.
- Verifique que su clave de API sea válida y no haya caducado.
- Compruebe su conectividad de red para asegurarse de que puede acceder a los servicios de Google Cloud.

### La documentación generada está vacía o incompleta para algunas secciones.

- Proporcione descripciones más detalladas e informativas para las secciones en `documentation_sections.json`.
- Experimente con diferentes estructuras de indicaciones y redacción para guiar al modelo de IA de manera más eficaz.

### Documenti tarda mucho tiempo en generar documentación.

- Considere excluir archivos o directorios innecesarios del proceso de análisis.
- Si su código base es muy grande, intente dividirlo en fragmentos más pequeños y generar documentación por separado.

### Encontré un error que no está en la lista. ¿Dónde puedo obtener ayuda?

- Consulte la documentación de Documenti para obtener información más completa sobre la resolución de problemas.
- Busque ayuda de la comunidad de Documenti o envíe un problema en el repositorio de GitHub del proyecto.






