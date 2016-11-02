var cssnano   = require('cssnano');
var eslint    = require('gulp-eslint');
var gulp      = require('gulp');
var imagemin  = require('gulp-imagemin');
var less      = require('gulp-less');
var postcss   = require('gulp-postcss');
var reporter  = require('postcss-reporter');
var stylelint = require('stylelint');
var uglify    = require('gulp-uglify');
var pump      = require('pump');

// PostCSS processors
var processors = [
  stylelint({
    configFile: '.stylelintrc.json'
  }),
  reporter({
    clearMessages: true,
    throwError: false
  }),
  cssnano({
    autoprefixer: {
      browsers: ['> 1%']
    }
  })
];

// Styles task
gulp.task('styles', function() {
  gulp.src('assets/styles/ualibraries-custom.less')
    .pipe(less())
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/styles'));
});

// Scripts task
gulp.task('scripts', function(cb) {
  // main JS file
  pump([
    gulp.src('assets/scripts/ualibraries-custom.js'),
    eslint({
      configFile: '.eslintrc.json'
    }),
    uglify(),
    gulp.dest('dist/scripts')
  ], cb);
    
  // Lint the Gulpfile
  gulp.src('gulpfile.js')
    .pipe(eslint({
      configFile: '.eslintrc.json'
    }))
    .pipe(eslint.format());
});

// Images task
gulp.task('images', function() {
  gulp.src('assets/images/**/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Watch task
gulp.task('watch', function() {
  gulp.watch('assets/styles/**/*.less', ['styles']);
  gulp.watch('assets/scripts/**/*.js', ['scripts']);
  gulp.watch('assets/images/**/*.png', ['images']);
});

// Default task
gulp.task('default', ['styles', 'scripts', 'images']);
