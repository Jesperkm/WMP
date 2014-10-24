var app = angular.module('wmp', [
    'login-directive',
    'login-routes'
]);

app.config (['$urlRouterProvider', function($urlRouteProvider) {
    //Any unmatched URL - redirect to home
    $urlRouteProvider.otherwise('/');
}]);


