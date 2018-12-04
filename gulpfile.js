var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('concat_css', function () {
    gulp.src('src/styles/**/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build/styles'))
});
gulp.task('replace_html', function () {
    gulp.src('src/templates/**/*.html')
        .pipe(gulp.dest('build'))
});
gulp.task('default', ['concat_css', 'replace_html']);
