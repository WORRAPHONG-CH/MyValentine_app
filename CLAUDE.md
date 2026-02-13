# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Valentine-themed web application built with React 19, TypeScript, and Vite. The project uses Tailwind CSS v4 for styling and has the React Compiler enabled.

## Development Commands

```bash
npm run dev      # Start development server with HMR
npm run build    # Type-check with tsc and build for production
npm run lint     # Run ESLint on the codebase
npm run preview  # Preview production build locally
```

## Tech Stack

- **React 19**: Using the latest React version with StrictMode enabled
- **TypeScript**: Strict mode enabled with additional linting rules (noUnusedLocals, noUnusedParameters)
- **Vite**: Build tool and dev server
- **Tailwind CSS v4**: Using the latest version with Vite plugin
- **React Compiler**: Enabled via babel-plugin-react-compiler (impacts dev & build performance)

## Architecture Notes

### React Compiler
The React Compiler is enabled in vite.config.ts via Babel. This automatically optimizes React components but may impact Vite development and build performance. See [React Compiler docs](https://react.dev/learn/react-compiler).

### Tailwind CSS v4
This project uses Tailwind CSS v4 (latest version) with the `@tailwindcss/vite` plugin. Note that v4 has breaking changes from v3 - refer to Tailwind v4 documentation when working with styles.

### TypeScript Configuration
- Strict mode enabled with additional checks
- Bundler module resolution
- `erasableSyntaxOnly` enabled for React Compiler compatibility
- Two separate tsconfig files: `tsconfig.app.json` (app code) and `tsconfig.node.json` (Vite config)

### Project Structure
- Entry point: `src/main.tsx` renders `<App />` into `#root`
- Single page application with root div in `index.html`
- Styles: `src/index.css` for global styles, component-level CSS in `src/App.css`

## ESLint Configuration
Uses flat config format with:
- TypeScript ESLint recommended rules
- React Hooks rules (flat config)
- React Refresh rules for Vite
- Ignores `dist` directory
