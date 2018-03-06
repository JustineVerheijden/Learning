var app=angular.module('app',[]);
app.controller('drinkCtrl',['$scope',drinkCtrl]);

function drinkCtrl($scope){
    $scope.ctrlFlavour='blackberry';
}

app.directive('drink', function(){
    return {
        restrict: 'A',
        scope: {
            flavour:'='
        }, 
        template: '<div>{{flavour}}+hellow</div>'+
                  '<input type="text" ng-model="flavour">'
    }
})