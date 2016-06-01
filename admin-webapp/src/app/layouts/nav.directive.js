angular.module('app.home')
.directive('t3bNav', () => {
  return {
    scope: {},
    controller: ['$location', function ($location) {
      var vm = this;
       
      vm.checkPath = function(path){
        return $location.path().indexOf(path) != -1;
      }
    }],
    controllerAs: 'ctrl',
    template:` 
      <!-- Left side column. contains the sidebar -->
      <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
          <ul class="sidebar-menu">
            <li class="header">MENU</li>
            <li ng-class="{active: ctrl.checkPath('/inicio')}">
              <a href="/home"><i class="fa fa-fw fa-home"></i> <span>Inicio</span></a>
            </li>

            <li ng-class="{active: ctrl.checkPath('/restaurantes')}">
              <a href="/restaurantes"><i class="fa fa-fw fa-university"></i> <span>Restaurantes</span></a>
            </li>

            <!--@if ($tipoUsuario == 'ADMINISTRADOR')-->

            <li ng-class="{active: ctrl.checkPath('/productos')}">
              <a href="/productos"><i class="fa fa-fw fa-gift"></i> <span>Productos</span></a>
            </li>
            
          </ul>
        </section>
        <!-- /.sidebar -->
      </aside>
    `
  };
});

