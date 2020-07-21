var http = require('http');
var mysql = require('mysql');
var url = require('url');
var fs = require('fs');
var ejs = require("ejs");
// var axios = require('axios');
var { parse } = require('querystring');

var con = mysql.createConnection({
   host: "127.0.0.1",
   user: "root",
   password: "ThieuMao",
   database: "db_book"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

function renderHTML(path, response, data) {
    var htmlContent = fs.readFileSync(path, 'utf8');
    data.filename = path;

    var htmlRenderized = ejs.render(htmlContent, data);

    response.writeHeader(200, {"Content-Type": "text/html"});
    response.end(htmlRenderized);
}

var server = http.createServer(function (req, res) {
    res.writeHeader(200, {"Content-Type": "text/html"});
    con.connect(function(err) {
        con.query("SELECT * FROM books", function (err, result, fields) {
          if (err) throw err;
          renderHTML('./view/index.ejs', res, {books: result});
        });
    });
});

server.listen(8000);
