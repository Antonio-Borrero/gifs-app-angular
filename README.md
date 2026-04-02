English | [Español](README.es.md)

# GifsApp

[![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Learning project built with Angular that allows you to search, view, and manage GIFs using the Giphy Developers API.

## Technologies

- Angular 21
- TypeScript
- HTML / CSS
- Giphy Developers API

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Antonio-Borrero/gifs-app-angular.git
   ```

2. Enter the project folder:
   ```bash
   cd gifs-app-angular
   ```
   
3. Install dependencies:
   ```bash
   npm install
   ```
   
4. Run the app in development mode:
   ```bash
   ng serve
   ```

5. Open in browser:
   - Go to `http://localhost:4200/`.
   - The app will automatically reload when any file is modified

> ⚠️ **Note:** Create a `src/environments/environment.ts` file following `environment.example.ts` to add your Giphy API key. **Do not commit your API key to the repository.**

## Features

- Search GIFs using the Giphy API
- View trending GIFs
- Save searched GIFs
- Multi-page and component management in Angular

## Learning Outcomes

- Practicing Angular and TypeScript
- Consuming external APIs
- Handling components, services, and routing
- Best practices with `.gitignore` and API key management

## Build

To build the production version:

```bash
ng build
```
