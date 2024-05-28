const express = require('express');
const {secureProduct, createProduct} = require('../../controller/productController');
const router = express.Router();


router.post('/createProduct',  secureProduct, createProduct)


module.exports = router;