var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('express', function() {
  require('./app')
})

gulp.task('sass', function () {
    gulp.src('frontend/styles/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('frontend/styles/css'))
})

gulp.task('default', ['express'], function() {

})
