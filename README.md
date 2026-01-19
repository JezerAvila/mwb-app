# Assignment Generator – Vida y Ministerio Cristianos

Aplicación web desarrollada con **React** para facilitar la creación y gestión de asignaciones en la reunión **Vida y Ministerio Cristianos**.  
El objetivo del proyecto es automatizar la selección de parejas, evitando repeticiones y permitiendo una rotación justa y organizada.

## 🚀 Demo en vivo

La aplicación está publicada en **GitHub Pages**, por lo que puede usarse directamente desde el navegador sin instalación:

👉 [Ver aplicación en vivo](https://jezeravila.github.io/mwb-app/)

## 🧩 ¿Qué hace la aplicación?

- Permite **crear y administrar una lista de personas**
- Genera **todas las combinaciones posibles de parejas** a partir de la lista
- Selecciona parejas de forma **aleatoria**
- Permite **marcar parejas como usadas**, evitando repeticiones en rondas futuras
- Continúa usando nuevas combinaciones hasta agotar todas las opciones posibles
- Muestra las **últimas personas responsables seleccionadas** para facilitar la rotación
- Permite **agregar o eliminar personas**, actualizando automáticamente las combinaciones
- Incluye una **guía interactiva** (un oso en la esquina superior derecha) que explica cómo usar la aplicación paso a paso

## 💾 Persistencia de datos

- Los datos se guardan en la **memoria del navegador (cache / localStorage)**
- No requiere base de datos ni almacenamiento en la nube
- La información se conserva al recargar la página o cerrar el navegador
- Esto tambien es util en el caso de proteccion de datos
- Y la aplicacion permite borrar estos datos especificos de la memoria del navegador para volver a empezar de cero

## 🛠 Tecnologías utilizadas

- **React**
- **JavaScript**
- **HTML**
- **CSS**
- **LocalStorage (Web Storage API)**
- **GitHub Pages** para despliegue

## 🎯 Funcionalidades principales

- Gestión dinámica de usuarios
- Generación automática de combinaciones sin modificar el orden original
- Selección aleatoria sin repetir personas ni parejas
- Actualización inmediata al cambiar la lista de participantes
- Interfaz responsiva y fácil de usar

## 📌 Objetivo del proyecto

Este proyecto fue desarrollado como práctica personal para:
- Aplicar lógica de negocio en **React**
- Manejar estado y persistencia sin backend
- Resolver un problema real de organización
- Mejorar habilidades en **JavaScript, React y diseño de flujos**

Además, demuestra cómo una aplicación frontend puede ser funcional y útil sin depender de servicios externos.




