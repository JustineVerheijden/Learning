var app = angular.module('validation',[]);

var INTEGER_REGEXP=/^-?\d+$/;

app.directive('integer',function(){
    return{
        require: 'ngModel',
        link: function(scope,elm,attrs,ctrl){
            ctrl.$validators.integer = function(modelValue,viewValue){
                if (ctrl.$isEmpty(modelValue)){
                    return true;
                }
                if (INTEGER_REGEXP.test(viewValue)){
                    return true;
                }
                return false;
            };
        }
    };
});

app.directive('username',function($q,$timeout){
    return {
        require: 'ngModel',
        link: function(scope,elm,attrs,ctrl){   
            var usernames = ['Jim','John','Jill','Jackie'];
            ctrl.$asyncValidators.username = function(modelValue,viewValue){
                if (ctrl.$isEmpty(modelValue)){
                    return $q.resolve();
                }
                var def = $q.defer();

                $timeout(function(){
                    if (usernames.indexOf(modelValue)===-1){
                        def.resolve();
                    } else {
                        def.reject();
                    }
                }, 2000);
                return def.promise;
            };
        }
    };
});