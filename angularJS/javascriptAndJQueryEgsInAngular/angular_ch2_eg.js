var app = angular.module('app',[]);
app.controller('FlowerController',[FlowerController]);

function FlowerController(){
    var vm=this;
    var concat1 = "Howdy ";
    var concat2 = "Molly";
    var concat3= ", please check your order:";
    var cost = 5;
    var shipping = 7;
    var sign = "Montague House";
    
    vm.greeting = concat1 + concat2 +concat3;
    vm.sign = sign;
    vm.totTiles = vm.sign.length;
    vm.subtotal = "$"+ (vm.sign.length*cost);
    vm.shipping = "$" +shipping;
    vm.grandTotal = "$" +((vm.sign.length*cost)+shipping);
    console.log(vm.grandTotal);
}