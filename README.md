# React Template RR

React Router + Vite starter with minimal setup and a clean DX baseline.

## Requirements

- Node.js 22+
- pnpm 9+

## Quick start

```bash
npx degit teo-garcia/react-template-rr my-app
cd my-app
pnpm install
cp .env.example .env
pnpm dev
```

## Environment

Use `.env.example` as the single source for required variables.

## Scripts

| Command             | Description               |
| ------------------- | ------------------------- |
| `pnpm dev`          | Start the dev server      |
| `pnpm build`        | Build for production      |
| `pnpm start:web`    | Run the production server |
| `pnpm test`         | Run unit tests            |
| `pnpm test:browser` | Run browser tests         |
| `pnpm test:e2e`     | Run Playwright tests      |
| `pnpm lint:es`      | ESLint with fixes         |
| `pnpm lint:ts`      | TypeScript type checking  |
| `pnpm format`       | Prettier format           |

## Project structure

```
app/
  components/
  routes/
  root.tsx
  routes.ts
```

## License

MIT
