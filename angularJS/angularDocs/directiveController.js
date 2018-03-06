var app=angular.module('directive',[]);
app.controller('FunController', [FunController]);

function FunController(){
    var self = this;
    self.start = function(){
        console.log('Entered');
    }
} 

app.directive('entering', function(){
    return function(scope, element,attrs){
        element.bind("mouseenter",function(){
            scope.$apply(attrs.entering);
        })
    }
});