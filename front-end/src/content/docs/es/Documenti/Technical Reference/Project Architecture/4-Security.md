---
title: Seguridad
description: Diagramas de arquitectura que destacan las medidas de seguridad en Documenti.
---

La arquitectura actual de Documenti, como generador de documentación independiente, no implementa de forma inherente medidas de seguridad robustas como cortafuegos, sistemas de autenticación o cifrado. Sin embargo, al considerar su integración con servicios externos como Gemini AI y posibles escenarios de implementación, entran en juego varias consideraciones de seguridad.

## Protección de la clave de API de Gemini

La clave de API de Gemini es una credencial crucial que otorga acceso al modelo de IA Gemini. Proteger esta clave es primordial para evitar el acceso no autorizado y el posible uso indebido.

### Variables de entorno y almacenamiento seguro

```
+---------------------+
|     Entrada del usuario      |
+---------------------+
       |
       | (Ruta del código base, Nombre del proyecto, Opciones de idioma)
       v
+-----------------------+     +-----------------------+
|  Analizador de código base      |---->|  Procesador de documentación  |
+-----------------------+     +-----------------------+
                                       |
                                       | (Accede a la variable de entorno GEMINI_API_KEY)
                                       v
                             +-----------------+    +-----------------+
                             | Cliente Gemini  |--->| Gemini AI      |
                             +-----------------+    +-----------------+
```

- **Variables de entorno:** Almacene la clave de API de Gemini como una variable de entorno (`GEMINI_API_KEY`) en lugar de codificarla de forma rígida en el código fuente.
- **Almacenamiento seguro:** Para implementaciones de producción, aproveche los mecanismos de almacenamiento seguro proporcionados por su proveedor de nube o sistema operativo para almacenar variables de entorno confidenciales.

## Consideraciones de implementación segura

Dependiendo de cómo y dónde se implemente Documenti, pueden ser necesarias medidas de seguridad adicionales.

### Cortafuegos y seguridad de red

- **Implementación en la nube:** Si se implementa en una plataforma en la nube, utilice las capacidades de cortafuegos de la plataforma para restringir el acceso a la aplicación Documenti y sus recursos asociados.
- **Implementación local:** Implemente cortafuegos y segmentación de red para aislar Documenti de otros sistemas y limitar posibles vectores de ataque.

### Autenticación y autorización

- **Control de acceso de usuarios:** Si Documenti está expuesto a varios usuarios, implemente mecanismos de autenticación y autorización para controlar el acceso a la aplicación y sus funcionalidades.
- **Control de acceso basado en roles (RBAC):** Considere la posibilidad de utilizar RBAC para otorgar diferentes niveles de acceso a los usuarios en función de sus roles y responsabilidades.

### Cifrado de datos

- **Almacenamiento del código base:** Si el código base contiene información confidencial, explore el cifrado del código base en reposo o durante la transmisión a la aplicación Documenti.
- **Almacenamiento de salida:** Considere la posibilidad de cifrar los archivos de documentación generados si contienen información confidencial o sensible.

## Conclusión

Si bien Documenti en sí mismo no tiene funciones de seguridad integradas, es crucial abordar las consideraciones de seguridad relacionadas con las claves de API, los entornos de implementación y la protección de datos. Al implementar las medidas de seguridad adecuadas, puede mitigar los riesgos y garantizar el funcionamiento seguro de Documenti.



