/*jshint node:true*/
'use strict';

// Compiles Sass to CSS and generates necessary files if requested
module.exports = {
    options: {
        sourceMap: true,
        includePaths: ['<%=paths.app%>/bower_components/bootstrap-sass/assets/stylesheets']
    },
    server: {
        files: [{
            expand: true,
            cwd: '../appverse',
            src: '*.{scss,sass}',
            dest: '<%=paths.app%>/styles/css',
            ext: '.css'
        }, {
            expand: true,
            cwd: '<%=paths.app%>/styles/sass',
            src: '*.{scss,sass}',
            dest: '<%=paths.app%>/styles/css',
            ext: '.app.css',
            flatten: true
        }, {
            expand: true,
            cwd: '<%=paths.app%>/common',
            src: '**/*.{scss,sass}',
            dest: '<%=paths.app%>/styles/css',
            ext: '.css',
            flatten: true
        }, {
            expand: true,
            cwd: '<%=paths.app%>/components/',
            src: '**/*.{scss,sass}',
            dest: '<%=paths.app%>/styles/css',
            ext: '.css',
            flatten: true
        }]
    }

};
