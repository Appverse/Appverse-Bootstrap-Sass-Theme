'use strict';
// Performs rewrites based on rev and the useminPrepare configuration

module.exports = {
    options: {
        dest: 'doc',
        scripts: ['../js/angular.min.js', '../js/angular-bootstrap.js', '../js/angular-bootstrap-prettify.js'],
        html5Mode: false,
        startPage: '/api',
        title: '<%= appName %> Documentation',
        image: '',
        imageLink: '',
        titleLink: '',
        inlinePartials: false,
        bestMatch: true,
        analytics: {
            account: ''
        }
    },
    api: {
        src: ['<%= paths.app %>/components/**/*.js','<%= paths.app %>/common/**/*.js'],
        title: 'API Documentation'
    }
};
