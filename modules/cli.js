const fs = require('fs');
const total = require('../modules/total').total;
const output = require('../modules/output').output;
const input = require('../modules/input').input;

const cli = (function(){
  return {
    start: () => {
      output.run();
    }
  };
})();



cli.start();

module.exports.cli = cli;
