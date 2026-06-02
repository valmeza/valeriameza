import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://valeriameza.com',
  integrations: [tailwind()],
  output: 'static',
});
