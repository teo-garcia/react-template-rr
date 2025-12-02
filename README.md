<div align="center">

# React Template RR

**Production-ready React Router starter with Vite, TypeScript, and modern testing**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)
[![Node](https://img.shields.io/badge/Node-22+-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![pnpm](https://img.shields.io/badge/pnpm-9+-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev)

Part of the [@teo-garcia/templates](https://github.com/teo-garcia/templates) ecosystem

</div>

---

## ✨ Features

| Category | Technologies |
|----------|-------------|
| **Framework** | React Router 7 with file-based routing |
| **Bundler** | Vite 7 for fast builds and HMR |
| **UI** | React 19, Tailwind CSS 4, Lucide Icons |
| **Data** | React Query for server state management |
| **Type Safety** | TypeScript with strict mode |
| **Testing** | Vitest + Testing Library + Playwright + MSW |
| **Code Quality** | ESLint, Prettier, Husky, lint-staged |

## 📋 Requirements

- Node.js 22+
- pnpm 9+

## 🚀 Quick Start

```bash
# Clone the template
npx degit teo-garcia/react-template-rr my-app
cd my-app

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) to see your app.

## 📁 Project Structure

```
app/
├── components/             # Shared UI components
├── routes/                 # File-based routes
├── config/                 # App configuration
├── root.tsx                # Root layout
└── routes.ts               # Route configuration
```

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Create production build |
| `pnpm start:web` | Run production server |
| `pnpm test` | Run unit tests |
| `pnpm test:browser` | Run browser tests |
| `pnpm test:e2e` | Run Playwright E2E tests |
| `pnpm lint:es` | Lint and fix with ESLint |
| `pnpm lint:es:check` | Check ESLint without fixing |
| `pnpm lint:ts` | TypeScript type checking |
| `pnpm format` | Format with Prettier |
| `pnpm format:check` | Check formatting |

## 📦 Shared Configs

This template uses standardized configurations from the ecosystem:

- [`@teo-garcia/eslint-config-shared`](https://github.com/teo-garcia/eslint-config-shared) - ESLint rules
- [`@teo-garcia/prettier-config-shared`](https://github.com/teo-garcia/prettier-config-shared) - Prettier formatting
- [`@teo-garcia/tsconfig-shared`](https://github.com/teo-garcia/tsconfig-shared) - TypeScript settings
- [`@teo-garcia/vitest-config-shared`](https://github.com/teo-garcia/vitest-config-shared) - Test configuration

## 🔗 Related Templates

| Template | Description |
|----------|-------------|
| [react-template-next](https://github.com/teo-garcia/react-template-next) | Next.js SSR template |
| [nest-template-monolith](https://github.com/teo-garcia/nest-template-monolith) | NestJS backend monolith |
| [nest-template-microservice](https://github.com/teo-garcia/nest-template-microservice) | NestJS microservice |

## 📄 License

MIT

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/teo-garcia">teo-garcia</a></sub>
</div>
