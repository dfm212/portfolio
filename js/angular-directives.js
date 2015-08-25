
  var app = angular.module('portfolio-directives', []);

  app.directive("menu", function() {
    return {
      restrict: 'AEC',
      // =====> G I T H U B
      templateUrl: "http://dfm212.github.io/portfolio/HTML-templates\menu-right.html"

      // =====> P R O D U C T I O N
      // templateUrl: "http://localhost/portfolio/HTML-templates/menu-right.html"
    };
  });

    app.directive("boards", function() {
      return {
        restrict: 'AEC',
        // =====> G I T H U B
        templateUrl: "http://dfm212.github.io/portfolio/HTML-templates/template-horizontal.html"

        // =====> P R O D U C T I O N
        // templateUrl: "http://localhost/portfolio/HTML-templates/template-horizontal.html"
      };
    });

      // ======================================================================
      //      This directive is disable because the pluging for the scroll
      // ======================================================================

      // app.directive("demos", function() {
        // return {
          // restrict: 'AEC',
          // =====> G I T H U B
          // templateUrl: "http://dfm212.github.io/portfolio/HTML-templates/template-horizontal.html"

          // =====> P R O D U C T I O N
          // templateUrl: "http://localhost/portfolio/HTML-templates/template-demos.html"
        // };
      // });
