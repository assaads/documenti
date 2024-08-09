---
title: Variables de entorno
description: Documentación para las variables de entorno utilizadas en Documenti.
---

## `GEMINI_API_KEY`

- **Propósito:** Almacena la clave de API necesaria para la autenticación con la API de Gemini. Documenti utiliza esta clave para interactuar con los modelos lingüísticos grandes de Google y generar contenido de documentación.
- **Cómo configurarla:**
    - **Linux/macOS:** Añade la siguiente línea a tu archivo `.bashrc` o `.zshrc`, reemplazando `"YOUR_GEMINI_API_KEY"` con tu clave de API real:
        ```bash
        export GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
        ```
    - **Windows:**
        1. Busca "Variables de entorno" en el menú Inicio.
        2. Haz clic en "Editar las variables de entorno del sistema".
        3. Haz clic en el botón "Variables de entorno".
        4. En "Variables del sistema", haz clic en "Nuevo".
        5. Introduce `GEMINI_API_KEY` como nombre de la variable y tu clave de API como valor de la variable.
        6. Haz clic en "Aceptar" en todas las ventanas abiertas.
- **Valor por defecto:** Ninguno. Esta variable de entorno es obligatoria y debe configurarse para que Documenti funcione.




