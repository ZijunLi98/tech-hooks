const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const del = require('del');

// step1：如果上次有对应的产物，此时要进行删除
gulp.task('clean', async function () {
  await del('lib/**');
  await del('es/**');
  await del('dist/**');
});

// step2：针对不同类型的产物进行构建
// 生成 es 规范代码：将 src 下的 TS 文件，通过 ts 编译器转换为 esm + ES5 规范的 JS 后，输出到 es 文件夹中
gulp.task('es', function () {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    // 使用 esm 的 JS
    module: 'ESNext',
  });
  // return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'));
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/'));
});

// 生成 cjs 规范代码：将 es 文件夹下的文件，经过 babel 转换为 cjs + ES5 规范的 JS 后，输出在 lib 文件夹
gulp.task('cjs', function () {
  return (
    gulp
      // 从文件系统读取 Vinyl 对象。
      .src(['./es/**/*.js'])
      // 对目标路径下的文件使用 babel
      .pipe(
        babel({
          configFile: '../../.babelrc',
        }),
      )
      // 将 Vinyl 对象写入到文件系统的流
      .pipe(gulp.dest('lib/'))
  );
});

// 生成声明文件 .d.ts 文件
gulp.task('declaration', function () {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
});

// step3：将主包的 README 复制到 hooks 包中
gulp.task('copyReadme', async function () {
  await gulp.src('../../README.md').pipe(gulp.dest('../../packages/hooks'));
});

// step3：将主包的 README 复制到 hooks 包中
exports.doc = async function copyDumiPackage() {
  await gulp.src('./config/package.json').pipe(gulp.dest('./dist'));
};

exports.default = gulp.series('clean', 'es', 'cjs', 'declaration', 'copyReadme');
