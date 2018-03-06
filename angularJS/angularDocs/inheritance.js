var app= angular.module('inheritance',[]);
app.controller('MainController',['$scope',MainController]);
app.controller('ChildController',['$scope',ChildController]);
app.controller('GrandChildController',['$scope',GrandChildController]);

function MainController($scope){
    $scope.timeOfDay = 'Morning';
    $scope.name = 'Nikki';
}

function ChildController($scope){
    $scope.name = 'Mattie';
}

function GrandChildController($scope){
    $scope.name='Gingerbread Baby'
}