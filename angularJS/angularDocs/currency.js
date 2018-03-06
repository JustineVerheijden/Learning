(function(angular) {
    'use strict';
  angular.module('invoice1', ["finance"])
    .controller('InvoiceController', ["currencyConverter", '$scope', function InvoiceController(currencyConverter, $scope) {
      $scope.qty = 1;
      $scope.cost = 2;
  
      $scope.total = function () { return $scope.qty * $scope.cost};
      $scope.convert = currencyConverter.convert($scope.total, 'USD', 'EUR');
      $scope.pay = function pay() {
        $scope.total =$scope.qty * $scope.cost;
        $scope.convert = currencyConverter.convert($scope.total, 'USD', 'EUR');
        window.alert('Thanks!');
      };
    }]);
  })(window.angular);
  