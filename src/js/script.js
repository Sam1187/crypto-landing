'use strict';

$(document).ready(function(){

    var app = new Vue({
        el: '#app',
        data: {
            name: '',
            currencyfrom : [],
            currencyto : [],
            convertfrom: 'USD',
            convertto: 'BTC',
            amount : ''
        },
        computed : {
            finalamount:function() {
                var to = this.convertto;
                var from = this.convertfrom;
                var final;
                switch(from) {
                    case 'USD':
                    if (to == 'BTC') {
                        final = this.amount / 7000;
                    }
                    if (to == 'LTC') {
                        final = this.amount / 200;
                    }
                    if (to == 'COI') {
                        final = this.amount / 50;
                    }
                    break;
                    case "GBR":
                    if (to == "BTC") {
                        final = this.amount / 6900;
                    }
                    if (to == "LTC") {
                        final = this.amount / 190;
                    }
                    if (to == 'COI') {
                        final = this.amount / 45;
                    }
                    break;
                    case 'UAH':
                    if (to == 'BTC') {
                        final = this.amount / 7000;
                    }
                    if (to == 'LTC') {
                        final = this.amount / 200;
                    }
                    if (to == 'COI') {
                        final = this.amount / 50;
                    }
                    break;
                }
                return final;
            }
        },
        mounted: function () {
            var self = this;
            $.ajax({
                url: 'https://api.myjson.com/bins/169a0g',
                method: 'GET',
                success: function (data) {
                    self.currencyfrom = data.currencyfrom;
                    self.currencyto = data.currencyto;
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    });
});

