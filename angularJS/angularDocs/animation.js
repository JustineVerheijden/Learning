var app = angular.module('app',['ngAnimate']);
app.controller('testCtrl',[TestCtrl]);

function TestCtrl(){
    var self=this;
    self.showBoxOne=false;
    self.showBoxTwo=false;
}