var app = angular.module('app',[]);

app.controller('AppCtrl',['$scope', AppCtrl]);

function AppCtrl($scope){
    $scope.ctrlFlavour = 'blackberry';

}

app.directive('drink', function(){
    return {
        scope: {
            flavour: '@'
        },
        template: '<div>{{flavour}}</div>'
    }
})