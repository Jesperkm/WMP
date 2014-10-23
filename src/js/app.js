var app = angular.module('wmp', []);

app.directive('login', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/login.html' 
    };
});