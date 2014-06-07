var fuse = require('fuse4js')
var consoleStream = require('console-stream')

module.exports = fileProxy

function fileProxy() {
  var app = {}
  app.read = function(str, cb) {
    cb(process.stdout)
  }
  return app
}