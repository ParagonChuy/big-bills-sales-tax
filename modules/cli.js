var fs = require('fs');
var total = require('../modules/total').total;
var output = require('../modules/output').output;
var input = require('../modules/input').input;

var cli = (function(){
  return {
    start: function(){
      output.run();
    }
  };
})();



cli.start();

module.exports.cli = cli;
