---
title: Conceptos
description: Conceptos clave, arquitectura y principios de diseño del proyecto Documenti.
---

## Conceptos principales

Documenti se basa en la idea de automatizar la documentación del código utilizando el poder de los modelos lingüísticos de gran tamaño (LLM). Su objetivo es simplificar y agilizar el proceso de generación de documentación completa para proyectos de software.

### Documentación impulsada por IA

- **Aprovechamiento de los LLM:** Documenti utiliza Gemini AI de Google, un potente LLM, para comprender el código y generar documentación legible por humanos.
- **Ingeniería de indicaciones:** El núcleo de la funcionalidad de Documenti radica en la construcción de indicaciones eficaces que proporcionen al LLM el contexto y las instrucciones necesarias para generar documentación relevante.

### Estructura personalizable

- **Flexibilidad:** Documenti permite a los usuarios definir la estructura y el contenido de su documentación a través de un archivo de configuración `documentation_sections.json`.
- **Salida personalizada:** Esta flexibilidad permite a los usuarios generar documentación que se ajusta a las necesidades y preferencias específicas de su proyecto.

### Compatibilidad con varios idiomas

- **Accesibilidad:** Documenti admite la generación de documentación en varios idiomas, lo que la hace accesible a un público más amplio.
- **Configuración regional:** El módulo `language_processor.py` se encarga de la selección de idiomas y actualiza la configuración de la interfaz de usuario de Starlight para que sea compatible con los idiomas elegidos.

## Arquitectura

Documenti sigue una arquitectura modular, con distintos componentes responsables de tareas específicas:

- **Analizador de código base:** Extrae información relevante del código base.
- **Procesador de documentación:** Gestiona la comunicación con el modelo de IA de Gemini y genera el contenido de la documentación.
- **Cliente de Gemini:** Gestiona las interacciones con la API de Gemini.
- **Procesador de idiomas:** Facilita la compatibilidad con varios idiomas.
- **Integración con la interfaz de usuario de Starlight:** Permite presentar la documentación generada en una interfaz web fácil de usar.

## Principios de diseño

### Automatización

- **Reducir el esfuerzo manual:** Documenti se esfuerza por automatizar la mayor parte posible del proceso de documentación, minimizando la necesidad de escritura manual.
- **Eficiencia:** Al automatizar tareas repetitivas, Documenti permite a los desarrolladores centrarse en otros aspectos de sus proyectos.

### Simplicidad

- **Interfaz fácil de usar:** Documenti proporciona una interfaz de línea de comandos sencilla, lo que facilita su uso.
- **Configuración clara:** El archivo `documentation_sections.json` ofrece una forma sencilla e intuitiva de definir la estructura de la documentación.

### Extensibilidad

- **Diseño modular:** La arquitectura modular de Documenti permite futuras extensiones e integraciones con otras herramientas o servicios.
- **Personalización:** La capacidad de personalizar la estructura y el contenido de la documentación proporciona flexibilidad para diversas necesidades del proyecto.

## Conclusión

Documenti encarna los principios de automatización, simplicidad y extensibilidad en su enfoque de la documentación del código. Al aprovechar las capacidades de los LLM y proporcionar una interfaz fácil de usar, Documenti tiene como objetivo capacitar a los desarrolladores para crear documentación de alta calidad con un esfuerzo mínimo.


