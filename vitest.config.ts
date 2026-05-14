import shared from '@teo-garcia/vitest-config-shared'
import { defineConfig, mergeConfig } from 'vitest/config'

export default mergeConfig(
  defineConfig(shared),
  defineConfig({
    test: {
      setupFiles: ['./vitest.setup.ts'],
    },
  })
)
