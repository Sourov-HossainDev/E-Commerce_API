const express = require('express');
const createCategoryController = require('../../controller/createCategoryController');
const router = express.Router();


router.post('/createCategory', createCategoryController)

module.exports = router