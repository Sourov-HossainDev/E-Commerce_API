const express = require('express');
const {createCategoryController, categoryStatusController} = require('../../controller/categoryController');
const router = express.Router();


router.post('/createCategory', createCategoryController)
router.post('/statusCategory', categoryStatusController)

module.exports = router