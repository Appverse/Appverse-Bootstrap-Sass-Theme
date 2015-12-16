'use strict';

module.exports = {
    tags: {
        src: ['app/sourcemaps/*.js', ],
        dest: '<%= paths.app %>/index.html'
    },
    cssTags: {
        options: {
            linkTemplate: '<link rel="stylesheet" type="text/css" href="{{ path }}" />',
            openTag: '<!-- start css template tags -->',
            closeTag: '<!-- end css template tags -->'
        },
        src: [
            '<%= paths.app %>/styles/css/*.css'
        ],
        dest: '<%= paths.app %>/index.html'
    }
};
