import { menus } from './menus';
// const packages = require('../packages/hooks/package.json');

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
  mode: 'site',
  title: 'encode react hooks',
  favicon: '/avatar.png',
  logo: '/logo.png',
  // alias: {
  //   encodeHooks: process.cwd() + '/packages/hooks/src/index.ts',
  // },
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
