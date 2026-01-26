Español | [English](README.md)

# GifsApp 

[![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white)](https://angular.dev/) 
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white)](https://www.typescriptlang.org/) 
[![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) 

Aplicación de aprendizaje hecha en Angular que permite buscar, ver y gestionar GIFs usando la API de Giphy Developers. 

## Tecnologías 

  - Angular 21
  - TypeScript
  - HTML / CSS
  - API de Giphy Developers
    
## Instalación 

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Antonio-Borrero/Gifs-app-Angular.git
   ```
   
2. Entrar a la carpeta del proyecto:
   ```bash
   cd Gifs-app-Angular
   ```
   
3. Instalar dependencias:
   ```bash
   npm install
   ```
   
4. Ejecutar la app en modo desarrollo:
   ```bash
   ng serve
   ```
   
5. Abrir en el navegador:
   - Ir a http://localhost:4200/.
   - La aplicacion se recargara automaticamnte cuando se modifique alguno de los archivos

> ⚠️ **Nota:** Crea un archivo `src/environments/environment.ts` siguiendo `environment.example.ts` para agregar tu API key de Giphy. **No subas tu API key al repositorio.**

## Características 

  - Buscar GIFs usando la API de Giphy Developers
  - Ver trending GIFs
  - Guardar GIFs buscados
  - Manejo de múltiples páginas y componentes en Angular

## Aprendizaje 

  - Práctica de Angular y TypeScript
  - Consumo de APIs externas
  - Manejo de componentes, servicios y rutas
  - Buenas prácticas con `.gitignore` y manejo de keys

## Produccion 

Para construir la version de produccion:

  ```bash
  ng build
  ```
