'use strict';

module.exports = {
    unit: {
        configFile: './test/karma-unit.conf.js',
        autoWatch: false,
        singleRun: true
    },
    unit_auto: {
        configFile: './test/karma-unit.conf.js'
    },
    e2e: {
        configFile: './test/protractor-technical.conf.js',
        autoWatch: false,
        singleRun: true
    },
    midway: {
        configFile: './test/karma-midway.conf.js',
        autoWatch: false,
        singleRun: true
    }
};
