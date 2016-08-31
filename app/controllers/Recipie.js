;
(function() {
    var RecipieListDisplayController = function($scope) {
        "use strict";
        $scope.recipies = [{
            name: 'recipie 1',
            completed: true
        }, {
            name: 'recipie 2',
            completed: false
        }, ];
    };
    RecipieListDisplayController.$inject = ['$scope'];

    angular.module('geek-chef')
        .controller('RecipieListDisplayController', RecipieListDisplayController);
})();