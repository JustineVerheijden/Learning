
(function(){
    var app=angular.module('app',['ngRoute']);

    app.config(function($routeProvider){
        $routeProvider.when('/',{
            templateUrl: 'app.html',
            controller:'AppCtrl',
            controllerAs:'app'
        });
    });

    app.controller('AppCtrl',AppCtrl);

    function AppCtrl(){
        var vm=this;
        vm.message='The app routing is working!';
    }
})();