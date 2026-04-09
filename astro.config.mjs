import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://nguyenvanhuy0612.github.io',
  integrations: [
    starlight({
      title: "Huy's Notes",
      description: 'Tutorials, guides, and notes',
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
          label: 'Tutorials',
          autogenerate: { directory: 'tutorials' },
        },
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Notes',
          autogenerate: { directory: 'notes' },
        },
        {
          label: 'Blog',
          autogenerate: { directory: 'posts' },
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
