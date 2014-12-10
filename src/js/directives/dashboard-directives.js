var app = angular.module('dashboard-directives', []);


//
// Update-Profile
//
app.directive('updateprofile', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/update-profile.html' 
    };
});

//
// Home
//
app.directive('home', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/dashboard-home.html'
    };
});

//
// Add Meal
//
app.directive('addmeal', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/add-meal.html'
    };
});

//
// Weekly Planner
//
app.directive('weeklyplanner', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/weekly-planner.html'
    };
});

//
// Shopping List
//
app.directive('shoppinglist', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/shopping-list.html'
    };
});