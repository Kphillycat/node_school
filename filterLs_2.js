
var mymodule = require('./myModule.js');

function callback(err, data) {
  data.forEach(function(el){
    console.log(el);
  });

}

mymodule(process.argv[2], process.argv[3], callback);

// solution.js:

//       var filterFn = require('./solution_filter.js')
//       var dir = process.argv[2]
//       var filterStr = process.argv[3]

//       filterFn(dir, filterStr, function (err, list) {
//         if (err)
//           return console.error('There was an error:', err)

//         list.forEach(function (file) {
//           console.log(file)
//         })
//       })