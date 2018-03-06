(function(){
    var app=angular.module('app',[]);

    app.directive('setClass', ['$compile',function($compile){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.addClass('cool');
              }
        }
    }]);

    app.controller('List',['$scope',List]);

    function List($scope){
        vm = $scope;
    }

    app.directive('parentOfLi', ['$compile',function($compile){
        return {
            restrict: 'A',
            scope: true,
            link: function(scope, element,attrs) {
                var keyEl = angular.element('<li set-class id="zero" class="hot"><em>fresh</em>figs</li>');
                element[0].insertBefore(keyEl[0], element[0].firstElementChild);
                $compile(keyEl)(scope);
                var keyEl1 = angular.element('<li set-class id="zero2" class="hot"><em>fresh</em>figs</li>');
                element[0].lastElementChild.append(keyEl1[0]);
                $compile(keyEl1)(scope);
                scope.list.num= element[0].children.length;
            }
        }
    }])
})();

