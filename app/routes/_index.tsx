import { SiReactrouter } from 'react-icons/si'

import type { Route } from './+types/_index'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'HOME | RTR' },
    { name: 'description', content: 'A basic starter to use RR' },
  ]
}

export async function loader() {
  return {
    status: 200,
  }
}

export default function HomePage() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-16">
      <SiReactrouter className="size-48 text-foreground dark:text-background lg:size-56 xl:size-72" />
    </section>
  )
}
