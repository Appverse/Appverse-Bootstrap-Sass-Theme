angular.module('App')

.controller('themeController-mobile',
    function ($scope) {

        'use strict';

        $scope.listElements = [{
            name: "List element 1",
            icon: "icon ion-email",
            button: "button button-positive",
            buttonicon: "icon ion-email"
        }, {
            name: "List element 2",
            icon: "icon ion-chatbubble-working",
            button: "button button-calm",
            buttonicon: "icon ion-ios-telephone"
        }, {
            name: "List element 3",
            icon: "icon ion-mic-a",
            button: "button button-assertive",
            buttonicon: "icon ion-trash-a"
        }, {
            name: "List element 4",
            icon: "icon ion-upload",
            button: "button button-balanced",
            buttonicon: "icon ion-upload"
        }, {
            name: "List element 5",
            icon: "icon ion-clock",
            button: "button button-energized",
            buttonicon: "icon ion-refresh"
        }, {
            name: "List element 6",
            icon: "icon ion-music-note",
            button: "button button-royal",
            buttonicon: "icon ion-android-download"
        }, {
            name: "List element 7",
            icon: "icon ion-android-playstore",
            button: "button button-dark",
            buttonicon: "icon ion-android-cart"
        }, {
            name: "List element 8",
            icon: "icon ion-android-compass",
            button: "button button-stable",
            buttonicon: "icon ion-android-pin"
        }];

        $scope.listDividersElements = [{
            name: "Divider 1",
            class: "item item-divider"
        }, {
            name: "List element 1",
            class: "item"
        }, {
            name: "List element 2",
            class: "item"
        }, {
            name: "Divider 2",
            class: "item item-divider"
        }, {
            name: "List element 3",
            class: "item"
        }, {
            name: "List element 4",
            class: "item"
        }, {
            name: "List element 5",
            class: "item"
        }, {
            name: "List element 6",
            class: "item"
        }];

    });
