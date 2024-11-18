import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import icon from 'astro-icon';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: "hybrid",

  integrations: [react(), icon({
  iconDir: "src/icons"
  })],

  adapter: node({
    mode: 'middleware'
  })
});