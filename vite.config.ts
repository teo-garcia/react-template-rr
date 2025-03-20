import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'
// @ts-expect-error TODO: Fix this eslint error
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [reactRouter(), eslint(), tsconfigPaths()],
  server: {
    port: 3000,
  },
})
