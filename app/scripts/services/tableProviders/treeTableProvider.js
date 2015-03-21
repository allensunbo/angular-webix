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


           


            // also remove last column first and then insert it 
            /*var columns = webix.toArray(this.grid.config.columns);
            for (var i = 0; i < columns.length; i++) {
                columns.removeAt(i);
            }

            for (var i = 0; i < newColumns.length; i++) {
                columns.insertAt(newColumns[i], i);
            }*/

            /*columns.removeAt(2);

            columns.insertAt({
                id: webix.uid(),
                header: "New column"
            }, 2);

            columns.insertAt({
                id: webix.uid(),
                header: "New column"
            }, 3);*/

            this.grid.refreshColumns();

            this.grid.refresh();
        };

        return TreeTableProvider;

    });
