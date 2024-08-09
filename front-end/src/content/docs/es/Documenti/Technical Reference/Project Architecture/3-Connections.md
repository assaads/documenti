---
title: Conexiones
description: Diagramas de arquitectura que ilustran las interacciones entre componentes en Documenti.
---

## Diagrama de interacción de componentes

```
+---------------------+
|     Entrada del usuario      |
+---------------------+
       |
       | (Ruta del código base, Nombre del proyecto, Opciones de idioma)
       v
+-----------------------+
|  Analizador de código base      |
+-----------------------+
       |
       | (Cadena combinada del código base)
       v
+-----------------+    +-----------------------+
| Cliente Gemini  |<----|  Procesador de documentación  |
+-----------------+    +-----------------------+
       ^                |                       |
       |                |                       |
       | (Llamadas a la API)   |                       | (Solicitudes de documentación)
       |                |                       |
       |                v                       v
       |          +-----------------------+    +-----------------+
       +----------| documentation_sections.json |--->| Gemini AI      |
                  +-----------------------+    +-----------------+
                                                   |
                                                   | (Contenido de la documentación generada)
                                                   v
                                             +-------------+
                                             | Salida      |
                                             | Markdown    |
                                             |  Archivos      |
                                             +-------------+
```

## Detalles de la interacción

1. **Entrada del usuario:** El usuario inicia el proceso de generación de documentación proporcionando información al script `main.py`, incluida la ruta al directorio del código base, el nombre del proyecto y las opciones de idioma opcionales.

2. **Análisis del código base:** El `Analizador de código base` (`code_parser.py`) lee el código base del directorio especificado y extrae información relevante, combinándola en una única representación de cadena del código.

3. **Estructura de la documentación:** El `Procesador de documentación` (`documentation_processor.py`) lee el archivo `documentation_sections.json` para determinar la estructura y las secciones de la documentación.

4. **Solicitudes de documentación:** El `Procesador de documentación` itera a través de las secciones definidas en `documentation_sections.json` y envía solicitudes al `Cliente Gemini` (`gemini_client.py`) para cada sección.

5. **Interacción con Gemini AI:** El `Cliente Gemini` interactúa con el modelo de `Gemini AI` a través de llamadas a la API. Envía indicaciones que contienen la información del código base y las descripciones de las secciones, y recibe respuestas que contienen el contenido de la documentación generada.

6. **Procesamiento del contenido:** El `Procesador de documentación` recibe las respuestas del `Cliente Gemini`, procesa el contenido generado y lo escribe en archivos Markdown separados para cada sección.

7. **Archivos Markdown de salida:** La salida final es un conjunto de archivos Markdown que contienen la documentación generada, organizada de acuerdo con la estructura definida en `documentation_sections.json`.

## Flujo de datos

Las flechas en el diagrama indican la dirección del flujo de datos entre los componentes:

- La entrada del usuario fluye del usuario al script `main.py`.
- La cadena del código base fluye del `Analizador de código base` al `Cliente Gemini` y al `Procesador de documentación`.
- Las solicitudes de documentación fluyen del `Procesador de documentación` al `Cliente Gemini`.
- Las llamadas a la API fluyen entre el `Cliente Gemini` y `Gemini AI`.
- El contenido de la documentación generada fluye de `Gemini AI` de vuelta al `Cliente Gemini`.
- Los archivos Markdown finales se escriben en el directorio de salida.




