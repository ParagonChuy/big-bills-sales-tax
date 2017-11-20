const input_parser = require('../modules/input_parser').input_parser;
const calculate_tax = require('../modules/calculate_tax').calculate_taconst

const total = (function(){
  return {
    getSalesTax: function(arr){
      return arr.reduce((total, curr) => total + curr.sales_tax());
    },
    getTotal: function(arr){
      return arr.reduce((total, curr) => total + curr.total());
    },
    finalize_tab: function(arr){
      console.log("RECEIPT\n");
      let output = arr.forEach(curr => console.log(`${curr.amount} ${curr.item} at ${curr.price}`));
      let total = this.getTotal(arr);
      let sales_tax = this.getSalesTax(arr);
      console.log(`\nSales Tax: ${sales_tax}`);
      console.log(`Total: ${total}`);
    }
  }
})();

module.exports.total = total;
