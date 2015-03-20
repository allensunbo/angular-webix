angular.module('angularWebixApp')
    .factory('FlatTable', function() {
        return function(container) {
            return webix.ui({
                container: container,
                view: "datatable",
                select: "row",
                multiselect: true,
                dragColumn: true,
                resizeColumn: true,
                // frozen column
                leftSplit: 2,
                columns: [{
                    id: "rank",
                    header: "rank",
                    css: "rank",
                    width: 50
                }, {
                    id: "title",
                    header: "Film title",
                    width: 200,
                    css: {
                        'text-align': 'right',
                        background: 'blue',
                        color: 'yellow'
                    }
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
                }],
                autoheight: false,
                // autowidth: true,
                data: [{
                    id: 1,
                    title: "The Shawshank Redemption",
                    year: 1994,
                    votes: 678790,
                    rating: 9.2,
                    rank: 1
                }, {
                    id: 2,
                    title: "The Godfather",
                    year: 1972,
                    votes: 511495,
                    rating: 9.2,
                    rank: 2
                }]
            });
        }
    });
