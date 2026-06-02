import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://valmeza.github.io/valeriameza/',
  base: '/valeriameza',
  integrations: [tailwind()],
  output: 'static',
});
