(function(){
    var app=angular.module('app',['ngRoute']);

    app.config(function($routeProvider){
        $routeProvider
        .when('/jq-load',{
            templateUrl: 'jq-load.html'
        })
        .when("/jq-load2", {
            templateUrl: "jq-load2.html"
        })
        .when("/jq-load3",{
            templateUrl: "jq-load3.html"
        })
        .when("/angularCh8Time", {
            templateUrl:'angularCh8Time.html',
            controller: 'Timetable',
            controllerAs: 'times'
        });
    });

    app.controller('Timetable',['$scope', '$q', 'timetableData',Timetable]);

    function Timetable($scope, $q, timetableData){
        var vm = this;
        vm.eventSeleted = false;
        vm.stateSelected ='';


        vm.eventClicked = function(selectedOption){
            console.log(selectedOption);
            vm.stateSelected=selectedOption;
            vm.eventSelected = true;
            
            vm.stateTimes = {content:null};
            timetableData.getTimesData().then(function(data){
                for(var key in data.data){
                    if (key == selectedOption){
                        vm.stateTimes= data.data[key];
                    }
                }
                console.log(vm.stateTimes);
            });
        }

        vm.timeClicked= function (titleClicked){
            console.log(titleClicked);
        }



    }

    app.service('timetableData',['$http', '$q', timetableData]);

    function timetableData ($http, $q){
        return {
            getTimesData: getTimesData
        };

        function getTimesData() {

            return $http.get('angularCh8.json');
        }
    }

    
})();



