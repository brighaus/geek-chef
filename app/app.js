;(function(){
    var app = angular.module('geek-chef', ['ngRoute']);
    app.config(function($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'RecipieListDisplayController',
            templateUrl: 'app/partials/recipie-list.html'
        })
        .when('/recipie/:id', {
            controller: 'RecipieDisplayController',
            templateUrl: 'app/partials/recipie.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    });
})();