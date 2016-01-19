var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');

//define a task with the name of 'default'
// and a callback to perform when the task is ran

watch(['./source/*.js'], function() {
  console.log("App has been modified; re-compiling.")
  gulp.start('default');
});

gulp.task('default', function() {
  return browserify('./source/app.js')
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('build.js'))
        .pipe(gulp.dest('./build/'))
});
