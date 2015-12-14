// Load plugins
var gulp = require('gulp'),
	bower = require('gulp-bower'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	rimraf = require('rimraf');

var config = {
	htmlSrcPath:  './src/html',
 	sassSrcPath:  './src/scss',
	jsSrcPath:    './src/js',
	htmlDestPath: './out',
	sassDestPath: './out/assets/css',
	jsDestPath:   './out/assets/js',
 	bowerDir:     './bower_components' 
}


// Bower
gulp.task('bower', function() { 
	return bower()
 		.pipe(gulp.dest(config.bowerDir)) ;
});

// HTML
gulp.task('html', function() {
	return gulp.src(config.htmlSrcPath + '/*.html')
		.pipe(gulp.dest(config.htmlDestPath))
		.pipe(notify({ message: 'HTML task complete' }));
});

// Styles
gulp.task('css', function() { 
	return gulp.src(config.sassSrcPath + '/main.scss')
 		.pipe(sass({
  			style: 'compressed',
			'sourcemap=none': true,
 			loadPath: config.bowerDir + '/bootstrap-sass/assets/stylesheets'
 		}) )
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
 		.pipe(gulp.dest(config.sassDestPath))
		.pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('js', function() {
	return gulp.src([config.bowerDir + '/jquery/dist/jquery.js', config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.js', config.jsSrcPath + '/*.js'])
		//.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'))
		.pipe(concat('main.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest(config.jsDestPath))
		.pipe(notify({ message: 'Scripts task complete' }));
});

// Fonts
gulp.task('fonts', function() { 
	return gulp.src(config.bowerDir + '/bootstrap-sass/assets/fonts/bootstrap/**.*') 
		.pipe(gulp.dest(config.htmlDestPath + '/assets/fonts'));
});


// Clean
gulp.task('clean', function(cb) {
	return rimraf(config.htmlDestPath, cb);
});

// Default
  gulp.task('default', ['clean'], function() {
	gulp.start('bower', 'html', 'fonts', 'js', 'css');
});
