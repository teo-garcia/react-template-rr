import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render as tlRender, type RenderOptions } from '@testing-library/react'

import { ThemeProvider } from '~/components/theme-provider'
import { ThemeSwitch } from '~/components/theme-switch/theme-switch'
import { ViewportInfo } from '~/components/viewport-info/viewport-info'

const createTestQueryClient = () =>
  new QueryClient({ defaultOptions: { queries: { retry: false } } })

const AllProviders = ({ children }: React.PropsWithChildren) => (
  <QueryClientProvider client={createTestQueryClient()}>
    <ThemeProvider defaultTheme='light' storageKey='theme-test'>
      {children}
      <ThemeSwitch />
      <ViewportInfo />
    </ThemeProvider>
  </QueryClientProvider>
)

const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => tlRender(ui, { wrapper: AllProviders, ...options })

export { renderWithProviders as render }
export { screen, waitFor,within } from '@testing-library/react'
