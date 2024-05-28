const UserList = require("../models/userSchema")

async function secureProduct(req,res,next){
    
 


    const userid = req.headers.authorization.split('@')[1];
    const password = req.headers.authorization.split('@')[2];

    if(!req.headers.authorization){
      return  res.json({error: "UnAuthorization"})
    }else{
        const user = await UserList.find({_id: userid});
       
        if(user.length > 0){
            if(password == "BDXfO3£lo527"){
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
    res.json({success: "product created"})
}

module.exports = {secureProduct, createProduct};