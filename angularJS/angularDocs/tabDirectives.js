var app = angular.module('tabDirectives',[]);
app.directive('tab',function(){
    return{
        restrict: 'E',
        transclude: true,
        template:'<h2>Hello world!</h2><div role="tabpanel" ng-transclude><div>',
        require: '^tabset',
        scope: {
            heading: '@'
        },
        link: function(scope, elem, attr, tabsetCtrl){
            tabsetCtrl.push(tab);
        }
    }
});

app.directive('tabset', function(){
    return {
        restrict:'E',
        transclude: true,
        scope: {},
        templateURL: 'tabset.html',
        bindToController: true,
        controllerAs: 'tabset',
        controller: function(){
            var self = this;
            self.tabs=[];
            self.addTab=function(){
                self.tabs.push(tab);
            }
        }
    }
});