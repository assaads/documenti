---
title: Referencias de la API
description: Documentación de todas las API en el código base de Documenti.
---

Documenti, en su implementación actual, no expone ninguna API externa. Funciona como una herramienta de línea de comandos independiente que procesa bases de código localmente y genera archivos de documentación.

Por lo tanto, no hay puntos finales de API para documentar en este contexto.

Sin embargo, Documenti se basa en la API de Gemini proporcionada por Google para su funcionalidad principal de generar contenido de documentación.

## API de Gemini

La API de Gemini es una potente API basada en la nube que permite a los desarrolladores interactuar con los modelos de lenguaje de gran tamaño de Google. Documenti utiliza la API de Gemini para enviar indicaciones que contienen información del código y descripciones de secciones, recibiendo respuestas con contenido de documentación generado.

### Autenticación

- **Clave de API:** La autenticación en la API de Gemini se realiza mediante una clave de API, que debe almacenarse de forma segura como una variable de entorno (`GEMINI_API_KEY`).

### Formato de solicitud

El formato de solicitud específico para la API de Gemini varía según el modelo y la tarea. En general, las solicitudes suelen incluir:

- **Modelo:** El nombre del modelo de Gemini que se utilizará (por ejemplo, `gemini-1.5-pro`).
- **Indicación:** La indicación de texto que contiene las instrucciones y el contexto para el modelo. En el caso de Documenti, esto incluye la información del código base y las descripciones de las secciones.
- **Parámetros:** Se pueden especificar parámetros adicionales para controlar el comportamiento del modelo, como la temperatura, top_p y max_output_tokens.

### Formato de respuesta

La respuesta de la API de Gemini suele incluir:

- **Texto generado:** El texto generado por el modelo en función de la indicación y los parámetros proporcionados.
- **Metadatos:** Se pueden incluir metadatos adicionales, como la puntuación de confianza del modelo o cualquier indicador de seguridad activado.

### Ejemplo de solicitud y respuesta

Si bien el formato exacto no se muestra en el código base de Documenti, un ejemplo simplificado de una solicitud y respuesta de la API de Gemini podría tener este aspecto:

**Solicitud:**

```json
{
  "model": "gemini-1.5-pro",
  "prompt": "Generar documentación para la función `calcular_suma`:\n\n```python\ndef calcular_suma(a, b):\n  \"\"\"Calcula la suma de dos números.\"\"\"\n  return a + b\n```",
  "temperature": 0.7,
  "max_output_tokens": 100
}
```

**Respuesta:**

```json
{
  "generated_text": "## calcular_suma\n\nEsta función calcula la suma de dos números.\n\n**Parámetros:**\n\n- `a`: El primer número.\n- `b`: El segundo número.\n\n**Devuelve:**\n\nLa suma de `a` y `b`.",
  "metadata": {
    "safety_flags": [],
    "confidence": 0.95
  }
}
```

Consulte la documentación oficial de la API de Gemini para obtener información detallada sobre los formatos de solicitud y respuesta, los modelos disponibles y los parámetros.


