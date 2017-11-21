const fs = require('fs');
const input = require('../modules/input').input;
const input_parser = require('../modules/input_parser').input_parser;
const total = require('../modules/total').total;


const output = (function() {
  return {
    main: function() {
      let user_input = input.capture_input();
      let file_path = this.input_to_file_path(user_input);
      let file = input_parser.load_doc(file_path);
      let doc = input_parser.retrieve_and_ready(file_path);
      console.log(`\nYour order looks like this:\n${file}`)
      total.updatePrice(doc);
      console.log("RECEIPT")
      this.receipt_content(doc);
      console.log(`\nSales Tax: ${total.getSalesTax(doc)}`);
      console.log(`Total: ${total.getTotal(doc)}`);

    },
    header: function() {
      console.log("########################################");
      console.log("### Big Bill's Sales Tax Calculator ####");
      console.log("########################################\n");
    },
    listFiles: function(file) {
      let files = this.readFiles();
      files.forEach((curr, index) => {
        console.log(`${index + 1}. ${curr}`);
      });
    },
    input_to_file_path: function(input) {
      let files = this.readFiles();
      return `./receipts/${files[input - 1]}`;
    },
    readFiles: function() {
      let receipts_dir = './receipts/';
      let files = [];
      fs.readdirSync(receipts_dir).forEach(file => {
        files.push(file);
      });
      return files;
    },
    receipt_content: function(arr){
      return arr.forEach(curr => console.log(`${curr.amount} ${curr.item} at ${curr.price.toFixed(2)}`));
    },
    run: function() {
      this.readFiles();
      this.header();
      this.listFiles();
      this.main();
    }
  }
})();


module.exports.output = output;
