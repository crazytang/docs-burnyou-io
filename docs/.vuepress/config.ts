import {defaultTheme} from "vuepress";

export default {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: 'BurnYou Functions Whitepager',
      description: 'Vue-powered Static Site Generator',
    },
    '/zh-TW/': {
      lang: 'zh-TW',
      title: 'BurnYou 功能性白皮书',
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
          },{
            text: 'Vote',
            link: './Vote.md'
          },{
            text: 'Transactions',
            link: './Transactions.md'
          },{
            text: '$BURN',
            link: './BURN.md'
          },
        ],
      },
      '/zh-TW/': {
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
            text: '对战',
            link: './Battle.md'
          },{
            text: '投票',
            link: './Vote.md'
          },{
            text: '交易',
            link: './Transactions.md'
          },{
            text: '$BURN',
            link: './BURN.md'
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
}