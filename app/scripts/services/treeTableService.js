angular.module('angularWebixApp')
    .factory('TreeTableBuilder', function() {
        return function(container, columns, data) {
            return webix.ui({
                container: container,
                view: "treetable",
                selection: 'row',
                columns: columns,
                resizeColumn: true,

                leftSplit: 1,
                autoheight: false,
                // autowidth: true,
                data: data

            });
        }
    });
