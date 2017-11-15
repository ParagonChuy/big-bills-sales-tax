var expect = require('chai').expect;
var assert = require('assert');
var calculate_tax = require('../modules/calculate_tax').calculate_tax;
var input_parser = require('../modules/input_parser').input_parser;

describe("Calculate Tax", function(){

  it("Calculate Tax Exempt", function(){
    var file_path = './receipts/input_01.txt';
    var file = input_parser.retrieve_and_ready(file_path);
    var selected_item = calculate_tax.tax_rate(file[0]);
    assert.equal(selected_item, 0);
  });

  it("Calculate Tax#imported", function(){
    var exempt = true;
    var imported = true;
    var tax = calculate_tax.tax_rate(exempt,imported)
    assert.equal(tax, 0.05);
  });

  it('Calculate Tax has correct numbers from file', function() {
    var file_path = './receipts/input_01.txt';
    var file = input_parser.retrieve_and_ready(file_path);
    assert.equal(file[0].tax_rate,0.1);
  });
});
