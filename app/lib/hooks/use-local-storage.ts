import { useCallback, useState } from 'react'

function readStorageValue<T>(key: string, initialValue: T): T {
  if (globalThis.localStorage == undefined) {
    return initialValue
  }

  const item = globalThis.localStorage.getItem(key)
  if (item == undefined) {
    return initialValue
  }

  return JSON.parse(item) as T
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() =>
    readStorageValue(key, initialValue)
  )

  const setValue = useCallback(
    (value: T) => {
      setStoredValue(value)

      if (globalThis.localStorage != undefined) {
        globalThis.localStorage.setItem(key, JSON.stringify(value))
      }
    },
    [key]
  )

  return [storedValue, setValue] as const
}
