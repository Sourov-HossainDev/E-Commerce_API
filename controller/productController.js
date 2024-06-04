const productSchema = require("../models/productSchema");
const UserList = require("../models/userSchema");
const variantSchema = require("../models/variantSchema");

async function secureProduct(req,res,next){
    console.log(req.headers.authorization.split('@'));
    const userid = req.headers.authorization.split('@')[1];
    const password = req.headers.authorization.split('@')[2];

    if(!req.headers.authorization){
      return  res.json({error: "UnAuthorization"})
    }else{
        const user = await UserList.find({_id: userid});
       
        if(user.length > 0){
            if(password == "BDXGHDFIC"){
                if(user[0].role == "merchant"){
                    next()
                }
            }else{
                res.json({error: "you are not able to upload"})
            }
            
        }else{
            res.json({error: "you are not able to upload"})
        }
    }

  

}

function createProductController(req,res){
    const {name, description, price, image, store} =req.body;
    console.log(name, description, price, image, store);
    
    if (!name) {
        return res.send({ error: ' Name is required' })
    }
    if (!description) {
        return res.send({ error: ' Description is required' })
    }
    if (!price) {
        return res.send({ error: ' Price is required' })
    }
    if (!image) {
        return res.send({ error: ' Image is required' })
    }
    
    const product = new productSchema({
        name, 
        description,
        price, 
        image, 
        store
    })
    product.save()
    res.json({success: "product created successfully"})
}

function createVariantController (req,res){
    const {name, description, price, quantity} =req.body;

    const variant = new variantSchema({
        name, 
        description,
        price, 
        quantity
        
    })
    variant.save();
    productSchema.findOneAndUpdate(
        {_id: variant._id},
        {$push: {variants: variant._id}}
    )
} 

module.exports = {secureProduct, createProductController, createVariantController};