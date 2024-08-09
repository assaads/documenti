---
title: Guía de resolución de problemas
description: Soluciones a problemas comunes que se encuentran al usar Documenti.
---

## Problemas con la API de Gemini

### Errores de autenticación

- **Problema:** Encuentra errores relacionados con la autenticación cuando Documenti intenta conectarse a la API de Gemini.
- **Posibles causas:**
    - Variable de entorno `GEMINI_API_KEY` incorrecta o faltante.
    - Clave de API no válida.
    - Problemas de conectividad de red que impiden el acceso a la API de Gemini.
- **Solución:**
    1. **Verifique la clave de API:** Verifique que haya configurado correctamente la variable de entorno `GEMINI_API_KEY` y que la clave de API sea válida. Puede encontrar su clave de API en Google Cloud Console.
    2. **Compruebe la conectividad de red:** Asegúrese de que su máquina tenga una conexión a Internet estable y pueda acceder a los servicios de Google Cloud.

### Limitación de frecuencia

- **Problema:** Experimenta retrasos o errores debido a la limitación de frecuencia de la API de Gemini.
- **Posibles causas:**
    - Enviar demasiadas solicitudes a la API en un período corto.
    - Exceder su cuota para la API de Gemini.
- **Solución:**
    1. **Reduzca la frecuencia de las solicitudes:** Implemente mecanismos para controlar la frecuencia de las solicitudes enviadas a la API de Gemini. Puede introducir retrasos entre las solicitudes o utilizar un sistema de cola para distribuir la carga de trabajo.
    2. **Aumente la cuota:** Si es necesario, puede solicitar un aumento de cuota para la API de Gemini a través de Google Cloud Console.

## Errores de análisis de código

### Problemas de lectura de archivos

- **Problema:** Documenti no puede leer archivos del directorio de su código base.
- **Posibles causas:**
    - Ruta del directorio del código base proporcionada incorrecta.
    - Permisos de archivo insuficientes.
    - Problemas de codificación de archivos.
- **Solución:**
    1. **Verifique la ruta del código base:** Asegúrese de que la ruta al directorio de su código base sea precisa y que el directorio exista.
    2. **Compruebe los permisos de archivo:** Asegúrese de que el script de Documenti tenga permisos de lectura para todos los archivos del directorio del código base.
    3. **Ajuste la codificación del archivo:** Si los archivos de su código base utilizan una codificación diferente a `ISO-8859-1`, modifique el parámetro `encoding` en `code_parser.py` para que coincida con la codificación correcta.

### Archivos o directorios excluidos

- **Problema:** Ciertos archivos o directorios no se incluyen en el proceso de generación de documentación.
- **Posibles causas:**
    - Los archivos o directorios se enumeran en las listas `skip_dirs` o `skip_files` en `code_parser.py`.
- **Solución:**
    1. **Revise las exclusiones:** Compruebe las listas `skip_dirs` y `skip_files` en `code_parser.py` y elimine cualquier entrada para archivos o directorios que desee incluir en la documentación.

## Problemas de generación de salida

### Documentación vacía o incompleta

- **Problema:** La documentación generada está vacía o incompleta para ciertas secciones.
- **Posibles causas:**
    - Contexto insuficiente o descripciones poco claras en el archivo `documentation_sections.json`.
    - Errores o limitaciones en la capacidad del modelo de IA de Gemini para comprender el código.
- **Solución:**
    1. **Mejore las descripciones de las secciones:** Proporcione descripciones más detalladas e informativas para las secciones en `documentation_sections.json`.
    2. **Refine las indicaciones:** Experimente con diferentes estructuras de indicaciones y redacción para guiar al modelo de IA de Gemini de manera más eficaz.

## Problemas de integración con la interfaz de usuario de Starlight

### Errores de compatibilidad con idiomas

- **Problema:** La interfaz de usuario de Starlight no muestra correctamente los idiomas seleccionados.
- **Posibles causas:**
    - Errores en la modificación del script `language_processor.py` de `astro.config.mjs`.
- **Solución:**
    1. **Revise la configuración regional:** Compruebe la sección `locales` en `astro.config.mjs` y asegúrese de que las entradas para los idiomas seleccionados sean correctas.

Estos consejos para la resolución de problemas abordan los problemas comunes que se encuentran al utilizar Documenti. Si tiene problemas que no se tratan aquí, consulte la documentación del proyecto o busque ayuda de la comunidad. 




