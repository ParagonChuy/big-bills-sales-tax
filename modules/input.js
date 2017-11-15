var readlineSync = require('readline-sync');

var input = (function(){
  return {
    capture_input: function(){
      var input = readlineSync.questionInt('Choose a number: ');
      return input;
    }
};
})();

module.exports.input = input;
