// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { type RenderOptions } from '@testing-library/react'
// import { render } from '@testing-library/react'

// import type { ReactElement, ReactNode } from 'react'

// const queryClient = new QueryClient()

// export type ProvidersWrapperProps = {
//   children: ReactNode
// }

// const ProvidersWrapper = (props: ProvidersWrapperProps) => {
//   const { children } = props
//   return (
//     <QueryClientProvider client={queryClient}>
//       <HelmetProvider>
//         <MemoryRouter>{children}</MemoryRouter>
//       </HelmetProvider>
//     </QueryClientProvider>
//   )
// }

// const customRender = (ui: ReactElement, options?: RenderOptions) => {
//   return render(ui, { wrapper: ProvidersWrapper, ...options })
// }

// export { customRender }
