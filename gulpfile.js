var gulp = require('gulp'),
	ts = require('gulp-typescript')

gulp.task('cppackagejson', function() {
  return gulp.src(['package.json'])
  	.pipe(gulp.dest('./deploy'));
});

gulp.task('typescript', ['cppackagejson'], function() {
  console.log('Compiling typescript');
  return gulp.src(['server/**/*.ts'])
  .pipe(ts({module: 'commonjs'})).js.pipe(gulp.dest('./deploy/server'))
});

// https://github.com/pgrm/vimfika/blob/master/gulpfile.js

gulp.task('watch', function() {
	// gulp.watch('./public/scss/*.scss', ['reload-sass']);
	gulp.watch('./server/**/*.ts', ['typescript']);
});

// gulp.task('default', [
// 	'build',
// 	'watch',
// 	'serve'
// ]);