angular.module('Client')
.controller('RestaurantCtrl', ['$scope', '$window', 'RestaurantService','$location', function ($scope, $window , RestaurantService, $location ) {
		 $scope.location = [];
		// body...
		$scope.resta = false;	
		$scope.numLimit = 6;
		$scope.numLetter = 106;
		$scope.getPositionCurrent= () => {

				$window.navigator.geolocation.getCurrentPosition(function (position) {
					// body...
					var lat = position.coords.latitude;
					var lng = position.coords.longitude;
					$scope.lat = lat; 
					$scope.lng = lng;

					console.warn('Su posición Actual es: ' + $scope.lat, $scope.lng);
					$scope.location = {'lat':$scope.lat,'long':$scope.lng};
          // $scope.location = {'location': `${$scope.lat},${$scope.lng}` };
					
					RestaurantService.sendPosition($scope.location, (response) => {
						$scope.restaurants = response.data;
						$scope.resta = true;	
						console.log($scope.restaurants);
					});


				});
		}
		$scope.menu = (restaurant) => {
			console.log(restaurant.id);
			$location.path('/restaurantes/'+restaurant.id);
		}
}])
