---
title: Mejores prácticas
description: Guía sobre cómo utilizar Documenti de forma eficaz para obtener resultados óptimos.
---

## Escribir descripciones de secciones eficaces

La calidad de la documentación generada depende en gran medida de la claridad y el contexto proporcionados en el archivo `documentation_sections.json`. Aquí tienes algunos consejos para escribir descripciones de secciones eficaces:

- **Sea específico:** Indique claramente el propósito y el alcance de cada sección. Evite descripciones vagas o demasiado amplias.
- **Proporcione contexto:** Incluya información relevante sobre el código que se está documentando, como el propósito de la función, el rol de la clase o las funcionalidades del módulo.
- **Céntrese en las necesidades del usuario:** Tenga en cuenta el público objetivo de su documentación y adapte las descripciones a su nivel de comprensión y necesidades de información.
- **Utilice ejemplos:** Siempre que sea posible, proporcione ejemplos de lo que espera que cubra la documentación. Esto ayuda al modelo de IA de Gemini a comprender sus intenciones.

## Optimizar el código para la documentación

Si bien Documenti puede manejar varios estilos de código, seguir ciertas prácticas puede mejorar la calidad y la claridad de la documentación generada.

- **Comentarios significativos:** Escriba comentarios claros e informativos dentro de su código. Estos comentarios sirven como un contexto valioso para el modelo de IA de Gemini.
- **Nombres descriptivos:** Utilice nombres descriptivos para funciones, clases, variables y otros elementos del código. Esto hace que la documentación generada sea más legible y comprensible.
- **Estructura de código modular:** Organice su código en módulos y clases bien definidos. Esto facilita que el modelo de IA comprenda las relaciones entre las diferentes partes del código base.

## Gestión de bases de código grandes

Para bases de código grandes, considere estas estrategias para optimizar el proceso de generación de documentación:

- **Excluir archivos innecesarios:** Modifique las listas `skip_dirs` y `skip_files` en `code_parser.py` para excluir cualquier archivo o directorio que no sea relevante para la documentación.
- **Dividir el código base:** Si su código base es excepcionalmente grande, es posible que deba dividirlo en fragmentos más pequeños y manejables, y generar documentación por separado para cada fragmento.

## Consideraciones de seguridad

- **Proteja su clave de API:** Almacene su clave de API de Gemini de forma segura como una variable de entorno. Evite codificarla de forma rígida en su código fuente.
- **Implementación segura:** Si implementa Documenti en un entorno de producción, implemente medidas de seguridad adecuadas, como cortafuegos, autenticación y cifrado de datos.

## Optimización del rendimiento

- **Limitación de frecuencia:** Tenga en cuenta los límites de frecuencia impuestos por la API de Gemini. Implemente mecanismos para controlar la frecuencia de las solicitudes para evitar retrasos o errores.
- **Asignación de recursos:** Para cargas de trabajo exigentes, considere aumentar los recursos asignados al proceso de Documenti o utilizar una máquina más potente.

## Mantenerse actualizado

- **Actualizaciones de la API de Gemini:** Supervise la documentación de la API de Gemini para detectar cualquier actualización o cambio que pueda afectar a la funcionalidad de Documenti.
- **Actualizaciones de Documenti:** Esté atento a las nuevas versiones de Documenti que puedan incluir mejoras, correcciones de errores o nuevas funciones.

Siguiendo estas mejores prácticas, puede maximizar la eficacia de Documenti y generar documentación de alta calidad para sus proyectos de software.




