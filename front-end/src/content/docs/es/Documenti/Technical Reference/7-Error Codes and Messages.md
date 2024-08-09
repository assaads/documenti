---
title: Códigos de error y mensajes
description: Explicación de los códigos de error y mensajes en Documenti.
---

## `ValueError`

### Selección de idioma no válida

- **Mensaje:** "Opción no válida. Por favor, introduzca 'sí'/'s' o 'no'/'n'."
- **Significado:** Este error ocurre cuando el usuario proporciona una entrada no válida cuando se le pregunta acerca de la elección de varios idiomas durante el proceso de generación de documentación.
- **Acción del usuario:** Asegúrese de introducir "sí" o "no" (o sus respectivas abreviaturas "s" o "n") cuando se le solicite la selección de idioma.

### Índice de idioma no válido

- **Mensaje:** "Opción no válida: {i}. Por favor, introduzca números entre 1 y {len(languages)}."
- **Significado:** Este error surge cuando el usuario introduce un número no válido al seleccionar idiomas de la lista mostrada.
- **Acción del usuario:** Revise la lista de idiomas disponibles y sus números correspondientes. Introduzca solo números válidos separados por comas cuando se le solicite la selección de idioma.

### Se excedió el límite de líneas del código base

- **Mensaje:** "La salida combinada del código base tiene {num_lines} líneas, lo que excede el límite de 29000 líneas."
- **Significado:** Este error indica que el contenido combinado de su código base, después del análisis, excede el límite máximo de entrada para el modelo de IA de Gemini.
- **Acción del usuario:** Considere la posibilidad de reducir el tamaño de su código base excluyendo archivos o directorios innecesarios durante el proceso de análisis. Puede modificar las listas `skip_dirs` y `skip_files` en `code_parser.py` para excluir archivos o directorios específicos. Alternativamente, puede explorar la división de su código base en fragmentos más pequeños y generar documentación por separado para cada fragmento.

## Errores de lectura de archivos

Si bien no se manejan explícitamente con códigos de error específicos, Documenti puede encontrar errores al leer archivos del código base.

### `No se pudo leer el archivo {file_path}. Error: {e}`

- **Significado:** Este mensaje se imprime en la consola cuando el `code_parser` encuentra un error al intentar leer un archivo del directorio del código base. El mensaje de error específico (`{e}`) proporciona detalles sobre el problema encontrado.
- **Acción del usuario:** 
    - **Comprobar la ruta del archivo:** Verifique que la ruta del archivo sea correcta y que el archivo exista.
    - **Comprobar los permisos del archivo:** Asegúrese de que el script Documenti tenga permisos suficientes para leer el archivo.
    - **Comprobar la codificación del archivo:** El script intenta leer archivos utilizando la codificación `ISO-8859-1`. Si sus archivos utilizan una codificación diferente, es posible que deba modificar el parámetro `encoding` en `code_parser.py`.




