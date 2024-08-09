---
title: Tutoriales
description: Guías paso a paso para ayudarte a comprender cómo utilizar las diferentes funciones de Documenti.
---

## Tutorial 1: Generar documentación básica

Este tutorial te guiará a través del proceso de generar documentación básica para tu base de código utilizando Documenti.

### Paso 1: Prepara tu base de código

Asegúrate de que tu base de código esté organizada en una estructura de directorios que Documenti pueda analizar. Esto significa tener tus archivos de código fuente en un directorio bien definido. Por ejemplo:

```
mi-proyecto/
  - src/
    - main.py
    - utils.py
  - tests/
    - test_main.py
```

### Paso 2: Define un archivo `documentation_sections.json` simple

Crea un archivo `documentation_sections.json` en el directorio raíz del proyecto Documenti. Este archivo define la estructura y las secciones de tu documentación. Para este tutorial, crearemos una estructura simple con dos secciones:

```json
{
  "Descripción general": "Una descripción general del proyecto.",
  "Estructura del código": "Descripción de la organización del código del proyecto."
}
```

### Paso 3: Ejecuta Documenti

Abre tu terminal, navega hasta el directorio del proyecto Documenti y ejecuta el script `main.py`:

```bash
python main.py
```

Se te pedirá que introduzcas la siguiente información:

- **Ruta al directorio de la base de código:** Introduce la ruta relativa al directorio que contiene tu base de código. Por ejemplo, si tu base de código está en `mi-proyecto/`, y estás ejecutando el script desde el directorio `Documenti`, deberías introducir `../mi-proyecto/`.
- **Nombre del proyecto:** Introduce un nombre para tu proyecto. Este se utilizará para crear un directorio para tu documentación. Por ejemplo, podrías introducir "MiProyecto".

### Paso 4: Revisa la documentación generada

Una vez que el script termine de ejecutarse, encontrarás la documentación generada en el directorio de salida. De forma predeterminada, este es `../front-end/src/content/docs/`. Dentro de este directorio, habrá una carpeta con el nombre de tu proyecto (por ejemplo, "MiProyecto"). Dentro de esta carpeta, encontrarás dos archivos Markdown:

- `1-Descripción general.md`: Contiene la documentación para la sección "Descripción general".
- `2-Estructura del código.md`: Contiene la documentación para la sección "Estructura del código".

Puedes abrir estos archivos en un editor o visor de Markdown para revisar el contenido generado.

## Tutorial 2: Generar documentación en varios idiomas

Este tutorial te mostrará cómo generar documentación en varios idiomas utilizando Documenti.

### Paso 1: Elegir idiomas

Al ejecutar `main.py`, se te preguntará: "¿Quieres elegir varios idiomas (el idioma predeterminado es inglés)? (sí/no):". Introduce "sí" para seleccionar idiomas adicionales.

A continuación, se te presentará una lista de idiomas disponibles. Introduce los números correspondientes a tus idiomas deseados, separados por comas. Por ejemplo, para generar documentación en inglés, francés y español, deberías introducir "1,4,2".

### Paso 2: Revisa la documentación generada

Documenti generará carpetas de documentación separadas para cada idioma seleccionado. Por ejemplo, si elegiste inglés, francés y español, encontrarás tres carpetas en el directorio de salida:

- `en/MiProyecto`: Contiene la documentación en inglés.
- `fr/MiProyecto`: Contiene la documentación en francés.
- `es/MiProyecto`: Contiene la documentación en español.

Cada carpeta de idioma contendrá los mismos archivos Markdown que en el Tutorial 1, pero el contenido se generará en el idioma correspondiente.

## Tutorial 3: Personalizar la estructura de la documentación

Este tutorial demostrará cómo personalizar la estructura y el contenido de tu documentación modificando el archivo `documentation_sections.json`.

### Paso 1: Añadir o modificar secciones

Puedes añadir nuevas secciones o modificar las existentes en el archivo `documentation_sections.json`. Por ejemplo, podrías añadir una sección para "Instrucciones de instalación":

```json
{
  "Descripción general": "Una descripción general del proyecto.",
  "Estructura del código": "Descripción de la organización del código del proyecto.",
  "Instrucciones de instalación": "Pasos sobre cómo instalar el proyecto."
}
```

### Paso 2: Proporcionar descripciones más detalladas

En lugar de solo un título de sección, puedes proporcionar una descripción más detallada para cada sección en el archivo `documentation_sections.json`. Esta descripción será utilizada por la IA de Gemini como contexto al generar el contenido de la documentación. Por ejemplo:

```json
{
  "Descripción general": "Una descripción general de alto nivel del proyecto, incluyendo su propósito, características clave y público objetivo.",
  "Estructura del código": "Una descripción detallada de la organización del código del proyecto, incluyendo módulos, clases y funciones.",
  "Instrucciones de instalación": "Instrucciones paso a paso sobre cómo instalar el proyecto, incluyendo requisitos previos y dependencias."
}
```

### Paso 3: Revisa la documentación generada

Después de modificar el archivo `documentation_sections.json`, vuelve a ejecutar el script `main.py`. Documenti generará la documentación basándose en la estructura y las descripciones actualizadas.