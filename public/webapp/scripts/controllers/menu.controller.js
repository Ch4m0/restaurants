angular.module('Client')
.controller('MenuCtrl', ['$scope', 'MenuService', '$routeParams',  function ($scope, MenuService, $routeParams) {
 	$scope.numLetter = 106;
	MenuService.getAll($routeParams.id, function (response) {
		$scope.restaurant = response.data;
	})
}]);
