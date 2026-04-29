<div align="center">

# React Template RR

**Production-ready React Router starter with Vite, TypeScript, and modern
testing**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/Node-24+-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![pnpm](https://img.shields.io/badge/pnpm-10+-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev)

Part of the [@teo-garcia/templates](https://github.com/teo-garcia/templates)
ecosystem

</div>

---

## Features

| Category         | Technologies                             |
| ---------------- | ---------------------------------------- |
| **Framework**    | React Router 7 with file-based routing   |
| **Bundler**      | Vite 7 for fast builds and HMR           |
| **UI**           | React 19, Tailwind CSS 4, Lucide Icons   |
| **Data**         | TanStack Query for server state          |
| **Type Safety**  | TypeScript with strict mode              |
| **Testing**      | Vitest, Testing Library, Playwright, MSW |
| **Code Quality** | ESLint, Prettier, Husky, lint-staged     |

---

## Requirements

- Node.js 24+
- pnpm 10+

---

## Quick Start

```bash
pnpm install
cp .env.example .env
pnpm dev
```

The app starts on `http://localhost:3000`.

---

## Scripts

| Command             | Description                            |
| ------------------- | -------------------------------------- |
| `pnpm dev`          | Start development server               |
| `pnpm build`        | Create production build                |
| `pnpm start`        | Run production server                  |
| `pnpm test`         | Run unit tests                         |
| `pnpm test:browser` | Run browser tests                      |
| `pnpm test:e2e`     | Run Playwright E2E tests               |
| `pnpm coverage`     | Run tests with coverage                |
| `pnpm check`        | Run lint, typecheck, format, and tests |
| `pnpm lint:es`      | Lint and fix with ESLint               |
| `pnpm lint:ts`      | TypeScript type checking               |
| `pnpm format`       | Format with Prettier                   |

---

## Project Structure

| Path              | Purpose                     |
| ----------------- | --------------------------- |
| `app/`            | Application source          |
| `app/routes/`     | File-based routes           |
| `app/components/` | Shared UI components        |
| `app/lib/`        | Configuration and utilities |
| `app/root.tsx`    | Root layout                 |
| `public/`         | Static assets               |
| `e2e/`            | Playwright E2E tests        |

---

## Shared Governance

| Area               | Tooling                                             |
| ------------------ | --------------------------------------------------- |
| Dependency updates | Renovate                                            |
| Issue intake       | GitHub issue templates                              |
| Change review      | Pull request template                               |
| CI                 | GitHub Actions for lint, typecheck, test, and build |
| Delivery           | Vercel deployment workflow                          |

---

## Shared Configs

| Package                              | Role                |
| ------------------------------------ | ------------------- |
| `@teo-garcia/eslint-config-shared`   | ESLint rules        |
| `@teo-garcia/prettier-config-shared` | Prettier formatting |
| `@teo-garcia/tsconfig-shared`        | TypeScript settings |
| `@teo-garcia/vitest-config-shared`   | Test configuration  |

---

## Related Templates

| Template                     | Description          |
| ---------------------------- | -------------------- |
| `react-template-next`        | Next.js SSR template |
| `react-native-template-expo` | Expo mobile app      |
| `nest-template-monolith`     | NestJS backend       |
| `nest-template-microservice` | NestJS microservice  |
| `fastapi-template-monolith`  | FastAPI backend      |

---

## License

MIT

---

<div align="center">
  <sub>Built by <a href="https://github.com/teo-garcia">teo-garcia</a></sub>
</div>
