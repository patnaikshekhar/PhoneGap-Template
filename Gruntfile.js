module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['www/js/*.js']
    },

    watch: {
      options: {
        livereload: false
      },

      scripts: {
        files: ['www/js/*.js'],
        tasks: ['jshint'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['watch']);
};
