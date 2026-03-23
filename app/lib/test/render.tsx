import { createWrapper } from '@teo-garcia/react-shared/test-utils'
import { render as tlRender, type RenderOptions } from '@testing-library/react'

import { ThemeProvider } from '~/components/theme-provider'

// QueryClient + provider is handled by createWrapper from react-shared.
// AllProviders composes it with the React Router-specific ThemeProvider.
const QueryWrapper = createWrapper()

const AllProviders = ({ children }: React.PropsWithChildren) => (
  <QueryWrapper>
    <ThemeProvider defaultTheme='light' storageKey='theme-test'>
      {children}
    </ThemeProvider>
  </QueryWrapper>
)

const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => tlRender(ui, { wrapper: AllProviders, ...options })

export { renderWithProviders as render }
export { screen, waitFor, within } from '@testing-library/react'
