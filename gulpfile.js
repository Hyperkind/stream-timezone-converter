'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('js', function() {
  return gulp.src('./app/js/*.js')
  .pipe(gulp.dest('./js'));
});

gulp.task('sass', function() {
  return gulp.src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./app/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['js', 'sass']);
