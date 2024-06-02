const productSchema = require("../models/productSchema");
const UserList = require("../models/userSchema")

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

function createProduct(req,res){
    const {name, description, price, image, store} =req.body;
    console.log(name, description, price, image, store);
    

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

module.exports = {secureProduct, createProduct};