import { reactRouter } from '@react-router/dev/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const shouldAnalyze = process.env.ANALYZE === 'true'

export default defineConfig({
  plugins: [
    reactRouter(),
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
