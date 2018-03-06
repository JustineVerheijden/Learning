var app = angular.module('simpleForm',[]);
app.controller('ExampleController', ['$scope',ExampleController]);

function ExampleController($scope){
    $scope.master = {};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    }

    $scope.update = function(user){
        $scope.master = angular.copy(user);
    }
    $scope.reset();
}
