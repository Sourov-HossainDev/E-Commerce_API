var jwt = require('jsonwebtoken');
const UserList = require('../models/userSchema');


async function emailVerificationController(req, res) {

    const { authorization } = req.headers;
    console.log(authorization);
    const decoded = jwt.verify(authorization, process.env.TOKEN_SECREAT);
    console.log(decoded, 'hgge');

    const updateUser = await UserList.findOneAndUpdate(
        {email: decoded.email},
        {verified: true},
        {new: true}
    )
    res.send(updateUser);
}

module.exports = emailVerificationController;