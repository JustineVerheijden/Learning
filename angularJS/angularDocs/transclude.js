var app = angular.module('app',[]);
app.directive('myDialog', function(){
    return{
        restrict:'E',
        transclude:true,
        scope:{},
        templateUrl: 'my-dialog.html'
    }
})