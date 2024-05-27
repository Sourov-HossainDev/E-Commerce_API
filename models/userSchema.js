const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    fristname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    address: {
        type: String,  
    },
    city: {
        type: String,   
    },
    postcode: {
        type: String,
    },
    divison: {
        type: String,
    },
    district: {
        type: String,  
    },
    password: {
        type: String,
        required: true
    },
    verified:{
        type: Boolean,
        default : false
    },
    role:{
        type: String,
        default: "member",
        enum: [
            "member", "admin", "merchant"
        ]
    }
})

module.exports = mongoose.model("UserList", userSchema)