var calculate_tax = (function() {

  return {
    isExempt: function(x) {
      var exemptions = ["book", "chocolates", "CD", "pills"];
      var split_arr = x.toString().split(" ");
      var store = split_arr.map(function(curr) {
        return exemptions.includes(curr);
      });
      return store.includes(true) ? true : false;
    },

    isImported: function(x) {
      return x.match("imported") ? true : false;
    },

    tax_rate: function(x) {
      var rate = 0;
      var standard_tax = 0.10;
      var import_tax = 0.05;
      if (x.exempt) {
        rate = 0;
      }
      if (x.imported && !x.exempt) {
        rate = import_tax + standard_tax;
      }
      if (!x.imported && !x.exempt) {
        rate = standard_tax;
      }
      if (x.imported && x.exempt) {
        rate = import_tax;
      }
      var a = rate.toFixed(2);
      console.log(typeof rate)
      return Number(rate.toFixed(2));
    }
  }
})();

module.exports.calculate_tax = calculate_tax;
