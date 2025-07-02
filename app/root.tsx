import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Info } from 'lucide-react'
import { useEffect } from 'react'
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import stylesheet from '~/app.css?url'
import { ThemeProvider } from '~/components/theme-provider'
import { ThemeSwitch } from '~/components/theme-switch/theme-switch'
import { ViewportInfo } from '~/components/viewport-info/viewport-info'

import type { Route } from './+types/root'

const createQueryClient = () => new QueryClient()

export const links: Route.LinksFunction = () => [
  {
    rel: 'icon',
    href: '/favicon.ico',
    type: 'image/x-icon',
  },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Ubuntu:wght@400;700&display=swap',
  },
  { rel: 'stylesheet', href: stylesheet },
]
export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details = error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  if (isRouteErrorResponse(error) && error.status === 404)
    return (
      <section className='flex h-screen flex-col items-center justify-center gap-y-10 xl:gap-y-16 text-foreground dark:text-background'>
        <Info className='size-16 md:size-28' />
        <h1 className='text-4xl md:text-6xl font-semibold lg:text-7xl'>
          Page not found
        </h1>
        <p className='md:text-2xl'>
          The page you are looking for does not exist.
        </p>
      </section>
    )

  return (
    <main className='fixed inset-0 bg-red-50 dark:bg-red-950/20 flex items-center justify-center'>
      <div className='max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl'>
        <div className='text-red-600 dark:text-red-400 text-4xl font-bold mb-4'>
          {message}
        </div>
        <div className='text-gray-600 dark:text-gray-300 mb-6'>{details}</div>
        {stack && (
          <div className='bg-gray-100 dark:bg-gray-900 rounded-sm p-4'>
            <code className='text-sm text-gray-800 dark:text-gray-200 font-mono'>
              {stack}
            </code>
          </div>
        )}
      </div>
    </main>
  )
}

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <QueryClientProvider client={createQueryClient()}>
        <ThemeProvider defaultTheme='system' storageKey='theme'>
          <body>
            {children}
            <ThemeSwitch />
            <ViewportInfo />
            <ScrollRestoration />
            <Scripts />
          </body>
        </ThemeProvider>
      </QueryClientProvider>
    </html>
  )
}

export default function App() {
  useEffect(() => {
    async function enableMocking() {
      if (import.meta.env.DEV) {
        const { initializeMSW } = await import('~/lib/mocks/browser')
        await initializeMSW()
      }
    }
    enableMocking()
  }, [])

  return (
    <>
      <Outlet />
      <ReactQueryDevtools buttonPosition='bottom-left' />
    </>
  )
}
