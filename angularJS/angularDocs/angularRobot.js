var app = angular.module('app',[]);
app.directive('robot', function(){
    return{
        restrict: 'E',
        link: function(scope, element, attr){
            var startX=0, startY=0, x=0, y=0;

            scope.up = function(){
                scope.testtext = 'asdf';
                console.log(scope.testtext);
                scope.imgDiv.css({
                    top: '10px',
                    left: '10px'
                });
            }
        }
    };
});