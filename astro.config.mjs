import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://nguyenvanhuy0612.github.io',
  integrations: [
    starlight({
      title: 'LLM Field Notes',
      description: 'In-depth guides on local AI, large language models, and developer tools',
      customCss: ['./src/styles/openrouter.css'],
      components: {
        Footer: './src/components/Footer.astro',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/nguyenvanhuy0612',
        },
      ],
      sidebar: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: 'Local AI',
          autogenerate: { directory: 'local-ai' },
        },
        {
          label: 'AI APIs',
          autogenerate: { directory: 'ai-apis' },
        },
        {
          label: 'Blog',
          autogenerate: { directory: 'blog' },
        },
      ],
      lastUpdated: true,
      pagination: false,
      editLink: {
        baseUrl: 'https://github.com/nguyenvanhuy0612/nguyenvanhuy0612.github.io/edit/main/',
      },
    }),
  ],
});
