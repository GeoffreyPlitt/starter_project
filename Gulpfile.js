var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('express', function() {
  require('./app')
})

gulp.task('styles', function () {
    gulp.src('frontend/styles/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('frontend/styles/css'))
})

gulp.task('watch', function() {
  gulp.watch('frontend/styles/scss/*.scss', ['styles']);
})

gulp.task('default', ['styles', 'express', 'watch'], function() {

})
