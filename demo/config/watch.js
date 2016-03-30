'use strict';

// Watches files for changes and runs tasks based on the changed files
module.exports = {
    coffee: {
        files: ['<%=paths.app%>/components/**/*.coffee'],
        tasks: ['coffee:app']
    },
    coffeeTest: {
        files: ['test/spec/**/*.coffee'],
        tasks: ['coffee:test']
    },
    sass: {
        files: ['../*/**.{scss,sass}','../appverse/bootstrap-theme/**/*.{scss,sass}', '../appverse-dark/bootstrap-theme/**/*.{scss,sass}'],
        tasks: ['sass', 'autoprefixer:tmp']
    },
    styles: {
        files: ['<%=paths.app%>/styles/**/*.css'],
        tasks: ['autoprefixer:styles']
    },
    livereload: {
        options: {
            livereload: true
        },
        files: [
            '<%=paths.app%>/**/*.html',
            '{.tmp, <%= paths.app %>}/styles/**/*.css'
        ]
    },
    outputFile: {
        options: {
            nospawn: true
        },
        files: [
                'app/components/**/*.js',
                'app/common/**/*.js'
            ]
    }
};
