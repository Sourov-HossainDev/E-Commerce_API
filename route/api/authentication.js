const express = require('express');
const registrationController = require('../../controller/registrationController');
const emailVerificationController = require('../../controller/emailVerificationController');
const router = express.Router();


router.post('/registration', registrationController)
router.post('/verification', emailVerificationController)

module.exports = router;