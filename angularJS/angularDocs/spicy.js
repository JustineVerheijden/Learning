var app = angular.module('spicy',[]);
app.controller('SpicyController', ['$scope', SpicyController]);

function SpicyController($scope){

    $scope.chiliSpicy = function(){
        $scope.spice='Chili';
    }
    $scope.jalapenoSpicy = function(){
        $scope.spice='Jalapeno';
    }
}