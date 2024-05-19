const express = require('express')
const dbConnection = require('./config/dbConnection')
const app = express()
require('dotenv').config()

dbConnection()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)