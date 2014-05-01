/*
 * assemble-contrib-anchors
 * https://github.com/assemble/assemble-contrib-anchors
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'index.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    assemble: {
      options: {
        layout: 'test/fixtures/layout.hbs',
        plugins: ['./index.js'],
      },
      test: {
        src: ['README.md'],
        dest: 'test/actual/'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-assemble');
  grunt.loadNpmTasks('grunt-verb');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'verb']);
};
