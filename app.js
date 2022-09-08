const express = require('express')
var path = require('path')
const app = express()
const pgp = require('pg-promise')

app.use(express.static(path.join(__dirname, '/')))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})
