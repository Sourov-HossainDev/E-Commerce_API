const express = require('express');
const {createCategoryController, categoryStatusController, createSubCategoryController} = require('../../controller/categoryController');
const router = express.Router();


router.post('/createCategory', createCategoryController)
router.post('/statusCategory', categoryStatusController)
router.post('/createSubCategory', createSubCategoryController)

module.exports = router