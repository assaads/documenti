---
title: Guías prácticas
description: Guías detalladas sobre cómo realizar tareas específicas con Documenti.
---

## Cómo personalizar la estructura de la documentación

Documenti te permite adaptar la estructura y el contenido de tu documentación generada para que se ajuste a tus necesidades específicas. Esta guía explicará cómo personalizar la estructura de la documentación utilizando el archivo `documentation_sections.json`.

### Comprender el archivo `documentation_sections.json`

El archivo `documentation_sections.json` es un archivo de configuración JSON que define las secciones y su orden en tu documentación. Cada clave en este archivo representa un título de sección, y el valor correspondiente es una descripción de esa sección. Esta descripción sirve como contexto para la IA de Gemini al generar el contenido de la documentación.

### Modificar secciones existentes

Puedes modificar la descripción de las secciones existentes para proporcionar más contexto a la IA. Por ejemplo, si tienes una sección titulada "Referencia de la API", puedes ampliar su descripción para especificar qué partes de la API deben documentarse:

```json
{
  "Referencia de la API": "Documentación detallada de la API pública, incluyendo clases, métodos y parámetros, con un enfoque en ejemplos de uso y fragmentos de código."
}
```

### Añadir nuevas secciones

Para añadir una nueva sección a tu documentación, simplemente añade un nuevo par clave-valor al archivo `documentation_sections.json`. Por ejemplo, podrías añadir una sección para "Directrices de contribución":

```json
{
  "Referencia de la API": "Documentación detallada de la API pública, incluyendo clases, métodos y parámetros, con un enfoque en ejemplos de uso y fragmentos de código.",
  "Directrices de contribución": "Directrices para contribuir al proyecto, incluyendo el estilo de codificación, la estrategia de ramificación y el proceso de solicitud de extracción."
}
```

### Reordenar secciones

El orden de las claves en el archivo `documentation_sections.json` determina el orden de las secciones en tu documentación generada. Puedes reorganizar las claves para cambiar el orden de las secciones.

### Generar documentación con la estructura personalizada

Después de realizar cambios en el archivo `documentation_sections.json`, vuelve a ejecutar el script `main.py`. Documenti generará la documentación basándose en la estructura y las descripciones actualizadas.

## Cómo generar documentación en varios idiomas

Documenti admite la generación de documentación en varios idiomas, lo que amplía su accesibilidad a un público más amplio. Esta guía te guiará a través del proceso de generación de documentación en varios idiomas.

### Elegir idiomas durante el tiempo de ejecución

Cuando ejecutes el script `main.py`, se te hará la siguiente pregunta: "¿Quieres elegir varios idiomas (el idioma predeterminado es el inglés)? (sí/no):". Introduce "sí" para habilitar la generación de documentación en varios idiomas.

A continuación, se te presentará una lista de idiomas disponibles. Selecciona los idiomas para los que quieres generar documentación introduciendo sus números correspondientes separados por comas. Por ejemplo, para generar documentación en inglés, español y alemán, introducirías "1,2,3".

### Salida específica del idioma

Documenti creará directorios separados para cada idioma seleccionado dentro del directorio de salida. Cada directorio de idioma contendrá los mismos archivos Markdown que la documentación en inglés, pero el contenido se generará en el idioma correspondiente.

### Actualizar la configuración de la interfaz de usuario de Starlight

Si estás utilizando la interfaz de usuario de Starlight para presentar tu documentación, debes actualizar su configuración para incluir los idiomas seleccionados. El script `language_processor.py` se encarga de esto automáticamente modificando el archivo `astro.config.mjs` en el directorio de la interfaz de usuario de Starlight.

### Revisar la documentación en varios idiomas

Después de que el script termine, puedes revisar la documentación generada en cada directorio específico del idioma.

## Cómo integrar Documenti con la interfaz de usuario de Starlight

Starlight es una interfaz de usuario de documentación fácil de usar que se puede utilizar para presentar la documentación generada por Documenti. Esta guía describe los pasos para integrar Documenti con Starlight.

### Copiar el directorio de la interfaz de usuario de Starlight

El script `fe_builder.py` es responsable de copiar el directorio de la interfaz de usuario de Starlight al directorio padre del proyecto Documenti. Esto asegura que la interfaz de usuario sea accesible para la integración.

### Actualizar la configuración de Starlight

El script `language_processor.py` actualiza automáticamente el archivo de configuración de Starlight (`astro.config.mjs`) para incluir los idiomas seleccionados para la generación de documentación.

### Construir la interfaz de usuario de Starlight

Una vez que se ha generado la documentación y se ha actualizado la configuración de Starlight, puedes construir la interfaz de usuario de Starlight utilizando los siguientes comandos dentro del directorio de la interfaz de usuario de Starlight:

```bash
npm install
npm run build
```

### Servir la interfaz de usuario de Starlight

A continuación, puedes servir la interfaz de usuario construida utilizando:

```bash
npm run preview
```

Esto iniciará un servidor de desarrollo local donde podrás acceder a tu sitio web de documentación.

### Personalizar la interfaz de usuario de Starlight

Starlight ofrece varias opciones de personalización, como la tematización y los ajustes de diseño. Consulta la documentación de Starlight para obtener más detalles sobre cómo personalizar la interfaz de usuario.
