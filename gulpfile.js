var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');

gulp.task('styles', function(){
    return gulp.src('ualibraries-custom.scss')
    .pipe(plumber())
    .pipe(compass({
        sass: '',
        css: '',
        style: 'expanded',
        relative: true
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('.'))
    .pipe(notify({ message: 'Styles compiled' }));
});

gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('**/*.scss', ['styles'])
});

// Default Task
gulp.task('default', ['styles', 'watch']);
