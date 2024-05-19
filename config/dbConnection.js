const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv')
// oribiEcommerce
// 1DEfmKwHOWNpq2fA
// mongodb+srv://oribiEcommerce:1DEfmKwHOWNpq2fA@cluster0.5vi3a90.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

function dbConnection(){
    mongoose.connect(process.env.MONGODBURI)
  .then(() => console.log('DataBase-Connected!'));
}

module.exports = dbConnection;
