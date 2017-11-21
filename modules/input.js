const readlineSync = require('readline-sync');

const input = (function(){
  return {
    capture_input: function(){
      return readlineSync.questionInt('Choose a file: ');
    }
};
})();

module.exports.input = input;
