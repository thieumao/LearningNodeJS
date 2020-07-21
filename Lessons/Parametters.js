var express = require('express');
var app = express();
var server = require('http').createServer(app);
server.listen(3000);

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get('/sum/:num1/:num2', function(req, res) {
  const n1 = req.params.num1;
  const n2 = req.params.num2;

  const sum = parseInt(n1) + parseInt(n2);

  res.send(`<h1>${sum}</h1>`);
});