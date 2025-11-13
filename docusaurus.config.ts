import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Richard Borges',
  tagline: 'Senior Frontend Engineer & Tech Enthusiast',
  favicon: 'img/favicon.ico',

  // SEO and Social Media Metadata
  url: 'https://richardborgesdev.github.io',
  baseUrl: '/portfolio/',

  // Enhanced metadata for social sharing
  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // GitHub pages deployment config
  organizationName: 'richardborgesdev',
  projectName: 'portfolio',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learning-hubs',
        path: 'learning-hubs',
        routeBasePath: 'learning-hubs',
        sidebarPath: './learning-hubs-sidebars.ts',
        editUrl: 'https://github.com/richardborgesdev/portfolio/tree/main/',
      },
    ],
  ],

  themeConfig: {
    // Enhanced social media metadata
    image: 'img/social-card.png', // We'll create this image
    metadata: [
      {
        name: 'description',
        content:
          'Portfolio of Richard Borges - Senior Frontend Engineer specializing in React, TypeScript, and modern web technologies. Based in Joinville, Brazil.',
      },
      {
        name: 'keywords',
        content:
          'Richard Borges, Frontend Engineer, React, TypeScript, JavaScript, Web Development, Portfolio, Software Developer, Brazil',
      },
      {
        name: 'author',
        content: 'Richard Borges',
      },
      // Open Graph metadata
      {
        property: 'og:title',
        content: 'Richard Borges - Senior Frontend Engineer',
      },
      {
        property: 'og:description',
        content:
          'Senior Frontend Engineer with 6+ years of experience in React, TypeScript, and modern web technologies. Technical leader and mentor passionate about clean code and continuous learning.',
      },
      {
        property: 'og:image',
        content:
          'https://richardborgesdev.github.io/portfolio/img/social-card.png',
      },
      {
        property: 'og:image:alt',
        content: 'Richard Borges - Senior Frontend Engineer Portfolio',
      },
      {
        property: 'og:url',
        content: 'https://richardborgesdev.github.io/portfolio/',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: 'Richard Borges Portfolio',
      },
      // Twitter Card metadata
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Richard Borges - Senior Frontend Engineer',
      },
      {
        name: 'twitter:description',
        content:
          'Senior Frontend Engineer with expertise in React, TypeScript, and modern web technologies. Technical leader and mentor from Brazil.',
      },
      {
        name: 'twitter:image',
        content:
          'https://richardborgesdev.github.io/portfolio/img/social-card.png',
      },
      {
        name: 'twitter:image:alt',
        content: 'Richard Borges Portfolio',
      },
      // LinkedIn and professional networks
      {
        property: 'article:author',
        content: 'https://www.linkedin.com/in/richardborgesdev',
      },
    ],
    navbar: {
      title: 'Richard Borges',
      logo: {
        alt: 'Richard Borges Logo',
        src: 'img/avatar2d_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '📄 Curriculum',
        },
        {
          type: 'docSidebar',
          sidebarId: 'learningHubsSidebar',
          position: 'left',
          label: '📚 Learning Hubs',
          docsPluginId: 'learning-hubs',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/richardborgesdev/portfolio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/docs/intro',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'X',
    //           href: 'https://x.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         // {
    //         //   label: 'Blog',
    //         //   to: '/blog',
    //         // },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} Richard Borges. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
