
angular.module('app.restaurants')

.controller('RestaurantsCtrl', ['$scope', 'RestaurantsService','ProductsService', 'DTOptionsBuilder', 
							'DTColumnDefBuilder','Notification', '$timeout', 'CONFIG',
							 function($scope, RestaurantsService, ProductsService, DTOptionsBuilder, DTColumnDefBuilder, Notification, $timeout, CONFIG) {


    $scope.companies = [];
    $scope.products = []; 
    $scope.company = null;
    $scope.logo = null;
    $scope.isEdit = false;
    $scope.baseUrl = CONFIG.PUBLIC_URL;

    $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('responsive', true);
      $scope.dtColumns = [
      DTColumnDefBuilder.newColumnDef(0),
      DTColumnDefBuilder.newColumnDef(1),
      DTColumnDefBuilder.newColumnDef(2),
      DTColumnDefBuilder.newColumnDef(3),
    ];
    $timeout(() => {
      $('#companyFormModal').on('hidden.bs.modal', () => {
        $scope.company = null; 
        $scope.logo = null;
      });
    });

    RestaurantsService.getAll((response) => {
      $scope.companies = response.data; 
      console.log('compañias');
      console.log($scope.companies);
    });

    ProductsService.getAll((response) => {
       $scope.products = response.data; 
       
    });


    $scope.openForm = (company, index) => {
      if(company) {
        $scope.isEdit = true;
        $scope.company = company;
        $scope.company.index = index;
       	console.log($scope.company);
      } else {
        $scope.isEdit = false;
      }
      $('#companyFormModal').modal('show');
    };

    const buildFormData = function(obj){
      let data = new FormData();
      for (var key of Object.keys(obj)) {
        if (Array.isArray(obj[key])) {
          angular.forEach(obj[key], (item, i) => {
            data.append(`${key}[${i}]`, item);
          });
        } else {
          data.append(key, obj[key]);
        }
      }

      if($scope.logo){
        data.append('logo', $scope.logo); 
      }

      return data;
    };


    $scope.saveCompany = (companyData) => {

      /* prepare data */
      console.warn(companyData);
      // companyData.products = companyData.listProduct.map((item) => {

      //   return item.id;
      // });
      // companyData = buildFormData(companyData);

      if ($scope.isEdit) {
        companyData.append('_method', 'PUT'); 
        RestaurantsService.update(listProduct, (response) => {
          console.log(response) 
          Notification.success('Editado correctamente');
          $scope.companies[$scope.company.index] = response.data.company;  
          $scope.isEdit = false;
          $('#companyFormModal').modal('hide');
        }); 
      } else {
        RestaurantsService.create(listProduct, (response) => {
          console.log(response);
          $scope.companies.push(response.data.company);
          $('#companyFormModal').modal('hide');
          Notification.success('Creado correctamente');
        }); 
      }
    };

    $scope.openDeleteConfirm = (companyData, idx) => {
      $scope.company = companyData;
      $scope.company.idx = idx;
      $('#companyDeleteModal').modal('show');
    };

    /* delete */
    $scope.deleteCompany = () => {
      console.log($scope.company);
        RestaurantsService.destroy($scope.company.id, (response) => {
          $scope.companies.splice($scope.company.idx, 1);
          $('#companyDeleteModal').modal('hide');
          $scope.company = null;
          Notification.success('Borrado correctamente');
        }); 
    };

     // image file 
    $scope.addLogo = () => { $("#file").click(); };

    $scope.selectLogo = (files) => {
      $scope.logo = files[0];
      $scope.$apply();
    }

}]);
