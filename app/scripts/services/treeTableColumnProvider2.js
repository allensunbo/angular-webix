angular.module('angularWebixApp')
    .factory('TreeTableColumnProvider2', function() {
        return [{
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
            template: "{common.treetable()} #value#",
            adjust: 'data'
        }, {
            id: webix.uid(),
            header: "Column-0",
            //adjust: "header",
            width: 150
        }, {
            id: webix.uid(),
            header: "Column-1",
            //adjust: "header",
            width: 150
        }];

    });
