var myApp = angular.module('simpleForm',[]);
myApp.controller('ExampleController',['$scope',ExampleController]);

function ExampleController($scope){
    $scope.master = {};
    
    $scope.update = function(user){
        $scope.master=angular.copy(user);
    };
    $scope.reset = function(){
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
}

