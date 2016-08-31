;
(function() {
    var RecipieListDisplayController = function($scope, RecipieListService) {
        "use strict";
        $scope.recipies = RecipieListService.recipies;
    };
    RecipieListDisplayController.$inject = ['$scope', 'RecipieListService'];

    angular.module('geek-chef')
        .controller('RecipieListDisplayController', RecipieListDisplayController);
})();