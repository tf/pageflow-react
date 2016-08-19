/*global require, module*/

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    webpack: {
      options: require('./webpack.config.js'),
      build: {}
    },

    karma: {
      singleRun: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('build', ['webpack:build']);
  grunt.registerTask('test', ['karma:singleRun']);

  grunt.registerTask('default', ['build', 'test']);
};
