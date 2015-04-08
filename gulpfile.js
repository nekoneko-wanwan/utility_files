/* require */
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var markdownpdf = require('gulp-markdown-pdf');
var minimist    = require('minimist');

/* markdown -> pdf */
gulp.task('pdf', function () {
  return gulp.src('src/*.md')
    .pipe(markdownpdf({
      cssPath: 'src/pdf.css'
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['pdf']);