var app =new Vue({
    el: '.main',
    data: {

        players:[ 
            {
                name: 'Ted Mosby',
                points: 100,
                all: 1200
            },

             {
                name: 'Barney Stinson',
                points: 350,
                all: 3021
            },

             {
                name: 'Ross Gellar',
                points: 300,
                all: 5013
            },

            {
                name: 'Jesse Pinkman',
                points: 402,
                all: 2500
            },

             {
                name: 'Phoebe Buffay',
                points: 200,
                all: 2100
            },

            {
                name: 'Rachel Green',
                points: 500,
                all: 700
            },

             {
                name: 'Monica Geller',
                points: 700,
                all: 1000 
            }
        
        ]
    },

    methods: {
        filterMax30: function(){
            var sorted=[];
            var players = this.players;

            sorted = players.sort(function(a, b){
                return b.points - a.points;
            });

            return sorted;
        },

        filterAllTime: function(){
            var sorted=[];
            var players = this.players;

            sorted = players.sort(function(a, b){
                return b.all - a.all;
            });

            return sorted;
        }
    }
})