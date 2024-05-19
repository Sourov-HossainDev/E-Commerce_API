const express = require('express')
const dbConnection = require('./config/dbConnection')
const app = express()
require('dotenv').config()

dbConnection()

app.post('/registration', (req,res)=>{
  const {fristname, lastname, email, telephone, address, city, postcode, divison, district, password} = req.body
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)