'use strict';

/**
 * @ngdoc function
 * @name angularWebixApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularWebixApp
 */
angular.module('angularWebixApp')
    .controller('TreeTableCtrl', function($scope, TreeTable) {
        var columns = [{
            id: "id",
            header: "",
            css: {
                "text-align": "right"
            },
            width: 50
        }, {
            id: "value",
            header: "Film title",
            width: 250,
            template: "{common.treetable()} #value#"
        }, {
            id: "chapter",
            header: "Mode",
            width: 200
        }];

        var data = [{
            "id": "1",
            "value": "The Shawshank Redemption",
            "open": true,
            "data": [{
                "id": "1.1",
                "value": "Part 1",
                "chapter": "alpha"
            }, {
                "id": "1.2",
                "value": "Part 2",
                "chapter": "beta",
                "open": true,
                "data": [{
                    "id": "1.2.1",
                    "value": "Part 1",
                    "chapter": "beta-twin"
                }, {
                    "id": "1.2.2",
                    "value": "Part 1",
                    "chapter": "beta-twin"
                }]
            }, {
                "id": "1.3",
                "value": "Part 3",
                "chapter": "gamma"
            }]
        }, {
            "id": "2",
            "value": "The Godfather",
            "data": [{
                "id": "2.1",
                "value": "Part 1",
                "chapter": "alpha"
            }, {
                "id": "2.2",
                "value": "Part 2",
                "chapter": "beta"
            }]
        }];

        var grid = TreeTable("treeTable", columns, data);

        $scope.updateData = function() {
            console.log('updateData');
            grid.clearAll();
            var newColumns = [{
                id: "id",
                header: "",
                css: {
                    "text-align": "right"
                },
                width: 50
            }, {
                id: "value",
                header: "Film title",
                width: 250,
                template: "{common.treetable()} #value#"
            }];
            var newData = [{
                "id": "1",
                "value": "changed ---- The Shawshank Redemption",
                "open": true,
                "data": [{
                    "id": "1.1",
                    "value": "changed ----  Part 1",
                    "chapter": "alpha"
                }, {
                    "id": "1.2",
                    "value": "changed ----  Part 2",
                    "chapter": "beta",
                    "open": true,
                    "data": [{
                        "id": "1.2.1",
                        "value": " changed ----  Part 1",
                        "chapter": "beta-twin"
                    }, {
                        "id": "1.2.2",
                        "value": "changed ----  Part 1",
                        "chapter": "beta-twin"
                    }]
                }, {
                    "id": "1.3",
                    "value": "changed ----  Part 3",
                    "chapter": "gamma"
                }]
            }, {
                "id": "2",
                "value": "changed ----  The Godfather",
                "open": true,
                "data": [{
                    "id": "2.1",
                    "value": "changed ----  Part 1",
                    "chapter": "alpha"
                }, {
                    "id": "2.2",
                    "value": "changed ----  Part 2",
                    "chapter": "beta"
                }]
            }];

            grid.parse({
                data: newData
            });

            // also remove last column first and then insert it 
            var columns = webix.toArray(grid.config.columns);
            columns.removeAt(2);
            
            columns.insertAt({
                id: webix.uid(),
                header: "New column"
            }, 2);

            grid.refreshColumns();

            grid.refresh();

        }

    });
