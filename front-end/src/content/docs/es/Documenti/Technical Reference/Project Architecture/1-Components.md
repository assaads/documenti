---
title: Componentes
description: Diagramas de arquitectura de los principales componentes del sistema Documenti.
---

## Arquitectura de alto nivel

```
+---------------------+    +-----------------------+    +-----------------+
|     Entrada del usuario      |--->|  Analizador de código base      |--->| Cliente Gemini  |
+---------------------+    +-----------------------+    +-----------------+
                       |                         ^      |                 |
                       |                         |      |                 |
                       v                         |      |                 v
                 +-----------------------+      |      +-----------------------+
                 | documentation_sections.json |------|  Procesador de documentación  |
                 +-----------------------+      |      +-----------------------+
                                               |      |                 |
                                               |      |                 v
                                               |      +-------------+--------+
                                               |                  | Salida  |
                                               +------------------+ Markdown +
                                                                 |  Archivos   |
                                                                 +-------------+
```

## Detalles del componente

### Entrada del usuario

- Proporciona la ruta al directorio del código base y el nombre del proyecto.
- Opcionalmente, elige varios idiomas para la generación de documentación.

### Analizador de código base (`code_parser.py`)

- Lee el código base del directorio proporcionado.
- Extrae información relevante, como rutas de archivos, definiciones de funciones y comentarios.
- Combina la información extraída en una sola cadena.

### `documentation_sections.json`

- Define la estructura y las secciones de la documentación.
- Cada par clave-valor representa un título de sección y una descripción.

### Cliente Gemini (`gemini_client.py`)

- Inicializa una sesión de chat con el modelo de IA Gemini.
- Envía indicaciones a Gemini en función de la información del código base y la estructura de la documentación.
- Recibe respuestas de Gemini que contienen el contenido de la documentación generada.

### Procesador de documentación (`documentation_processor.py`)

- Lee el archivo `documentation_sections.json`.
- Itera a través de cada sección y envía una solicitud al Cliente Gemini.
- Procesa las respuestas de Gemini y escribe el contenido generado en archivos Markdown.

### Archivos Markdown de salida

- La documentación generada se almacena en archivos Markdown.
- Cada sección del archivo `documentation_sections.json` corresponde a un archivo Markdown separado.

## Dependencias externas

### Gemini AI

- Modelo de lenguaje grande de Google, utilizado para generar contenido de documentación.

### Interfaz de usuario de Starlight (opcional)

- Una interfaz de usuario de documentación que se puede utilizar para presentar los archivos Markdown generados.

## Flujo de datos

1. El usuario proporciona información al sistema.
2. El Analizador de código base analiza el código base y extrae información relevante.
3. El Procesador de documentación lee el archivo `documentation_sections.json`.
4. Para cada sección:
   - El Procesador de documentación envía una solicitud al Cliente Gemini.
   - El Cliente Gemini envía una indicación a Gemini AI.
   - Gemini AI genera contenido de documentación y lo envía de vuelta al Cliente Gemini.
   - El Cliente Gemini devuelve la respuesta al Procesador de documentación.
   - El Procesador de documentación escribe el contenido en un archivo Markdown.
5. Los archivos Markdown generados se guardan en el directorio de salida.
6. (Opcional) La interfaz de usuario de Starlight se puede utilizar para presentar el sitio web de documentación.


