var fs = require('fs')
var cli = (function(){
  return {
    start: function(){
      console.log("******************************************");
      console.log("******************************************");
      console.log("***** Big Bill's Sales Tax Calculator*****");
      console.log("******************************************");
      console.log("******************************************");
      console.log(this.readFiles())
    },
    readFiles: function(){
      var receipts_dir = '../receipts/'
      var files = []
      fs.readdirSync(receipts_dir).forEach(file => {
        files.push(file);
      });
      return files;
    }
  };
})();

cli.start();
cli
