//////////////////////////////////////////////////
// The main module configuration section shows  //
// how to define when (redirects) and otherwise //
// (invalid urls) to arrangesite navigation     //
// using ui-router.                             //
//////////////////////////////////////////////////

(function () {
    'use strict';

    angular.module('App')
        .config(
            ['$stateProvider', '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {

                    ///////////////////////////////
                    // 1-Redirects and Otherwise //
                    ///////////////////////////////

                    // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
                    $urlRouterProvider

                    // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
                    // Here we are just setting up some convenience urls.
                    //                .when('/t?id', '/topics/:id')
                    //                    .when('/t/:id', '/topics/:id')

                    // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
                        .otherwise('/theme');

                    //////////////////////////
                    // 2-State Configurations
                    // Several states hav been configured:
                    // home
                    // tasks
                    //
                    //////////////////////////

                    // We must configure states using $stateProvider.
                    $stateProvider
                        .state('theme', {
                            // Use a url of '/' to set a states as the 'index'.
                            url: '/theme',
                            templateUrl: 'components/theme/theme.html'

                        })
                        .state('ui-bootstrap', {
                            // Use a url of '/' to set a states as the 'index'.
                            url: '/ui-bootstrap',
                            templateUrl: 'components/ui-bootstrap/ui-bootstrap.html',
                            controller: 'UIBootstrapController'
                        })
                        .state('ui-select', {
                            // Use a url of '/' to set a states as the 'index'.
                            url: '/ui-select',
                            templateUrl: 'components/ui-select/ui-select.html',
                            controller: 'UISelectController'
                        });
                }
            ]);

}());
