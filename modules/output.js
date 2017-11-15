var fs = require('fs');
var input = require('../modules/input').input;
var input_parser = require('../modules/input_parser').input_parser;
var total = require('../modules/total').total;


var output = (function(){
  return {
    handleInput: function(){
      var user_input = input.capture_input();
      var file_path = this.input_to_file_path(user_input);
      var file = input_parser.load_doc(file_path);
      var doc = input_parser.retrieve_and_ready(file_path);
      console.log(`\nYour order looks like this:\n${file}`)
      // Do Calculations and Output Result
      total.getPrices(doc);
    },
    header: function(){
      console.log("########################################");
      console.log("### Big Bill's Sales Tax Calculator ####");
      console.log("########################################\n");
    },
    listFiles: function(file){
      var files = this.readFiles();
      files.forEach(function(curr,index){
        console.log(`${index + 1}. ${curr}`);
      });
    },
    input_to_file_path: function(input){
      var files = this.readFiles();
      return `../receipts/${files[input - 1]}`;
    },
    readFiles: function(){
      var receipts_dir = '../receipts/';
      var files = [];
      fs.readdirSync(receipts_dir).forEach(file => {
        files.push(file);
      });
      return files;
    },
    run: function(){
      this.readFiles();
      this.header();
      this.listFiles();
      this.handleInput();
    }
  }
})();


module.exports.output = output;
