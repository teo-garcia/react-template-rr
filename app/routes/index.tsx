import { Zap } from 'lucide-react'

import { getSeoMeta, siteMetadata } from '~/lib/seo'

export function meta() {
  return getSeoMeta({
    title: `Home | ${siteMetadata.shortName}`,
  })
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
