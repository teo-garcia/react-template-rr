import { createContext, useContext, useEffect, useState } from 'react'

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
    // Handle localStorage errors
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
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (import.meta.env.SSR) return

    const root = globalThis.document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = globalThis.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      setResolvedTheme(systemTheme)
      return
    }

    root.classList.add(theme)
    setResolvedTheme(theme)
  }, [theme])

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

  if (!mounted) {
    return <>{children}</>
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
