(function () {
    'use strict';

    angular.module('App', [
            'appverse.router',
            'appverse.detection',
            'appverse.ionic',
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
            'ngMdIcons',
            'hljs',
            'ngclipboard',
            'appverse'
        ])
        .run(function ($log, $rootScope, $state, uibDatepickerConfig, $http, $filter, Detection) {
            $log.debug('theme run');
            $rootScope.isMobileBrowser = Detection.isMobileBrowser();
            uibDatepickerConfig.showWeeks = false;

            //Left side menu toggle.
            $("#menu-toggle")
                .click(function (e) {
                    e.preventDefault();
                    $("#wrapper")
                        .toggleClass("toggled");
                    $("body")
                        .toggleClass("toggled");
                });
            $(window)
                .resize(function () {
                    if ($(window)
                        .width() <= 768) {
                        $("#wrapper")
                            .addClass("toggled");
                        $("body")
                            .addClass("toggled");
                    } else {
                        $("#wrapper")
                            .removeClass("toggled");
                        $("body")
                            .removeClass("toggled");
                    }
                });
        })
        .config(function ($ionicConfigProvider) {
            $ionicConfigProvider.scrolling.jsScrolling(false);
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
