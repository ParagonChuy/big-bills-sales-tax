var calculate_tax = (function() {

  return {
    isExempt: function(curr) {
      var exemptions = ["book", "chocolates", "chocolate", "CD", "pills"];
      var split_arr = curr.split(" ");
      var store = split_arr.map(function(curr) {
        return exemptions.includes(curr);
      });
      return store.includes(true) ? true : false;
    },

    isImported: function(x) {
      return x.match("imported") ? true : false;
    },

    tax_rate: function(exempt, imported) {
      switch (true) {
        case exempt && imported:
          return 0.05
        case exempt && !imported:
          return 0
        case !exempt && imported:
          return 0.15
        default:
          return 0.1
      }
    }

  }
})();




module.exports.calculate_tax = calculate_tax;
