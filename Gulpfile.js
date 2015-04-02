var gulp = require('gulp')
var sass = require('gulp-sass')
var server = require('gulp-express')

gulp.task('express', function() {
  server.run(['app.js'])
})

gulp.task('styles', function () {
    gulp.src('frontend/styles/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('frontend/styles/css'))
})

function notifyLiveReload(event) {
  server.notify(event);
}

gulp.task('watch', function() {
  gulp.watch('frontend/styles/scss/*.scss', ['styles'])
  gulp.watch('frontend/**/*.html', notifyLiveReload)
  gulp.watch('frontend/styles/css/*.css', notifyLiveReload)
})

gulp.task('default', ['styles', 'express', 'watch'], function() {

})
