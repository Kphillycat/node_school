var fs = require('fs');
var path = require('path');

module.exports = function (dirName, extension, callback) { 
  fs.readdir(dirName, function(err,list){
    if(err){
      return callback(err);
    }
    var filtered = list.filter(function(file){
      return path.extname(file.toString()) == '.'+extension;
    });
    callback(null, filtered);
  });      
};

// solution_filter.js:

//       var fs = require('fs')
//       var path = require('path')

//       module.exports = function (dir, filterStr, callback) {

//         fs.readdir(dir, function (err, list) {
//           if (err)
//             return callback(err)

//           list = list.filter(function (file) {
//             return path.extname(file) === '.' + filterStr
//           })

//           callback(null, list)
//         })
//       }
