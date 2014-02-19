var gulp = require('gulp')
	, html2csv = require('gulp-table2csv')
	, htmlpath = 'html/**/*.html'
	, csvpath = '/csv';

gulp.task('html2csv', function() {
	return gulp.src(htmlpath)
	    .pipe(html2csv(function (path) {
	        path.dirname += csvpath;
	        path.extname = ".csv"
	    }))
	    .pipe(gulp.dest("./"));
});

gulp.task('watch', function () {
  gulp.watch(htmlpath, ['html2csv']);
});

gulp.task('default', ['html2csv', 'watch']);