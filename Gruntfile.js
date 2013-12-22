module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: 'js/global.js',
        dest: 'js/global.min.js'
      }
    },

    sass: {
        dist: {
          options: {
            style: 'expanded'
          },
          files: {
            'css/main.css': 'css/main.scss'
          }
        }
    },

    watch: {
      options: {
        debounceDelay: 2500,
        livereload: true,
      },
      css: {
        files: ['css/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
          livereload: true,
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);

};