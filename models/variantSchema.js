const mongoose = require('mongoose');
const { Schema } = mongoose;

const variantSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    option:{
        type: Schema.Types.ObjectId,
        ref: "Option"
    } ,
    created:{
        type: Date,
        default: new Date(),

    },
    update:{
        type: Date,
    },

})

module.exports = mongoose.model("Variant", variantSchema);