$scope.animationsEnabled = true;

$scope.items = ['item1', 'item2', 'item3'];

$scope.openModal = function (size) {
    var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'components/ui-bootstrap/modal-template.html',
        controller: 'ModalController',
        size: size,
        resolve: {
            items: function () {
                return $scope.items;
            }
        }
    });

    modalInstance.result.then(function (selectedItem) {
        $log.info('Selected item: ' + selectedItem);
    }, function () {
        $log.info('Modal dismissed at: ' + new Date());
    });
};

$scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
};

.controller('ModalController',
    function ($scope, $uibModalInstance, items) {

        'use strict';

        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function () {
            $uibModalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });
