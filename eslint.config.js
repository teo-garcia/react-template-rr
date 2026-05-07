import shared from '@teo-garcia/eslint-config-shared'
import sharedPlaywright from '@teo-garcia/eslint-config-shared/playwright'
import sharedReact from '@teo-garcia/eslint-config-shared/react'
import { defineConfig } from 'eslint/config'

export default defineConfig([...shared, ...sharedReact, ...sharedPlaywright])
