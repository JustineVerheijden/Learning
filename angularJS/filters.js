(function(){
    var app=angular.module('app',[]);
    app.controller('Times',[Times]);
    function Times(){
        vm = this;

        vm.values=[
                {
                    "time": "9:00",
                    "title": "Intro to 3D Modeling"
                },
                {
                    "time": "10:00",
                    "title": "Circuit Hacking"
                },
                {
                    "time": "11:30",
                    "title": "Arduino Antics"
                },
                {
                    "time": "1:00",
                    "title": "The Printed Lunch"
                },
                {
                    "time": "2:00",
                    "title": "Droning On"
                },
                {
                    "time": "3:00",
                    "title": "Brain Hacking"
                },
                {
                    "time": "4:30",
                    "title": "Make The Future"
                }
            ];
    }
    app.filter('twentyFourHourTime',[twentyFourHourTime]);

    function twentyFourHourTime(){
        return function(input){
            var output = input;
            var splitInput = input.split(':');
            if (Number(splitInput[0])<9){
                output = (Number(splitInput[0])+12)+':'+splitInput[1];
            } else if (Number(splitInput[0])==9){
                output = '0'+splitInput[0]+':'+splitInput[1];
            }
            return output;
        }
    }

    app.filter('randomUppercase',[randomUppercase]);

    function randomUppercase(){
        return function(input){
            var output='';
            for (var i=0;i<input.length;i++){
                if (Math.floor(Math.random()*10)%2===0){
                    output += input[i].toUpperCase();
                } else {
                    output += input[i];
                }                
            } 
            return output;
        }
    }
})()