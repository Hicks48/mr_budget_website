module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['app/assets/javascripts/app/views/*.html', 'app/assets/javascripts/app/views/*/*.html'],
        tasks: ['html2js'],
        options: {
          interrupt: true,
        }
      }
    },
    html2js: {
      options: {
        module: 'templates'
      },
      main: {
        src: ['app/assets/javascripts/app/views/*.html', 'app/assets/javascripts/app/views/*/*.html'],
        dest: 'app/assets/javascripts/app/templates.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['html2js', 'watch']);

};
