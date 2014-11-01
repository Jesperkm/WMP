var app = angular.module('wmp-routes', ['ui.router']);

app.config (['$stateProvider', function($stateProvider) {

    //Routing for login screen
    $stateProvider

        //home/login screen
        .state('home', {
            url: '/',
            templateUrl: 'index.php'
        })
        //register.html
        .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html'
        })
        //my-details.html (to retrieve password)
        .state('my-details', {
            url: '/my-details',
            templateUrl: 'templates/my-details.html'
        })
        //my-planner.html (dashboard)
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/dashboard.html'
        });
}]);