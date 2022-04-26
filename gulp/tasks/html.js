// import fileinclude from "gulp-file-include";
import fileinclude from 'gulp-file-include';
import rigger from 'gulp-rigger';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
// import webpHtmlNosvgLv from 'gulp-webp-html-nosvg-lv';
import versionNumber from 'gulp-version-number';
// import webpHtml from 'gulp-webp-html';
// import webpFoHtml from 'gulp-webp-for-html';

export const html = () => {
  return (
    app.gulp
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
      .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
      // .pipe(app.plugins.if(app.isBuild, webpHtmlNosvgLv()))
      // .pipe(app.plugins.if(app.isBuild, webpFoHtml(['.jpg', '.png', '.gif '])))
      // .pipe(webpHtml())
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
      .pipe(app.plugins.browsersync.stream())
  );
};
