/*jshint node:true */
'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
 require('load-grunt-tasks')(grunt);
 // Compress theme files in bower package.
 var bowerFile = require('./bower.json');

  // Project configuration.
  grunt.initConfig({
    // make a zipfile
        compress: {
          main: {
            options: {
                archive: bowerFile.name + '-' + bowerFile.version + '.tar.gz',
                mode: 'tgz'
            },
             files: [
             {
                expand: true,
                src: ['bower.json', 'package.json', 'README.md', 'bootstrap-theme.scss'],
                cwd: '.',
                dest: ''
             },
             {
              expand: true,
              cwd: 'bootstrap-theme',
              src: ['**'],
              dest: 'bootstrap-theme'
             }
            ]
        }
    },
    release: {
      options: {
        additionalFiles: ['bower.json'],
        bump: true, //default: true
        changelog: false, //default: false
        changelogText: '<%= version %>\n', //default: '### <%= version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n'
        file: 'package.json', //default: package.json
        add: false, //default: true
        commit: false, //default: true
        tag: false, //default: true
        push: false, //default: true
        pushTags: false, //default: true
        npm: false, //default: true
        npmtag: false //default: no tag
      }
    }
});

    grunt.registerTask('default', ['release', 'compress']);

};
