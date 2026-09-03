import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { HydratedRouter } from 'react-router/dom'

import { env } from '~/lib/env'

async function hydrate() {
  if (env.isDevelopment) {
    const { initializeMSW } = await import('~/lib/mocks/browser')
    await initializeMSW()
  }

  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <HydratedRouter />
      </StrictMode>
    )
  })
}

void hydrate()
