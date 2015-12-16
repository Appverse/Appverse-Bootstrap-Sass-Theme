/*jshint node:true */
'use strict';

// Make sure code styles are up to par and there are no obvious mistakes
module.exports = {
    scsslint: {
        allFiles: [
            '<%=paths.app%>/styles/**/*.scss',
        ],
        options: {
            config: '.scss-lint.yml',
            reporterOutput: null,
            colorizeOutput: true
        },
    }
};
