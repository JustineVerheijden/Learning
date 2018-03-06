var app = angular.module('directive',[]);
app.directive('entering',function(){
        return function(scope,element, attrs){
            element.bind("mouseenter",function(){
                console.log("mouse has entered the div");
                element.addClass(attrs.entering);
            });
        }
});

app.directive('leaving',function(){
    return function(scope,element, attrs){
        element.bind("mouseleave",function(){
            console.log("mouse has left the div");
            element.removeClass(attrs.entering);
        });
    }
});