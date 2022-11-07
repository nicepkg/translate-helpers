import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../../utils/common'

export const zh: NavbarConfig = [
  {
    text: '指南',
    link: '/guide/',
  },
  {
    text: '库列表',
    children: [
      {
        text: 'translate-core',
        link: '/libs/translate-core/README.md',
      },
    ],
  },
  {
    text: `v${version}`,
    children: [
      {
        text: '更新日志',
        link: 'https://github.com/nicepkg/translate-helpers/releases',
      },
    ],
  },
]
