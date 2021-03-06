import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

//Глобальная переменная для значений
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  gulp: gulp,
  path: path,
  plugins: plugins,
};

import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToTWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { svgSprive } from './gulp/tasks/svgSprive.js';
import { zip } from './gulp/tasks/zip.js';

// Наблюдатель за изменениями
const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
};
export { svgSprive };
const fonts = gulp.series(otfToTtf, ttfToTWoff, fontsStyle);

const mainTask = gulp.series(
  fonts,
  gulp.parallel(copy, html, scss, js, images)
);

// Постороение сценариев выполнения задач
const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));

const build = gulp.series(reset, mainTask);

const deployZip = gulp.series(reset, mainTask, zip);

export { dev };
export { build };
export { deployZip };

//Выполнение задачи по умолчанию
gulp.task('default', dev);
