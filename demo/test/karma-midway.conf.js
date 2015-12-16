/*jshint node:true */
'use strict';

var sharedConfig = require('./karma-shared.conf');

module.exports = function (config) {
    var conf = sharedConfig();

    conf.coverageReporter.dir += 'midway';

    conf.browsers = ['PhantomJS'];

    conf.files = conf.files.concat([
        //extra testing code
        'node_modules/ng-midway-tester/src/ngMidwayTester.js',

        //test files
        'app/components/**/tests/midway/*.mid.spec.js',
        'app/common/**/tests/midway/*.mid.spec.js'
    ]);

    conf.proxies = {
        '/': 'http://localhost:9003/',
    };

    config.set(conf);
};
