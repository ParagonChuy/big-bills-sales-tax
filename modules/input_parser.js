var fs = require('fs');
var calculate_tax = require('../modules/calculate_tax').calculate_tax;

var input_parser = (function() {
  return {
    load_doc: function(file_path) {
      return file_contents = fs.readFileSync(file_path, 'utf-8');
    },

    doc_to_json: function(doc) {
      var arr = this.raw_doc_to_array(doc);
      arr = this.filter_empty_objects(arr);

      var mapped = arr.map(function(x) {
        var amount_price = x.match(/\d+\.\d+|\d+\b|\d+(?=\w)/g);
        var amount = amount_price[0];
        var price = amount_price[1];

        var item = x.split(" at ");
        item = item[0].replace(/[0-9]+/, '').trim();

        var obj = {
          amount: amount,
          item: item,
          tax_rate: calculate_tax.tax_rate(item),
          price: price,
          imported: calculate_tax.isImported(item),
          exempt: calculate_tax.isExempt(item)
        }
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
