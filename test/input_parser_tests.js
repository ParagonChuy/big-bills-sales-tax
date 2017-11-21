var expect = require('chai').expect;
var assert = require('assert');
var input_parser = require('../modules/input_parser').input_parser;

describe('Input Parser', function() {
  var file_path = './receipts/input_01.txt';
  var file = input_parser.load_doc(file_path);
  var sample_receipt = `1 book at 12.49
1 music CD at 14.99
1 chocolate bar at 0.85
`;

    it('Input Parser has correct contents', function() {
      assert.equal(file, sample_receipt);
    });

    it('Input Parser parses into JSON .doc_to_json', function() {
      var arr = input_parser.doc_to_json(file);
      var valid_json = (typeof arr === 'object');
      assert.equal(valid_json , true);
    });
});
