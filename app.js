var debug = require('debug')('app.js')
var config = require('./config')
var express = require('express')
var morgan = require('morgan')

var app = express()

app.use(morgan('combined'))
app.use(express.static('frontend'))

// export the app for testing
module.exports = app

// run server
var port = process.env.PORT || 3000

var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://localhost:' + port)
})
