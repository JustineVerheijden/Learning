var app=angular.module('service',[]);
app.service('MyService',[MyService]);
app.controller('MyController',['$scope','MyService',MyController]);

function MyService (){
    return {
        clicked: clicked
    };

    var click;
    function clicked(){
        if (!click && click!==0) {
            click = 0;
        }
        else {
            click++;
        }
        if (click >1){
            click = void(0);
            return true;
        }
        return false;
    }
    
}

function MyController ($scope, MyService){
    $scope.callNotify = function (message){
        if (MyService.clicked()){
            alert(message);
        }
    }
}