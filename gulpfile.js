'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const server = require('browser-sync').create();
const del = require('del');
const fileinclude = require('gulp-file-include');
const babel = require('gulp-babel');

gulp.task('html', function () {
  return gulp
    .src('app/*.html')
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(gulp.dest('./build/'));
});

gulp.task('del', function () {
  return del(['build']);
});

gulp.task('css', function () {
  return gulp
    .src('app/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('build/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});

gulp.task('js', function () {
  return gulp
    .src('app/js/**/*')
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(gulp.dest('build/js'))
    .pipe(server.stream());
});

gulp.task('img', function () {
  return gulp.src('app/img/**/*').pipe(gulp.dest('build/img')).pipe(server.stream());
});

gulp.task('server', function () {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false,
    tunnel: false,
  });
  gulp.watch('app/sass/**/*.{scss,sass}', gulp.series('css', 'refresh'));
  gulp.watch('app/img/**/*', gulp.series('img', 'refresh'));
  gulp.watch('app/js/**/*.js', gulp.series('js', 'refresh'));
  gulp.watch('app/**/*.html', gulp.series('html', 'refresh'));
});

gulp.task('copy', function () {
  return gulp
    .src(['app/fonts/**/*.{woff, woff2, eot, ttf}', 'app/img/**', 'app/js/**', 'app/css/**', 'app/libs/**'], {
      base: 'app',
    })
    .pipe(gulp.dest('build'));
});

gulp.task('refresh', function (done) {
  server.reload();
  done();
});

gulp.task('build', gulp.series('del', 'copy', 'css', 'html'));
gulp.task('start', gulp.series('build', 'server'));
