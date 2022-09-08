const express = require('express')
var path = require('path')
const app = express()
const pgp = require('pg-promise')

app.use(express.static(path.join(__dirname, '/')))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

const dbInfo = {
  host: 'ec2-34-200-205-45.compute-1.amazonaws.com',
  port: 5432,
  database: 'd3v0a8mglsafeh',
  user: 'fjjgmcogbdsueh',
  password: '6f954b1f9abf4a066dadc234499d387a38564a856b049e67749fc06745d4e858',
  ssl: {
    rejectUnauthorized: false
  }
}

const { Client } = require('pg')

app.get('/getFuckingBodPmLmTlHrCounter', async (req, res) => {
  const response = { data: 1300069 }
  const client = new Client(dbInfo)
  await client.connect()
  const queryCount = await client.query('SELECT * FROM countTable')
  const currentCount = queryCount.rows[0]['count'] + 1

  response.data = currentCount
  await client.query(
    `update countTable set count = ${currentCount} where Id = 1`
  )
  await client.end()
  res.send(response)
})
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})
