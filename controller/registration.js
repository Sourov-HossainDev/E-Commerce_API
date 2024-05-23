const UserList = require('../models/userSchema')
const bcrypt = require('bcrypt');


function registration(req, res) {
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


    if (!telephone) {
        return res.send({ error: 'Telephone is required' })
    }
    if (!password) {
        return res.send({ error: 'Password is required' })
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
        res.send(users);
    });



}

module.exports = registration;