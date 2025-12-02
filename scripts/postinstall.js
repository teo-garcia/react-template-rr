import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

try {
  const reactRouterNodePath = path.join(
    __dirname,
    '..',
    'node_modules',
    '@react-router',
    'node',
    'dist',
    'index.js'
  )

  const content = readFileSync(reactRouterNodePath, 'utf8')

  // Replace all occurrences of @mjackson/node-fetch-server with @remix-run/node-fetch-server
  const updated = content.replaceAll(
    '@mjackson/node-fetch-server',
    '@remix-run/node-fetch-server'
  )

  if (content === updated) {
    console.log('✓ @react-router/node already patched or no changes needed')
  } else {
    writeFileSync(reactRouterNodePath, updated, 'utf8')
    console.log(
      '✓ Patched @react-router/node to use @remix-run/node-fetch-server'
    )
  }
} catch (error) {
  console.error('Warning: Could not patch @react-router/node:', error.message)
  // Silently succeed to not break the install
}
