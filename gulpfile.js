var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    plumber = require('gulp-plumber');

gulp.task('styles', function(){
    return gulp.src('ualibraries-custom.scss')
    .pipe(plumber())
    .pipe(compass({
        sass: '',
        css: '',
        //image: 'source/images',
        //environment: 'production',
        //environment: 'development',
        style: 'expanded',
        relative: true,
        //noLineComments: true
    }))
    .pipe(autoprefixer())
    //.pipe(concat('css/homepage-search.css'))
    .pipe(gulp.dest('.'))
    //.pipe(livereload())
    .pipe(notify({ message: 'Styles compiled' }));
});

// Lint Task
// gulp.task('lint', function() {
//     return gulp.src('source/js/src/**/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// Concatenate & Minify JS
gulp.task('scripts', function() {
// return gulp.src('source/js/site-scripts/*.js')
//     .pipe(concat('scripts.js'))
//     .pipe(gulp.dest('public/js/site-scripts'))
//     .pipe(livereload())
//        .pipe(rename('scripts.min.js'))
//        .pipe(uglify())
//       .pipe(gulp.dest('public/js'));
//        .pipe(notify({ message: 'Scripts compiled' }))
});

gulp.task('watch', function() {
    // livereload.listen();
    // gulp.watch('public/css/style.css').on('change', livereload.changed);
    // Watch .scss files
    gulp.watch('**/*.scss', ['styles'])

    // Watch .js files
    //gulp.watch('source/js/site-scripts/**/*.js', ['scripts']);

  // Watch image files
 // gulp.watch('src/images/**/*', ['images']);

});

// gulp.task('images', function() {
//   return gulp.src('source/images/**/*')
//     .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
//     .pipe(gulp.dest('source/images'))
//     .pipe(notify({ message: 'Images task complete' }));
// });
// Default Task
gulp.task('default', ['styles', 'watch']);
