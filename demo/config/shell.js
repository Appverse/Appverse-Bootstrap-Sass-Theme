/*jshint node:true */
'use strict';

module.exports = {
    jasmine2: {
        command: 'node node_modules/protractor/bin/protractor test/protractor-technical.conf.js'
    },
    cucumber: {
        command: 'node node_modules/protractor/bin/protractor test/protractor-functional.conf.js'
    }
};
