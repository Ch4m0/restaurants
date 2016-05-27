 angular.module('Client')

.service('RestaurantService', ['$http', 'CONFIG', function($http,  CONFIG){
     this.url = CONFIG.API_URL+'restaurants/';

  	this.getAll = function(callback){
      return $http.get(this.url + 'list').then(callback);
    };
    this.sendPosition = function(data, callback){
	     return $http.post(this.url+'location', data).then(callback);
    }; 
 }]);
