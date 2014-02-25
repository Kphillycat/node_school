// To perform a filesystem operation you are going to need the fs module from the Node core library.
var fs = require('fs');

var lines = fs.readFileSync(process.argv[2]).toString();
console.log(lines.split('\n').length - 1);

 // var fs = require('fs')

 //      var contents = fs.readFileSync(process.argv[2])
 //      var lines = contents.toString().split('\n').length - 1
 //      console.log(lines)

      // note you can avoid the .toString() by passing 'utf8' as the
      // second argument to readFileSync, then you'll get a String!
      //
      // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1