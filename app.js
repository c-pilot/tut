angular.module('myApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'pages/home.html' })
      .when('/about', { templateUrl: 'pages/about.html' })
      .when('/contact', { templateUrl: 'pages/contact.html' })
      .otherwise({ redirectTo: '/'});
  })
  
 