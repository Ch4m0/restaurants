angular.module('Client')
.controller('SearchCtrl',['$scope','RestaurantService', '$window','$location', function ($scope,RestaurantService, $window, $location) {
  // body...
  $scope.numLimit = 6;
  $scope.numLetter = 106;
  $scope.getPositionCurrent= () => {

    $window.navigator.geolocation.getCurrentPosition(function (position) {
      // body...
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      $scope.lat = lat; 
      $scope.lng = lng;
// 
          $scope.location = {'lat':$scope.lat,'long':$scope.lng};
      // $scope.location = {'location': `${$scope.lat},${$scope.lng}` };

      console.warn('Su posición Actual es: ' + $scope.lat, $scope.lng);

      RestaurantService.sendPosition($scope.location, (response) => {
        console.log('todo bien');
      });
    })
	}
}]);
