const mongoose = require('mongoose');
const { Schema } = mongoose;

const SubCategorySchema = new Schema({
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
    // subCategory:[
    //     {
    //         type
    //     }
    // ],
    created:{
        type: Date,
        default: new Date(),

    },
    update:{
        type: Date,
      

    },

})

module.exports = mongoose.model('SubCategoryList', SubCategorySchema);