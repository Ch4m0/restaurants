angular.module('app.home')
.directive('t3bHeader', () => {
  return {
    scope: {},
    //bindToController: {
      //user: '='
    //},
    controller: ['$rootScope', '$scope', function ($rootScope, $scope) {
      var vm = this;

      vm.logout = $rootScope.logout;
      vm.loggedUser = $scope.$parent.loggedUser;
      let screenSizes = $.AdminLTE.options.screenSizes;

      $(".content-wrapper").click(function () {
        //Enable hide menu when clicking on the content-wrapper on small screens
        if ($(window).width() <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
          $("body").removeClass('sidebar-open');
        }
      });

      vm.toggleMenu = () => {
         //Enable sidebar push menu
        if ($(window).width() > (screenSizes.sm - 1)) {
          if ($("body").hasClass('sidebar-collapse')) {
            $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
          } else {
            $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
          }
        }
        //Handle sidebar push menu for small screens
        else {
          if ($("body").hasClass('sidebar-open')) {
            $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
          } else {
            $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
          }
        }
      };//end toggle

    }],
    controllerAs: 'ctrl',
    template:` 
      <header class="main-header">
        <!-- Logo -->
        <a href="/" class="logo">
          <!-- mini logo for sidebar mini 50x50 pixels -->
          <span class="logo-mini"><b>SR</b></span>
          <!-- logo for regular state and mobile devices -->
          <span class="logo-lg"><b>Search</b> <b>R</b>estaurant</span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top text-center" role="navigation">
          <!-- Sidebar toggle button-->
          <a href="javascript:void(0);" ng-click="ctrl.toggleMenu()" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
              <li class="dropdown user user-menu">
                <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                  <img src="https://randomuser.me/api/portraits/men/21.jpg" class="user-image" alt="User Image">
                  <span class="hidden-xs">{{ ctrl.loggedUser.first_name }}</span>
                </a>
                <ul class="dropdown-menu">
                  <!-- User image -->
                  <li class="user-header">
                    <img src="https://randomuser.me/api/portraits/men/21.jpg" class="img-circle" alt="User Image">
                    <p>
                      {{ ctrl.loggedUser.first_name +' '+ctrl.loggedUser.last_name }}
                    </p>
                    <p>
                      {{ ctrl.loggedUser.email }}
                    </p>
                  </li>
                  <!-- Menu Footer-->
                  <li class="user-footer">
                    <div class="pull-left">
                      <a href="/perfil" class="btn btn-default btn-flat"><i class="fa fa-user"></i> Perfil</a>
                    </div>
                    <div class="pull-right">
                      <button ng-click="ctrl.logout()" class="btn btn-default btn-flat">
                        <i class="fa fa-sign-out"></i> Salir
                      </button>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    `
  };
});
