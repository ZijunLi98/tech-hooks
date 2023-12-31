import { menus } from './menus';

const unpkg = '/tech-hooks-doc@1.1.0/';
const gitPage = '/tech-hooks/';
const targetPath = process.env.DUMI_ENV === 'unpkg' ? unpkg : gitPage;

export default {
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  // https://zijunli98.github.io/tech-hooks
  // https://www.unpkg.com/tech-hooks-doc
  publicPath: targetPath,
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
  favicon: `${targetPath}favicon.ico`,
  logo: `${targetPath}logo.svg`,
  dynamicImport: {},
  manifest: {},
  hash: true,
  alias: {
    techHooks: process.cwd() + '/packages/hooks/src/index.ts',
    'tech-hooks': process.cwd() + '/packages/hooks/src/index.ts',
  },
  resolve: {
    includes: ['docs', 'packages/hooks/src'],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: `${targetPath}style.css` },
  ],
  navs: [
    { title: '指南', path: '/guide' },
    { title: 'Hooks', path: '/hooks' },
    { title: 'GitHub', path: 'https://github.com/ZijunLi98/tech-hooks' },
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
