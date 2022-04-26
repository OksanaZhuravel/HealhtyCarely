//Получаем имя папки проекта
import nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./docs`;
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/`,

  },
  src: {
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,png,JPG,jpeg,JPEG,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    svgicons:`${srcFolder}/svgicons/*.svg`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    images: `${srcFolder}/img/**/*.{jpg,png,JPG,jpeg,JPEG,gif,webp, svg, ico}`,
    less: `${srcFolder}/less/**/*.less`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  rootFolder: rootFolder,
  srcFolder: srcFolder,
  ftp: ``
}