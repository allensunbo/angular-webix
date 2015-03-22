angular.module('angularWebixApp')
    .directive('treeCombo', function() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {
                title: '@',
                config: '@',
                selected: '='
            }, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            templateUrl: 'views/templates/treeCombo.tpl.html',
            /*template: '<div>' +
                '<div style="background-color: red;">{{title}}</div>' +
                '<ng-transclude></ng-transclude>' +
                '</div>',*/
            // replace: true,
            transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function(scope, iElm, iAttrs, controller) {
                console.log(scope);
                var combo = webix.ui({
                    view: "combo",
                    container: "treeCombo",
                    id: 'field_m',
                    label: 'Combo',
                    value: "Banana",
                    yCount: "3",
                    options: {
                        body: {
                            data: [{
                                id: 1,
                                value: "Banana"
                            }, {
                                id: 2,
                                value: "Papai"
                            }, {
                                id: 3,
                                value: "Apple"
                            }],
                            on: {
                                'onItemClick': function(id) {
                                    webix.message("Clicked: " + this.getItem(id).value);
                                    var selected = this.getItem(id).value;
                                    scope.$apply(function() {
                                        scope.selected = selected;
                                    });
                                }
                            }
                        }
                    }
                });
            }
        };
    });
