angular.module('app.helpers', [])
// directive implements select2 
// Usage
/*
 * <t3bs-select2 class="form-control"
 *  select2-value="id"
 *  select2-display="name"
 *  select2-model="employee.contract_type"
 *  source="contractTypes">
 * </t3bs-select2>
 */
.directive('t3bsSelect2', function($timeout) {
  return {
      restrict: 'E',
      scope: {
        select2Model: '=',
        select2Callback: '=',
        source: '='
    },
    transclude: true,
    template: '<select class="t3bsSelect2" style="width: 100%">'+
              '<option ng-repeat="c in source" value="{{ c[idv] }}">{{ c[valuev] }}</option>'+
              '</select>',
    replace: true,
    link: function(scope, element, attrs) {
      scope.idv = attrs.select2Value || 'id'; 
      scope.valuev = attrs.select2Display || 'name';

      //init
      $timeout(() => {
        $(element).select2({ theme: 'bootstrap' });
        element.select2Initialized = true;
        //watchers
        scope.$watch('source', reload);
        scope.$watch('select2Model', updateSelection);
      }); 

      function reload(){
        if (!element.select2Initialized) return;
        $timeout(() => {
          $(element).trigger('change');
          updateSelection();
        });
      };

      function updateSelection(){
        if(!scope.select2Model){ 
          checkModel(); 
          return; 
        }

        if(element.idOpt == scope.select2Model[scope.idv]) return;

        $(element).val(scope.select2Model[scope.idv]).trigger("change");
      }

      //events listener of select
      $(element).on("select2:select", changeModel);
      function changeModel(e, id){
        element.idOpt = e.params.data[scope.idv] || id;
        $timeout(function() {
          scope.select2Model = search(element.idOpt, scope.source);
          if(scope.select2Callback) {
            scope.select2Callback(scope.select2Model);
          }
        });
      };

      //helpers
      function search(indx, list){
        for(let i=0; i<list.length; i++){
          if(list[i][scope.idv] == indx){
            return list[i];
          }
        }
      };

      function checkModel(){
        if(!scope.source) return;
        if(scope.source.length){
          if(!scope.select2Model){
            scope.select2Model = scope.source[0];
          }
        }
      };

    }
  };
})

.directive('t3bsSelect2Multiple', function($timeout) {
  return {
    restrict: 'E',
    scope:{
      select2Model: '=',
      source: '='
    },
    transclude: true,
    template: `
      <select class="t3bsSelect2 select2-multiple" multiple="" style="width: 100%">
        <option ng-repeat="c in source" value="{{ c[idv] }}" ng-bind="c[valuev]"></option>
      '</select>`,
    replace: true,
    link: function(scope, element, attrs) {
      scope.idv = attrs.select2Value || 'id'; 
      scope.valuev = attrs.select2Display || 'name';
      //init
      $timeout(() => {
        $(element).select2({ theme: 'bootstrap', });
        element.select2Initialized = true;
        //watchers
        scope.$watch('source', reload);
        scope.$watch('select2Model', updateSelection);
      }); 

      function reload(){ //reload select2 on sources change
        if (!element.select2Initialized) return;
        $timeout(() => {
          $(element).trigger('change');
          updateSelection();
        });
      };

      function updateSelection(){ //update visual select on model change
        if(!scope.select2Model) return;
        if(!element.select2Initialized){
          setTimeout(updateSelection, 1000);
          return;
        }
        $(element).val(getArray(scope.select2Model)).trigger("change");
      };

      //events listener of select
      $(element).on("select2:select", changeModel);
      $(element).on("select2:unselect", changeModel);
      function changeModel(e, id) { //add or remove from model on visual change
        element.idOpt = e.params.data[scope.idv];
        $timeout(() => {
          let res = null;
          if(res = search(element.idOpt, scope.select2Model)){
            scope.select2Model.splice(scope.select2Model.indexOf(res), 1);
          } else {
            if(!scope.select2Model)  scope.select2Model = [];
            scope.select2Model.push(search(element.idOpt, scope.source));
          }
        });
      };

      function getArray(list){
        var tmp = [];
        for(let i=0; i<list.length; i++){
          tmp.push(list[i][scope.idv]);
        }
        return tmp;
      };

      function search(indx, list){
        if(!list) return false;
        for(let i=0; i<list.length; i++){
          if(list[i][scope.idv] == indx){
            return list[i];
          }
        }
        return false;
      };
    }
  };
})

.directive('inputSrc', () => {
  return {
    restrict: 'A',
    scope: {
      file: '=inputSrc'
    },
    link: (scope, element, attrs) => {
      scope.$watch('file', (val) => {
        if (val) {
          readFile();
          element.show();
        } else {
          if (attrs.inputSrcError) {
            attrs.$set('src', attrs.inputSrcError);
            return;
          }
          element.hide();
        }
      })
      function readFile(){
        //console.log(scope.file);
        if (FileReader) {
          let fr = new FileReader();
          fr.onload = function () {
            attrs.$set('src', fr.result);
          }
          fr.readAsDataURL(scope.file);
        } else {
          console.warn('Update your f*** browser');
        }
      };

    }
  }
});

