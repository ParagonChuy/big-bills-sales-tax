const input_parser = require('../modules/input_parser').input_parser;
const calculate_tax = require('../modules/calculate_tax').calculate_taconst

const total = (function(){
  return {
    getTotal: function(arr){
      let [price_grand, sales_grand, total_grand ] = [0,0,0];

      let prices = arr.forEach(curr => price_grand += curr.price);
      let total = arr.forEach(curr => total_grand += curr.total());
      let sales_tax = arr.forEach(curr => sales_grand += curr.sales_tax());
      let move = {
        price: price_grand.toFixed(2),
        sales_tax: sales_grand.toFixed(2),
        total: total_grand.toFixed(2)
      }
      return move;
    },
    finalize_tab: function(arr){
      let output = "";
      arr.forEach(curr => {
        output += `${curr.amount} ${curr.item} at ${curr.price}\n`
      });
      console.log("RECEIPT\n");
      console.log(output);
      let move = this.getTotal(arr);
      console.log(`Sales Tax: ${move.sales_tax}`);
      console.log(`Total: ${move.total}`);
    }
  }
})();

module.exports.total = total;
