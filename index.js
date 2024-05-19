const express = require('express')
const dbConnection = require('./config/dbConnection')
const app = express()
const userList = require('./models/userSchema')

require('dotenv').config()
app.use(express.json())
dbConnection()

app.post('/registration', (req,res)=>{
  const {fristname, lastname, email, telephone, address, city, postcode, divison, district, password} = req.body
  console.log(req.body);
  const users = new userList({
    fristname,
    lastname,
    email,
    telephone,
    address,
    city,
    postcode,
    divison,
    district,
    password

  })
  users.save()

})

app.listen(3000)