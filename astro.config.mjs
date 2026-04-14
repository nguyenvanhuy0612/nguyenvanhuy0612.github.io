import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://nguyenvanhuy0612.github.io',
  integrations: [
    starlight({
      title: "Huy's Notes",
      description: 'AI development notes — local models, APIs, and tools',
      customCss: ['./src/styles/openrouter.css'],
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
      pagination: true,
      editLink: {
        baseUrl: 'https://github.com/nguyenvanhuy0612/nguyenvanhuy0612.github.io/edit/main/',
      },
    }),
  ],
});
