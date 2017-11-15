var input_parser = require('../modules/input_parser').input_parser;

var total = (function(){
  return {
    getPrices: function(arr){
      var prices = arr.map(function(curr){
        return curr.price;
      });
      var total = arr.map(function(curr){
        return curr.total();
      })
      console.log("prices: ",prices)
      console.log("total: ",total)

      return prices;
    },

    finalize_tab: function(){
      return 0;
    }
  }
})();

module.exports.total = total;
