import { http, HttpResponse } from 'msw'

const healthcheckHandler = http.get('http://localhost:3001/healthcheck', () => {
  return HttpResponse.json(
    {
      data: undefined,
      message: 'ok',
      status: 200,
    },
    { status: 200 }
  )
})

export const handlers = [healthcheckHandler]
