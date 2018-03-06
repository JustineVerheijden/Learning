var app = angular.module("app", [])

app.directive("dumbPassword", function () {
  var validElement = angular.element('<div>{{ model.input }}</div>');

  var link = function (scope) {
    scope.$watch("model.input", function (value) {
      if(value === "password") {
        validElement.css("position",'absolute');
        validElement.css("left",'100px');
      }
    });
  };

  return {
    restrict: "E",
    replace: true,
    templateUrl: "dumbpass.html",
    compile: function (tElem) {
      tElem.append(validElement);

      return link;
    }
  }
});