
  var app = angular.module('portfolio-directives', []);

  app.directive("menu", function() {
    return {
      restrict: 'E',
      // =====> G I T H U B
      templateUrl: "http://dfm212.github.io/portfolio/HTML-templates/menu-right.html"

      // =====> P R O D U C T I O N
      // templateUrl: "http://localhost/portfolio/HTML-templates/menu-right.html"
    };
  });

  app.directive("menufooter", function() {
    return {
      restrict: 'E',
      // =====> G I T H U B
      templateUrl: "http://dfm212.github.io/portfolio/HTML-templates/menuFooter.html"

      // =====> P R O D U C T I O N
      // templateUrl: "http://localhost/portfolio/HTML-templates/menuFooter.html"
    };
  });
  app.directive("mobile", function() {
    return {
      restrict: 'E',
      // =====> G I T H U B
      templateUrl: "http://dfm212.github.io/portfolio/HTML-templates/mobile.html"

      // =====> P R O D U C T I O N
      // templateUrl: "http://localhost/portfolio/HTML-templates/mobile.html"
    };
  });

    app.directive("boards", function() {
      return {
        restrict: 'E',
        // =====> G I T H U B
        templateUrl: "http://dfm212.github.io/portfolio/HTML-templates/template-horizontal.html"

        // =====> P R O D U C T I O N
        // templateUrl: "http://localhost/portfolio/HTML-templates/template-horizontal.html"
      };
    });


      app.directive("demos", function() {
        return {
          restrict: 'E',
          // =====> G I T H U B
          templateUrl: "http://dfm212.github.io/portfolio/HTML-templates/template-demos.html"

          // =====> P R O D U C T I O N
          // templateUrl: "http://localhost/portfolio/HTML-templates/template-demos.html"
        };
      });
