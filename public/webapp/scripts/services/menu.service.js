angular.module('Client')

.service('MenuService', ['$http', 'CONFIG', function($http,  CONFIG){
     this.url = CONFIG.API_URL+'restaurants/';

  	this.getAll = function(id, callback){
  		console.log('entro al servicio');
      return $http.get(this.url+id).then(callback);
    };
 }]);