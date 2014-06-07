var fileProxy = require('./')
var app = fileProxy()

app.read('foo.txt', function(res) {
  res.write('hello world')
  res.end()
})