import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/guide/': [
    {
      text: '指南',
      children: ['/guide/README.md', '/guide/questions.md'],
    },
  ],
  '/libs/translate-core/': [
    {
      text: 'translate-core',
      children: [
        '/libs/translate-core/README.md',
        '/libs/translate-core/example.md',
      ],
    },
  ],
}
