---
title: Escalabilidad
description: Diagramas de arquitectura que muestran cómo la arquitectura del código base de Documenti está diseñada para escalar.
---

Si bien la arquitectura actual de Documenti no está diseñada explícitamente para implementaciones a gran escala, se puede escalar para manejar cargas de trabajo mayores con algunas modificaciones. Estas son algunas estrategias de escalado potenciales:

## Escalado de interacciones con Gemini AI

Es probable que el principal cuello de botella para escalar Documenti sean las interacciones con el modelo de IA Gemini. Así es como podemos abordar esto:

### Escalado horizontal con solicitudes asíncronas

```
                             +-----------------+     +-----------------+
                             | Cliente Gemini  |---->| Cliente Gemini  |
                             +-----------------+     +-----------------+
                                  ^                    ^
                                  |                    |
+---------------------+    +-----------------------+    |
|     Entrada del usuario      |--->|  Analizador de código base      |----+--->  Procesador de documentación  
+---------------------+    +-----------------------+    |     (con cola y trabajadores)
                       |                         ^      |
                       |                         |      |
                       v                         |      |
                 +-----------------------+      |      |
                 | documentation_sections.json |------+
                 +-----------------------+           
```

1. **Sistema de cola:** Introducir un sistema de cola (por ejemplo, RabbitMQ, Redis) para manejar las solicitudes de documentación.
2. **Procesos de trabajo:** Implementar múltiples procesos de trabajo que consuman solicitudes de la cola, interactúen con Gemini AI y procesen las respuestas.
3. **Solicitudes asíncronas:** Utilizar bibliotecas de solicitudes asíncronas (por ejemplo, `aiohttp`) dentro de los procesos de trabajo para enviar solicitudes a Gemini AI de forma concurrente.

Este enfoque permite el escalado horizontal añadiendo más procesos de trabajo para manejar el creciente número de solicitudes de documentación.

## Escalado del análisis del código base

Para bases de código muy grandes, el análisis del código también puede convertirse en un cuello de botella. Esta es una posible solución de escalado:

### Análisis distribuido del código base

```
+---------------------+      +-----------------------+      +-----------------------+
|     Entrada del usuario      |---->| Analizador de código base (Nodo 1) |---->| Analizador de código base (Nodo 2) |
+---------------------+      +-----------------------+      +-----------------------+
                                  |                    |
                                  v                    v
                                +-----------------------+
                                |   Salida combinada     |
                                +-----------------------+
```

1. **Dividir el código base:** Dividir el código base en fragmentos más pequeños.
2. **Análisis distribuido:** Implementar múltiples instancias del Analizador de código base, cada una responsable de analizar un fragmento específico del código base.
3. **Combinar la salida:** Agregar la salida analizada de todas las instancias en una sola salida combinada.

Esto permite distribuir la carga de trabajo de análisis entre varias máquinas, reduciendo el tiempo total de análisis.

## Escalado vertical

El escalado vertical también se puede aplicar a componentes individuales aumentando sus recursos (CPU, memoria, etc.). Por ejemplo:

- **Cliente Gemini:** Asignar más recursos a las instancias del Cliente Gemini para manejar solicitudes concurrentes de manera eficiente.
- **Procesador de documentación:** Aumentar los recursos del Procesador de documentación para acelerar el procesamiento del contenido y la escritura de archivos.

## Conclusión

Si bien la arquitectura actual de Documenti no está diseñada explícitamente para una escala masiva, estas estrategias de escalado se pueden implementar para manejar bases de código más grandes y mayores demandas de generación de documentación. La elección del enfoque de escalado depende de los requisitos y limitaciones específicos de su implementación.


