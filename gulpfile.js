var 
		fs			= require('fs')
	,	gulp 		= require('gulp')
	,	include 	= require('gulp-include')
	,	watch 		= require('gulp-watch')
	,	jshint 		= require('gulp-jshint')
	,	stylish 	= require('jshint-stylish')
	,	concat 		= require('gulp-concat')
	,	uglify 		= require('gulp-uglify')
	,	rename 		= require('gulp-rename')
	,	bump 		= require('gulp-bump')
	,	git			= require('gulp-git')
	,	semver		= require('semver')
	,	replace		= require('gulp-replace')
;

gulp.task('dev', function(cb){
	gulp.src('./src/**/*.js')
		.pipe( watch(function(files){

			gulp.src('./src/stdClass.js')
				.pipe( gulp.dest('./dist') )
				.pipe( uglify() )
				.pipe( rename({suffix:'.min'}) )
				.pipe( gulp.dest('./dist') );

			gulp.src('./src/extensions/**/*.js')
				.pipe( gulp.dest('./dist/extensions') )
				.pipe( uglify() )
				.pipe( rename({suffix:'.min'}) )
				.pipe( gulp.dest('./dist/extensions') );

		}) )
		.pipe( jshint() )
		.pipe( jshint.reporter( stylish ) )
});

gulp.task('build', function(){

});






