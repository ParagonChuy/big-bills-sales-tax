var expect = require('chai').expect;
var assert = require('assert');
var calculate_tax = require('../modules/calculate_tax').calculate_tax;
var input_parser = require('../modules/input_parser').input_parser;

describe("Tax Rates", function(){

  it("Calculate Tax#Exempt", function(){
    var file_path = './receipts/input_01.txt';
    var file = input_parser.retrieve_and_ready(file_path);
    var selected_item = calculate_tax.tax_rate(file[0]);
    assert.equal(selected_item, 0);
  });

  it("Calculate Tax#imported", function(){
    var file_path = './receipts/input_03.txt';

    var imported = input_parser.retrieve_and_ready(file_path);
    imported = calculate_tax.tax_rate(imported[3]);

    assert.equal(imported, 0.05);
  });
});
