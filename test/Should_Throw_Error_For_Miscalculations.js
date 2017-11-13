var expect = require('chai').expect;
var assert = require('assert');
var calculate_tax = require('../modules/calculate_tax').calculate_tax;
var input_parser = require('../modules/input_parser').input_parser;

describe("Tax Rates", function(){

  it("Calculate Tax#Exempt", function(){
    var file_path = './receipts/input_01.txt';
    var exempt = input_parser.retrieve_and_ready(file_path);
    exempt = calculate_tax.tax_rate(exempt[1]);
    assert.equal(exempt, 0);
  });

  it("Calculate Tax#imported", function(){
    var file_path = './receipts/input_03.txt';

    var imported = input_parser.retrieve_and_ready(file_path);
    imported = calculate_tax.tax_rate(imported[0]);
    assert.equal(imported, 0.05);
  });
});
