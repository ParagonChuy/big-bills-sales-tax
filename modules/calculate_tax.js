var calculate_tax = (function() {

  return {
    isExempt: function(x) {
      var exemptions = ["book", "chocolates", "CD", "pills"];
      split_arr = x.split(" ");
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
      switch (x) {
        case this.isExempt(x) && this.isImported(x):
          // IS EXEMPT && IMPORTED

          break;
        case this.isImported(x):
          // IS IMPORTED

          break;
        case this.isExempt(x):
          // IS EXEMPT

          break;
        default:
          // Default to 0.1
          break;

      }
      return x;
    }
  }
})();

module.exports.calculate_tax = calculate_tax;
