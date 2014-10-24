var app = angular.module('wmp', ['ui.router']);

app.directive('login', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/login.html' 
    };
});

app.config (['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    //Any unmatched URL - redirect to home
    $urlRouterProvider.otherwise('/');

    //different states
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'index.php'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'partials/register.html'
        })
        .state('my-details', {
            url: '/my-details',
            templateUrl: 'partials/my-details.html'
        });
}]);

