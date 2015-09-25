var signIn = angular.module('signIn', ['ui.router']);

signIn.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home',{
    url:"",
    templateUrl: "partials/home.html"
  });
  $stateProvider.state('sign-in',{
    url:"/sign-in",
    templateUrl: "partials/sign-in.html"
  });
  $stateProvider.state('teacher',{
    url:"/:teacher",
    templateUrl: "partials/teacher.html"
  });
});
