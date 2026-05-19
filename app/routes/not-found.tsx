import { RouteNotFoundState } from '~/components/route-state/route-state'
import { siteMetadata } from '~/lib/seo'

export default function NotFoundRoute() {
  return (
    <>
      <title>{`Page not found | ${siteMetadata.shortName}`}</title>
      <RouteNotFoundState />
    </>
  )
}
