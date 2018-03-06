var app=angular.module('app',['ngAnimate']);

app.controller('TestCtrl',[TestCtrl]);

function TestCtrl(){
    var vm= this;
    vm.large = false;
    vm.red=false;
}