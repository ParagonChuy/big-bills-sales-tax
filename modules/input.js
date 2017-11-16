const readlineSync = require('readline-sync');

const input = (function(){
  return {
    capture_input: function(){
      let input = readlineSync.questionInt('Choose a file: ');
      return input;
    }
};
})();

module.exports.input = input;
