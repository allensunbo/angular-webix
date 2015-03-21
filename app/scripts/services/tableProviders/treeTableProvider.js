angular.module('angularWebixApp')
    .factory('TreeTableProvider', function() {

        function TreeTableProvider(container, columns, data, configs) {
            var _configs = angular.extend({}, {
                container: container,
                view: "treetable",
                selection: 'row',
                columns: columns,
                resizeColumn: true,

                leftSplit: 1,
                autoheight: false,
                // autowidth: true,
                data: data

            }, configs || {});

            this.grid = webix.ui(_configs);
        }

        TreeTableProvider.prototype.rebuild = function(newColumns, newData) {

            this.grid.clearAll();

            this.grid.parse({
                data: newData
            });

            var columns = webix.toArray(this.grid.config.columns);
            // have to remove in the reverse order
            for (var i = columns.length - 1; i >= 0; i--) {
                columns.removeAt(i);
            }

            for (var i = 0; i < newColumns.length; i++) {
                columns.insertAt(newColumns[i], i);
            }

            this.grid.refreshColumns();

            this.grid.refresh();
        };

        return TreeTableProvider;

    });
