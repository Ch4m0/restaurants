
/*
 * url routes
 */

  angular.module('app') 
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    'use strict';

    $routeProvider
    .when("/admin-home", {
      controller: "HomeCtrl",
      templateUrl: "app/home/home.html"
    })

    .when("/restaurants", {
      controller: "RestaurantsCtrl",
      templateUrl: "app/restaurants/restaurants.html"
    })

    .when("/products", {
      controller: "ProductsCtrl",
      templateUrl: "app/products/products.html"
    })

    .otherwise({
      redirectTo: '/admin-home'
    });
    $locationProvider.html5Mode(true);
  }]);

