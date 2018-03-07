(function(){
    var app = angular.module('app',[]);

    app.controller('TestCtrl',['testService',TestCtrl]);
    app.service('testService',['$http',testService]);

    function TestCtrl(testService){
        var vm=this;
        vm.getMessage=function(){
            testService.get()
            .then(function(message){
                vm.message=message;
            })
        };
        console.log(vm.message);

    }

    function testService($http){
        this.get = function(){
            return $http.get('http://test-routes.herokuapp.com/test/hello')
            .then(function(res){
                return res.data.message;
            });
        }
    }
})();