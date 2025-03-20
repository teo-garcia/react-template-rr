import { setupWorker } from 'msw/browser'

import { handlers } from './handlers'

export const worker = setupWorker()

export async function initializeMSW() {
  worker.use(...handlers)

  await worker.start({
    onUnhandledRequest: 'bypass',
  })
}
