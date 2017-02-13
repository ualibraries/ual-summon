const babel     = require('gulp-babel')
const cssnano   = require('cssnano')
const eslint    = require('gulp-eslint')
const gulp      = require('gulp')
const imagemin  = require('gulp-imagemin')
const less      = require('gulp-less')
const postcss   = require('gulp-postcss')
const reporter  = require('postcss-reporter')
const stylelint = require('stylelint')
const uglify    = require('gulp-uglify')
const pump      = require('pump')

// PostCSS processors
const processors = [
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
]

// Styles task
gulp.task('styles', () => {
  gulp.src('assets/styles/ualibraries-custom.less')
    .pipe(less())
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/styles'))
})

// Scripts task
gulp.task('scripts', (cb) => {
  pump([
    gulp.src('assets/scripts/ualibraries-custom.js'),
    eslint({
      configFile: '.eslintrc.json'
    }),
    babel({
      presets: ['es2015']
    }),
    uglify(),
    gulp.dest('dist/scripts')
  ], cb)
})

// Images task
gulp.task('images', () => {
  gulp.src('assets/images/**/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
})

// Watch task
gulp.task('watch', () => {
  gulp.watch('assets/styles/**/*.less', ['styles'])
  gulp.watch('assets/scripts/**/*.js', ['scripts'])
  gulp.watch('assets/images/**/*.png', ['images'])
})

// Default task
gulp.task('default', ['styles', 'scripts', 'images'])
