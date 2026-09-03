import { setupWorker } from 'msw/browser'

import { handlers } from './handlers'

export const worker = setupWorker(...handlers)

let workerStartPromise: Promise<void> | undefined

const startMSWBrowser = async () => {
  await worker.start({
    onUnhandledRequest: 'bypass',
  })
}

export function initializeMSW() {
  workerStartPromise ??= startMSWBrowser().catch((error: unknown) => {
    workerStartPromise = undefined
    console.error('Failed to start MSW:', error)
  })

  return workerStartPromise
}
