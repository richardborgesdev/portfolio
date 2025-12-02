import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  learningHubsSidebar: [
    'intro',
    {
      type: 'category',
      label: '🇺🇸 English',
      collapsed: true,
      items: [
        'english-hub/README',
        'english-hub/CHEAT_SHEET',
        'english-hub/PRONUNCIATION',
        'english-hub/BUSUU',
        'english-hub/CAMBLY',
        'english-hub/THE_ENGLISH_MASTER_COURSE',
      ],
    },
    {
      type: 'category',
      label: '🌐 Web Development',
      collapsed: true,
      items: ['web-hub/README'],
    },
    {
      type: 'category',
      label: '🎨 Design',
      collapsed: true,
      items: ['design-hub/README'],
    },
    {
      type: 'category',
      label: '📱 Mobile Development',
      collapsed: true,
      items: ['mobile-hub/README'],
    },
    {
      type: 'category',
      label: '🎮 Game Development',
      collapsed: true,
      items: ['games-hub/README'],
    },
    {
      type: 'category',
      label: '🏗️ Software Architecture',
      collapsed: true,
      items: [
        'architecture-hub/README',
        'architecture-hub/GETTING-STARTED',
        {
          type: 'category',
          label: '📚 Fundamentals',
          collapsed: true,
          items: [
            'architecture-hub/fundamentals/principles',
            'architecture-hub/fundamentals/patterns',
            'architecture-hub/fundamentals/system-design',
            'architecture-hub/fundamentals/adr',
          ],
        },
        {
          type: 'category',
          label: '⚛️ Frontend Architecture',
          collapsed: true,
          items: [
            'architecture-hub/frontend/fundamentals',
            'architecture-hub/frontend/component-architecture',
            'architecture-hub/frontend/app-structure',
            'architecture-hub/frontend/state-management',
            'architecture-hub/frontend/design-systems',
            'architecture-hub/frontend/micro-frontends',
            'architecture-hub/frontend/performance',
          ],
        },
        {
          type: 'category',
          label: '🎨 Design Patterns',
          collapsed: true,
          items: [
            'architecture-hub/patterns/creational',
            'architecture-hub/patterns/structural',
            'architecture-hub/patterns/behavioral',
            'architecture-hub/patterns/frontend-patterns',
          ],
        },
        {
          type: 'category',
          label: '📖 Case Studies',
          collapsed: true,
          items: ['architecture-hub/case-studies/README'],
        },
        {
          type: 'category',
          label: '💻 Examples',
          collapsed: true,
          items: ['architecture-hub/examples/README'],
        },
      ],
    },
    {
      type: 'category',
      label: '👔 Staff Engineering',
      collapsed: true,
      items: ['staff-hub/README'],
    },
    // Future learning hubs can be added here
    // {
    //   type: 'category',
    //   label: '📚 Always Learning',
    //   collapsed: true,
    //   items: [
    //     'always-learning/README',
    //     // Add more files as needed
    //   ],
    // },
  ],
};

export default sidebars;
