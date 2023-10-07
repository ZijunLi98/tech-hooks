const gulp = require('gulp');
const fs = require('fs');
// 提供 writeJson 函数
const fse = require('fs-extra');
// 类似于 fs 的升级版，快速获取文件
const fg = require('fast-glob');
// 获取文件中的信息格式
const gm = require('gray-matter');
async function genDesc(mdPath) {
  if (!fs.existsSync(mdPath)) {
    return;
  }
  const mdFile = fs.readFileSync(mdPath, 'utf8');
  // 获取页面内容
  const { content } = gm(mdFile);
  let description =
    (content.replace(/\r\n/g, '\n').match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || '';
  description = description.trim();
  description = description.charAt(0).toLowerCase() + description.slice(1);
  return description;
}
async function genMetaData() {
  // metadata对象的初始参数
  const metadata = {
    functions: [],
  };
  // sync：获取当前目录结构
  // 返回包含所有 hooks 名称的数组并排序
  const hooks = fg
    .sync('src/use*', {
      onlyDirectories: true,
    })
    .map((hook) => hook.replace('src/', ''))
    .sort();
  // 等待数组中全部的 promise 转换状态
  await Promise.allSettled(
    // map 返回一个新数组，因为 cb 是 async 函数
    // async 函数返回 promise，该新数组的值全是 promise
    hooks.map(async (hook) => {
      // 输入 hooks 对应文件夹下的 md
      // 输出 md 中的 hookName 和 desc
      const description = await genDesc(`src/${hook}/index.md`);
      return {
        name: hook,
        description,
      };
    }),
  ).then((res) => {
    metadata.functions = res.map((item) => {
      if (item.status === 'fulfilled') {
        return item.value;
      }
      return null;
    });
  });
  return metadata;
}
gulp.task('metadata', async function () {
  // 生成 metadata 对象
  const metadata = await genMetaData();
  // 将对象转换为 json 格式写入 metadata.json 中
  await fse.writeJson('metadata.json', metadata, { spaces: 2 });
});
