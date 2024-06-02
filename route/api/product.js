const express = require('express');
const {secureProduct, createProductController, createVariantController} = require('../../controller/productController');
const router = express.Router();


router.post('/createProduct',  secureProduct, createProductController)
router.post("/createVariant", createVariantController)


module.exports = router;