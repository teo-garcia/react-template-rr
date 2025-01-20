import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
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
import { ThemeSwitch } from '~/components/ThemeSwitch/ThemeSwitch'
import { ViewportInfo } from '~/components/ViewportInfo/ViewportInfo'
import { NotFoundBanner } from '~/features/NotFoundBanner/NotFoundBanner'
import { isDevelopment } from '~/lib/misc/config'

import type { Route } from './+types/root'

const queryClient = new QueryClient()

export default function App() {
  useEffect(() => {
    async function enableMocking() {
      if (isDevelopment()) {
        const { worker } = await import('~/lib/mocks/browser')
        await worker.start({
          onUnhandledRequest: 'bypass',
        })
      }
    }
    enableMocking()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
  )
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ThemeSwitch />
        {isDevelopment() && <ViewportInfo />}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
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
    return <NotFoundBanner />

  return (
    <main className="fixed inset-0 bg-red-50 dark:bg-red-950/20 flex items-center justify-center">
      <div className="max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <div className="text-red-600 dark:text-red-400 text-4xl font-bold mb-4">
          {message}
        </div>
        <div className="text-gray-600 dark:text-gray-300 mb-6">{details}</div>
        {stack && (
          <div className="bg-gray-100 dark:bg-gray-900 rounded p-4">
            <code className="text-sm text-gray-800 dark:text-gray-200 font-mono">
              {stack}
            </code>
          </div>
        )}
      </div>
    </main>
  )
}

export const links: Route.LinksFunction = () => [
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
