var app = angular.module('header-directive', []);

app.directive('logoheader', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/logo-header.html' 
    };
});