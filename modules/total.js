var input_parser = require('../modules/input_parser').input_parser;

var total = (function(){
  return {
    getTotal: function(arr){
      var price_grand = 0;
      var total_grand = 0;
      var sales_grand = 0;
      
      var prices = arr.forEach(function(curr){
        price_grand += curr.price;
      });
      var total = arr.forEach(function(curr){
        total_grand += curr.total();
      });
      
      var sales_tax = arr.forEach(function(curr){
        sales_grand += curr.sales_tax();
      });
      
      var move = {
        price: price_grand.toFixed(2),
        sales_tax: sales_grand.toFixed(2),
        total: total_grand.toFixed(2)
      }
      return move;
    },

    finalize_tab: function(arr){
      var output = "";
      arr.forEach(function(curr){
        output += `${curr.amount} ${curr.item} at ${curr.price}\n`
      });
      console.log("RECEIPT\n")
      console.log(output)
      var move = this.getTotal(arr);
      console.log(`Sales Tax: ${move.sales_tax}`)
      console.log(`Total: ${move.total}`)
    }
  }
})();

module.exports.total = total;
