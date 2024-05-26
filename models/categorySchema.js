const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    name:{
        type: String,
        required: true
    }, 
    discription: String,
    isActive:{
        type: Boolean,
        default: false
    },
    status:{
        type: String,
        default: 'waiting',

    },
    subCategory:[
        {
            type: Schema.Types.ObjectId,
            ref: 'SubCategoryList'
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

module.exports = mongoose.model('CategoryList', categorySchema);