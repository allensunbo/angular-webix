angular.module('angularWebixApp')
    .factory('FlatTableColumnProvider', function() {
        return [{
            id: "rank",
            header: "rank",
            css: "rank",
            width: 50,
            adjust: 'header'
        }, {
            id: "title",
            header: {
                text: "Film title",
                css: {
                    "background": "#AFA"
                }
            },
            width: 200,
            css: {
                'text-align': 'center',
                background: 'blue',
                color: 'yellow'
            },
            adjust: 'data'
        }, {
            id: "year",
            header: "Released",
            width: 80,
            template: function(obj) {
                if (obj.year > 1980) {
                    return obj.year;
                } else {
                    return '<span style="color:red;">(' + obj.year + ')</span>';
                }
            },
            css: {
                'text-align': 'left',
                color: 'magenta'
            }
        }, {
            id: "votes",
            header: "Votes",
            width: 100,
            template: function(obj) {
                if (obj.votes > 550000) {
                    return accounting.formatMoney(obj.votes, '€', 2);
                } else {
                    return accounting.formatMoney(obj.votes);
                }
            },
        }];

    });
