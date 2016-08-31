var testTarget = 'RecipieListDisplayController';

describe(testTarget, function() {

    var scope;
    var ctrl;

    beforeEach(angular.mock.module('geek-chef'));

    beforeEach(angular.mock.inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller(testTarget, {$scope: scope});
    }));

    it('should have a list of recipies or a message stating there are none', function() {
        expect(scope.recipies.length).toBeGreaterThan(0);
    });
});