import type { Config } from '@react-router/dev/config'
import { vercelPreset } from '@vercel/react-router/vite'

import { isVercel } from './env.server'

export default {
  ssr: true,
  presets: isVercel ? [vercelPreset()] : [],
} satisfies Config
