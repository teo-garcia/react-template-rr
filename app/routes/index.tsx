import { HomePage } from '~/components/home-page/home-page'
import { getSeoMeta, siteMetadata } from '~/lib/seo'

export function meta() {
  return getSeoMeta({
    title: `${siteMetadata.shortName} | Home`,
  })
}

export default function HomeRoute() {
  return <HomePage />
}
