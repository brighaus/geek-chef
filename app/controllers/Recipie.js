angular.module('geek-chef', []).controller('RecipieController', ['$scope', function ($scope) {
    "use strict";
    $scope.recipies = [
         { name: 'recipie 1', completed: true },
         { name: 'recipie 2', completed: false },
    ];
}]);