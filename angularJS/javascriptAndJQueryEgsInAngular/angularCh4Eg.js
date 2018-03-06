(function (){ 
    var app= angular.module('app',[]);

    app.controller('Calc',[Calc]);
    function Calc(){
        vm = this;

        vm.calculation = [];

        var numberToCalculate = 3;
        var numberOfIterations = 10;
        var operatorForCalculation = '+';

        for (var i=1; i<=numberOfIterations;i++){
            var amt;
            if (operatorForCalculation ==='+'){
                amt = i+numberToCalculate;
            } else if(operatorForCalculation ==='-'){
                amt = i-numberToCalculate;
            } else if(operatorForCalculation ==='x'){
                amt = i*numberToCalculate;
            } else if(operatorForCalculation ==='/'){
                amt = i/numberToCalculate;
            }
            console.log(vm.calculation);
            vm.calculation.push(i+' '+operatorForCalculation+' '+numberToCalculate+' = '+amt);
        }
    }

})();




