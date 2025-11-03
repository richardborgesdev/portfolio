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
