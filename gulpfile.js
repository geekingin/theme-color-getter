var gulp=require('gulp');

var jshint=require('gulp-jshint');
var uglify=require('gulp-ugligy');
var rename=require('gulp-rename');

gulp.task('hint',function(){
	gulp.src('dev/*.js')
		.pipe(jshint());
});
gulp.task('uglify',function () {
	gulp.src('dev/*.js')
		.pipe(gulp.dest('./lib'))
		.pipe(uglify())
		.pipe(rename('themeColorGetter-min.js'))
		.pipe(gulp.dest('./lib'));
});

gulp.task('default',function(){
	gulp.run('hint','uglify');

	gulp.watch('./dev',function(){
		gulp.run('hint','uglify');
	})
})