'use strict';

var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');
var clean        = require('gulp-clean');
var copy         = require('gulp-copy');
var less         = require('gulp-less');
var react        = require('gulp-react');
var nodemon      = require("gulp-nodemon");

var path         = require('path');

var version      = 'v' + require('./package.json').version;
// Single instance
var nodemon_instance;

// Sub tasks
gulp.task('clean', function () {
  return gulp.src(['static/dist/*'])
    .pipe(clean({force: true}));
});

gulp.task('copy', function () {
  return gulp.src(['static/src/images/**/*', 'static/src/favicon.ico'])
    .pipe(copy('static/dist/', {prefix: 2}));
});

gulp.task('less-compile', function () {
  return gulp.src('static/src/less/app.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('static/dist/css'));
});

gulp.task('jsx-compile', function () {
    return gulp.src('static/src/jsx/**/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('static/dist/js'));
});

gulp.task('watch', function () {
  gulp.watch('static/src/jsx/**/*.jsx', ['jsx-compile']);
  gulp.watch('static/src/less/**/*.less', ['less-compile']);
});

gulp.task('nodemon', function () {
  if(!nodemon_instance){ // Start server
    nodemon_instance = nodemon({
      script:"app.js",
      nodeArgs: ["--harmony", "--debug"],
      env: { "NODE_ENV": "dev" },
      watch: "__manual_watch__",
      ext: "__manual_watch__"
    });
  }else { // Restart server
    nodemon_instance.emit("restart");
  }
});

// Main stask
gulp.task('install', gulpSequence('clean', 'copy', ['less-compile', 'jsx-compile']));
gulp.task('dev', gulpSequence('install', ['watch'], 'nodemon'));
gulp.task('build', gulpSequence('install', 'nodemon'));
