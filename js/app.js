
var app = angular.module("portgolio", ['portfolio-directives',]);


app.controller('workController', function($scope, $location, $anchorScroll){
  this.boards = boardWorks;

  // ================================================================
  // anchor between menu and demos

  $scope.scrollTo = function(id) {
    $location.hash(id);
    console.log($location.hash());
    $anchorScroll();
  };

});

app.controller('demotroller', function(){
  this.demos = boardWorks;

});

var boardWorks =
[
  {
    id: "1",
    title : "Blog",
    description : "My journey: growing as front-end developer.",
    longDescription: "lorem30...",
    full: "full1.jpg",
    images: {
      top: "",
      botton: "",
    },
    title2: "Programs",
    programs: "HTML5, CSS3, JS, jQuery, Boostrap, Angular",
    demo: "demo1.jpg",
    link: "",
    github: "",
  },
  {
    id: "2",
    title : "Developer log",
    description : "The log of my experiences and impressions as developer.",
    full: "full2.jpg",
    images: {
      top: "",
      botton: "",
    },
    title2: "Programs",
    programs: "HTML5, CSS3, JS, jQuery, Boostrap, Angular",
    demo: "demo2.jpg",
    link: "",
    github: "",
  },
  {
    id: "3",
    title : "My first app",
    description : "Personal challenge: Develop a ToDo App with Angularjs \"mimic of Trello\".",
    full: "full3.jpg",
    images: {
      top: "",
      botton: "",
    },
    title2: "Programs",
    programs: "HTML5, CSS3, JS, jQuery, Boostrap, Angular",
    demo: "demo3.jpg",
    link: "http://dfm212.github.io/ToDoList/",
    github: "https://github.com/dfm212/ToDoList",
  },
  {
    id: "4",
    title : "Web #01",
    description : "Practice: mimicking the home site of Apple, to in practice my new sckills.",
    full: "full4.jpg",
    images: {
      top: "",
      botton: "",
    },
    title2: "Programs",
    programs: "HTML5, CSS3, JS, jQuery, Boostrap, Angular",
    demo: "demo4.jpg",
    link: "http://dfm212.github.io/first-web/",
    github: "https://github.com/dfm212/first-web",
  },
  {
    id: "5",
    title : "Web #02",
    description : "One colleague challenged me to mimic this template.",
    full: "full5.jpg",
    images: {
      top: "",
      botton: "",
    },
    title2: "Programs",
    programs: "HTML5, CSS3, JS, jQuery, Boostrap, Angular",
    demo: "demo5.jpg",
    link: "http://dfm212.github.io/CamiloSite/",
    github: "https://github.com/dfm212/CamiloSite",
  },
  {
    id: "6",
    title : "Laboratory",
    description : "This is my version of One Page Per Day of Jennifer Dewalt.",
    full: "full6.jpg",
    images: {
      top: "",
      botton: "",
    },
    title2: "Programs",
    programs: "HTML5, CSS3, JS, jQuery, Boostrap, Angular",
    demo: "demo6.jpg",
    link: "http://dfm212.github.io/oneWebsitePerDay/004-CSS3_Preloader/index.html",
    github: "https://github.com/dfm212/oneWebsitePerDay",
  },
 ];
