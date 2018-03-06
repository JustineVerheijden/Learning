var app = angular.module('error',[]);
app.controller('ExampleController', ['$scope', ExampleController]);

function ExampleController($scope){
    $scope.master = {};
    $scope.reset = function(form){
        if(form){
            form.$setPristine();
            form.$setUntouched();
        }
        $scope.user = angular.copy($scope.master);
    }
    $scope.update = function(user){
        $scope.master = angular.copy(user);
    }
    $scope.reset();
}