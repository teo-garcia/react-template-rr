export const env = {
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  isServer: import.meta.env.SSR,
} as const
