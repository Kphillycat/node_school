var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err,list){
  //list is array of filename strings
  if(!err){
    for(var i=0; i < list.length; i++){
      if(path.extname(list[i].toString()) == '.'+process.argv[3])
        console.log(list[i].toString());
    }   
  }  
});

// SOLUTION:
//   var fs = require('fs')
//       var path = require('path')

//       fs.readdir(process.argv[2], function (err, list) {
//         list.forEach(function (file) {
//           if (path.extname(file) === '.' + process.argv[3])
//             console.log(file)
//         })
//       })