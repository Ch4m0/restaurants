angular.module('app')
.run(['$rootScope', '$location', 'amMoment', 
  function ($rootScope,  $location, amMoment) {

    amMoment.changeLocale('es');

    function logout(){
      //$location.path('/logout');
      window.location.href = 'logout';
    }

    $rootScope.logout = () => {
      logout();
    };

    /**
     * redirecciona a una url interna
     *
     * @param {string} url url target
     */
    $rootScope.goTo = (url) => {
      $location.path(url); 
    };

}]);
