var fs = require('fs')
var Client = require('./app/client');
var config = {
  port: 8081,
  maxPackageSize: 5*1024*1024,

}

APP_PATH = __dirname

var pid = process.pid

if(!fs.existsSync(APP_PATH+'/tmp')){
  fs.mkdirSync(APP_PATH+'/tmp')
}

fs.writeFileSync(APP_PATH+'/tmp/server.pid', pid, "utf8")

var webSocketServer = require('websocket').server

var server = require('./http_server')

if(fs.existsSync(APP_PATH+'/tmp/server.sock')){
  fs.unlinkSync(APP_PATH+'/tmp/server.sock')
}

server.listen(config.port, function() {
  console.log((new Date()) + " Server is listening on port " + config.port)
})

server.on('error', function(e) {
    console.log(e)
})

var wsServer = new webSocketServer({
  httpServer: server,
  maxReceivedFrameSize: config.maxPackageSize,
  maxReceivedMessageSize: config.maxPackageSize
})

wsServer.on('request', function(request) {
  var connection = request.accept(null, request.origin)

  new Client(connection);
})

