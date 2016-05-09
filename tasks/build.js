var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../gulp.config')();
var inject = require('gulp-inject');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var Builder = require('systemjs-builder');

/* Prepare build using SystemJS Builder */
gulp.task('build', function (done) {
    //runSequence('test', 'build-sjs', done);
    runSequence('build-sjs', done);
});

gulp.task('build-sjs', function (done) {
    runSequence('build-assets', 'tsc-app', buildSJS);
    function buildSJS () {
      var builder = new Builder('.');
      builder.config(config.systemjsBuild);
      builder.loader.defaultJSExtensions = true;
      builder.bundle(config.app + 'boot',
      config.build.path + config.app + 'boot.js',
      {
        normalize: true,
        minify: true,
        // TODO: remove this when angular2 bug is solved
        mangle: false,
        // TODO
        globalDefs: { DEBUG: false }
      })
      .then(function () {
        console.log('Build complete');
        done();
      })
      .catch(function (ex) {
        console.log('error', ex);
        done('Build failed.');
      });
    }
});

/* Concat and minify/uglify all css, js, and copy fonts */
gulp.task('build-assets', function (done) {
  runSequence('clean-build', ['wiredep'], function () {
    done();

    gulp.src(config.app + '**/*.html', {
        base: config.app
    })
    .pipe(gulp.dest(config.build.app));

    gulp.src(config.app + '**/*.css', {
        base: config.app
    })
    .pipe(cssnano())
    .pipe(gulp.dest(config.build.app));

    gulp.src(config.assetsPath.images + '**/*.*', {
        base: config.assetsPath.images
    })
    .pipe(gulp.dest(config.build.assetPath + 'images'));

    gulp.src(config.data + '**/*.*', {
        base: config.data
    })
    .pipe(gulp.dest(config.build.data));

    gulp.src(config.assetsPath.fonts + '**/*.*', {
        base: config.assetsPath.fonts
    })
    .pipe(gulp.dest(config.build.fonts));

    return gulp.src(config.index)
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cssnano()))
        .pipe(gulp.dest(config.build.path));

  });
});

gulp.task('wiredep', ['sass'], function () {
  return gulp.src(config.index)
      .pipe(inject(
          gulp.src(config.assetsPath.styles + '*.css', {
              read: false
          }),
          {name: 'app', quiet: true}))
          .pipe(gulp.dest(config.root));
});
