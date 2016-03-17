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
            'appverse',
            'ngMdIcons',
            'hljs',
            'ngclipboard',
            'ADM-dateTimePicker'
        ])
        .run(function ($log, $rootScope, $state, uibDatepickerConfig, $http, $filter) {
            $log.debug('theme run');
            uibDatepickerConfig.showWeeks = false;

            //Left side menu toggle.
            $("#menu-toggle")
                .click(function (e) {
                    e.preventDefault();
                    $("#wrapper")
                        .toggleClass("toggled");
                    $("body").toggleClass("toggled");
                });
            $(window).resize(function () {
                  if($(window).width() <= 768){
                      $("#wrapper").addClass("toggled");
                      $("body").addClass("toggled");
                  }
                  else{
                      $("#wrapper").removeClass("toggled");
                      $("body").removeClass("toggled");
                  }
            });
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
