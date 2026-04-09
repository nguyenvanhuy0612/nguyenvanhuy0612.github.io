import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://nguyenvanhuy0612.github.io',
  integrations: [mdx()],
});
