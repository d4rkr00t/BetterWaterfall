'use strict';

var gulp = require('gulp'),

    sass = require('gulp-sass'),

    concat = require('gulp-concat'),

    amdOptimize = require('amd-optimize'),

    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var paths = {
    mainStyle: 'waterfall-graph-dev/css/style.scss',
    styles: ['waterfall-graph-dev/css/*.scss'],
    js: ['waterfall-graph-dev/js/*.js']
};

var errorHandler = function(err) {
    console.error(err);
    this.end();
};

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './waterfall-graph-dev/'
        }
    });
});

gulp.task('css', function () {
    return gulp.src(paths.mainStyle)
            .pipe(sass({
                errLogToConsole: true,
                sourceComments: 'map'
            }))
            .on('error', errorHandler)
            .pipe(gulp.dest('waterfall-graph-dev/css'))
            .pipe(reload({ stream: true }));
});

gulp.task('watch', function () {
    gulp.watch(paths.styles, ['css']);

    gulp.watch(paths.js, function (file) {
        gulp.src(file.path).pipe(reload({ stream: true }));
    });

    gulp.watch('./waterfall-graph-dev/*.html', function (file) {
        gulp.src(file.path).pipe(reload({ stream: true }));
    });
});

gulp.task('default', ['css', 'browser-sync', 'watch']);

gulp.task('scripts', function () {

  return gulp.src('waterfall-graph-dev/js/*.js')
    // Traces all modules and outputs them in the correct order.
    .pipe(amdOptimize('main', {
      baseUrl: './',
      paths: {
          'vendor/d3/d3.min' : 'waterfall-graph-dev/vendor/d3/d3.min',
          'app/utils' : 'waterfall-graph-dev/js/utils',
          'app/legend' : 'waterfall-graph-dev/js/legend'
      }
    }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'));

});
