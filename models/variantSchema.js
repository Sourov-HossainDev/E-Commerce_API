const mongoose = require('mongoose');
const { Schema } = mongoose;

const variantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: String,
    product: {
        type: String,
        ref: "Product"
    },
    created: {
        type: Date,
        default: new Date(),

    },
    update: {
        type: Date,
    },

})

module.exports = mongoose.model("Variant", variantSchema);