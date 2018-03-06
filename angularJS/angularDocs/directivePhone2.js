var app= angular.module('app',[]);
app.controller('phoneCtrl',['$scope',phoneCtrl]);

function phoneCtrl($scope){
    $scope.call = function(number,message){
        alert(number+message);
    }
};

app.directive('phone',function(){
    return{
        restrict: 'E',
        scope: {
            number: '@',
            network: '=',
            makeCall: '&'
        },
        templateUrl: 'phone.html',
        link: function(scope){
            scope.networks=['verison','wrre','232424'];
            scope.network=scope.networks[0];
        }
    };
});