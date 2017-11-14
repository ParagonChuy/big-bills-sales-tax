var calculate_tax = (function() {

  return {
    isExempt: function(curr) {
      var exemptions = ["book", "chocolates", "CD", "pills"];
      var split_arr = curr.split(" ");
      var store = split_arr.map(function(curr) {
        return exemptions.includes(curr);
      });
      return store.includes(true) ? true : false;
    },

    isImported: function(x) {
      return x.match("imported") ? true : false;
    },

    tax_rate: function(elem) {
      var rate = 0;
      var standard_tax = 0.10;
      var import_tax = 0.05;
      if (elem.exempt) {
        rate = 0;
      }
      if (elem.imported && !elem.exempt) {
        rate = import_tax + standard_tax;
      }
      if (!elem.imported && !elem.exempt) {
        rate = standard_tax;
      }
      if (elem.imported && elem.exempt) {
        rate = import_tax;
      }
      return Number(rate.toFixed(2));
    }
  }
})();

module.exports.calculate_tax = calculate_tax;
