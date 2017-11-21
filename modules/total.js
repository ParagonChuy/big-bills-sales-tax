const input_parser = require('../modules/input_parser').input_parser;
const calculate_tax = require('../modules/calculate_tax').calculate_taconst

const total = (function(){
  return {
    getSalesTax: function(arr){
<<<<<<< HEAD
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
=======
      return arr.reduce((total, curr) => total + curr.sales_tax(), 0).toFixed(2);
    },
    getTotal: function(arr){
      return arr.reduce((total, curr) => total + curr.total(), 0).toFixed(2);
    },
    updatePrice: function(doc) {
      total.getTotal(doc);
      doc.map(curr => {
        curr.price = curr.original_price + curr.sales_tax();
      });
>>>>>>> origin/Refactors
    }
  }
})();

module.exports.total = total;
