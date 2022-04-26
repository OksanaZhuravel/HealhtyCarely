import replace from 'gulp-replace';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import browsersync from 'browser-sync';
import newer from 'gulp-newer';
import ifPlugin from 'gulp-if';

export const plugins = {
  replace: replace,
  notify: notify,
  plumber: plumber,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
};
