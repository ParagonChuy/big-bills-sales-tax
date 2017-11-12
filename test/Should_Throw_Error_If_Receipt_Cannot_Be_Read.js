var expect = require('chai').expect;
var assert = require('assert');
var input_parser = require('../modules/input_parser').input_parser;

describe('Read File', function() {
  var file_path = './receipts/input_01.txt';
  var sample_receipt = `1 book at 12.49
1 music CD at 14.99
1 chocolate bar at 0.85`;
    it('Can Read Correct File', function() {
      var file = input_parser.load_doc(file_path);
      assert.equal(file, sample_receipt);
    });
});
