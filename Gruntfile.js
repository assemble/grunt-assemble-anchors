/*
 * grunt-assemble-anchors
 * https://github.com/assemble/grunt-assemble-anchors
 *
 * Copyright (c) 2013-2015 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var pretty = require('pretty');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    vendor: grunt.file.readJSON('.bowerrc').directory,
    site: grunt.file.readYAML('example/_config.yml'),
    jshint: {
      all: ['Gruntfile.js', 'index.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Build HTML from templates and data
    assemble: {
      options: {
        flatten: true,
        site: '<%= site %>',
        assets: '_gh_pages/assets',
        partials: ['example/templates/includes/*.hbs'],
        helpers: ['handlebars-helper-pkg', 'example/helpers/**/*.js'],
        layouts: 'example/templates/layouts',
        postprocess: pretty
      },
      example: {
        options: {
          plugins: ['./'],
        },
        files: {'_gh_pages/': ['example/templates/*.hbs']}
      }
    },

    clean: {
      example: ['_gh_pages/*.html']
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-assemble');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'assemble']);
};
