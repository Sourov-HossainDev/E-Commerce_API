const mongoose = require('mongoose');
const { Schema } = mongoose;

const optionSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    value:[
        {
            price:{
                type: String,
                required: true
            },
            quantity: String,
    }
        
    ],
    created:{
        type: Date,
        default: new Date(),

    },
    update:{
        type: Date,
    },

})

module.exports = mongoose.model("Option", optionSchema);