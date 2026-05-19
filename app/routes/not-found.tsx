import { RouteNotFoundState } from '~/components/route-state/route-state'
import { getSeoMeta, siteMetadata } from '~/lib/seo'

export function meta() {
  return getSeoMeta({
    title: `Page not found | ${siteMetadata.shortName}`,
  })
}

export default function NotFoundRoute() {
  return <RouteNotFoundState />
}
