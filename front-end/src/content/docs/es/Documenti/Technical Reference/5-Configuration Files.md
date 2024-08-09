---
title: Archivos de configuración
description: Documentación para los archivos de configuración utilizados en Documenti.
---

## documentation_sections.json

Este archivo JSON define la estructura y el contenido de la documentación generada por Documenti. Describe las secciones que se incluirán en la documentación y proporciona descripciones para cada sección.

### Estructura

El archivo consta de pares clave-valor, donde:

- **Clave:** Representa el título de la sección.
- **Valor:** Representa la descripción de la sección. Esta descripción sirve como contexto para el modelo de IA de Gemini al generar el contenido de la documentación.

### Ejemplo

```json
{
  "Descripción general": "Una descripción general de alto nivel del proyecto, que incluye su propósito, características clave y público objetivo.",
  "Instalación": "Instrucciones paso a paso sobre cómo instalar el proyecto, incluidos los requisitos previos y las dependencias.",
  "Referencia de la API": "Documentación detallada de la API pública, incluidas las clases, los métodos y los parámetros, con un enfoque en ejemplos de uso y fragmentos de código.",
  "Directrices de contribución": "Directrices para contribuir al proyecto, incluido el estilo de codificación, la estrategia de ramificación y el proceso de solicitud de extracción."
}
```

### Uso

- **Modificar secciones existentes:** Puede modificar las descripciones de las secciones existentes para proporcionar más contexto o cambiar el enfoque del contenido generado.
- **Agregar nuevas secciones:** Agregue nuevos pares clave-valor para introducir secciones adicionales a su documentación.
- **Reordenar secciones:** El orden de las claves en el archivo determina el orden de las secciones en la documentación generada.

## .env (Variables de entorno)

Si bien no es explícitamente un archivo de configuración en el proyecto, Documenti se basa en variables de entorno para obtener información confidencial.

### GEMINI_API_KEY

- **Propósito:** Almacena la clave de API para la autenticación con la API de Gemini.
- **Uso:** Establezca esta variable de entorno en su clave de API de Gemini. Se recomienda encarecidamente almacenar esta clave de forma segura y evitar codificarla de forma rígida en el código fuente.

### Ejemplo

```bash
export GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
```

## Configuración de la interfaz de usuario de Starlight (astro.config.mjs)

Aunque el usuario no lo modifica directamente, el script `language_processor.py` actualiza el archivo `astro.config.mjs` en el directorio de la interfaz de usuario de Starlight para configurar la compatibilidad con idiomas.

### locales

- **Propósito:** Define los idiomas admitidos para el sitio web de documentación.
- **Uso:** El script `language_processor.py` agrega automáticamente entradas para cada idioma seleccionado, especificando el código de idioma y la etiqueta.

### Ejemplo

```javascript
locales: {
  // Documentación en inglés en `src/content/docs/en/`
  'en': {
    label: 'English',
  },
  // Documentación en francés en `src/content/docs/fr/`
  'fr': {
    label: 'Français',
    lang: 'fr',
  },
  // Documentación en español en `src/content/docs/es/`
  'es': {
    label: 'Español',
    lang: 'es',
  },
},
```





