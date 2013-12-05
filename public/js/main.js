var app = angular.module('inlineAB', [])
.config(function($routeProvider, $locationProvider) {
  $routeProvider.when("/", {templateUrl: 'templates/home.html'})
  .when("/getting-started", {templateUrl: 'templates/getting-started.html'})
  .when("/download", {controller: 'download', templateUrl: 'templates/download.html'})
  .when("/my-analytics", {controller: 'my-analytics', templateUrl: 'templates/my-analytics.html'})
  .when("/documentation", {templateUrl: 'templates/documentation.html'})
  .when("/authors", {templateUrl: 'templates/authors.html'})
  .otherwise({redirectTo: '/'});
})
.factory('google', function($q, $timeout) {
  var service = {};

  service.login = function() {
    var d = $q.defer();

    // REPLACE WITH REAL LOGIN
    var name = "A GOOGLE USER";
    $timeout(function() {
      service.username = name;
      d.resolve(name);
    }, 500);

    return d.promise;
  };

  service.logout = function() {
    var d = $q.defer();

    // REPLACE WITH REAL LOGOUT
    $timeout(function() {
      service.username = undefined;
      d.resolve();
    }, 500);

    return d.promise;
  };

  service.getAccounts = function() {
    var d = $q.defer();

    // REPLACE WITH REAL ACCOUNT FETCHER
    $timeout(function() {
      d.resolve(["Personal Account", "Business Account", "H4CK3R 4CC0|_|N7"]);
    }, 500);

    return d.promise;
  };

  service.getWebProps = function(account) {
    var d = $q.defer();

    // REPLACE WITH REAL WEB Prop FETCHER
    $timeout(function() {
      d.resolve(["DRUGS", "KIDNAPPINGS", "LAUNDERING"]);
    }, 500);

    return d.promise;
  };

  return service;
})
.controller('download', function($scope, google) {
  $scope.loginButtonText = "Log In";

  $scope.login = function() {
    // Logging out.
    if ($scope.username) {
      google.logout().then(
        function() {
          $scope.username = undefined;
          $scope.account = undefined;
          $scope.accounts = undefined;
          $scope.webProp = undefined;
          $scope.webProps = undefined;
          $scope.loginButtonText = "Log In";
        },
        function(error) {$scope.error = error;}
      );
      $scope.loginButtonText = "Logging Out...";
    // Logging in.
    } else {
      google.login().then(
        function(username) {
          $scope.username = username;
          $scope.loginButtonText = "Log Out";
          getAccounts();
        },
        function(error) {$scope.error = error;}
      );
      $scope.loginButtonText = "Logging In...";
    }
  };

  // Get the google accounts.
  var getAccounts = function() {
    google.getAccounts().then(
      function(accounts) {
        $scope.accounts = accounts;
      }
    );
  };

  $scope.selectAccount = function(account) {
    console.log("selected an account");
    $scope.account = account;
    getWebProps(account);
  };

  $scope.isSelectedAccount = function(account) {
      return $scope.account === account;
  };

  // Get the web properties for a specified account.
  var getWebProps = function(account) {
    google.getWebProps(account).then(
      function(webProps) {
        console.log("got web props");
        $scope.webProps = webProps;
      }
    );
  };

  $scope.selectWebProp = function(webProp) {
    console.log("selected an WebProp");
    $scope.webProp = webProp;
  };

  $scope.isSelectedWebProp = function(webProp) {
      return $scope.webProp === webProp;
  };



})
.controller('my-analytics', function() {

});