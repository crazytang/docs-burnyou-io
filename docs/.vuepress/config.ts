import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler:viteBundler(),
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: 'ArtsArena Functions Whitepager',
      description: 'Vue-powered Static Site Generator',
    },
    '/zh-HK/': {
      lang: 'zh-HK',
      title: 'ArtsArena 功能性白皮书',
      description: 'Vue 驱动的静态网站生成器',
    },
  },
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',
        sidebar: [
          {
            text: 'Overview',
            link: './README.md',
          }, {
            text: 'Battle',
            link: './Battle.md'
          }, {
            text: 'Vote',
            link: './Vote.md'
          }, {
            text: 'GuessBid',
            link: './GuessBid.md'
          }, {
            text: '$AA',
            link: './AA.md'
          },
        ],
      },
      '/zh-HK/': {
        selectLanguageName: '繁体中文',
        sidebar: [
          // SidebarItem
          {
            text: '概述',
            link: './README.md',
            /*            children: [
                          // SidebarItem
                          {
                            text: 'github',
                            link: 'https://github.com',
                            children: [],
                          },
                        ],*/
          }, {
            text: '對戰',
            link: './Battle.md'
          }, {
            text: '投票',
            link: './Vote.md'
          }, {
            text: '競猜',
            link: './GuessBid.md'
          }, {
            text: '$AA',
            link: './AA.md'
          },
        ],
      },
    },
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏

    /*    navbar: [
          // NavbarItem
          {
            text: 'Foo',
            link: '/foo/',
          },
          // NavbarGroup
          {
            text: 'Group',
            children: ['/group/foo.md', '/group/bar.md'],
          },
          // 字符串 - 页面文件路径
          '/bar/README.md',
        ],*/
  }),
})