var gulp = require('gulp')
var sass = require('gulp-sass')

var paths = {
  sass: 'wagtailatomicadmin/static_src/wagtailadmin/scss/**/*.scss'
}

gulp.task('compile-sass', function() {
  return gulp.src(paths.sass)
    .pipe(sass({includePaths: ['node_modules', 'wagtailatomicadmin/static_src/']}))
    .pipe(gulp.dest('wagtailatomicadmin/static/wagtailadmin/css'))
})

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['compile-sass'])
})

gulp.task('build', ['compile-sass'])
gulp.task('default', ['build', 'watch'])
