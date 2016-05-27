angular.module('Client')
.controller('MenuCtrl', ['$scope', 'MenuService', '$routeParams',  function ($scope, MenuService, $routeParams) {
	MenuService.getAll($routeParams.id, function (response) {
		$scope.restaurant = response.data;
	})
}]);
