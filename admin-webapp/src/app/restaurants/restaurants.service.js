
angular.module('app.restaurants', [])

.service('RestaurantsService', ['$http', 'CONFIG', function($http,  CONFIG){
    this.url = CONFIG.API_URL+'restaurants/';


  	this.getAll = function(callback){
      return $http.get(this.url).then(callback);
    };

    this.create = function(data, callback){

      console.log('servicio');
      console.log(data);
      let conf = {
        url: this.url,
        data: data,
        method: 'POST',
        transformRequest: angular.identity,
        headers: {
          'Content-Type': undefined
        }
      }
      return $http(conf).then(callback);
    };

    this.update = function(data, callback){
      let conf = {
        url: this.url+data.get('id'),
        data: data,
        method: 'POST',
        transformRequest: angular.identity,
        headers: {
          'Content-Type': undefined
        }
      }
      return $http(conf).then(callback);
    };

    this.destroy = function(id, callback){
      return $http.delete(this.url+id).then(callback);
    };


}]);
