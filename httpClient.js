var http = require('http');

http.get(process.argv[2], function(response){
  response.on("data", function(data){
    //By default the data is a binary blob of data
    console.log(data.toString());
  });
});

// SOLUTION

// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })