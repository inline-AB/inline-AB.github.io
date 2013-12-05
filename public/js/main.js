var app = angular.module('inlineAB', [])
.config(function($routeProvider, $locationProvider) {
  $routeProvider.when("/", {controller: 'home', templateUrl: 'templates/home.html'})
  .when("/getting-started", {controller: 'getting-started', templateUrl: 'templates/getting-started.html'})
  .when("/download", {controller: 'download', templateUrl: 'templates/download.html'})
  .when("/my-analytics", {controller: 'my-analytics', templateUrl: 'templates/my-analytics.html'})
  .when("/documentation", {controller: 'documentation', templateUrl: 'templates/documentation.html'})
  .when("/authors", {controller: 'authors', templateUrl: 'templates/authors.html'})
  .otherwise({redirectTo: '/'});
})
.controller('home', function() {

})
.controller('getting-started', function() {

})
.controller('download', function() {

})
.controller('my-analytics', function() {

})
.controller('documentation', function() {

})
.controller('authors', function() {

});