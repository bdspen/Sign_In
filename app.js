var signIn = angular.module('signIn', ['ui.router']);

signIn.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home',{
    url:"",
  });
  $stateProvider.state('sign-in',{
    url:"/sign-in",
    templateUrl: "partials/sign-in.html",
    controller: "StudentsCtrl"
  });
  $stateProvider.state('whos-here',{
    url:"/whos-here",
    templateUrl: "partials/whos-here.html",
    controller: "StudentsCtrl"
  });
});
