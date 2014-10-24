var app = angular.module('login-routes', ['ui.router']);

app.config (['$stateProvider', function($stateProvider) {

    //Routing for login screen
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'index.php'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html'
        })
        .state('my-details', {
            url: '/my-details',
            templateUrl: 'templates/my-details.html'
        });
}]);