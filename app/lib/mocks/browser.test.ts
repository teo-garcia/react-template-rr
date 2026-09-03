import { expect, test, vi } from 'vitest'

const { setupWorker, startWorker } = vi.hoisted(() => {
  const startWorker = vi.fn().mockResolvedValue(undefined)

  return {
    setupWorker: vi.fn(() => ({ start: startWorker })),
    startWorker,
  }
})

vi.mock('msw/browser', () => ({ setupWorker }))

import { initializeMSW } from './browser'

test('initializeMSW registers handlers and starts one worker', async () => {
  expect(setupWorker).toHaveBeenCalledOnce()
  expect(setupWorker.mock.calls[0]).toHaveLength(1)

  await Promise.all([initializeMSW(), initializeMSW()])

  expect(startWorker).toHaveBeenCalledOnce()
  expect(startWorker).toHaveBeenCalledWith({
    onUnhandledRequest: 'bypass',
  })
})
