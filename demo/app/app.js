(function () {
    'use strict';

    angular.module('App', [
            'ngAnimate',
            'ui.bootstrap',
            'ui.select',
            'ngSanitize',
            'ngGrid',
            'angularRipple',
            'ui.select',
            'ngTagsInput',
            'ngSanitize',
            'rzModule',
            'rt.resize',
            'chart.js',
            'angular.filter',
            'appverse.router',
            'appverse'
        ])
        .run(function ($log, $rootScope, $state, uibDatepickerConfig, $http, $filter) {
            $log.debug('theme run');
            uibDatepickerConfig.showWeeks = false;
        });
    AppInit.setConfig({});

    angular.module('App')
        .animation('.fade-in', function () {
            return {
                enter: function (element, done) {
                    element.css({
                            opacity: 0
                        })
                        .animate({
                            opacity: 1
                        }, 700, done);
                }
            };
        });
}());
