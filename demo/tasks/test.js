'use strict';

module.exports = function (grunt) {

    grunt.registerTask('testserver', [
        'clean:server',
        'concurrent:server',
        'autoprefixer',
        'connect:test'
    ]);

    grunt.registerTask('test', [
        'clean:reports',
        'karma:unit',
        'instrument',
        'testserver',
        'shell:jasmine2'
    ]);

    grunt.registerTask('test:unit', [
        'karma:unit_auto'
    ]);

    grunt.registerTask('test:e2e', [
        'clean:reports',
        'instrument',
        'connect:test',
        'shell:jasmine2'
    ]);

    grunt.registerTask('test:cucumber', [
        'clean:reports',
        'instrument',
        'connect:test',
        'shell:cucumber'
    ]);

    grunt.registerTask('test:functional', [
        'mockserverFunctional'
    ]);

    grunt.registerTask('test:technical', [
        'mockserverTechnical'
    ]);

    grunt.registerTask('test:midway', [
        'testserver',
        'karma:midway'
    ]);

};
