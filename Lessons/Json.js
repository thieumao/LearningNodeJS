var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json'});

  var obj = {
    lastName: 'Nguyen',
    firstName: 'Thieu',
    age: 1992
  }

  res.end(JSON.stringify(obj));
}).listen(7777);