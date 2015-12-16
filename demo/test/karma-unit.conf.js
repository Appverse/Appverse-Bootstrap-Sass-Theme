/*jshint node:true */
'use strict';

var sharedConfig = require('./karma-shared.conf');

module.exports = function (config) {

    var conf = sharedConfig();

    conf.browsers = ['PhantomJS'];

    conf.coverageReporter.dir += 'unit';

    conf.files = conf.files.concat([
        //test files
        'app/components/**/*.spec.js',
        'app/common/**/*.spec.js',
        {
            pattern: 'app/resources/**/*.*',
            watched: true,
            included: false,
            served: true,
            nocache: false
        }
    ]);

    conf.proxies = {
        '/resources/': 'http://localhost:9876/base/app/resources/',
    };

    config.set(conf);
};
