var http = require("http");
var StaticServer = require("node-static").Server;

var file = new StaticServer('./dist');

var server = http.createServer(function(request, response) {
  request.addListener('end', function () {
      file.serve(request, response);
  }).resume();
});

module.exports = server
