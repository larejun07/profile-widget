/*global module*/

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // compile Less to CSS
    less: {
      dist: {
        files: {
          '<%= pkg.dist %>css/app.css': '<%= pkg.src %>css/app.less'
        }
      }
    },

    watch: {
      less: {
        files: '<%= pkg.src %>css/*.less',
        tasks: 'less'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less']);
  grunt.registerTask('dev', ['less', 'watch']);
};

