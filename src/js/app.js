var app = angular.module('wmp', [
    'login-directive',
    'header-directive',
    'wmp-routes',
    'tabController'
]);

app.config (['$urlRouterProvider', function($urlRouteProvider) {
    //Any unmatched URL - redirect to home
    $urlRouteProvider.otherwise('/');
}]);