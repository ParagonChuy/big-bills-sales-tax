const calculate_tax = (function() {

  return {
    isExempt: curr => {
      let exemptions = ["book", "chocolates", "chocolate", "pills"];
      let split_arr = curr.split(" ");
      let store = split_arr.map(curr => {
        return exemptions.includes(curr);
      });
      return store.includes(true) ? true : false;
    },

    isImported: x => {
      return x.match("imported") ? true : false;
    },

    tax_rate: (exempt, imported) => {
      switch (true) {
        case exempt && imported:
          return 0.05;
        case exempt && !imported:
          return 0;
        case !exempt && imported:
          return 0.15;
        default:
          return 0.1;
      }
    }

  }
})();




module.exports.calculate_tax = calculate_tax;
