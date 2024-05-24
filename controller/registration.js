const emailValidation = require('../helpers/emailValidation');
const emailVerificationTemplate = require('../helpers/emailVerificationTemplate');
const sendEmail = require('../helpers/sendEmail');
const UserList = require('../models/userSchema')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


async function registration(req, res) {
    const { fristname, lastname, email, telephone, address, city, postcode, divison, district, password } = req.body
    console.log(req.body);

    if (!fristname) {
        return res.send({ error: 'Fristname is required' })
    }
    if (!lastname) {
        return res.send({ error: 'Lastname is required' })
    }
    if (!email) {
        return res.send({ error: 'Email is required' })
    }
    if(!emailValidation(email)){
        return res.json({error: 'Email is not valid'})
    }

    if (!telephone) {
        return res.send({ error: 'Telephone is required' })
    }
    if (!password) {
        return res.send({ error: 'Password is required' })
    }

    const existingEmail = await UserList.findOne({email})
    if(existingEmail){
        return res.send({error: 'This email is already used'})
    }

    bcrypt.hash(password, 10, function (err, hash) {
        const users = new UserList({
            fristname,
            lastname,
            email,
            telephone,
            address,
            city,
            postcode,
            divison,
            district,
            password:hash

        })
        users.save();
        sendEmail(email, 'EMAIL VERIFICATION ', emailVerificationTemplate());
        res.send(users);
    });



}

module.exports = registration;