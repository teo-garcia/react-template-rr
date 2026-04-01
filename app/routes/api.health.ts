import { createHealthyHealthResponse } from '~/lib/health'

export const loader = () => {
  return Response.json(createHealthyHealthResponse())
}
