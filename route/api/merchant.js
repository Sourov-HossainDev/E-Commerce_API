const express = require('express');
const becomemerchant = require('../../controller/merchantController');
const router = express.Router();


router.post('/becomemerchant', becomemerchant)


module.exports = router;