
angular.module('app.home')

.controller('HomeCtrl', ['$scope',  function($scope ) {

  console.info("home Ctrl works");

  $scope.dashboard = {
    restaurant : 30, 
    products: 34,
    companies: 31,
    old_orders: 209
  };

  // HomeService.get((response) => {
  //   console.log(response);
  //   $scope.dashboard = response.data; 
  // });

}]);
