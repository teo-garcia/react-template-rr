import { index, route, type RouteConfig } from '@react-router/dev/routes'

export default [
  route('api/health', './routes/api.health.ts'),
  index('./routes/index.tsx'),
] satisfies RouteConfig
