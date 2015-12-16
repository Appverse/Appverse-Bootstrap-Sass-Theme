'use strict';

// Empties folders to start fresh
module.exports = {

    files:  [
        'app/app.js',
        'app/common/**/*.js',
        'app/components/**/*.js',
        'app/states/*.js'
    ],
    options: {
        lazy: true,
        basePath: 'test/coverage/instrument/'
    }

};
