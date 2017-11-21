var expect = require('chai').expect;
var assert = require('assert');

var calculator = require('../modules/total').total;

describe("Total", () => {
  it("Calcaulate sales tax total .getSalesTax", () => {
    let input = [{
      sales_tax: function() {
        return 2;
      }}, {
      sales_tax: function() {
        return 3;
      }
    }];
    let outcome = calculator.getSalesTax(input)
    assert.equal(outcome, 5);

  });

  it("Calculates total .getTotal", function(){
    let input = [{
      total: function() {
        return 2.32;
      }}, {
      total: function() {
        return 12.48;
      }
    }];
    let outcome = calculator.getTotal(input)
    assert.equal(outcome, 14.80);
  });
});
