var app = angular.module('wmp', [
    //
    // Directives
    //
    'login-directive',
    'header-directive',
    'dashboard-directives',

    //
    // Routes
    //
    'wmp-routes',

    //
    // Controllers
    //
    'tabController'
]);

app.config (['$urlRouterProvider', function($urlRouteProvider) {
    //Any unmatched URL - redirect to home
    $urlRouteProvider.otherwise('/');
}]);