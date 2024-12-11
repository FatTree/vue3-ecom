# vue3-ecom

This project is an e-commerce platform built with Vue 3 and Vite.
It utilizes TypeScript, Vitest for testing, Pinia for state management, Vue Router for routing, SCSS for styling, and i18n for internationalization. The project integrates Firebase as the database for data storage.

## Features ✨

## Tech Stack 🛠
* Frontend: Vue 3 + Vite + TypeScript
* State Management: Pinia
* Routing: Vue Router
* Testing: Vitest
* Styling: SCSS
* Internationalization: Vue I18n
* Backend/Database: Firebase (Firestore)
* Deployment: Github action

## Project Structure 📁
```
src/
│── assets/         # Static assets (images, styles, etc.)
│── components/     # Vue components
│── composable/     # Composables
│── plugins/        # Plugins
│── router/         # Vue Router setup
│── stores/         # Store
│── views/          # Pages
│── App.vue         # Main application component
│── main.ts         # Project entry point
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
