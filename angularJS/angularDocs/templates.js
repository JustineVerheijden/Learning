(function(){
    var app = angular.module('app',['ngRoute']);

    app.config(function($routeProvider){
        $routeProvider
            .when('/',{
                controller: 'TestCtrl as test',
                templateUrl: 'test.html',
                })
            .otherwise('/');
    });
    app.controller('TestCtrl',['$templateCache',TestCtrl]);

    function TestCtrl($templateCache){
        vm = this;
        vm.user= {name:'Justine'};

        console.log($templateCache.get('test.html'));
    }

})();