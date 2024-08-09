---
title: Empezando
description: Una guía sobre cómo instalar, configurar y comenzar rápidamente a usar Documenti.
---

## Prerrequisitos

Antes de comenzar con Documenti, asegúrese de tener los siguientes requisitos previos instalados en su sistema:

- **Python 3.7 o superior:** Documenti está construido con Python, por lo que necesita tener instalada una versión compatible.
- **Entorno virtual (recomendado):** Se recomienda encarecidamente utilizar un entorno virtual para gestionar las dependencias del proyecto y evitar conflictos con otros proyectos de Python.
- **Editor de texto o IDE:** Elija su editor de texto o IDE preferido para trabajar con el código y los archivos de configuración.

## Instalación

Siga estos pasos para instalar Documenti y sus dependencias:

1. **Clonar el repositorio:** Clone el repositorio de Documenti desde GitHub a su máquina local utilizando el siguiente comando:

   ```bash
   git clone https://github.com/your-username/Documenti.git
   ```

   Reemplace `your-username` con el nombre de usuario real del repositorio.

2. **Crear un entorno virtual:** Navegue hasta el directorio del repositorio clonado y cree un entorno virtual utilizando el módulo `venv`:

   ```bash
   cd Documenti
   python3 -m venv venv
   ```

3. **Activar el entorno virtual:** Active el entorno virtual utilizando el comando adecuado para su sistema operativo:

   - **Linux/macOS:**
     ```bash
     source venv/bin/activate
     ```
   - **Windows:**
     ```bash
     venv\Scripts\activate
     ```

4. **Instalar dependencias:** Instale los paquetes necesarios enumerados en el archivo `requirements.txt` utilizando `pip`:

   ```bash
   pip install -r requirements.txt
   ```

## Configuración

1. **Obtener una clave de API de Gemini:**
   - Regístrese para obtener una cuenta de Google Cloud y habilite la API de Gemini.
   - Cree una clave de API y anótela de forma segura.

2. **Establecer la variable de entorno:**
   - Establezca la variable de entorno `GEMINI_API_KEY` en su clave de API de Gemini.
   - Puede hacerlo añadiendo la siguiente línea a su archivo `.bashrc` o `.zshrc` (para Linux/macOS) o a las variables de entorno de su sistema (para Windows):

     ```bash
     export GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
     ```

   - Reemplace `"YOUR_GEMINI_API_KEY"` con su clave de API real.

## Inicio rápido

1. **Prepare su base de código:** Asegúrese de que su base de código esté organizada en una estructura de directorios que Documenti pueda analizar.
2. **Definir la estructura de la documentación:** Modifique el archivo `documentation_sections.json` para definir la estructura y las secciones deseadas para su documentación.
3. **Ejecutar Documenti:** Ejecute el script `main.py` para iniciar el proceso de generación de documentación:

   ```bash
   python main.py
   ```

   - Se le pedirá que introduzca la ruta del directorio de su base de código y el nombre de su proyecto.
   - También puede optar por generar documentación en varios idiomas.

4. **Acceder a la documentación:** Una vez finalizado el proceso, puede acceder a la documentación generada en el directorio de salida especificado.

## Ejemplo de uso básico

Aquí tiene un ejemplo básico de cómo utilizar Documenti:

1. **Definir un `documentation_sections.json` sencillo:**

   ```json
   {
     "Resumen": "Un resumen general del proyecto.",
     "Referencia de la API": "Documentación de la API del proyecto."
   }
   ```

2. **Ejecutar `main.py`:**

   ```bash
   python main.py
   ```

   - Introduzca la ruta del directorio de su base de código.
   - Introduzca el nombre del proyecto (por ejemplo, "MiProyecto").

3. **Salida:** Documenti generará dos archivos Markdown:
   - `1-Resumen.md` que contiene la documentación del resumen.
   - `2-Referencia de la API.md` que contiene la documentación de la referencia de la API.

Estos archivos se ubicarán en un directorio llamado "MiProyecto" dentro del directorio de salida.


