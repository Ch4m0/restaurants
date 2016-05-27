
angular.module('app.helpers')
.directive('t3bsGoogleplace', [ function() {
    return {
        require: 'ngModel',
        scope: {
            ngModel: '=',
            details: '=?'
        },
        link: function(scope, element, attrs, model) {
            let options = {
                types: [],
                componentRestrictions: {}
            };

            setTimeout(() => {
              scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

              google.maps.event.addListener(scope.gPlace, 'place_changed', () => {
                scope.$apply(() => {
                  scope.details = scope.gPlace.getPlace();
                  model.$setViewValue(element.val());                
                });
              });
            }, 800);
        }
    };
}]);

