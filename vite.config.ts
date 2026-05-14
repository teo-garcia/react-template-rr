import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

const shouldAnalyze = process.env.ANALYZE === 'true'

export default defineConfig({
  plugins: [
    reactRouter(),
    tailwindcss(),
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
