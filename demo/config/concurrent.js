/*jshint node:true */

'use strict';
// Run some tasks in parallel to speed up build process

module.exports = {
    server: [
        'sass',
        'copy:fonts',
        'copy:fontstheme',
        'copy:theme',
        'copy:images',
        'copy:ionicsass',
        'copy:fontsionic'
    ],
    dist: [
        'sass'
    ]
};
