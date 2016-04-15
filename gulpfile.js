
// require packages
var gulp   	 	 = require('gulp'), // import gulp node package
 	concat 	 	 = require('gulp-concat'),
	uglify	 	 = require('gulp-uglify'),
 	sass   	 	 = require('gulp-ruby-sass'),
	globbing 	 = require('gulp-css-globbing'),
	autoprefixer = require('gulp-autoprefixer'),
	rename 	 	 = require('gulp-rename'),
	imgOpt		 = require('gulp-image'),
	webp 		 = require('gulp-webp'),
	beeper 		 = require('beeper'),
	plumber 	 = require('gulp-plumber'),
	livereload   = require('gulp-livereload');
	
var onError = function(err) {
 	beeper('**');
	console.log(err);
};

// sass
gulp.task('sass', function () {
	return gulp.src(['src/sass/style.scss'])// sass/**/*.scss
		.pipe(globbing({
	        extensions: ['.scss']
	    }))
		.pipe(plumber({errorHandler: onError}))
	    .pipe(sass({style: 'compressed'})) //compressed || expanded
	    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	 	//.pipe(rename({suffix: '.min'}))
	    .pipe(gulp.dest('build/styles'))
		.pipe(livereload());
});

// admin style
gulp.task('adminStyles', function () {
	return gulp.src(['src/sass/admin.scss'])// sass/**/*.scss
		.pipe(globbing({
	        extensions: ['.scss']
	    }))
		.pipe(plumber({errorHandler: onError}))
	    .pipe(sass({style: 'compressed'})) //compressed || expanded
	    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	 	.pipe(rename("admin.css"))
	    .pipe(gulp.dest('build/styles'))
		.pipe(livereload());
});


// concatenate JS Files 
var scripts = [
	'src/js/utils.js',
	'src/js/scripts.js',
];
gulp.task('scripts', function() {
	return gulp.src(scripts)
     	.pipe(concat('main.js')) 
		.pipe(uglify())
      	.pipe(gulp.dest('build/js'))
		.pipe(livereload());
		
});

// concatenate JS LIB Files
gulp.task('libs', function() {
	return gulp.src('src/lib/*.js')
     	.pipe(concat('libraries.js')) 
		.pipe(uglify())
      	.pipe(gulp.dest('build/js')); 
});

// watch js and scss files while developing
gulp.task('watch', function() {

	livereload.listen();
	gulp.watch('src/js/*.js', ['scripts']);
	gulp.watch('src/lib/*.js', ['libs']);
	gulp.watch('src/sass/**/*.scss', ['sass', 'adminStyles']);
	
});


// run default task
gulp.task('default', ['sass', 'adminStyles', 'scripts', 'libs', 'watch']);


/*-------------------------------------------------
	IMAGE OPTIMIZATION
-------------------------------------------------*/
gulp.task('webp', function () {
    return gulp.src('src/images/')
    	.pipe(webp())
        .pipe(gulp.dest('build/images'));
});

gulp.task('image', function () {
	return gulp.src('src/images/**/*')
    	.pipe(imgOpt())
    	.pipe(gulp.dest('build/images'));
});


/*-------------------------------------------------
	DEV TASKS
-------------------------------------------------*/

// site performance
var psi	= require('psi');
var liveSite = 'http://www.html5rocks.com';

gulp.task('desktop', function () {
    return psi(liveSite, {
        nokey: 'true',
        strategy: 'desktop',
    }, function (err, data) {
        console.log(data.score);
        console.log(data.pageStats);
    });
});

gulp.task('mobile', function () {
    return psi(liveSite, {
        nokey: 'true',
        strategy: 'mobile',
    }, function (err, data) {
        console.log(data.score);
        console.log(data.pageStats);
    });
});

// check pages
var checkPages = require("check-pages");

gulp.task("checkDev", [ "start-development-server" ], function(callback) {
  var options = {
    pageUrls: [
      'http://bhs.dev',
      'http://bhs.dev/page1',
      'http://bhs.dev/page2'
    ],
    checkLinks: true,
    onlySameDomain: true,
    queryHashes: true,
    noRedirects: true,
    noLocalLinks: true,
    noEmptyFragments: true,
    linksToIgnore: [
      'http://localhost:8080/broken.html'
    ],
    checkXhtml: true,
    checkCaching: true,
    checkCompression: true,
    maxResponseTime: 200,
    userAgent: 'custom-user-agent/1.2.3',
    summary: true
  };
  checkPages(console, options, callback);
});
 
gulp.task("checkProd", function(callback) {
  var options = {
    pageUrls: [
      'http://example.com/',
      'http://example.com/blog',
      'http://example.com/about.html'
    ],
    checkLinks: true,
    maxResponseTime: 500
  };
  checkPages(console, options, callback);
});