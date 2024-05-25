const emailValidation = require("../helpers/emailValidation");
const UserList = require("../models/userSchema");
const bcrypt = require('bcrypt');

async function loginController(req,res){
    const {email,password} = req.body;

    if(!email){
        return res.json({error: 'Email is required'})
    }else if(!emailValidation(email)){
        return res.json({error: 'Email is not valid'})
    }else if(!password){
        return res.json({error: 'Password is required'})
    }else{
        const isEmailExist =await UserList.find({email})

        if(isEmailExist.length > 0){
            bcrypt.compare(password, isEmailExist[0].password).then(function(result) {
              if(result){
                res.json({success: 'Login successfully done'})
              }else{
                res.json({error: 'Password is not match'})
              }
            });
        }else{
            return res.json({error: 'Email is not match'})
        }
       

    }
}

module.exports = loginController;