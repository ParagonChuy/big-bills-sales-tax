var fs = require('fs');

var input_parser = (function() {
  return {
    load_doc: function(file_path) {
      // Loads File from file_path and return contents as a string
      return file_contents = fs.readFileSync(file_path, 'utf-8');
    },

    raw_doc_to_array: function(doc) {
      return doc.split('\n');
    },

    retrieve_and_ready: function(file_path) {
      var doc = this.load_doc(file_path);
      var arr = this.raw_doc_to_array(doc);
      return arr;
    },

  }
})();

module.exports.input_parser = input_parser;
