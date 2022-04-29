import fileinclude from 'gulp-file-include';
import rigger from 'gulp-rigger';
import versionNumber from 'gulp-version-number';
import htmlImgWrapper from 'gulp-html-img-wrapper';

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'HTML',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(rigger())
    .pipe(
      fileinclude(
        // { prefix: '@@', basepath: './src/html' }
        {
          prefix: '@@',
          basepath: '@file',
        }
      )
    )
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(app.plugins.if(app.isBuild, htmlImgWrapper()))
    .pipe(
      app.plugins.if(
        app.isBuild,
        versionNumber({
          value: '%DT%',
          append: {
            key: '_v',
            cover: 0,
            to: ['css', 'js'],
          },
          output: {
            file: 'gulp/version.json',
          },
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
};
