angular.module('app.home')
.directive('t3bFooter', () => {
  return {
    scope: {},
    controller: function (CONFIG) {
      this.version = CONFIG.version;
    },
    controllerAs: 'ctrl',
    template: ` 
    <footer class="main-footer">
      <div class="pull-right hidden-xs">
        <b>Version</b> 3.0.1
      </div>
      <strong>Developed by &copy; 2016 {{ ctrl.version }} <a href="http://the3ballsoft.com">The3ballsoft</a>.</strong>.
    </footer>
    `
  };
});
