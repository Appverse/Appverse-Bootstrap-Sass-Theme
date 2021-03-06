'use strict';

// The actual grunt server settings
module.exports = {
    options: {
        port: '<%= ports.app %>',
        livereload: '<%= ports.livereload %>',
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
    },
    livereload: {
        options: {
            open: false,
            base: [
                '.tmp', '<%= paths.app %>'
            ],
            middleware: function (connect, options) {
                if (!Array.isArray(options.base)) {
                    options.base = [options.base];
                }
                // Setup the proxy
                var middlewares = [require('grunt-connect-proxy/lib/utils')
                    .proxyRequest
                ];
                // Serve static files.
                options.base.forEach(function (base) {
                    middlewares.push(connect.static(base));
                });
                // Make directory browse-able.
                var directory = options.directory || options.base[options.base.length - 1];
                middlewares.push(connect.directory(directory));
                /*middlewares.unshift(function(req, res, next) {
                  //console.log(req);
                  if (req.method === 'POST') {
                    req.method = 'GET';
                  }
                  return next();
                });*/
                return middlewares;
            }
        },
        proxies: [{
            context: '/api',
            host: '127.0.0.1',
            port: 8889,
            https: false,
            rewrite: {
                '^/api': '/api'
            }
        }]

    },
    mocklivereload: {
        options: {
            open: false,
            base: [
                '.tmp', '<%= paths.app %>'
            ],
            middleware: function (connect, options) {
                if (!Array.isArray(options.base)) {
                    options.base = [options.base];
                }
                // Setup the proxy
                var middlewares = [require('grunt-connect-proxy/lib/utils')
                    .proxyRequest
                ];
                // Serve static files.
                options.base.forEach(function (base) {
                    middlewares.push(connect.static(base));
                });
                // Make directory browse-able.
                var directory = options.directory || options.base[options.base.length - 1];
                middlewares.push(connect.directory(directory));
                middlewares.unshift(function(req, res, next) {
                  //console.log(req);
                  if (req.method === 'POST') {
                    req.method = 'GET';
                  }
                  return next();
                });
                return middlewares;
            }
        },
        proxies: [{
            context: '/api',
            host: '127.0.0.1',
            port: 8888,
            https: false,
            rewrite: {
                '^/api': ''
            }
        }]

    },

    livereloadback: {
        options: {
            open: false,
            base: [
                  '.tmp', '<%= paths.app %>'
            ],
            middleware: function (connect) {
                if (!Array.isArray(options.base)) {
                    options.base = [options.base];
                }

                // Setup the proxy
                var middlewares = [require('grunt-connect-proxy/lib/utils')
                    .proxyRequest
                ];

                // Serve static files.
                options.base.forEach(function (base) {
                    middlewares.push(connect.static(base));
                });

                // Make directory browse-able.
                var directory = options.directory || options.base[options.base.length - 1];
                middlewares.push(connect.directory(directory));

                // middlewares.unshift(function(req, res, next) {
                //   console.log('changing method for '+req);
                //   if (req.method === 'POST') {
                //     req.method = 'GET';
                //   }
                //   return next();
                // });

                return middlewares;
            }
        },
        proxies: [{
            context: '/api',
            host: '127.0.0.1',
            port: 8888,
            https: false,
            rewrite: {
                '^/api': ''
            }
        }]

    },
    test: {
        options: {
            port: '<%= ports.test %>',
            base: [
                '.tmp', 'test', 'test/coverage/instrument/app', '<%= paths.app %>'
            ],
            hostname: '0.0.0.0',
            middleware: function (connect, options) {
                if (!Array.isArray(options.base)) {
                    options.base = [options.base];
                }
                // Setup the proxy
                var middlewares = [require('grunt-connect-proxy/lib/utils')
                    .proxyRequest
                ];
                // Serve static files.
                options.base.forEach(function (base) {
                    middlewares.push(connect.static(base));
                });
                // Make directory browse-able.
                var directory = options.directory || options.base[options.base.length - 1];
                middlewares.push(connect.directory(directory));
                middlewares.unshift(function(req, res, next) {
                    //console.log(req);
                    if (req.method === 'POST') {
                        req.method = 'GET';
                    }
                    return next();
                });
                return middlewares;
            }
        },
        proxies: [{
            context: '/api',
            host: '127.0.0.1',
            port: 8888,
            https: false,
            rewrite: {
                '^/api': ''
            }
        }],
    },
    dist: {
        options: {
            open: false,
            port: '<%= ports.dist %>',
            base: '<%= paths.dist %>',
            livereload: false
        }
    },
    doc: {
        options: {
            port: '<%= ports.doc %>',
            base: '<%= paths.doc %>',
            livereload: false,
            keepalive: true
        }
    }

};
