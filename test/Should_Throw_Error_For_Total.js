var expect = require('chai').expect;
var assert = require('assert');
var calculate_tax = require('../modules/calculate_tax').calculate_tax;
var input_parser = require('../modules/input_parser').input_parser;

describe("Total", function() {
  var file_path = './receipts/input_02.txt';
  var sample_receipt = input_parser.retrieve_and_ready(file_path);

  // it('Total match sample receipt', function() {
  //   console.log(sample_receipt);
  //   assert.equals(0,0);
  // });
});
