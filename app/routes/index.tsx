import { Zap } from 'lucide-react'

export function meta() {
  return [
    { title: 'Home | RTR' },
    { content: 'A basic starter to use RR', name: 'description' },
  ]
}

export async function loader() {
  return {
    status: 200,
  }
}

export default function HomePage() {
  return (
    <section className='flex h-screen flex-col items-center justify-center gap-y-16'>
      <Zap className='size-48 text-primary lg:size-56 xl:size-72' />
    </section>
  )
}
