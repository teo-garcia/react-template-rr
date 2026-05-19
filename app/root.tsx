import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from 'better-themes'
import { useEffect, useState } from 'react'
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from 'react-router'

import stylesheet from '~/app.css?url'
import {
  NavigationPendingIndicator,
  RouteLoadingState,
  RouteNotFoundState,
  RouteState,
} from '~/components/route-state/route-state'
import { ThemeSwitch } from '~/components/theme-switch/theme-switch'
import { env } from '~/lib/env'
import { createQueryClient } from '~/lib/query-client'
import { getCanonicalUrl, getSeoMeta, siteMetadata } from '~/lib/seo'

import type { Route } from './+types/root'

export const links: Route.LinksFunction = () => [
  {
    rel: 'canonical',
    href: getCanonicalUrl(),
  },
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
    href: 'https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap',
  },
  { rel: 'stylesheet', href: stylesheet },
]

export const meta: Route.MetaFunction = () => getSeoMeta()

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  let details = 'The current route failed to render.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    details = error.statusText || details
  } else if (env.isDevelopment && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  if (isRouteErrorResponse(error) && error.status === 404)
    return (
      <>
        <title>{`Page not found | ${siteMetadata.shortName}`}</title>
        <RouteNotFoundState />
      </>
    )

  return (
    <>
      <title>{`Something went wrong | ${siteMetadata.shortName}`}</title>
      <RouteState
        description={details}
        details={stack}
        title='Something went wrong'
        variant='error'
      />
    </>
  )
}

export const HydrateFallback = () => {
  return <RouteLoadingState />
}

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(createQueryClient)

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          disableTransitionOnChange
        >
          <QueryClientProvider client={queryClient}>
            <main id='main-content'>{children}</main>
            <ThemeSwitch />
          </QueryClientProvider>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  const navigation = useNavigation()
  const isNavigating = navigation.state !== 'idle'

  useEffect(() => {
    async function enableMocking() {
      if (env.isDevelopment) {
        const { initializeMSW } = await import('~/lib/mocks/browser')
        await initializeMSW()
      }
    }
    enableMocking()
  }, [])

  return (
    <>
      {isNavigating && <NavigationPendingIndicator />}
      <Outlet />
      <ReactQueryDevtools buttonPosition='bottom-left' />
    </>
  )
}
