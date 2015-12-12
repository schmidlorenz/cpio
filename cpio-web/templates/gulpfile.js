var gulp = require('gulp'), 
	bower = require('gulp-bower'),
	notify = require('gulp-notify') ,
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sass = require('gulp-ruby-sass') ,
	autoprefixer = require('gulp-autoprefixer'),
	minifyCss = require('gulp-minify-css');


var config = {
 	sassSrcPath: './src/scss',
	jsSrcPath: './src/js',
	sassDestPath: './assets/css',
	jsDestPath: './assets/js',
 	bowerDir: './bower_components' 
}


gulp.task('bower', function() { 
	return bower()
 		.pipe(gulp.dest(config.bowerDir)) 
});

gulp.task('fonts', function() { 
	return gulp.src(config.bowerDir + '/bootstrap-sass/assets/fonts/bootstrap/**.*') 
		.pipe(gulp.dest('./assets/fonts')); 
});

gulp.task('js', function() {
	return gulp.src([config.bowerDir + '/jquery/dist/jquery.js', config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.js', config.jsSrcPath + '/*.js'])
		.pipe(concat('main.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest(config.jsDestPath));
});

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
		.pipe(minifyCss())
 		.pipe(gulp.dest(config.sassDestPath)); 
});

  gulp.task('default', ['bower', 'fonts', 'js', 'css']);
