import { reactRouter } from '@react-router/dev/vite'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { reactCompilerPreset } from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

const shouldAnalyze = process.env.ANALYZE === 'true'

export default defineConfig({
  plugins: [
    reactRouter(),
    babel({
      include: /\.[jt]sx?$/,
      presets: [reactCompilerPreset()],
    }),
    tailwindcss(),
    shouldAnalyze &&
      visualizer({
        brotliSize: true,
        filename: 'build/analyze/stats.html',
        gzipSize: true,
        open: false,
      }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
  },
})
