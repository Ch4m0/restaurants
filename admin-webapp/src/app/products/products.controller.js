
angular.module('app.products')

.controller('ProductsCtrl', ['$scope',  'ProductsService',  
                             'Notification','$timeout',
  function($scope, ProductsService,   Notification, $timeout) {

      $scope.productForm = {};
      $scope.products = [];
      $scope.product = null;
      $scope.isEdit = false;

     ProductsService.getAll((response) => {
      $scope.products = response.data; 
    });

    $scope.openForm = (product, index) => {
      if(product) {
        $scope.isEdit = true;
        $scope.product = product;
        $scope.product.index = index;
      } else {
        $scope.isEdit = false;
        $scope.product = {};
      }
      $('#productFormModal').modal('show');
    };

    $scope.saveProduct= (productData, productForm) => {

      if ($scope.isEdit) {
        $('#productFormModal').modal('hide');
        ProductsService.update(productData, (response) => {
         Notification.success('Editado correctamente');
         $scope.products[$scope.product.index] =  response.data.product;  
         $scope.product = null;
         $scope.isEdit = false;
       }); 
      } else {
        $('#productFormModal').modal('hide');
        ProductsService.create(productData, (response) => {
          $scope.products.push(response.data.product);
          $scope.product = null;
          Notification.success('Creado correctamente');
        }); 
      }
    };

    $scope.openDeleteConfirm = (productData, idx) => {
      $scope.product = productData;
      $scope.product.idx = idx;
      $('#productDeleteModal').modal('show');
    };

    $scope.deleteProduct = () => {
      $('#productDeleteModal').modal('hide');
        ProductsService.destroy($scope.product.id, (response) => {
          $scope.products.splice($scope.product.idx, 1);
          $scope.product = null;
          Notification.success('Borrado correctamente');
        }); 
    };
}]);
