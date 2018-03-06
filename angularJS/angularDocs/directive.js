var app = angular.module('greetings',[]);

app.directive('welcome',function(){
    return{
        restrict: 'E',
        template: '<div>Howdy there! You look splendid.</div>'
    }
});