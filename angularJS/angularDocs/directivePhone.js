var app = angular.module('app',[]);
app.controller('AppCtrl',['$scope',AppCtrl]);

function AppCtrl($scope){
    $scope.callHome = function (message) {
        alert(message);
    }

};

app.directive('phone', function(){
    return {
        restrict:'A',
        scope: {
            dial: '&' 
        },
        template: '<button ng-click="dial()">Call home!</div>'
    };
});