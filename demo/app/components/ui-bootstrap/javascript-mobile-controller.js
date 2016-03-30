angular.module('App')

.controller('UIBootstrapController-mobile',
    function ($scope, $ionicModal, $ionicActionSheet, $timeout, $ionicLoading, $ionicPopover, $ionicPopup) {

        'use strict';
        //ION LIST EXAMPLE
        $scope.data = {
            showDelete: false
        };

        $scope.edit = function (item) {
            alert('Edit Item: ' + item.id);
        };
        $scope.share = function (item) {
            alert('Share Item: ' + item.id);
        };

        $scope.moveItem = function (item, fromIndex, toIndex) {
            $scope.ionListItems.splice(fromIndex, 1);
            $scope.ionListItems.splice(toIndex, 0, item);
        };

        $scope.onItemDelete = function (item) {
            $scope.ionListItems.splice($scope.ionListItems.indexOf(item), 1);
        };

        $scope.ionListItems = [{
            id: 0
        }, {
            id: 1
        }, {
            id: 2
        }, {
            id: 3
        }, {
            id: 4
        }, {
            id: 5
        }, {
            id: 6
        }, {
            id: 7
        }, {
            id: 8
        }, {
            id: 9
        }, {
            id: 10
        }, {
            id: 11
        }, {
            id: 12
        }, {
            id: 13
        }, {
            id: 14
        }, {
            id: 15
        }];
        //ION LIST EXAMPLE

        //ACTIONSHEET EXAMPLE
        $scope.showActionsheet = function () {

            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
                buttons: [{
                    text: '<i class="icon ion-social-facebook"></i>Share in Facebook'
                }, {
                    text: '<i class="icon ion-social-instagram"></i>Share in Instagram'
                }, {
                    text: '<i class="icon ion-social-twitter"></i>Share in Twitter'
                }],
                titleText: 'This is an actionsheet',
                cancel: function () {
                    // add cancel code..
                },
                buttonClicked: function (index) {
                    return true;
                }
            });

            // For example's sake, hide the sheet after two seconds
            $timeout(function () {
                //hideSheet();
            }, 3000);

        };
        //ACTIONSHEET EXAMPLE

        //LOADING EXAMPLE
        $scope.showLoading = function () {
            $ionicLoading.show({
                template: '<ion-spinner class="spinner-positive" icon="spiral"></ion-spinner> <span>Loading...</span>'
            });
            $timeout(function () {
                $scope.hideLoading();
            }, 3000);
        };
        $scope.hideLoading = function () {
            $ionicLoading.hide();
        };
        //LOADING EXAMPLE

        //MODAL EXAMPLE
        $ionicModal.fromTemplateUrl('components/ui-bootstrap/modal-template-mobile.html', {
                scope: $scope,
                animation: 'slide-in-up'
            })
            .then(function (modal) {
                $scope.modal = modal;
            });
        $scope.openModal = function () {
            $scope.modal.show();
        };
        $scope.closeModal = function () {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });
        //MODAL EXAMPLE

        //POPOVER EXAMPLE
        $ionicPopover.fromTemplateUrl('components/ui-bootstrap/popover-template.html', {
                scope: $scope,
                animation: 'fade-in'
            })
            .then(function (popover) {
                $scope.popover = popover;
            });

        $scope.openPopover = function ($event) {
            $scope.popover.show($event);
        };
        $scope.closePopover = function () {
            $scope.popover.hide();
        };
        //Cleanup the popover when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.popover.remove();
        });
        // Execute action on hide popover
        $scope.$on('popover.hidden', function () {
            // Execute action
        });
        // Execute action on remove popover
        $scope.$on('popover.removed', function () {
            // Execute action
        });
        //POPOVER EXAMPLE

        //POPUP EXAMPLE
        $scope.showPopup = function () {
            $scope.data = {};

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type="password" ng-model="data.wifi">',
                title: 'Enter Wi-Fi Password',
                subTitle: 'Please use normal things',
                scope: $scope,
                buttons: [{
                    text: 'Cancel'
                }, {
                    text: '<b>Save</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (!$scope.data.wifi) {
                            //don't allow the user to close unless he enters wifi password
                            e.preventDefault();
                        } else {
                            return $scope.data.wifi;
                        }
                    }
                }]
            });
        };

        $scope.showConfirm = function () {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Use Appverse-Ionic-Theme',
                template: '<div class="text-center">Are you sure you want to use it?</div>'
            });

            confirmPopup.then(function (res) {
                if (res) {
                    console.log('You are sure');
                } else {
                    console.log('You are not sure');
                }
            });
        };

        $scope.showAlert = function () {
            var alertPopup = $ionicPopup.alert({
                title: 'Warning!',
                template: '<div class="text-center">This theme is too good for you to handle!</div>'
            });

            alertPopup.then(function (res) {
                console.log('Thank you for using Appverse Ionic Theme');
            });
        };
        //POPUP EXAMPLE

        //SLIDER EXAMPLE
        $scope.sliderOptions = {
            loop: false,
            speed: 500,
        }
        $scope.data = {};
        $scope.$watch('data.slider', function (nv, ov) {
            $scope.slider = $scope.data.slider;
        });
        //SLIDER EXAMPLE

    });
