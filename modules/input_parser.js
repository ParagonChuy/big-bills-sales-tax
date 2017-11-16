const fs = require('fs');
const calculate_tax = require('../modules/calculate_tax').calculate_tax;

const input_parser = (function() {
  return {
    load_doc: function(file_path){
      return fs.readFileSync(file_path, 'utf-8');
    },

    doc_to_json: function(doc){
      let arr = this.raw_doc_to_array(doc);
      arr = this.filter_empty_objects(arr);

      let mapped = arr.map(curr => {
        let amount_price = curr.match(/\d+\.\d+|\d+\b|\d+(?=\w)/g);
        let amount = amount_price[0];
        let price = amount_price[1];

        let item = curr.split(" at ");
        item = item[0].replace(/[0-9]+/, '').trim();

        let obj = {
          amount: amount,
          item: item,
          imported: calculate_tax.isImported(item),
          exempt: calculate_tax.isExempt(item),
          tax_rate: () => calculate_tax.tax_rate(obj.exempt, obj.imported),
          price: Number(price),
          sales_tax: () => (obj.original_price * obj.tax_rate() * 100) / 100,
          original_price: Number(price),
          total: () => {
            let exp = parseFloat(obj.original_price + (obj.original_price * obj.tax_rate()))
            return Math.round(exp * 100) / 100;
          }
        };
        return obj;
      });
      return mapped;
    },

    filter_empty_objects: function(arr) {
      return arr.filter(e => e);
    },

    raw_doc_to_array: function(doc) {
      return doc.split('\n');
    },

    retrieve_and_ready: function(file_path) {
      let doc = this.load_doc(file_path);
      let json = this.doc_to_json(doc);
      return json;
    }

  }
})();

module.exports.input_parser = input_parser;
