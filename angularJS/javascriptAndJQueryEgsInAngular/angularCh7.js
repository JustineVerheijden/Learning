(function(){
    var app = angular.module('app',[]);

    app.controller('Shop',[Shop]);

    function Shop(){
        vm=this;
        vm.newItem=true;

        vm.submitted = function(){
            vm.newItem = true;
        }
    };

    app.directive('submitButton',['$document', '$compile',function($document, $compile){
        return{
            link: function (scope,element,attr){
                var listElement = $document.find("u1");
                scope.shop.num= listElement[0].children.length;
                
                element.bind('click',functionToBeCalled);
                
                function functionToBeCalled(){
                    var keyEl = angular.element('<li id='+Math.random()+' class="hot">'+document.getElementById("newItem").value+'</li>');
                    
                    listElement[0].append(keyEl[0]);
                    $compile(keyEl)(scope);
                    scope.shop.num= listElement[0].children.length;
                }
            }
        }
    }]);

    app.directive('clickCompleteDelete',['$document','$compile',function($document,$compile){
        return {
            link: function(scope,element,attr){
                var listElement = $document.find("u1");
                element.on('click',function(e){
                    for(var i=0;i<listElement[0].children.length;i++){
                        if ((listElement[0].children[i].id)==e.path[0].id){
                            var completeElement = angular.element(listElement[0].children[i]);
                            if (!(completeElement.hasClass('complete'))){
                                listElement[0].append(completeElement[0]);
                                $compile(completeElement)(scope);
                                completeElement.addClass('complete');
                            } else {
                                completeElement.remove();
                            }
                        }
                    }
                    scope.shop.num= listElement[0].children.length;
                });
            }
        }
    }]);

    
})();