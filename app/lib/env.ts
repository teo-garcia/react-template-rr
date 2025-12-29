import { z } from 'zod'

const envSchema = z.object({
  DEV: z.boolean(),
  PROD: z.boolean(),
  SSR: z.boolean(),
})

const parsedEnv = envSchema.parse({
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
  SSR: import.meta.env.SSR,
})

export const env = {
  isDev: parsedEnv.DEV,
  isProd: parsedEnv.PROD,
  isServer: parsedEnv.SSR,
} as const
