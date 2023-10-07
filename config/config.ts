import { menus } from './menus';

export default {
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  // hash 模式路由
  history: { type: 'hash' },
  extraBabelPlugins: [
    [
      // 在 tree-shaking 失效时间接达到 tree-shaking的功能
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  title: 'techscrum react hooks',
  mode: 'site',
  // favicon: '/avatar.png',
  logo: '/logo.svg',
  dynamicImport: {},
  manifest: {},
  hash: true,
  alias: {
    techHooks: process.cwd() + '/packages/hooks/src/index.ts',
  },
  resolve: {
    includes: ['docs', 'packages/hooks/src'],
  },
  //   dynamicImport: {},
  //   manifest: {},
  //   hash: true,
  //   links: [
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
  //     },
  //     { rel: 'stylesheet', href: '/style.css' },
  //   ],
  navs: [
    { title: '指南', path: '/guide' },
    { title: 'Hooks', path: '/hooks' },
  ],
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide',
      },
    ],
    '/hooks': menus,
  },
};
