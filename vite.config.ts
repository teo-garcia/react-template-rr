import { reactRouter } from '@react-router/dev/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
// @ts-expect-error vite-plugin-eslint types are not aligned with Vite yet
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'

const shouldAnalyze = process.env.ANALYZE === 'true'

export default defineConfig({
  plugins: [
    reactRouter(),
    eslint(),
    tsconfigPaths(),
    shouldAnalyze &&
      visualizer({
        brotliSize: true,
        filename: 'build/analyze/stats.html',
        gzipSize: true,
        open: false,
      }),
  ],
  server: {
    port: 3000,
  },
})
