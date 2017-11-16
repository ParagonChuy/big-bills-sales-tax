var fs = require('fs');
var calculate_tax = require('../modules/calculate_tax').calculate_tax;

var input_parser = (function() {
  return {
    load_doc: function(file_path) {
      return fs.readFileSync(file_path, 'utf-8');
    },

    doc_to_json: function(doc) {
      var arr = this.raw_doc_to_array(doc);
      arr = this.filter_empty_objects(arr);

      var mapped = arr.map(function(curr) {
        var amount_price = curr.match(/\d+\.\d+|\d+\b|\d+(?=\w)/g);
        var amount = amount_price[0];
        var price = amount_price[1];

        var item = curr.split(" at ");
        item = item[0].replace(/[0-9]+/, '').trim();

        var obj = {
          amount: amount,
          item: item,
          imported: calculate_tax.isImported(item),
          exempt: calculate_tax.isExempt(item),
          tax_rate: function(){ return calculate_tax.tax_rate(this.exempt, this.imported) },
          price: Number(price),
          sales_tax: function(){
            return (this.original_price * this.tax_rate() * 100) / 100
          },
          original_price: Number(price),
          total: function(){
            var exp = parseFloat(this.original_price + (this.original_price * this.tax_rate()))
            return Math.round(exp * 100 ) /100
          }
        };
        return obj;
      });
      return mapped;
    },

    filter_empty_objects: function(arr) {
      return arr.filter(function(e) {
        return e;
      });
    },

    raw_doc_to_array: function(doc) {
      return doc.split('\n');
    },

    retrieve_and_ready: function(file_path) {
      var doc = this.load_doc(file_path);
      var json = this.doc_to_json(doc);
      return json;
    }

  }
})();

module.exports.input_parser = input_parser;
