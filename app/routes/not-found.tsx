import { RouteNotFoundState } from '~/components/route-state/route-state'
import { siteMetadata } from '~/lib/seo'

export default function NotFoundRoute() {
  return (
    <>
      <title>{`${siteMetadata.shortName} | Page not found`}</title>
      <RouteNotFoundState />
    </>
  )
}
