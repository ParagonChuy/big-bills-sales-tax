const input_parser = require('../modules/input_parser').input_parser;
const calculate_tax = require('../modules/calculate_tax').calculate_taconst

const total = (function(){
  return {
    getSalesTax: function(arr){
      return arr.reduce((total, curr) => total + curr.sales_tax(), 0).toFixed(2);
    },
    getTotal: function(arr){
      return arr.reduce((total, curr) => total + curr.total(), 0).toFixed(2);
    }
  }
})();

module.exports.total = total;
