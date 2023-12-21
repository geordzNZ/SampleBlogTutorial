import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://gk-astro-sample-blog-gk.netlify.app",
  integrations: [preact()]
});