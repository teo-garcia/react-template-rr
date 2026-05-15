import { env } from './env'

const publicUrl = env.publicUrl.replace(/\/$/, '')

export const siteMetadata = {
  description:
    'Production-ready React Router template with server rendering, theme support, health checks, tests, and Docker defaults.',
  name: 'React Template React Router',
  shortName: 'RTRR',
  url: publicUrl,
} as const

export const getCanonicalUrl = (path = '/') => {
  return new URL(path, siteMetadata.url).toString()
}

export const getSeoMeta = ({
  description = siteMetadata.description,
  path = '/',
  title = siteMetadata.name,
}: {
  description?: string
  path?: string
  title?: string
} = {}) => {
  const url = getCanonicalUrl(path)

  return [
    { title },
    { content: description, name: 'description' },
    { content: title, property: 'og:title' },
    { content: description, property: 'og:description' },
    { content: 'website', property: 'og:type' },
    { content: url, property: 'og:url' },
    { content: siteMetadata.name, property: 'og:site_name' },
    { content: 'summary', name: 'twitter:card' },
    { content: title, name: 'twitter:title' },
    { content: description, name: 'twitter:description' },
  ]
}
