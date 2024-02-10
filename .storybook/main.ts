import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import {resolve} from 'node:path'

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    'storybook-dark-mode' // darkmode
  ],
  typescript: {
    check: true
  },
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: './.storybook/customVite.config.ts',
      }
      
    }
    
  },
  // refs: {
  //   'design-system': {
  //     title: 'Storybook Design System',
  //     url: 'https://master--5ccbc373887ca40020446347.chromatic.com/',
  //     expanded: false // Optional, true by default
  //   }
  // },
}
export default config
