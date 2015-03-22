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
                $scope.inputId = 'input-' + webix.uid();
                $scope.drop = function() {
                    var inputId = $scope.inputId;
                    console.log('drop');
                    var elem = angular.element(document.querySelectorAll('#' + inputId));
                    console.log(elem);
                    var myElement = document.querySelector('#' + inputId);
                    var position = getPosition(myElement);
                    console.log("The image is located at: " + position.x + ", " + position.y);

                    var treedata = [{
                        id: "1",
                        value: "Book 1",
                        data: [{
                            id: "1.1",
                            value: "Part 1"
                        }, {
                            id: "1.2",
                            value: "Part 2"
                        }]
                    }, {
                        id: "2",
                        value: "Book 2",
                        data: [{
                            id: "2.1",
                            value: "Part 1"
                        }]
                    }];

                    var menu = webix.ui({
                        // view: "contextmenu",
                        view: "popup",
                        // container: 'treeCombo',
                        body: {
                            view: "tree",
                            data: treedata,
                            select: true,
                            on: {
                                onItemClick: function(id) {
                                    var text = "Selected: " + id;
                                    var selected = this.getItem(id);
                                    console.log(this.getItem(id));
                                    $scope.$apply(function() {
                                        $scope.selected = selected.value;
                                    });

                                }
                            }
                        },
                        master: inputId, // input field id
                        top: position.y + 30,
                        left: position.x,
                        width: 614,
                        on: {
                            onItemClick: function(id) {
                                webix.message(this.getItem(id).value);
                            }
                        },
                    });
                    menu.show();
                }
            },
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function(scope, iElm, iAttrs, controller) {


            }
        };
    });
