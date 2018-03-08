(function(){
    var app = angular.module('app',[]);

    function testService($http){
        this.get = function(){
            return $http.get('http://test-routes.herokuapp.com/test/hello')
            .then(function(res){
                return res.data.message;
            }, function () { return 'error'});
        }
    }
    function TestCtrl(testService){
        var vm=this;
        vm.getMessage=function(){
            testService.get()
            .then(function(message){
                vm.message=message;
            })
        };
        vm.getMessage();
    }
    app.service('testService',['$http',testService]);
    app.controller('TestCtrl',['testService',TestCtrl]);


})();