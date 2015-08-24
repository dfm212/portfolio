
  var app = angular.module('portfolio-directives', []);

    app.directive("boards", function() {
      return {
        restrict: 'AEC',
        // =====> G I T H U B
        // templateUrl: "http://dfm212.github.io/portfolio/HTML-templates/template-horizontal.html"

        // =====> P R O D U C T I O N
        templateUrl: "http://localhost/portfolio/HTML-templates/template-horizontal.html"

      };
    });
