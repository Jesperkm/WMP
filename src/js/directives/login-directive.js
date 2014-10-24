var app = angular.module('login-directive', []);

app.directive('login', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/login.html' 
    };
});