var app = angular.module('app',[]);
app.controller("ChoreCtrl",function($scope){
    $scope.logChore=function(chore){
        alert(chore + " is done");
    };
});
app.directive('kid',function(){
    return{
        restrict: 'E',
        scope: {
                done: "&"
        },
        template: '<input type="text" ng-model="chore">{{chore}}'+
        '<button ng-click="done({chore:chore})">I\'m done</button>'
    };
});

