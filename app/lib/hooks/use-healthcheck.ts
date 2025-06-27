import { useQuery } from '@tanstack/react-query'

const useHealthcheck = (url: string = 'http://localhost:3001/healthcheck') => {
  return useQuery({
    queryFn: async () => {
      return await fetch(url).then((response) => response.json())
    },
    queryKey: ['healthcheck'],
  })
}

export { useHealthcheck }
