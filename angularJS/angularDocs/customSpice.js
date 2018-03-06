var app = angular.module('Spicy',[]);
app.controller('SpicyController', ['$scope', SpicyController]);

function SpicyController ($scope){
    $scope.spice = 'very';
console.log($scope.spice);
    
    $scope.spicy = function spicy(varSpice){
        $scope.spice=varSpice;
    }
}