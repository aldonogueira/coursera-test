(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchMenu = '';
    $scope.message = '';

    $scope.checkLunch = function () {
      if ($scope.lunchMenu == '') {
        $scope.message = 'Please enter data first';
        return;
      }

      var count = $scope.lunchMenu.split(',').length;
      if (count <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    };
  }
})();
