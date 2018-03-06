(function(){
    var app = angular.module('app',[]);
    app.controller('Record',[Record]);
    function Record(){
        var vm=this;
        vm.whichBtn='record';

        vm.changeButton = function(){
            console.log(vm.whichBtn);
            if (vm.whichBtn =='record'){
                vm.whichBtn = 'pause';
            }else{
                vm.whichBtn='record';
            }
        }
    }
    app.directive('changeButton',function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){

                functionToBeCalled = function(){
                    console.log(attrs);
                    if (attrs.state=='record'){
                        element.$attr('state', 'pause');
                    } else{
                        element.$attr('state', 'record');
                    }
                    scope.$apply;
                }
                element.bind('click',functionToBeCalled);
                
            }
        }
    })
})();