module.exports = {
    jscs: {
        src: [
            'Gruntfile.js',
            'app/common/**/*.js',
            'app/components/**/*.js',
            'app/states/*.js',
            'app/app.js',
            'test/*.js',
            'test/{e2e,unit}/**/*.js',
            '!app/components/accounts/accountDetail/dependencies/*.js'
        ],
        options: {
            config: '.jscsrc',
            'maxErrors': 10000,
            'verbose': false,
            'excludeFiles': [
                'app/bower_components/**/*.js'
            ]
        }
    }
};
