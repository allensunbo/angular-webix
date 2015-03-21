angular.module('angularWebixApp')
    .factory('TreeTableProvider', function() {

        function TreeTableProvider(container, columns, data, configs) {
            var _configs = angular.extend({}, {
                container: container,
                view: "treetable",
                selection: 'row',
                columns: columns,
                resizeColumn: true,
                resizeRow: true,

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

            this.grid.config.columns = newColumns;
         
            this.grid.refreshColumns();

            this.grid.refresh();
        };

        return TreeTableProvider;

    });
