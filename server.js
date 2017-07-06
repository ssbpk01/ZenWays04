var http = require('http')
var app = require('./app.js')

var port = process.env.PORT || 3000

var server = http.createServer(app)
server.listen(port, function(){
  console.log('Server running on port '+port)
})
