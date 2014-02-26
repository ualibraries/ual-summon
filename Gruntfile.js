module.exports = function(grunt) {

grunt.initConfig({
  compass: {
      dist: {
        options: {
          sassDir: '',
          cssDir: '',
          imagesDir: 'images',
          environment: 'production',
          outputStyle: 'expanded',
          relativeAssets: true,
          line_comments: false
        }
      }
    },
    concat: {
        // Us this to concatenate multiple JS files if needed
        // Define multiple JS files in the src array, comma separated
        // separator: ';',
        // dist: {
        //   src: ['ualibraries-custom.js'],
        //   dest: 'scripts.js'
        // }
    },
    uglify: {
      // Us this to minify JS as neeed
      // Define desintation and source files (in that order) in the files array
      // scripts: {
      //   files: {
      //     'scripts.min.js' : 'scripts.js'
      //   }
      // }
    },
    watch: {
      css: {
        files: '*.scss',
        tasks: ['compass']
      }
      // Add the script conacatenation to the watch task
      // scripts: {
      //   files: ['<%= concat.dist.src %>'],
      //   tasks: ['concat']
      // }
    }
 });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['compass','concat','uglify']);

};
