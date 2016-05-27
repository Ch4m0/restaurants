
angular.module('app')

.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
}])

.config(['NotificationProvider', function(NotificationProvider){
  NotificationProvider.setOptions({
    delay: 2000,
    startTop: 60,
    startRight: 10,
    verticalSpacing: 20,
    horizontalSpacing: 20,
    positionX: 'right',
    positionY: 'top'
  });

}]);
