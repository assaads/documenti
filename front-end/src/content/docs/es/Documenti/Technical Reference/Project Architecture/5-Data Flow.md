---
title: Flujo de datos
description: Diagramas de arquitectura que ilustran el flujo de datos en el sistema Documenti.
---

## Diagrama de flujo de datos

```
+-----------+     +----------------+     +-----------------+     +--------------+     +-------------+
| Usuario      |---->| Entrada del código base |---->| Analizador del código base |---->| Cliente Gemini |---->| Gemini AI   |
+-----------+     +----------------+     +-----------------+     +--------------+     +-------------+
                  (Ruta del        |     (Información    |     (Indicaciones con  |     (Documentación   |
                  directorio del   |      extraída del   |    código y secciones)|    generada)      |
                  código base)      |      código)         |                     |      contenido)      |
                                     |                       |                     |                     |
                                     v                       v                     v                     |
                                +-----------------+     +-----------------+     +-----------------+     |
                                | Definiciones de  |---->| Construcción de |---->| Procesamiento de|-----+
                                |  secciones       |     |  indicaciones    |     |  respuestas     |
                                +-----------------+     +-----------------+     +-----------------+
                                     |                       |                     |
                                     v                       v                     v
                                +-----------------+     +-----------------+     +-------------+
                                |   Generación de  |---->| Archivos Markdown  |---->| Sitio web de  |
                                |  salida          |     |                 |     | documentación |
                                +-----------------+     +-----------------+     +-------------+
```

## Ciclo de vida de los datos

1. **Entrada del usuario:** El usuario proporciona la ruta del directorio del código base como entrada.

2. **Entrada del código base:** El sistema toma la ruta del directorio del código base como entrada.

3. **Análisis del código base:** El `Analizador del código base` procesa el código base y extrae información relevante como funciones, clases, comentarios, etc.

4. **Definiciones de secciones:** El archivo `documentation_sections.json` define la estructura y el contenido deseados de la documentación.

5. **Construcción de indicaciones:** Para cada sección, el sistema construye una indicación que contiene la información del código extraída y la descripción de la sección.

6. **Cliente Gemini:** El `Cliente Gemini` envía la indicación construida al modelo de IA Gemini.

7. **Gemini AI:** El modelo de IA Gemini procesa la indicación y genera contenido de documentación para el código y la sección dados.

8. **Procesamiento de respuestas:** El `Cliente Gemini` recibe el contenido generado de Gemini y lo devuelve al sistema.

9. **Generación de salida:** El sistema formatea el contenido recibido en archivos Markdown para cada sección.

10. **Archivos Markdown:** La documentación generada se almacena como archivos Markdown.

11. **Sitio web de documentación (opcional):** Los archivos Markdown se pueden utilizar para crear un sitio web de documentación utilizando una herramienta como Starlight UI.

## Transformaciones de datos

- **Código base a información extraída:** El `Analizador del código base` transforma el código base sin procesar en datos estructurados que contienen elementos de código relevantes.
- **Información extraída y definiciones de secciones a indicaciones:** El sistema combina la información del código extraída y las descripciones de las secciones para crear una indicación para Gemini AI.
- **Indicación a contenido generado:** El modelo de IA Gemini transforma la indicación en contenido de documentación legible por humanos.
- **Contenido generado a archivos Markdown:** El sistema transforma el contenido generado en archivos Markdown formateados.

El diagrama de flujo de datos y la descripción del ciclo de vida ilustran cómo se ingieren, procesan, transforman y finalmente se presentan los datos como documentación en el sistema Documenti.


