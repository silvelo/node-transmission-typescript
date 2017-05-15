const gulp = require('gulp');
const ts = require('gulp-typescript');
const merge = require('merge2');

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
    .pipe(tsProject());

  return merge([
    tsResult.dts.pipe(gulp.dest(tsProject.config.compilerOptions.outDir)),
    tsResult.js.pipe(gulp.dest(tsProject.config.compilerOptions.outDir))
  ]);
});


gulp.task('default', ['scripts']);