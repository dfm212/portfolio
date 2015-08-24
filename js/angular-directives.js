var app = angular.module('portfolio-directives', []);

    app.directive("boards", function() {
      return {
        restrict: 'E',
        templateUrl: "http://dfm212.github.io/portfolio/HTML-templates/template-horizontal.html"
      };
    });


})();
