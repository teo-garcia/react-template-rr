import { createContext, useContext, useEffect, useMemo, useState } from 'react'

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

const getThemeFromStorage = (key: string, fallback: Theme): Theme => {
  if (import.meta.env.SSR) return fallback
  try {
    return (localStorage.getItem(key) as Theme) || fallback
  } catch (error) {
    console.warn('Failed to get theme from localStorage:', error)
    return fallback
  }
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'theme',
  ...properties
}: Readonly<ThemeProviderProps>) {
  const [theme, setTheme] = useState<Theme>(() =>
    getThemeFromStorage(storageKey, defaultTheme)
  )

  const [systemTheme, setSystemTheme] = useState<'dark' | 'light'>(() => {
    if (import.meta.env.SSR) return 'light'
    return globalThis.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  const resolvedTheme = useMemo<'dark' | 'light'>(() => {
    return theme === 'system' ? systemTheme : theme
  }, [theme, systemTheme])

  useEffect(() => {
    if (import.meta.env.SSR) return

    const mediaQuery = globalThis.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (import.meta.env.SSR) return
    const root = globalThis.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(resolvedTheme)
  }, [resolvedTheme])

  const value = {
    resolvedTheme,
    setTheme: (theme: Theme) => {
      if (!import.meta.env.SSR) {
        try {
          localStorage.setItem(storageKey, theme)
        } catch (error) {
          console.warn('Failed to save theme to localStorage:', error)
        }
      }
      setTheme(theme)
    },
    theme,
  }

  return (
    <ThemeProviderContext.Provider {...properties} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context == undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
