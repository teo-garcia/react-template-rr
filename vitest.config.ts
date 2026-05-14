import shared from '@teo-garcia/vitest-config-shared'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig, mergeConfig } from 'vitest/config'

export default mergeConfig(
  defineConfig(shared),
  defineConfig({
    plugins: [tsconfigPaths()],
    test: {
      setupFiles: ['./vitest.setup.ts'],
    },
  })
)
