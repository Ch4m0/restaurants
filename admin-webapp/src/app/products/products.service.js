
angular.module('app.products', [])

.service('ProductsService', ['$http', 'CONFIG', function($http,  CONFIG){
     this.url = CONFIG.API_URL+'products/';

  	this.getAll = function(callback){
      return $http.get(this.url).then(callback);
    };

    this.create = function(data, callback){
      return $http.post(this.url, data).then(callback);
    };

    this.update = function(data, callback){
      return $http.put(this.url+data.id, data).then(callback);
    };

    this.destroy = function(id, callback){
      return $http.delete(this.url+id).then(callback);
    };


}]);
