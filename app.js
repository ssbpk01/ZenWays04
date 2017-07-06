var express = require('express')
var bodyParser = require('body-parser')

/* Express Instance */
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:true
}))

/* Page routes */
var routes = require('./routes.js')
app.use('/',routes)

module.exports = app
