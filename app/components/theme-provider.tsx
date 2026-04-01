import { useColorScheme, useLocalStorage } from '@teo-garcia/react-shared/hooks'
import { createContext, useContext, useEffect, useMemo } from 'react'

type Theme = 'dark' | 'light' | 'system'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeProviderState {
  resolvedTheme: 'dark' | 'light'
  setTheme: (theme: Theme) => void
  theme: Theme
}

const initialState: ThemeProviderState = {
  resolvedTheme: 'light',
  setTheme: () => {},
  theme: 'system',
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'theme',
  ...properties
}: Readonly<ThemeProviderProps>) {
  const [theme, setStoredTheme] = useLocalStorage<Theme>(
    storageKey,
    defaultTheme
  )
  const systemTheme = useColorScheme()

  const resolvedTheme = useMemo<'dark' | 'light'>(() => {
    return theme === 'system' ? systemTheme : theme
  }, [theme, systemTheme])

  useEffect(() => {
    if (globalThis.document == undefined) return
    const root = globalThis.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(resolvedTheme)
  }, [resolvedTheme])

  const value = {
    resolvedTheme,
    setTheme: (nextTheme: Theme) => {
      setStoredTheme(nextTheme)
    },
    theme,
  }

  return (
    <ThemeProviderContext.Provider {...properties} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (!context) throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
