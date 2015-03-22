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
            controller: function($scope) {
                function getPosition(element) {
                    var xPosition = 0;
                    var yPosition = 0;

                    while (element) {
                        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
                        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
                        element = element.offsetParent;
                    }
                    return {
                        x: xPosition,
                        y: yPosition
                    };
                }
                $scope.drop = function() {
                    console.log('drop');
                    var elem = angular.element(document.querySelectorAll('#a'));
                    console.log(elem);
                    var myElement = document.querySelector('#a');
                    var position = getPosition(myElement);
                    console.log("The image is located at: " + position.x + ", " + position.y);

                    var menu = webix.ui({
                        view: "contextmenu",
                        data: ["Add", "Rename", "Delete", {
                            $template: "Separator"
                        }, "Info"],
                        master: "a",
                        top: position.y + 38,
                        left: position.x,
                        width: 614,
                        on: {
                            onItemClick: function(id) {
                                webix.message(this.getItem(id).value);
                            }
                        }
                    });
                    menu.show();
                }
            },
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
