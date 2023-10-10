# tech-hooks

TechScrum Hooks Repo (测试 workflow)

## ✨ 特性

- 可靠的代码健壮：使用 Typescript 构建，提供完善的类型定义文件
- 完善的文档能力：支持文档记录，支持 demo 演示
- 完整的测试用例：配套完整的测试用例，帮助您提升项目健壮性

## 📦 安装

```bash
$ npm install --save tech-hooks
# or
$ pnpm add tech-hooks
# or
$ yarn add tech-hooks
```

## 🔨 使用

```ts
import { useToggle } from 'tech-hooks';
```

## ⚒️ 技术选型

### 包管理工具 -- pnpm

作为基础包，选择社区内更推崇的`pnpm`作为包管理工具，主要原因有：

1. `pnpm`安装速度更快，磁盘空间利用率高；
2. `pnpm`的`lock`文件适用于多个单一子功能的模块，且能保证每个模块的依赖不耦合；
3. 打包产物清晰，打包后产物确保全部为静态站点资源；

### 构建工具 -- webpack & gulp

1. 最终产物为多个基础子功能模块的耦合，选择`gulp`这种流程式的构建工具，能够更清晰的表达构建流程；
2. 选择常用的`webpack`作为构建产物的声明式接入方式；

### 静态文件打包工具 -- dumi

就目前前端社区而言，`dumi`是当之无愧的为组件研发而生的静态站点解决方案；

### 测试工具 -- jest

`jest`功能全面，资料丰富，能够很好地支撑原子化集合的工具函数；

## 其他

### 生成`CHANGELOG`

参考[conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli)，全局安装`conventional-changelog-cli`：

```bash
npm install -g conventional-changelog-cli
pnpm run changelog
```

## 📧 联系

- **TechScrum Official Website**: <https://www.techscrumapp.com/>
- **Tech Hooks GitHub**: <https://github.com/ZijunLi98/tech-hooks>
- **Tech Hooks Doc** <https://zijunli98.github.io/tech-hooks>
- **Tech Hooks Doc** <https://www.unpkg.com/tech-hooks-doc>

</br>
