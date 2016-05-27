angular.module('Client', ['ngResource', 'ngRoute'])
	.config(function ($routeProvider, $locationProvider) {
		// body...
		$routeProvider.when('/', {
      templateUrl: 'webapp/views/search.html',
			controller: 'RestaurantCtrl'
		})

		.when('/restaurantes/:id', {
      templateUrl: 'webapp/views/menu.html',
			controller: 'MenuCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
	});
