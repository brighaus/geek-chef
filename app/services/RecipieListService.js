;(function(){
    var RecipieListService = function () {
        var factory = {};
        factory.recipies = [{
            name: 'recipie 1',
            completed: true
        }, {
            name: 'recipie 2',
            completed: false
        }, ];

        return factory;
    };
    
    angular.module('geek-chef').factory('RecipieListService', RecipieListService);
})();