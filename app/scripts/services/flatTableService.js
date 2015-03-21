angular.module('angularWebixApp')
    .factory('FlatTableBuilder', function() {
        return function(container, columns, data) {
            return webix.ui({
                container: container,
                view: "datatable",
                select: "row",
                multiselect: true,
                dragColumn: true,
                resizeColumn: true,
                // frozen column
                leftSplit: 2,
                columns: columns,
                autoheight: false,
                // autowidth: true,
                data: data
            });
        }
    });
