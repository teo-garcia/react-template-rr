import { z } from 'zod'

const envSchema = z.object({
  DEV: z.boolean(),
  PROD: z.boolean(),
  SSR: z.boolean(),
  VITE_PUBLIC_URL: z
    .string()
    .default('http://localhost:3000')
    .refine((value) => {
      try {
        new URL(value)
        return true
      } catch {
        return false
      }
    }, 'VITE_PUBLIC_URL must be a valid URL'),
})

const parsedEnv = envSchema.parse({
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
  SSR: import.meta.env.SSR,
  VITE_PUBLIC_URL: import.meta.env.VITE_PUBLIC_URL,
})

export const env = {
  appEnv: parsedEnv.DEV ? 'development' : 'production',
  isDevelopment: parsedEnv.DEV,
  isProduction: parsedEnv.PROD,
  isServer: parsedEnv.SSR,
  isDev: parsedEnv.DEV,
  isProd: parsedEnv.PROD,
  publicUrl: parsedEnv.VITE_PUBLIC_URL,
} as const
