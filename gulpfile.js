'use strict';

var gulp = require('gulp'),

    sass = require('gulp-sass'),

    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var paths = {
    mainStyle: 'waterfall-graph-dev/css/style.scss',
    styles: ['waterfall-graph-dev/css/*.scss'],
    js: ['waterfall-graph-dev/js/*.js']
};

var buildDir = 'dist/';

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
