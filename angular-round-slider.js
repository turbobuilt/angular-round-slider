angular.module('angular-round-slider', []).directive('roundSlider', function () {
    return {
        restrict: 'AEC',
        replace: true,
        template: '',
        scope: {
            value: '=',
            radius: '='
        },
        link: function (scope, elem, attrs) {
            elem.roundSlider({
                radius: scope.radius || 85,
                sliderType: "min-range",
                value: scope.value || 40
            });
            elem.bind('drag', function () {
                scope.$apply(function () {
                    scope.value = elem.data("roundSlider").getValue();
                });
            });
        }
    };
});
