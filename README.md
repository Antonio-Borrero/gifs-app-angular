English | [Español](README.es.md)

# GifsApp

[![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

![Gifs App Preview](assets/preview.png)

<br>

This is a **learning and practice project** built with **Angular** as part of the **DevTalles (Fernando Herrera) Angular course** to explore dynamic data handling and API consumption. The application allows users to search, discover, and manage GIFs in real-time, focusing on state persistence and modular component architecture.

<br>

## Technologies

- Angular 21
- TypeScript
- HTML / CSS
- Giphy Developers API

<br>

## Technical Highlights

- **Giphy API Integration:** Implementation of real-time search queries and trending data fetching using Angular's `HttpClient`.
- **Search History & Persistence:** Developed a search history system that persists across browser sessions using **LocalStorage**.
- **Service-Driven Architecture:** Centralized data management logic within services to ensure a "Single Source of Truth."
- **Modular UI:** Organized into specialized modules (Gifs, Shared) for better scalability and maintainability.
- **Environment Security:** Robust API key management through environment files and `.gitignore` best practices.

<br>

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Antonio-Borrero/gifs-app-angular.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Environment setup:

   ```bash
   ng generate environments
   ```

   - Use **src/environments/environment.example.ts** as a template to create your **environment.development.ts** file and add your Giphy API key.
     > ⚠️ **Important:** Do not commit your real API key to the repository.

4. Run the app in development mode:

   ```bash
   ng serve
   ```

5. Open in browser:
   - Go to `http://localhost:4200/`.
   - The app will automatically reload when any file is modified

<br>

## Project structure

```bash
   - src/
   ├───app
   │   ├───gifs                 # Core module for GIF functionality
   │   │   ├───components       # UI components (Grid, cards, side-menu)
   │   │   ├───interfaces       # TypeScript interfaces for Giphy API responses
   │   │   ├───mapper           # Logic to transform API data into internal models
   │   │   ├───pages            # Main views (Dashboard, History, Trends)
   │   │   └───services         # Business logic and Giphy API integration
   │   └───shared               # Cross-cutting concerns
   │       └───services         # Global services (e.g., LocalStorage management)
   └───environments             # App configuration and API Keys
```

<br>

## Learning Outcomes

- **HTTP request parameters** and reactive data streams.
- **History logic** (limit results, unique values, persistence).
- **Input/Output** decorators for component communication.
- **Global Service state** refactoring.
- **Routing** and component management.
- **.gitignore** and API key management best practices.

<br>

## Build

To build the production version:

```bash
ng build
```
