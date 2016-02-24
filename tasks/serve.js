var gulp = require('gulp');
var liveServer = require('live-server');
var config = require('../gulp.config')();

/* Start live server dev mode */
gulp.task('serve-dev',
  ['wiredep', 'tsc-app', 'watch-ts', 'watch-ts-templates', 'watch-sass'], function () {
  liveServer.start(config.liveServer.dev);
});

/* Start live server production mode (with Karma Tests) */
/*
gulp.task('serve-prod', ['build'], function () {
  liveServer.start(config.liveServer.prod);
});
*/
