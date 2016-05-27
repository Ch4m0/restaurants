angular.module('app.home')

.controller('MainCtrl', ['$scope', '$rootScope', 'AUTH_EVENTS', 'CONFIG', '$http', 'jwtHelper', '$interval',
  function($scope, $rootScope, AUTH_EVENTS,  CONFIG, $http, jwtHelper, $interval) {
    console.warn('main ctrl');

    $scope.loggedUser = null;
    $scope.expandedMenu = true;

    $scope.setCurrentUser = (user) => {
      $scope.loggedUser = user; 
    };
    
      //$scope.setCurrentUser(Session.getUser());

}]);
