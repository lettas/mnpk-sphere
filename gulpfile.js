var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel_build', function() {
  return gulp.src('js/mnpk-sphere.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('babel_watch', function() {
  gulp.watch('js/mnpk-sphere.js', ['babel_build']);
});

gulp.task('default', ['babel_build', 'babel_watch']);

