module.exports = function(grunt) {

grunt.initConfig({
  compass: {
      dist: {
        options: {
          sassDir: '',
          cssDir: '',
          imagesDir: 'images',
          environment: 'development',
          outputStyle: 'nested',
          relativeAssets: true
        }
      }
    },
    concat: {
        // separator: ';',
        // dist: {
        //   src: ['../js/libs/jquery.flexslider.js','../js/libs/jquery.waypoints.js','../js/libs/jquery.waypoints-sticky.js','../js/libs/jquery.organictabs.js','../js/libs/jquery.reveal.js','../js/scripts.js'],
        //   dest: '../js/scripts.js'
        // }
    },
    uglify: {
      // scripts: {
      //   files: {
      //     '../js/scripts.min.js' : '../js/scripts.js'
      //   }
      // }
    },
    watch: {
      css: {
        files: '*.scss',
        tasks: ['compass']
      }
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