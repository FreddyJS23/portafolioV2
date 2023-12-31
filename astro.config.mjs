import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
   site: 'https://freddyjs23.github.io',
   base: '/portafolioV2',
  integrations: [tailwind({
    applyBaseStyles: false
  }), react()],
  experimental: {
    assets: true
  }
});