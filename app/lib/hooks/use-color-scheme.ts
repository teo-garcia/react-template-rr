import { useEffect, useState } from 'react'

type ColorScheme = 'dark' | 'light'

const MEDIA_QUERY = '(prefers-color-scheme: dark)'

function getColorScheme(): ColorScheme {
  if (!('window' in globalThis) || globalThis.window.matchMedia == undefined) {
    return 'light'
  }

  return globalThis.window.matchMedia(MEDIA_QUERY).matches ? 'dark' : 'light'
}

export function useColorScheme(): ColorScheme {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(getColorScheme)

  useEffect(() => {
    if (
      !('window' in globalThis) ||
      globalThis.window.matchMedia == undefined
    ) {
      return
    }

    const mediaQuery = globalThis.window.matchMedia(MEDIA_QUERY)
    const updateColorScheme = (event?: MediaQueryListEvent) => {
      setColorScheme((event?.matches ?? mediaQuery.matches) ? 'dark' : 'light')
    }

    updateColorScheme()
    mediaQuery.addEventListener('change', updateColorScheme)

    return () => {
      mediaQuery.removeEventListener('change', updateColorScheme)
    }
  }, [])

  return colorScheme
}
